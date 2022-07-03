import { createProjectBox, selectedProj } from "./dom";
import {projectArr, getArrLength, getProject, saveStorage} from "./storage"



function addClass(element, className) {
    return element.classList.add(className);
}

function addProject(){
    const newProjInput = document.getElementById("newProjInput"),
    projectsList= document.querySelector(".projectsList");


    !newProjInput.value ? newProjInput.value = "Untitled Project " + (projectArr.length + 1):
    newProjInput.value.length >= 19 ? newProjInput.value = newProjInput.value.slice(0,18).concat("..."):
    newProjInput.value;
    
    function Project(name){
        this.projectName = name;
        this.index = projectArr.length;
        this.active = true;
        this.taskList = [];
    }

    const project = new Project(newProjInput.value);
    projectArr.push(project)
    newProjInput.value= "";
    
    createProjectBox(projectArr.length-1)

    saveStorage();

}

export default addProject;