const clockContainer = document.querySelector(".js-clock");
const clockTime = clockContainer.querySelector("h1");




function nowTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();



    clockTime.innerText = 
    `${ hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes}`
    setInterval(nowTime, 30000);
}





function init(){
    nowTime();
}
init();
