import { closeEditor, editTask } from "./taskEditor";
import {projectArr, getArrLength, 
    currentSelectedProj, getTaskByID, 
    getSelectedProject, getArrLengthTask, projectsCheck, getTodayDate,
    getNextWeekDate, saveStorage, getStorage} from "./storage";

function addClass(element, className) {
    return element.classList.add(className);
}

const projNameMidBox = document.querySelector(".projName"),
editProjNameBtn = document.querySelector(".projEdit"),
taskCont = document.querySelector(".taskCont"),
projectsList = document.querySelector(".projectsList");

let indexLoop = 0;


function createTaskBox(taskID){
    let currentTask = getTaskByID(taskID);

    const taskBox = document.createElement("div"),
    taskCheckBoxCont = document.createElement("div"),
    taskCheckBox = document.createElement("div"),
    taskTick = document.createElement("img"),
    taskNameCont = document.createElement("div"),
    taskNameDisplay = document.createElement("div"),
    taskDateCont = document.createElement("div"),
    taskDate = document.createElement("div"),
    taskStarCont = document.createElement("div"),
    taskStarIcon = document.createElement("img"),
    taskDelCont = document.createElement("div"),
    taskDelIcon = document.createElement("img");

    addClass(taskBox,"taskBox");
    addClass(taskCheckBoxCont,"taskCheckBoxCont");
    addClass(taskCheckBox,"taskCheckBox");
    addClass(taskTick,"taskTick");
    addClass(taskNameCont,"taskNameCont");
    addClass(taskNameDisplay,"taskName");
    addClass(taskDateCont,"taskDateCont");
    addClass(taskDate,"taskDate");
    addClass(taskStarCont,"taskStarCont");
    addClass(taskStarIcon,"taskStarIcon");
    addClass(taskDelCont,"taskDelCont");
    addClass(taskDelIcon,"taskDelIcon");

    taskTick.src = "./images/tick.png";
    taskDelIcon.src = "./images/deleteIcon.png";

    projectArr[currentSelectedProj].taskList[taskID].taskStar == false ? taskStarIcon.src = "./images/importantIcon.png":
    taskStarIcon.src = "./images/importantIconActive.png";


    taskNameDisplay.textContent = projectArr[currentSelectedProj].taskList[taskID].taskName.value

    taskNameDisplay.textContent = currentTask.taskName;

    taskTick.style.display = "none";

    taskDate.textContent = projectArr[currentSelectedProj].taskList[taskID].taskDueDate;

    taskCont.appendChild(taskBox);

    taskBox.appendChild(taskCheckBoxCont);
    taskCheckBoxCont.appendChild(taskCheckBox);
    taskCheckBox.appendChild(taskTick);

    taskBox.appendChild(taskNameCont);
    taskNameCont.appendChild(taskNameDisplay);

    taskBox.appendChild(taskDateCont);
    taskDateCont.appendChild(taskDate);

    taskBox.appendChild(taskStarCont);
    taskStarCont.appendChild(taskStarIcon);

    taskBox.appendChild(taskDelCont);
    taskDelCont.appendChild(taskDelIcon);

    projectArr[currentSelectedProj].taskList[taskID].taskChecked == false ? taskTick.style.display = "none":
    taskTick.style.display = "inline-block";

    taskDelIcon.addEventListener("click", deleteTask);
    taskCheckBox.addEventListener("click", taskChecked);
    taskStarCont.addEventListener("click", taskStarred);
    taskNameDisplay.addEventListener("click", editTaskInitialize);
    taskDate.addEventListener("click", editTaskInitialize);

    
    function editTaskInitialize(){
        editTask(taskID)
    };

    function taskStarred(){
        currentTask.taskStar == false ? taskStarredFalse (): taskStarredTrue();
        
        function taskStarredTrue (){
            currentTask.taskStar = false;
            taskStarIcon.src = "./images/importantIcon.png";
        };

        function taskStarredFalse (){
            currentTask.taskStar = true;
            taskStarIcon.src = "./images/importantIconActive.png";
            
        };

        saveStorage();
        
    };

    function taskChecked(){
        currentTask.taskChecked == false ? taskCheckedFalse (): taskCheckedTrue();
        
        function taskCheckedTrue (){
            currentTask.taskChecked = false;
            taskTick.style.display = "none";
            
        };

        function taskCheckedFalse (){
            currentTask.taskChecked = true;
            taskTick.style.display = "inline-block";
            
        };

        saveStorage();
    };

    function deleteTask(){
        const taskBoxRemove = taskBox;
        projectArr[currentSelectedProj].taskList[taskID].taskActive = false;
        saveStorage();
        taskBoxRemove.remove();
    }
    

};

function createProjectBox(projIndex){
    const projectBoxCont = document.createElement("div"),
    projectNameDisplay = document.createElement("div"),
    projectDelImg = document.createElement("img"),
    projID = projectArr[projIndex].index;

    addClass(projectBoxCont, "projectBox");
    addClass(projectNameDisplay, "projectName");
    addClass(projectDelImg, "projectDelImg");

    projectDelImg.src = "./images/deleteIcon.png";

    projectsList.appendChild(projectBoxCont);
    projectBoxCont.appendChild(projectNameDisplay);
    projectBoxCont.appendChild(projectDelImg);
    
    projectNameDisplay.textContent = projectArr[projID].projectName;
    
    
    projectDelImg.addEventListener("click", deleteProject);
    projectNameDisplay.addEventListener("click", selectProj);

    selectedProj(projID)

    function selectProj(){
        selectedProj(projID);
    };

    function deleteProject(){
        const projectBoxRemove = projectBoxCont;
        projectBoxRemove.remove();
        projectArr[projID].active = false;
        saveStorage();
        cycleSelectedProj();
    };

};

function cycleSelectedProj(){
    let nextID = null;
    
    for(let i = 0; i < projectArr.length; i++){
        if(projectArr[i].active == true){
            nextID = i;
        } else {
            clearTasks()
        }
        selectedProj(nextID);
    }
};

function selectedProj(ID){
    if (ID == null){
        projNameMidBox.textContent = "No Project Selected";
        currentSelectedProj = 0
    } else { 
        projNameMidBox.textContent = projectArr[ID].projectName;
        currentSelectedProj = ID;

        clearTasks();
        displayTasks();
    };
};

function displayTasks(){
    indexLoop = 0;

    if(getArrLengthTask() > 0){
    
        for(let i = 0; i < getArrLengthTask(); i++){
            if (projectArr[currentSelectedProj].taskList[i].taskActive == true){
            indexLoop = i ;            
            createTaskBox(indexLoop);
            }
        }
    }
};

function clearTasks(){
    while(taskCont.firstChild){
        taskCont.removeChild(taskCont.firstChild);
    };
};



function updateDomTask(){
    clearTasks();
    displayTasks();
};

function updateDomProjects(){
    while(projectsList.firstChild){
        projectsList.removeChild(projectsList.firstChild);
    };
    for (let i = 0; i < projectArr.length; i++){
        if (projectArr[i].active == true){
            createProjectBox(i)
            console.log(i)
        }
    }
};

function sortByImportant(){
    clearTasks();

    for(let i = 0; i < projectArr[currentSelectedProj].taskList.length; i++){
        if (projectArr[currentSelectedProj].taskList[i].taskStar == true && 
            projectArr[currentSelectedProj].taskList[i].taskActive == true){
            createTaskBox(i);
        }
    };
};

function sortTasks (){
    clearTasks();
    displayTasks();
}

function sortTasksToday(){
    let today = getTodayDate();

    clearTasks();

    for(let i = 0; i < projectArr[currentSelectedProj].taskList.length; i++){
        if (projectArr[currentSelectedProj].taskList[i].taskDueDate == today){
            createTaskBox(i);
        }
    };

};

function sortTasksUpcoming(){
    let todayStr = getTodayDate(),
    nextWeekStr = getNextWeekDate(),
    today = new Date(todayStr),
    nextWeek = new Date(nextWeekStr),
    dueDate;

    clearTasks();

    for(let i = 0; i < projectArr[currentSelectedProj].taskList.length; i++){
        dueDate = new Date(projectArr[currentSelectedProj].taskList[i].taskDueDate);
        
        if ( dueDate >= today && dueDate <= nextWeek){
            createTaskBox(i);
        }
    };
    
};

function sortTasksLater(){
    let todayStr = getTodayDate(),
    nextWeekStr = getNextWeekDate(),
    today = new Date(todayStr),
    nextWeek = new Date(nextWeekStr),
    dueDate;

    clearTasks();

    for(let i = 0; i < projectArr[currentSelectedProj].taskList.length; i++){
        dueDate = new Date(projectArr[currentSelectedProj].taskList[i].taskDueDate);
        
        if (dueDate > nextWeek){
            createTaskBox(i);
        }
    };
};

function populateFromSave(){
    projectArr = getStorage();
    
    for (let i = 0 ; i < projectArr.length; i++){
        if (projectArr[i].active == true){
            createProjectBox(i);
        }
    }
};


export {createTaskBox, createProjectBox, selectedProj,
     updateDomTask, updateDomProjects, sortByImportant, sortTasks,
    sortTasksToday, sortTasksUpcoming, sortTasksLater, populateFromSave }