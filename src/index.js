import {closeEditor, openEditor, passOnStarred, taskEditorConfirm}  from "./modules/taskEditor";
import addProject from "./modules/addProj";
import addTask from "./modules/addTask";
import {store, getInfo, currentSelectedProj} from "./modules/storage";
import {selectedProj, updateDomTask, sortByImportant, sortTasks} from "./modules/dom"
import { openPNEeditor, closePNEeditor } from "./modules/projectNameEditor";


const taskEditorCloseBtn = document.querySelector(".taskEditorClose"),
newTaskBtn = document.getElementById("newTaskBtn"),
newProjBtn = document.getElementById("newProjBtn"),
confirmBtn = document.getElementById("confirmBtn"),
taskNameInput = document.getElementById("taskNameInput"),
taskDescInput = document.getElementById("taskDescInput"),
projectNameEditBtn = document.querySelector(".projEdit"),
sortByImportantBtn = document.querySelector(".tabImportant"),
sortTasksBtn = document.querySelector(".tabTasks");


taskEditorCloseBtn.addEventListener("click", closeEditor);
newTaskBtn.addEventListener("click", openEditor);
confirmBtn.addEventListener("click", taskEditorConfirm);

newProjBtn.addEventListener("click", addProject);

projectNameEditBtn.addEventListener("click", openPNEeditor);

sortByImportantBtn.addEventListener("click", sortByImportant);
sortTasksBtn.addEventListener("click", sortTasks)

testingStart();
function testingStart(){
    addProject();
    
    for (let i = 0; i < 5; i++){
        addTask();
        passOnStarred = true;
        addTask()
        passOnStarred = false
    }
};




selectedProj();

