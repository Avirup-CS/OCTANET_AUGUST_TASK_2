let input_task = document.getElementById("task");
let input_datetime = document.getElementById("date-time");
let text = document.querySelector(".text");

function Add() {
    if (input_task.value == "") {
        alert("Please Enter Your Task !!");
    } else {
        let date = new Date().toLocaleDateString("de-DE");
        text.innerHTML += `<ul>
            <li class="task-item">
                <span class="task-text">${input_task.value}</span>
                <hr class="line">
                <span class="date-style">Due Date & Time: <span class="task-datetime">${input_datetime.value}</span></span><br>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="removeTask(this)">Delete</button>
            </li>
        </ul>`;
        Clear();
    }
}

function removeTask(button) {
    button.parentElement.parentElement.remove();  
}

function editTask(button) {
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector(".task-text").textContent;
    let taskDatetime = taskItem.querySelector(".task-datetime").textContent;
    
    input_task.value = taskText;
    input_datetime.value = taskDatetime;

    taskItem.parentElement.remove(); 
}

function Clear() {
    input_task.value = "";
    input_datetime.value = "";
}
