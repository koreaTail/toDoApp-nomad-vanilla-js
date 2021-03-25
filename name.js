const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const identity = document.querySelector(".js-identity");
const username = identity.querySelector(".js-username");
const timeWeather = document.querySelector(".time-and-weather-card");
const toDoListData = document.querySelector(".data");


if (localStorage.getItem("username") === null) {
    
    form.classList.remove("hide");
    timeWeather.classList.add("hide");
    toDoListData.classList.add("hide");

    form.addEventListener("submit", 저장)

    function 저장(event){
        // event.preventDefault();

        if (input.value !== "") {
            localStorage.setItem("username", input.value);
            // location.reload()
        } else {
            event.preventDefault();
        }
        
    }

} else{
    username.innerHTML = localStorage.getItem("username");
    identity.classList.remove("hide")
}


























// form.addEventListener("submit", 이름저장하는함수)

//     function 이름저장하는함수(event){
//         event.preventDefault();
//         localStorage.setItem("username", input.value);
//         // location.reload();
//         username.innerHTML = localStorage.getItem("username");
//         }     






// if (localStorage.getItem("username") == "") {
//     form.classList.add("hide");
//     identity.classList.remove("hide");
//     username.innerHTML = localStorage.getItem("username");
// } else { 
//     form.addEventListener("submit", 할일들);

//     function init(){
//         할일들;
//     }
//     init;
// }




// 값이 써있을 경우



// 값이 없을 경우

// 실행 안되게 한다. 아무런 변화가 없도록 한다.


    // function 할일들(event){

    //     if (input.value !== "") {
    //         event.preventDefault();
    //         localStorage.setItem("username", input.value);
    //         form.classList.add("hide")
    //         identity.classList.remove("hide")
    //         username.innerHTML = localStorage.getItem("username")
    //     } else {
    //         event.preventDefault();
    //         console.log("이름좀 입력해") 
    //     }

    // }

























































// username.innerHTML = localStorage.getItem('username');


// input 부분에 이름이 적혀있으면, 그리고 폼이 제출되면?? 
// 셋아이템이 되어야해

// if (input.value에 뭔가 적혀있고, 엔터가 눌리면) {
//     localStorage.setItem("username") = input.value;}
//     else {
//         아니야가 없네.. 고로 함수로 만들자.c
//     }

// form.addEventListener("submit", 이름저장하는함수);
// form.classList.add("show")
// form.classList.remove("hide")

    // function 이름저장하는함수(event) {
    //     event.preventDefault();
    //     localStorage.setItem("username", input.value);
       
    //     if ((input.value !== "") && (localStorage.getItem("username") !== "")) {
    //         username.innerHTML = localStorage.getItem('username');
    //         form.classList.add("hide")
    //         form.classList.remove("show")
    //         identity.classList.add("show")
    //         identity.classList.remove("hide")
    //         input.value = null
    //     } else {
    //         form.classList.add("show")
    //         form.classList.remove("hide")
    //         identity.classList.add("hide")
    //         identity.classList.remove("show")
    //         username.innerHTML = localStorage.removeItem('username');
            
    //     }
        
    // }


// 애드이벤트리스터로 서밋이 오면. 뭔가 실행!!


// if (localStorage.getItem("username") !== "") {
//      // identity.style.display = block; 다른방법?이 될까
//     identity.classList.add("show")
//     identity.classList.remove("hide")

// } else {
//     // form.style.display = block; 다른방법?이 될까
//     form.classList.add("show")
//     form.classList.remove("hide")

// }


// function init(){
//     이름저장하는함수();
// }
// init;