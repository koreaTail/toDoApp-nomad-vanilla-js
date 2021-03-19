const ul = document.querySelector(".js-toDoList")
const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector(".js-toDoInput")


countNumber();

function countNumber(){
    let i = 1;
    while (i < 30) { // 0, 1, 2가 출력됩니다.
        할일불러오기(i);
        i++;
    }
    
}

function 할일불러오기(abc){
    const li = document.createElement("li")
    const loadLi = document.createTextNode(localStorage.getItem(abc))
    
    li.appendChild(loadLi)
    if (localStorage.getItem(abc) !== null){
        ul.appendChild(li);
    }
}

toDoForm.addEventListener("submit", 엔터시할일생성);

function 엔터시할일생성(event) {
    
    if (toDoInput.value !== "") {
        event.preventDefault(); 

    const li = document.createElement("li");
    const liContents = document.createTextNode(toDoInput.value)
    li.appendChild(liContents);
    ul.appendChild(li);
    할일저장();
    toDoInput.value = ""

    } else {
        event.preventDefault();
    }
}

function 할일저장() {
    localStorage.setItem(ul.lastElementChild.parentNode.childElementCount, ul.lastElementChild.innerText);
}

