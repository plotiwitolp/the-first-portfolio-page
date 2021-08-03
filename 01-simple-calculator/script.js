const buttons = document.querySelector(".operations-block").children;
function onOperationButtonClick(e) {
  makeOperation(e.currentTarget.innerHTML);
}
function makeOperation(sign) {
  result = eval(number1.value + sign + number2.value);
  document.getElementById("display").value = result;
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onOperationButtonClick);
}
