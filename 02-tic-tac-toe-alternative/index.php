<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<h1>Tic-tac-toe Alternative </h1>
<div class="game">
    <div class="controller">
        <button id="start-game">Start game</button>
        <button id="end-game">End game</button>
    </div>
<div id="canvas-wrapper">
<div id="info"></div>
<div id="canvas" class="canvas">
<div class="start"></div>
<div id="big-winner"></div>
</div>
</div>
</div>
<script src="script.js"></script>
<link rel="stylesheet" href="style.css">

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>