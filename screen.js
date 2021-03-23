const screenDiv = document.querySelector('.screen-size');
const screenHeight = screenDiv.querySelector('.screen-height');
const screenWidth = screenDiv.querySelector('.screen-width');

screenHeight.innerHTML = innerHeight;
screenWidth.innerHTML = innerWidth;
// 사이즈 안보이게 숨겨주세요
screenDiv.classList.add("hide")