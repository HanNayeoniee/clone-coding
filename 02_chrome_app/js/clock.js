const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const now = date.toTimeString().split(' ')[0]
    clock.innerText = now;
}

getClock();  // 처음에 즉시 호출
setInterval(getClock, 1000);  // 1초마다 실행