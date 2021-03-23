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
        //된거같기도 하다.. 자동으로 붙어..
        li.classList.add(ul.lastElementChild.parentNode.childElementCount)
    
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
    // 할일 아이디를 만들었는데.. 저장이 안돼.. 당근 안되지.. 로컬에 안넣었으니.. 그래도 번호는 갖게 할 수 있었어;;
    // 할일을 불러올 때 자동으로 아이디를 부여하는 건 어때?
    li.classList.add(ul.lastElementChild.parentNode.childElementCount)

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

//이제 삭제 기능 만들자. 할일이 지정되면

//Uncaught TypeError: Cannot read property 'addEventListener' of null 오류발생으로 window.onload안에 넣어둠.
//window.onload 함수는 웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해 호출되는 함수라고 한다.

window.onload = function() {
    const btns = document.querySelectorAll("button");
    // li.addEventListener("click", 할일제거);

    //복붙.. 일단 ㅠㅠㅠ li가 여러개이므로, 쿼리all을 써줘야함..안그러면 가장 위에꺼 하나만 반응함..
    btns.forEach(function(btn) {
        btn.addEventListener('click', 할일제거)
        
    })
}

function 할일제거(event){
    // console.dir(event.target.parentNode.className)
    localStorage.removeItem(event.target.parentNode.className)

}

//일단.. 되는거 같긴 한데..li에 반응하니까.. 별로 안좋네.. 이름만 눌러도 사라지겠어.. ㅋㅋ;
// 그러지말고, btn을 누르면 반응하도록 만들어보자.

//좋아.. 성공..
//이제 버튼이 눌릴 때, 어떤 버튼이 눌렸는지.. 물어보자.
//버튼이 속한 li의 class를 알려달라고 하자.
//그리고 그 class가 속한 li를 삭제(안보이게)해달라고 하고,
// 또 로컬스토리지에서도 제거하도록 하자.


//ㅡㅡ 이제는 모르겠다.. 왜 안되는지도.. 뭐가 문제인지도 모르겠다..






