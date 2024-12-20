/* 출처 : https://codepen.io/hyukson/pen/yLKLNGM */

const $text = document.querySelector("#screen_welcome .welcome_text");

// 글자 모음
const letters = [
    "안녕하세요!",
    "장성경님의 개인 PC입니다.",
    "비밀번호를 입력해주세요."
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
    }
  
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    const letter = letters[i].split("");
  
    while (letter.length) {
        await wait(speed);
    
        letter.pop();
        $text.innerHTML = letter.join(""); 
    }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i++;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1800);