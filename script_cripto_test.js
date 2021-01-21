/* Create events to change tabs between FX and CRIPTO */
let fx_tab_button = document.getElementById("FX-tab-button");
let cripto_tab_button = document.getElementById("CRIPTO-tab-button");
let cripto_tab = document.getElementById("CRIPTO-tab");
cripto_tab.style.display="none";

fx_tab_button.addEventListener("click", () => {
  let fx_tab = document.getElementById("FX-tab");
  let cripto_tab = document.getElementById("CRIPTO-tab");
  fx_tab.style.display="none";
  cripto_tab.style.display="block";
});
cripto_tab_button.addEventListener("click", () => {
  let fx_tab = document.getElementById("FX-tab");
  let cripto_tab = document.getElementById("CRIPTO-tab");
  cripto_tab.style.display="none";
  fx_tab.style.display="block";
});


var burl = "https://api.binance.com";
var query = "/api/v1/time";
var url = burl+query;

var request = new XMLHttpRequest();

request.open("GET",url,true);
request.onload = function(){
    console.log(request.responseText);
}
request.send();

query = "/api/v3/account";
var dataQueryString = '?recvWindow=20000&timestamp=' + Date.now();
var keys = {
    'akey':'FMa8fA2Dr7bnToO3hUeyP8cuQHKxTPN8piBkmyDMX48Fqoxl0hQ858DHhGjO2kfU',
    'skey':'udXa9NOKQG9emUefEuLcDYdLgw6sd4CnJK3C9tvMcWtVWKh4vyRjeBAdgZLgfMO5'
};
var signature = CryptoJS.HmacSHA256(dataQueryString, keys['skey']).toString(CryptoJS.enc.Hex);

url = burl + query + dataQueryString + '&signature=' + signature;

request.open('GET', url, true);
request.setRequestHeader('X-MBX-APIKEY', keys['akey']);
request.onload = function() {
    data = JSON.parse(request.responseText);
    console.log(data)
}
request.send();
