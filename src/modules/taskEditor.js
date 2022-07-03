import addTask from "./addTask";
import { currentSelectedProj, projectArr, 
    getTaskByID,getTodayDate, saveStorage} from "./storage";
import {updateDomTask} from "./dom"

const taskEditorCont = document.getElementById("taskEditorCont"),
taskEditorStarIcon = document.querySelector(".taskEditorStarIcon");
let editorStarred = false,
passOnStarred = false,
isEdit = false,
taskBeingEdited,
taskDateInput = document.getElementById("taskDateInput");

taskEditorStarIcon.src = "./images/importantIcon.png";
taskEditorStarIcon.addEventListener("click", editorStarSwitch);



function editorStarSwitch(){
    editorStarred == false ? editorStarredFalse (): editorStarredTrue();

        function editorStarredTrue (){
            editorStarred = false;
            taskEditorStarIcon.src = "./images/importantIcon.png";
            passOnStarred = false;
        };

        function editorStarredFalse (){
            editorStarred = true;
            taskEditorStarIcon.src = "./images/importantIconActive.png";
            passOnStarred = true;
    };
};

function editorStarCheck(){
    if( editorStarred == false){
        taskEditorStarIcon.src =  "./images/importantIcon.png"
    } else {
        taskEditorStarIcon.src = "./images/importantIconActive.png"
    }
}

function closeEditor(){
    taskEditorCont.style.display="none";
    newTaskBtn.style.display="inline-block";
    taskNameInput.value = "";
    taskDescInput.value = "";
    editorStarred = false;
};

function openEditor(){
    taskEditorCont.style.display="flex";
    newTaskBtn.style.display="none";
    passOnStarred = false;
    taskDateInput.value = getTodayDate();
    editorStarCheck()
};

function editTask(taskID){
    isEdit = true;
    const taskToEdit = projectArr[currentSelectedProj].taskList[taskID];

    taskEditorCont.style.display="flex";
    newTaskBtn.style.display="none";

    taskNameInput.value = taskToEdit.taskName;
    taskDescInput.value = taskToEdit.taskDesc;
    taskDateInput.value = taskToEdit.taskDueDate;

    editorStarred = taskToEdit.taskStar;
    editorStarCheck();

    taskBeingEdited = taskID;
};

function taskEditorConfirm(){
    if (isEdit){
        editTaskConfirm();
        isEdit = false;
    } else {
        addTask();
    };
};

function editTaskConfirm(){
    const taskEditArr = projectArr[currentSelectedProj].taskList[taskBeingEdited];

    taskEditArr.taskName = taskNameInput.value;
    taskEditArr.taskDesc = taskDescInput.value;
    taskEditArr.taskDueDate = taskDateInput.value;

    taskEditArr.taskStar = editorStarred;

    updateDomTask();

    saveStorage();
    
    closeEditor();
};

export {closeEditor, openEditor, passOnStarred, editTask, taskEditorConfirm};