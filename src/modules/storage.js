const projectArr = [];
let currentSelectedProj = 0;

function store () {


};

function getInfo(){

};

function getArrLength(){
    return projectArr.length;
}

function getTaskByID(taskID){
   return (projectArr[currentSelectedProj].taskList[taskID]);
};

function getArrLengthTask(){
    return projectArr[currentSelectedProj].taskList.length;
}

function getProject(projectID){
    return projectArr[projectID];
};

function getSelectedProject(){
    return currentSelectedProj;
}

function projectsCheck(){
    let anyProjects = false;

    for (let i = 0; i < projectArr.length; i++){
        if (projectArr[i].active == true){
            anyProjects = true;
        } 

        return anyProjects;
    }

}

export {projectArr, store, getInfo, 
    getArrLength, getProject, 
    currentSelectedProj, getSelectedProject,
    getArrLengthTask, getTaskByID, projectsCheck};