let projectArr = [];
let currentSelectedProj = 0,
localData;

function saveStorage(){
    localData = projectArr;
    localStorage["localData"] = JSON.stringify(localData);

};

function getStorage(){
    if (!checkForLocalStorage()){
    return false
    } else {
    let getData = JSON.parse(localStorage["localData"]);
    return getData;}
};

function checkForLocalStorage(){
    let checker = localStorage.getItem("localData");
    if (checker){
        return true 
    } else {
        return false
    }
};

function resetStorage(){
    localStorage.clear()
    location.reload();
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

function getTodayDate(){
    let today = new Date(),
    thisDay = today.getDate(),
    thisMonth = (today.getMonth()+1),
    thisYear = today.getFullYear();

    thisDay = thisDay.toString();
    thisMonth = thisMonth.toString();

    if (thisDay.length == 1){
        thisDay = "0" + thisDay;
    }

    if (thisMonth.length == 1){
        thisMonth = "0" + thisMonth;
    }
    

    let  date = thisYear + "-" + thisMonth + "-" + thisDay;
    return date.toString();

};

function getNextWeekDate(){
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    let thisDayNextWeek = nextWeek.getDate(),
    thisMonth = (nextWeek.getMonth()+1),
    thisYear = nextWeek.getFullYear();

    thisDayNextWeek = thisDayNextWeek.toString();
    thisMonth = thisMonth.toString();

    if (thisDayNextWeek.length == 1){
        thisDayNextWeek = "0" + thisDayNextWeek;
    }

    if (thisMonth.length == 1){
        thisMonth = "0" + thisMonth;
    }
    
    let  date = thisYear + "-" + thisMonth + "-" + thisDayNextWeek;
    return date.toString();
};

export {projectArr,getArrLength, getProject, 
    currentSelectedProj, getSelectedProject,
    getArrLengthTask, getTaskByID, projectsCheck, getTodayDate,
    getNextWeekDate, saveStorage, getStorage, resetStorage};