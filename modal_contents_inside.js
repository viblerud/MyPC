// ----------------------------------------computer----------------------------------------
let computerScreen = document.querySelector('.computer_screen_screen')
let computerGameScreen = document.querySelector('#computer_game')
let computerOnBtn = document.querySelector('.computer_on_button.computer')
let computerGameBtn = document.querySelector('#computer_game_start')

computerOnBtn.addEventListener('click', () => {
    computerScreen.classList.remove('block')
    computerGameScreen.classList.add('block')
})
computerGameBtn.addEventListener('click', () => {
    computerGameScreen.classList.remove('block')
    computerScreen.classList.add('block')
})




// ----------------------------------------blue marble----------------------------------------
let nintendoStartBtn = document.querySelector('#nintendo_start_button')
let nintendoIntro = document.querySelector('.nintendo_screen_intro > video')
let nintendoABtn = document.querySelector('.nintendo_xyab.a')
let nintendoScreenMain = document.querySelector('#nintendo_screen_main')

let nintendoGame = document.querySelector('#nintendo_screen_game')

nintendoStartBtn.addEventListener('click', () => {
    nintendoIntro.style.opacity = 1;
    nintendoIntro.play();
    setTimeout (() => {
        nintendoScreenMain.classList.remove('block')
    }, 40)
})
nintendoABtn.addEventListener('click', () => {
    nintendoScreenMain.classList.add('block')
    nintendoIntro.style.opacity = 0;
    if (getComputedStyle(nintendoScreenMain).opacity === '1') {
        nintendoGame.classList.remove('block')
        document.querySelector('#nintendo_screen_sky').classList.remove('block')
    } 
})

// var nintendoCanvas = document.querySelector('#nintendo_canvas')
// var ctx = nintendoCanvas.getContext('2d');

// nintendoCanvas.width = window.innerWidth - 100
// canvas.height = window.innerHeight - 100

// ----------------------------------------blue marble----------------------------------------
let marblePlayer = document.querySelector('#bluemarble_player')
let marbleDiceBtn = document.querySelector('#bluemarble_dice')
let moveTop = 100;
let dice = document.querySelectorAll('.dice')

let minBottom = 45;
let maxBottom = 545;
let minRight = 435;
let maxRight = 1135;

marbleDiceBtn.addEventListener('click', () => {
    let currentX = parseInt(getComputedStyle(marblePlayer).right); 
    let currentY = parseInt(getComputedStyle(marblePlayer).bottom);
    // console.log('작동')
    
    if (currentY < maxBottom && currentX === minRight) { // 위로 이동
        marblePlayer.style.bottom = (currentY + (moveTop)) + 'px';
    } 
    else if (currentY === maxBottom && currentX < maxRight) { // 오른쪽으로 이동
        marblePlayer.style.right = (currentX + moveTop) + 'px';
    } 
    else if (currentX === maxRight && currentY > minBottom) { // 아래로 이동
        marblePlayer.style.bottom = (currentY - moveTop) + 'px';
    } 
    else if (currentY === minBottom && currentX > minRight) { // 왼쪽으로 이동
        marblePlayer.style.right = (currentX - moveTop) + 'px';
    }

})

// ----------------------------------------passport----------------------------------------
let passportCover = document.querySelector('#passport_cover')
let passportInside = document.querySelector('#passport_inside')
let passportStamp = document.querySelector('#passport_airport_stamp')

passportCover.addEventListener('click', () => {
    passportInside.classList.remove('block')
    passportCover.classList.add('block')
    passportStamp.classList.remove('block')
})
passportInside.addEventListener('click', () => {
    passportInside.classList.add('block')
    passportCover.classList.remove('block')
    passportStamp.classList.add('block')

})
// ----------------------------------------camera----------------------------------------
let cameraBtn = document.querySelector('#camera_button')
let cameraFilms = document.querySelectorAll('.camera_film')
let cameraFilmIndex = 0;
let cameraAudio = new Audio('./audio/camera sound effect_1.mp3')

cameraBtn.addEventListener('click', () => {
    cameraBtn.style.animationPlayState = 'running';
    cameraAudio.play()

    if (cameraFilmIndex < cameraFilms.length) {
        const currentFilm = cameraFilms[cameraFilmIndex];
        currentFilm.style.animationPlayState = 'running';

        currentFilm.classList.remove('block'); // 필름 제거를 위한 클래스 추가
        cameraFilmIndex++; // 다음 필름으로 이동
    }
})

// ----------------------------------------coffee----------------------------------------
const coffeeRange = document.querySelector('input[type=\'range\']')
const coffeeRangeNum = document.querySelector('#coffee_range_shot')

var coffeeImgList = [
    {
        src : './img/iced_coffee.png'
    },
    {
        src : './img/iced_coffee_1.png'
    },
    {
        src : './img/iced_coffee_2.png'
    },
    {
        src : './img/iced_coffee_3.png'
    },
    {
        src : './img/iced_coffee_4.png'
    },
    {
        src : './img/iced_coffee_5.png'
    },
    {
        src : './img/iced_coffee_6.png'
    },
    {
        src : './img/iced_coffee_7.png'
    },
    {
        src : './img/iced_coffee_8.png'
    },
    {
        src : './img/iced_coffee_9.png'
    },
    {
        src : './img/iced_coffee_10.png'
    },
]

let coffeeImgIndex = 0;

coffeeRange.addEventListener('change', () => {
    let coffeeImg = document.querySelector('.coffee_cup_make > img')
    coffeeRangeNum.innerHTML = coffeeRange.value;
    //value 값에 따라 이미지++

    coffeeImgIndex = Math.min(coffeeImgList.length - 1, Math.max(0, coffeeRange.value));
    coffeeImg.src = coffeeImgList[coffeeImgIndex].src;
})

// modal 닫기 누르면 초기화되게

// ----------------------------------------music----------------------------------------
let lpBar = document.querySelector('.lp_bar')
let lp = document.querySelector('.lp')

// let music1 = document.querySelector('#music_winter')
// let music2 = document.querySelector('#music_cheeze')
// let music3 = document.querySelector('#music_romeo')

var musicPlay = [
    './audio/Winter Dream.mp3',
    './audio/cheeze.mp3',
    './audio/romeo n juliet.mp3'
];
var musicPlayList = [
    {
        src : './audio/Winter Dream.mp3',
        title : '스텔라장 - Winter Dream'
    },
    {
        src : './audio/cheeze.mp3',
        title : '치즈 - 불꽃, 놀이'
    },
    {
        src : './audio/romeo n juliet.mp3',
        title : '죠지 - romeo n juliet'
    },
    {
        src : './audio/Candy Cane.mp3',
        title : '태연 - Candy Cane'
    }
]

let musicIndex = 0;
let music = new Audio(musicPlayList[musicIndex].src)

// https://yejin-han.github.io/music-player/
// music 모달이 켜있을때 노래재생되게
lpBar.addEventListener('click', () => {
    if (lpBar.classList.contains('movebar')) {
        // lpbar 제어
        lpBar.classList.remove('movebar')
        lpBar.classList.add('movebarnone')
        setTimeout (() => {
            // lp 제어 (멈춤) 
            lp.style.animationPlayState = 'paused';
            // music 제어 (멈춤)
            music.pause();
        },300)
    } else {
        // lpbar 제어
        lpBar.classList.add('movebar')
        lpBar.classList.remove('movebarnone')
        setTimeout (() => {
            // lp 제어 (재생)        
            lp.style.animationPlayState = 'running';
            // music 제어 (재생)
            music.play();
        },400)
    }
    
})



let beforeMusicBtn = document.querySelector('#before_music_button')
let nextMusicBtn = document.querySelector('#next_music_button')
let musicTitle = document.querySelector('#music_title p')

// 챗GPT 도움
function updateMusicTitle() {
    musicTitle.innerHTML = musicPlayList[musicIndex].title;
}

updateMusicTitle();

beforeMusicBtn.addEventListener('click', () => {
    musicIndex = (musicIndex - 1 + musicPlayList.length) % musicPlayList.length;
    music.src = musicPlayList[musicIndex].src;
    if (lpBar.classList.contains('movebar')) {
        music.play();
    }
    updateMusicTitle();
})

nextMusicBtn.addEventListener('click', () => {
    musicIndex = (musicIndex + 1 + musicPlayList.length) % musicPlayList.length;
    music.src = musicPlayList[musicIndex].src;
    if (lpBar.classList.contains('movebar')) {
        music.play();
    }
    updateMusicTitle();
})

music.addEventListener('ended', () => {
    musicIndex = (musicIndex + 1) % musicPlayList.length;
    music.src = musicPlayList[musicIndex].src;
    if (lpBar.classList.contains('movebar')) {
        music.play();
    }
    updateMusicTitle(); 
})



// ----------------------------------------color----------------------------------------


// ----------------------------------------language----------------------------------------
const colorPicMonitor = document.querySelector('.color_select.monitor > input[type="color"]')
let monitorColor = document.querySelector('.monitor_screen')

colorPicMonitor.addEventListener('change', () => {
    document.querySelector('.monitor_screen').style.backgroundColor = colorPicMonitor.value
    document.querySelector('.monitor_neck').style.backgroundColor = colorPicMonitor.value
    document.querySelector('.monitor_bottom').style.backgroundColor = colorPicMonitor.value
})

let colorPicSky = document.querySelector('.color_select.sky > input[type="color"]')

colorPicSky.addEventListener('change', () => {
    document.querySelector('.window').style.backgroundColor = colorPicSky.value
})

let colorPicWall = document.querySelector('.color_select.wall > input[type="color"]')

colorPicWall.addEventListener('change', () => {
    document.querySelector('body').style.backgroundColor = colorPicWall.value
})