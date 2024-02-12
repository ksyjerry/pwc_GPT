let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs>div");
console.log(tabs);
let taskList = [];

addButton.addEventListener("click", addTask);

for (let i =1; i<tabs.length; i++){
  tabs[i].addEventListener("click", function(event){
    filter(event);
  }
  )
}

function filter(event){

  console.log(event.target.id);
 if (event.target.id === "all"){
  displayTask(taskList);
  return;
 }
 else if (event.target.id === "notDone"){
  let notDoneTasks = taskList.filter(function(task){
    return task.isComplete === false;
  }
  )

  displayTask(notDoneTasks);
  }

  else if (event.target.id === "done"){
    let doneTasks = taskList.filter(function(task){
      return task.isComplete === true;
    }
    )
   
    displayTask(doneTasks);
  }
 };






function addTask() {
  let tasks = {
    taskContent: taskInput.value,
    isComplete: false,
    id: randomIDGenerate(),
  };

  taskList.push(tasks);
  console.log(taskList);
  displayTask(taskList);
}

function displayTask(taskList) {
  let resultHTML = "";

  resultHTML = resultGenerate(taskList);
  taskBoard.innerHTML = resultHTML;
  completeButtonsClick();
  deleteButtonsClick();
  
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      displayTask(taskList);
      break;
    }

  }
  
  
}

function resultGenerate(taskList) {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const taskCompleteClass = taskList[i].isComplete ? "task-done" : "";
    resultHTML += `<div class="task">
            <div class="${taskCompleteClass}">${taskList[i].taskContent}</div>
            <div>
                <button type="button" class="complete-button" data-id="${taskList[i].id}">check</button>
                <button type="button" class="delete-button" data-id="${taskList[i].id}">delete</button>
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

function deleteButtonsClick() {
  const taskBoard = document.getElementById("taskBoard");
  const deleteButtons = taskBoard.getElementsByClassName("delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
      deleteTask(this.dataset.id);
    });
  }
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
        taskList.splice(i, 1);
        displayTask(taskList);
        break;
        }
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
