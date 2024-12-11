// Bounce Game https://codepen.io/Awareness-/pen/eYbpjvx

let computerGame = document.getElementById("computer_screen_game"),
  computerCtx = computerGame.getContext("2d"),

  ballRadius = 9,
  x = computerGame.width / (Math.floor(Math.random() * Math.random() * 10) + 3),
  y = computerGame.height - 40,
  dx = 2,
  dy = -2;

let paddleHeight = 12,
  paddleWidth = 72;

// Paddle start position

let paddleX = (computerGame.width - paddleWidth) / 2;

// Bricks

let rowCount = 4,
  columnCount = 8,
  brickWidth = 31,
  brickHeight = 10,
  brickPadding = 8,
  topOffset = 30,
  leftOffset = 38,
  score = 0;

// Bricks array

let bricks = [];

for (let c = 0; c < columnCount; c++) {
  bricks[c] = [];

  for (let r = 0; r < rowCount; r++) {
    // Set position of bricks

    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// Mouse moving eventListener and function

document.addEventListener("mousemove", mouseMoveHandler, false);

// Move paddle with mouse
function mouseMoveHandler(e) {
  var rect = computerGame.getBoundingClientRect();
  var relativeX = e.clientX - rect.left;

  if (relativeX > 0 && relativeX < computerGame.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// Draw paddle

function drawPaddle() {
  computerCtx.beginPath();

  computerCtx.roundRect(
    paddleX,
    computerGame.height - paddleHeight,
    paddleWidth,
    paddleHeight,
    30
  );

  computerCtx.fillStyle = "#333";

  computerCtx.fill();

  computerCtx.closePath();
}

// Draw ball

function drawBall() {
  computerCtx.beginPath();

  computerCtx.arc(x, y, ballRadius, 0, Math.PI * 2);

  computerCtx.fillStyle = "#333";

  computerCtx.fill();

  computerCtx.closePath();
}

// Draw Bricks

function drawBricks() {
  for (let c = 0; c < columnCount; c++) {
    for (let r = 0; r < rowCount; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (brickWidth + brickPadding) + leftOffset;

        let brickY = r * (brickHeight + brickPadding) + topOffset;

        bricks[c][r].x = brickX;

        bricks[c][r].y = brickY;

        computerCtx.beginPath();

        computerCtx.roundRect(brickX, brickY, brickWidth, brickHeight, 30);

        computerCtx.fillStyle = "#333";

        computerCtx.fill();

        computerCtx.closePath();
      }
    }
  }
}

// Track score

// function trackScore() {
//   computerCtx.font = "bold 16px sans-serif";

//   computerCtx.fillStyle = "#333";

//   computerCtx.fillText("Score : " + score, 8, 24);
// }

// Check ball hit bricks

function hitDetection() {
  for (let c = 0; c < columnCount; c++) {
    for (let r = 0; r < rowCount; r++) {
      let b = bricks[c][r];

      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;

          b.status = 0;

          score++;

          // Check win

          if (score === rowCount * columnCount) {
            // alert("You Win!");

            computerGame.location.reload();
          }
        }
      }
    }
  }
}

// Main function

function init() {
  computerCtx.clearRect(0, 0, computerGame.width, computerGame.height);

//   trackScore();

  drawBricks();

  drawBall();

  drawPaddle();

  hitDetection();

  // Detect left and right walls

  if (x + dx > computerGame.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // Detect top wall

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > computerGame.height - ballRadius) {
    // Detect paddle hits

    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  }

  // Bottom wall

  if (y + dy > computerGame.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  // Move Ball

  x += dx;

  y += dy;
}

// setInterval(init, 10);

setInterval(() => {
    if (!computerGameScreen.classList.contains("block")) {
      console.log("Class 'block' has been removed!");
      // Call your function here
      init();  // Example: Start the game
    }
}, 10);