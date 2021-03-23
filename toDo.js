// 내가 짠게 아니야. filter랑.. parseInt랑.. toDos = []이거랑.. toDos_localStorage = 'toDos'랑.. 
// 이번주에 다시 한번 내가 짜봐야할텐데.. ㅡㅡ
// 하고나면 성장할거야
// 꿈을 꿨어. 달리기를 검색하고 있던 꿈. 기억이 나. 잘 가고 있는거야. 주님을 믿어.

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const toDos_localStorage = 'toDos';
let toDos = [];

function saveToDos(){
    localStorage.setItem(toDos_localStorage , JSON.stringify(toDos))
}



function deleteToDos(e){
    const btn = e.target;
    const targetDiv = btn.parentNode

    delSelectDiv = document.getElementById(targetDiv.id)
    delSelectDiv.remove();
    
    // 로컬에서도 제거/ 화면에서도 제거

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(targetDiv.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function paintToDo(text){
    const makeDiv = document.createElement('div');
    const makeLi = document.createElement('li');
    const makeDelButton = document.createElement('button');
    const newId = toDos.length + 1
    // makeDelButton.style.marginLeft = "10px";

    makeLi.innerText = text;
    makeDelButton.innerText = `❌`;
    makeDelButton.addEventListener("click", deleteToDos);

    makeDiv.appendChild(makeLi);
    makeDiv.appendChild(makeDelButton);
    toDoList.appendChild(makeDiv);
    makeDiv.id = newId;
    const toDoObject = {
        text: text,
        id: newId
    };
    toDos.push(toDoObject);
}





function isThereHaveContents(e) {
    e.preventDefault();
    // console.log("왜안먹어")
    
    if (toDoInput.value !== '') {   
        e.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        saveToDos();
        toDoInput.value = '';
    }
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(toDos_localStorage);
    if (loadedToDos !== null){
       
        let parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}

function init(){
loadToDos();
toDoForm.addEventListener("submit", isThereHaveContents);

}
init();




// //노마드코더의 코드
// const toDoForm = document.querySelector(".js-toDoForm"),
//   toDoInput = toDoForm.querySelector("input"),
//   toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// let toDos = [];

// function deleteToDo(event) {
//   const btn = event.target;
//   const li = btn.parentNode;
//   toDoList.removeChild(li);
//   const cleanToDos = toDos.filter(function(toDo) {
//     return toDo.id !== parseInt(li.id);
//   });
//   toDos = cleanToDos;
//   saveToDos();
// }

// function saveToDos() {
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   const span = document.createElement("span");
//   const newId = toDos.length + 1;
//   delBtn.innerText = "❌";
//   delBtn.addEventListener("click", deleteToDo);
//   span.innerText = text;
//   li.appendChild(delBtn);
//   li.appendChild(span);
//   li.id = newId;
//   toDoList.appendChild(li);
//   const toDoObj = {
//     text: text,
//     id: newId
//   };
//   toDos.push(toDoObj);
//   saveToDos();
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);
//   toDoInput.value = "";
// }

// function loadToDos() {
//   const loadedToDos = localStorage.getItem(TODOS_LS);
//   if (loadedToDos !== null) {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(function(toDo) {
//       paintToDo(toDo.text);
//     });
//   }
// }

// function init() {
//   loadToDos();
//   toDoForm.addEventListener("submit", handleSubmit);
// }

// init();
