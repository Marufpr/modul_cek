function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        const newTaskText = prompt("Edit your task:", taskText);
        if (newTaskText && newTaskText.trim() !== "") {
            listItem.textContent = newTaskText;
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
