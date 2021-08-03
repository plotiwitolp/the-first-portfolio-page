<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<div class="project">
<h1>Simple calculator</h1>
<div class="simple-calculator">
      <div class="display">
        <input type="text" id="display" value="0" disabled />
      </div>
      <div class="operations-block">
        <button id="buttonPlus">+</button>
        <button id="buttonMinus">-</button>
        <button id="buttonMultiply">*</button>
        <button id="buttonDevide">/</button>
        <button id="buttonPow">**</button>
      </div>
      <div class="separator">
        <hr />
      </div>
      <div class="inputs-block">
        <div class="input-block">
          <label>Namber 1</label>
          <input type="number" id="number1"  />
        </div>
        <div class="input-block">
          <label>Namber 2</label>
          <input type="number" id="number2"  />
        </div>
      </div>
    </div>
    </div>
    <div class="code">
      <h2>JS code for this calculator</h2>
      <pre>
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

</pre>
    </div>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css" />

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>