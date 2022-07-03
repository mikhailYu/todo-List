import {closeEditor, openEditor, passOnStarred, taskEditorConfirm}  from "./modules/taskEditor";
import addProject from "./modules/addProj";
import addTask from "./modules/addTask";
import {store, getInfo, currentSelectedProj, saveStorage,
getStorage, resetStorage,projectArr} from "./modules/storage";
import {selectedProj, updateDomTask, 
    sortByImportant, sortTasks, sortTasksToday,
sortTasksLater, sortTasksUpcoming, populateFromSave} from "./modules/dom"
import { openPNEeditor, closePNEeditor } from "./modules/projectNameEditor";


const taskEditorCloseBtn = document.querySelector(".taskEditorClose"),
newTaskBtn = document.getElementById("newTaskBtn"),
newProjBtn = document.getElementById("newProjBtn"),
confirmBtn = document.getElementById("confirmBtn"),
taskNameInput = document.getElementById("taskNameInput"),
taskDescInput = document.getElementById("taskDescInput"),
taskDateInput = document.getElementById("taskDateInput"),
projectNameEditBtn = document.querySelector(".projEdit"),
sortByImportantBtn = document.querySelector(".tabImportant"),
sortTasksBtn = document.querySelector(".tabTasks"),
sortTodayBtn = document.querySelector(".tabToday"),
sortUpcomingBtn = document.querySelector(".tabUpcoming"),
sortLaterBtn = document.querySelector(".tabLater"),
resetBtn = document.querySelector(".title");


taskEditorCloseBtn.addEventListener("click", closeEditor);
newTaskBtn.addEventListener("click", openEditor);
confirmBtn.addEventListener("click", taskEditorConfirm);
resetBtn.addEventListener("click", resetStorage);

newProjBtn.addEventListener("click", addProject);

projectNameEditBtn.addEventListener("click", openPNEeditor);

sortByImportantBtn.addEventListener("click", sortByImportant);
sortTasksBtn.addEventListener("click", sortTasks);
sortTodayBtn.addEventListener("click", sortTasksToday);
sortUpcomingBtn.addEventListener("click", sortTasksUpcoming);
sortLaterBtn.addEventListener("click", sortTasksLater);

(function intialize() {
    
    if (!getStorage()){
        selectedProj();

    } else {
        populateFromSave();
    }
    
  })();
