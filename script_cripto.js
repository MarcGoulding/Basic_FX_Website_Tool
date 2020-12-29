/* Create events to change tabs between FX and CRIPTO */
let fx_tab_button = document.getElementById("FX-tab-button");
let cripto_tab_button = document.getElementById("CRIPTO-tab-button");
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
