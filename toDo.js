// 내가 짠게 아니야. filter랑.. parseInt랑.. toDos = []이거랑.. toDos_localStorage = 'toDos'랑.. 
// 이번주에 다시 한번 내가 짜봐야할텐데.. ㅡㅡ
// 하고나면 성장할거야
// 꿈을 꿨어. 달리기를 검색하고 있던 꿈. 기억이 나. 잘 가고 있는거야. 주님을 믿어.

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");


const toDos_localStorage = 'toDos';
const checkedToDos_localStorage = 'checkedToDos'
let toDos = [];
// let checkedToDos = [];

function saveToDos(){
    localStorage.setItem(toDos_localStorage , JSON.stringify(toDos))
    // localStorage.setItem(checkedToDos_localStorage , JSON.stringify(checkedToDos))
}

function checkToDos(e){
   
    // 이벤트 눌리는 버튼
    const btn = e.target;
    // 그 버튼의 아이디
    const targetLi = btn.parentNode.parentNode.parentNode;
    // 그 아이디가 부여된 li의 js 이름을 checkedContent라고 부르자.
    const checkedContent = document.getElementById(targetLi.id)
    // li에 li-complite라는 class를 추가하자.
    checkedContent.classList.add("li-complite");
    
    
    // 로컬스토리지에서 삭제해주자.
    const checkToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(targetLi.id);
    });
    toDos = checkToDos;
    
    

    //checked로컬스토리지에 추가해주자.
    // 우리는 아이디를 알고있어. 아이디와 text를 값을 지정하고, 그걸 checked에 추가.
    // const checkedToDosArray = toDos.filter(function(toDoCheck){
    //     return JSON.stringify(toDoCheck.id) === id;
    // });
    // checkedToDos.push(checkedToDosArray);


    saveToDos();
    // 좋은시도였으나.. 실패인걸로.. 하나만 선택돼 필터는..
    // const checkedToDosArray = toDos.filter(function(toDoCheck){
    //     return toDoCheck.id === parseInt(targetLi.id);
    // });
    // checkedToDos = checkedToDosArray;
}



//     function toggleman(){

//     const checkedLi = document.querySelector(".li-complite")
//     const checkedBtn = checkedLi.querySelector(".check");

//     checkedBtn.addEventListener('click', returnning);

//     function returnning(){
//     // checkedBtn.forEach(function(liCom){
//     //     liCom.classList.toggle("li-complite")

//     if (checkedBtn === checkedLi.querySelector(".check")){
//         checkedLi.classList.remove(".li-complite")
//     } else{
//         checkedLi.classList.add(".li-complite")
//     }
//     }
// }





function deleteToDos(e){
    
    const btn = e.target;
    const targetLi = btn.parentNode.parentNode.parentNode;

    document.getElementById(targetLi.id).remove();
    
    
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(targetLi.id);
    });
    toDos = cleanToDos;
    saveToDos();
}



function paintToDo(text){
    const makeLi = document.createElement('li');
    const makeDiv = document.createElement('div');
    const makeCheckBtn = document.createElement('button');
    const makeP = document.createElement('p');
    const makeDelBtn = document.createElement('button');
    const newId = toDos.length + 1

    
    makeCheckBtn.innerHTML = '<i class="fas fa-check"></i>'
    makeP.innerText = text;
    makeDelBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    makeCheckBtn.addEventListener("click", checkToDos);
    makeDelBtn.addEventListener("click", deleteToDos);

    makeLi.appendChild(makeDiv);
    makeDiv.appendChild(makeCheckBtn);
    makeDiv.appendChild(makeP);
    makeDiv.appendChild(makeDelBtn);
    
    makeLi.classList.add("card-li")
    makeDiv.classList.add("card-div")
    makeCheckBtn.classList.add("check")
    makeP.classList.add('content')
    makeDelBtn.classList.add("trash")

    toDoList.appendChild(makeLi);
    makeLi.id = newId;
    
    const toDoObject = {
        text: text,
        id: newId
    };
    toDos.push(toDoObject);
}






function isThereHaveContents(e) {
    e.preventDefault();
    
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



