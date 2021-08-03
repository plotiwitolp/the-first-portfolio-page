<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<h1>
    Waiting a new project
</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione impedit dolorem debitis sed aperiam voluptatibus. Tempora sint quisquam facere corporis? Atque, optio laborum dolorum provident fugiat perspiciatis quidem molestias.
    Cum laborum explicabo, provident molestiae sed iure error eligendi suscipit sequi dolorem quidem in labore maxime animi dolorum quisquam obcaecati ex consequuntur debitis, libero ab officiis nesciunt. Ab, totam ipsam.
    Consequatur nesciunt voluptate optio officia ipsa doloribus corrupti non debitis nostrum earum alias beatae hic vitae consequuntur sapiente tenetur dignissimos, dolore est! Porro perferendis dignissimos blanditiis? Optio provident facere eligendi?
 </p>

    <div class="code">
      <h2>Some code</h2>
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
<link rel="stylesheet" href="style.css">

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>