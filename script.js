function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task" onclick="this.classList.toggle('completed')">${task}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function showAll() {
    document.querySelectorAll("#taskList li").forEach(li => {
        li.style.display = "flex";
    });
}

function showActive() {
    document.querySelectorAll("#taskList li").forEach(li => {
        let task = li.querySelector(".task");

        if(task.classList.contains("completed")){
            li.style.display = "none";
        } else {
            li.style.display = "flex";
        }
    });
}

function showCompleted() {
    document.querySelectorAll("#taskList li").forEach(li => {
        let task = li.querySelector(".task");

        if(task.classList.contains("completed")){
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}