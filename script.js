let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let tasks = {
    taskContent: taskInput.value,
    isComplete: false,
    id: randomIDGenerate(),
  };

  taskList.push(tasks);
  console.log(taskList);
  displayTask();
}

function displayTask() {
  let resultHTML = "";

  resultHTML = resultGenerate();
  taskBoard.innerHTML = resultHTML;
  completeButtonsClick();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      displayTask();
      break;
    }

  }
  
  
}

function resultGenerate() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const taskCompleteClass = taskList[i].isComplete ? "task-done" : "";
    resultHTML += `<div class="task">
            <div class="${taskCompleteClass}">${taskList[i].taskContent}</div>
            <div>
                <button type="button" class="complete-button" data-id="${taskList[i].id}">check</button>
                <button type="button">delete</button>
            </div>
          </div>`;
  }
  return resultHTML;
}

function completeButtonsClick() {
    const taskBoard = document.getElementById("taskBoard");
    const completeButtons = taskBoard.getElementsByClassName("complete-button");
  for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", function () {
      toggleComplete(this.dataset.id);

    });
  }

}

// function completeButtonsClick() {
//   const taskBoard = document.getElementById("taskBoard");
//   taskBoard.addEventListener("click", function (event) {
//     if (event.target.classList.contains("complete-button")) {
//       toggleComplete(event.target.dataset.id);
//     }
//   });
// }
