var canvas = document.getElementById('nintendo_canvas')
var ctx = canvas.getContext('2d');
var jumpBtn = document.querySelector('.nintendo_xyab.b')

canvas.width = 280
canvas.height = 220

var img1 = new Image()
var img2 = new Image()
img1.src = './img/mario.png'
img2.src = './img/target.png'

// let bgm = new Audio('./audio/nintendo bgm.mp3')


var mario = {
    x : 10,
    y : 145,
    width : 50,
    height : 50,
    draw() {
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y, 40, 40)
    }
}
console.log(mario.y);

class Cactus {
    constructor() {
        this.x = 500,
        this.y = 145,
        this.width = 50,
        this.height = 50
    }
    draw() {
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img2, this.x, this.y, 40, 40)
    }
}

var timer = 0
var cactusList = []
var jumpTimer = 0
var animation;


function move () {
    animation = requestAnimationFrame(move)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    timer++

    if(timer % 200  === 0) {
        var cactus = new Cactus()
        cactusList.push(cactus)
    }

    cactusList.forEach((cactus, i, o) => {
        if(cactus.x < 0) {
            o.splice(i, 1)
        }
        crash(mario, cactus);

        cactus.x--
        cactus.draw()
    })

    if(jump === true) {
        mario.y -= 5
        jumpTimer++
    }
    if(jump === false) {
        // 챗지피티 도움
        if(mario.y < canvas.height - mario.height - 25) {
            mario.y += 5
        }
    }
    if(jumpTimer > 40) {
        jump = false
        jumpTimer = 0
    }

    mario.draw()
}

let isMoveTriggered = false;

nintendoABtn.addEventListener('click', () => {
    if (!isMoveTriggered) {
        isMoveTriggered = true; 
        // bgm.play()
        setTimeout(() => {
            move()
        }, 2000)
    }
})
// move()

let restartBtn = document.querySelector('#nintendo_screen_restart')

//충돌확인
function crash(mario, cactus) {

    var xCalc = cactus.x - (mario.x + mario.width)
    var yCalc = cactus.y - (mario.y + mario.height)

    if(xCalc < 0 && yCalc < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)
        // alert('game over')
        document.querySelector('#nintendo_screen_gameover').classList.remove('block')
    }

}


var jump = false;
jumpBtn.addEventListener('click', ()=> {
    jump = true
})


// Function to restart the game
function restartGame() {
    // Reset game variables
    mario.y = 145;
    timer = 0;
    cactusList = [];
    jumpTimer = 0;
    jump = false;
    isMoveTriggered = false;

    // Clear canvas and restart animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector('#nintendo_screen_gameover').classList.add('block');
    move();
}

restartBtn.addEventListener('click', restartGame);