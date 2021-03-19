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
    const btn = document.createElement("button");
    const btnContents = document.createTextNode("❌");
    btn.appendChild(btnContents);
    
    li.appendChild(loadLi)
    if (localStorage.getItem(abc) !== null){
        ul.appendChild(li);
        ul.lastElementChild.appendChild(btn);
    }
    //할일 불러올 때는.. 한 li 만들어질 때마다. xbtn 만들기 
}

toDoForm.addEventListener("submit", 엔터시할일생성);

function 엔터시할일생성(event) {
    
    if (toDoInput.value !== "") {
        event.preventDefault(); 

    const li = document.createElement("li");
    const liContents = document.createTextNode(toDoInput.value);
    li.appendChild(liContents);
    ul.appendChild(li);

    할일저장();
    toDoInput.value = ""

    // 삭제버튼 만들던 중 멈춤상태.. 아이디를 부여해야할 거 같고.. 그 아이디로 삭제 요청을 해야할거같고.. 지금 아이디어는 이런데. 어찌될런지..
    const btn = document.createElement("button");
    const btnContents = document.createTextNode("❌");
    btn.appendChild(btnContents);
    ul.lastElementChild.appendChild(btn);

    } else {
        event.preventDefault();
    }
}

function 할일저장() {
    localStorage.setItem(ul.lastElementChild.parentNode.childElementCount, ul.lastElementChild.innerText);
}


