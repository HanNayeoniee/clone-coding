function 눈알(selector) {
    const 눈 = document.querySelector(selector);
    const 눈동자 = 눈.querySelector('.눈동자');
    const 눈영역 = 눈.getBoundingClientRect();

    function 눈알굴리기(mouseX, mouseY) {
        const 라디안 = Math.atan2(mouseY - (눈영역.y + 눈영역.height * 0.5), mouseX - (눈영역.x + 눈영역.width * 0.5));
        const 각도 = radian2degree(라디안);  // Math.atan2 함수는 radian으로 반환하기 때문에 degree로 변환 필요
    
        눈동자.style.transform = `rotate(${각도-90}deg)`;
    }

    // closure 개념 - 눈알굴리기 메소드를 밖에서 사용하기 위해 리턴
    return {
        눈알굴리기: 눈알굴리기
    }
}

function radian2degree(radian) {
    return 180 * radian / Math.PI;
}

const 눈1 = 눈알(".눈-1");
const 눈2 = 눈알(".눈-2");

window.addEventListener("mousemove", function (e) {
    눈1.눈알굴리기(e.pageX, e.pageY);
    눈2.눈알굴리기(e.pageX, e.pageY);
});