/* Initialise */
let s1 = document.getElementById("180-pc-button");
// Event listeners:
s1.addEventListener("click", toggleRecipe);
function toggleRecipe(){
  /* Hide and un-hide recipe divs */
  console.log("recipe selected");
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("notes-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    console.log("attempted to add note with no input text.");
  } else {
    document.getElementById("notes-ul").appendChild(li);
  }
  document.getElementById("notes-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

loadData();

function addZero (time) {return time < 10 ? (`0${time}`) : time;}
function loadData(){
    const date = new Date();
    let newYorkTimeEl = document.getElementById("new-york");
    let londonTimeEl = document.getElementById("london");
    let tokyoTimeEl = document.getElementById("tokyo");
    let sydneyTimeEl = document.getElementById("sydney");
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());
    newYorkTimeEl.innerHTML = ((h-5+24)%24)+':'+m;
    londonTimeEl.innerHTML = h+':'+m;
    tokyoTimeEl.innerHTML = ((h+9)%24)+':'+m;
    sydneyTimeEl.innerHTML = ((h+11)%24)+':'+m;

    /* Display timezones not between 9-5 in red */
    if (((h-5)%24)<9 || ((h-5)%24)>=17) {
        newYorkTimeEl.style.color = 'red';
    }
    if (h<9 || h>17) {
        londonTimeEl.style.color = 'red';
    }
    if (((h+9)%24)<9 || ((h+9)%24)>17) {
        tokyoTimeEl.style.color = 'red';
    }
    if (((h+11)%24)<9 || ((h+11)%24)>17) {
        sydneyTimeEl.style.color = 'red';
    }

    /* Display seconds in bottom-right corner */
    let sec = document.getElementById("seconds");
    console.log(sec);
    sec.innerHTML = s;
}

setInterval(loadData, 1000);