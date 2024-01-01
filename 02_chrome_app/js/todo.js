const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];  // todo 여러개를 보여줘야 하므로 array로 구현


// todo 등록
function saveToDos() {
    // localStorage "todos" key로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
}

// todo 보여주기
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();

    // form에 입력받은 todo toDos에 추가
    const newToDo = toDoInput.value;
    toDoInput.value = "";  // 입력받은 후 todo input창 비우기

    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);  // todo 보여주기
    saveToDos();  // todo 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);  // localStorage에 저장된 todo 가져오기

// 저장된 todo 있으면 보여주기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}