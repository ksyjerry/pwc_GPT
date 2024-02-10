let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList = [];

addButton.addEventListener('click', addTask);

function addTask() {

   
    let tasks = {
        taskContent: taskInput.value,
        isComplete: false,
        id: randomIDGenerate()
    }


    taskList.push(tasks);
    console.log(taskList);
    displayTask();
}

function displayTask() {
    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button type="button" class="complete-button" data-id="${taskList[i].id}">check</button>
            <button type="button">delete</button>
        </div>
      </div>`;
    }

    const taskBoard = document.getElementById('taskBoard');
    taskBoard.innerHTML = resultHTML;

    const completeButtons = taskBoard.getElementsByClassName('complete-button');
    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener('click', function() {
            toggleComplete(this.dataset.id);
        });
    }
}

    function randomIDGenerate() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function toggleComplete(id) {
        console.log(id);
    }
