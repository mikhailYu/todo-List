import { currentSelectedProj, projectArr, saveStorage } from "./storage";
import {updateDomProjects, selectedProj} from "./dom"

const pneEditorBase = document.getElementById("projectNameEditorCont"),
pneConfirmBtn = document.querySelector(".pneBtn");
let pneNameInput = document.getElementById("pneInput");

pneConfirmBtn.addEventListener("click", confirmPNEedit)

function openPNEeditor(){
    let isValidPNE = false
        if (projectArr.length > 0){    
            for (let i = 0; i <= projectArr.length; i++){
                if (projectArr[i].active == true){
                    isValidPNE = true; 
                    break
            }
        }
    }

    if (isValidPNE == true){
    pneEditorBase.style.display= "flex";
    pneNameInput.value = projectArr[currentSelectedProj].projectName;
    } else {
        closePNEeditor();
    }

}

function confirmPNEedit(){
    if(!pneNameInput.value || pneNameInput.value.length == 0){
        closePNEeditor();
    } else {
        let projectSelector = currentSelectedProj;
        projectArr[currentSelectedProj].projectName = pneNameInput.value;
        updateDomProjects();
        selectedProj(projectSelector);
        saveStorage();
        closePNEeditor();
    }
    
}

function closePNEeditor(){
    pneEditorBase.style.display = "none";
}


export {openPNEeditor, closePNEeditor}