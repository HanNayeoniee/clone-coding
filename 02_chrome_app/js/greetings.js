const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form에 입력된 사용자명을 localStorage에 저장 후 출력
function onLoginSubmit(event) {
    event.preventDefault();  // form은 submit하면 기본적으로 웹페이지가 새로고침되기 때문에 방지
    
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // localStorage에 사용자명 저장
    const username = loginInput.value;
    localStorage.setItem("username", username);
    
    paintGreetings(username);  // 사용자명 출력
}

// 사용자명 출력
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 사용자명이 있으면 출력, 없으면 로그인창 표시
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}