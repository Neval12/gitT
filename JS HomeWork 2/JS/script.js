let inputData = document.querySelector("input[type='text']"),
    ulSpisok = document.querySelector("ul"),
    spans = document.getElementsByTagName("span"),
    eachLi = document.getElementsByTagName("li"),
    saveBtn = document.getElementById("save"),
    clearBtn = document.getElementById("clear"),
    aboutBtn = document.getElementById("about"),
    aboutBox = document.getElementById("about_box");

function deleteTodo() {
    for(let span of spans) {
        span.addEventListener("click", () => {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

function lineThrough() {
    for(let oneLi of eachLi) {
        oneLi.addEventListener("click", () => {
            oneLi.style.textDecoration = 'line-through';
            event.stopPropagation();
        });
    }
}

function loadTodo() {
    if(localStorage.getItem('todolist')) {
        ulSpisok.innerHTML = localStorage.getItem('todolist');
    }
    deleteTodo();
}

function closeAboutBox() {
    aboutBox.addEventListener('click', () => {
        aboutBox.classList.remove('show-info');
    });
}

inputData.addEventListener('keypress', function(keyPressed) {
    if(keyPressed.which === 13 && this.value !="") {

        let liNew = document.createElement("li"),
            spanNew = document.createElement("span"),
            now = new Date();

        spanNew.innerHTML = 'Delete';

        let newToDo = `${this.value} (${now.toString().substr(0, 24)});`;
        this.value = "";

        ulSpisok.appendChild(liNew).append(spanNew, newToDo);

        deleteTodo();
        lineThrough();
    }
});

saveBtn.addEventListener('click', function() {
    localStorage.setItem('todolist', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function() {
    ulSpisok.innerHTML = "";
    localStorage.setItem('todolist', ulSpisok.innerHTML);
});

aboutBtn.addEventListener('click', () => {
    aboutBox.classList.add("show-info");
});

deleteTodo();
lineThrough();
loadTodo();
closeAboutBox();