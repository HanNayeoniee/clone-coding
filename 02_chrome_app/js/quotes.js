const quotes = [
    {
        quote: "당신이 저지를 수 있는 가장 큰 실수는 실수를 할까봐 두려워하는 것이다.",
        author: "앨버트 하버드"
    },
    {
        quote: "나 자신에 대한 자신감을 잃게되면 온 세상이 나의 적이 된다.",
        author: "랄프 왈도 애머슨"
    },
    {
        quote: "할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람 역시 그렇게 된다.",
        author: "샤를 드곡"
    },
    {
        quote: "또 실패했는가? 괜찮다. 다시 실행하라. 그리고 더 나은 실패를 하라.",
        author: "사뮈엘 베케트"
    },
    {
        quote: "나만이 내 자신의 인생을 바꿀 수 있다. 아무도 날 대신해줄 수 없다.",
        author: "캐롤 버넷"
    },
    {
        quote: "이미 낭비한 시간에 대한 후회는 더 큰 시간의 낭비이다.",
        author: "메이슨 쿨리"
    },
    {
        quote: "인간은 일반적으로 자신이 생각하는 대로 된다.",
        author: "윌리엄 제임스"
    },
    {
        quote: "자기가 하는 일에 신념을 갖지 않으면 안 된다. 그리고 누구나 자기가 하는 일이 좋다고 굳게 믿으면 힘이 생기는 법이다.",
        author: "괴테"
    },
    {
        quote: "'난 못해'라는 말은 아무것도 이루지 못하지만, '해볼거야'라는 말은 기적을 만들어낸다.",
        author: "조지 p.번햄"
    },
    {
        quote: "어느 순간이고 다시 일으켜 세울 수 없는 삶이란 없다.",
        author: "안녕 스무 살"
    },
    {
        quote: "해보지 않고는 당신이 무엇을 해낼 수 있는지 알 수가 없다.",
        author: "프랭크린 아담"
    },
    {
        quote: "멀리 갈 위험을 감수하는 자만이 얼마나 멀리갈 수 있는지 알 수 있다.",
        author: "T.S 엘리엇"
    },
    {
        quote: "경험은 만들어낼 수 없다. 그것은 겪어야만 한다.",
        author: "알베르 카뮈"
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;