function criptoCalculate()
{
  console.log("Calculating position size");
  var entry = parseFloat(document.getElementById("entryNumber").value);
  var sl = parseFloat(document.getElementById("stoplossNumber").value);
  var risk = parseFloat(document.getElementById("riskNumber").value);
  var bal = parseFloat(document.getElementById("balanceNumber").value);
  var checkbox = document.getElementById("buy-sell-toggle");
  var res = document.getElementById("cripto-calculator-result");
  var lev = parseFloat(document.getElementById("leverageNumber").value);
  var margin = document.getElementById("cripto-calculator-margin-result");
  res.style.color = "#1C1A7E";

  var invalidInputConditions = 
  [
    Number.isNaN(sl),
    Number.isNaN(entry),
    Number.isNaN(bal),
    Number.isNaN(lev),
    Number.isNaN(risk)
  ];

  if (invalidInputConditions.includes(true))
  {
    console.log("NOT VALID INPUTS");
    margin.innerHTML = "-";
    res.innerHTML = "invalid inputs";
  }else{
    if (checkbox.checked == true)
    { /* SELL */
      var size = (bal*risk/100) / (sl/entry-1);
    }else{ /* BUY */
      var size = (bal*risk/100) / (1-sl/entry);
    }
    res.innerHTML = size;
    margin.innerHTML = size/lev;
  }
  
  setTimeout(function(){
    res.style.color = "#7BDAC6";
    },200);
}

function toggleBuySellSlider()
{
  var checkbox = document.getElementById("buy-sell-toggle");
  var buyText = document.getElementById("buy-text");
  var sellText = document.getElementById("sell-text");
  var slider = document.getElementById("toggle-slider");

  if (checkbox.checked == true)
  {
    slider.style.backgroundColor = "crimson";
    sellText.style.fontWeight = "bold";
    sellText.style.color = "crimson";
    buyText.style.fontWeight = "normal";
    buyText.style.color = "gray";
  }else{
    slider.style.backgroundColor = "lawngreen";
    buyText.style.fontWeight = "bold";
    buyText.style.color = "lawngreen";
    sellText.style.fontWeight = "normal";
    sellText.style.color = "gray";
  }
}