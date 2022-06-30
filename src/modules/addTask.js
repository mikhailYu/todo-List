import { closeEditor, passOnStarred } from "./taskEditor";
import {createTaskBox} from "./dom"
import {projectArr, getSelectedProject, getArrLengthTask} from "./storage"
import addProject from "./addProj";
import {projectsCheck} from "./storage"

function addClass(element, className) {
    return element.classList.add(className);
}


function addTask(){

    if(projectArr[getSelectedProject()] == null){
        addProject();

    } 
    
    if ( projectsCheck() == true){

    const dueDate = "12/34/56";

    function Task (taskIndex, taskName, taskDesc, taskDueDate){
        
        this.taskIndex = taskIndex;
        this.taskDesc = taskDesc;
        this.taskChecked = false;
        this.taskDueDate = taskDueDate;
        this.taskStar = passOnStarred;
        this.taskActive = true;

        !taskName ? this.taskName = "Untitled Task " + (taskIndex + 1):
        taskName.length >= 30 ? this.taskName = taskName.slice(0,29).concat("..."):
        this.taskName = taskName;
        
    };

    const task = new Task(getArrLengthTask(), 
    taskNameInput.value, taskDescInput.value, dueDate);

    projectArr[getSelectedProject()].taskList.push(task);

    closeEditor();
    createTaskBox((getArrLengthTask() -1));
} else {
    closeEditor();
}


    
};


export default addTask;