function taskEditor ={
const taskEditorCont = document.getElementById("taskEditorCont"),
taskEditorCloseBtn = document.querySelector(".taskEditorClose"),
taskEditorNewTaskBtn = document.getElementById("newTaskBtn"),
taskEditorNewProjBtn = document.getElementById("newProjBtn");



taskEditorCloseBtn.addEventListener("click", closeEditor);
taskEditorNewTaskBtn.addEventListener("click", openEditor);

    function closeEditor(){
        taskEditorCont.style.display="none";
        taskEditorNewTaskBtn.style.display="inline-block";
    };

    function openEditor(){
        taskEditorCont.style.display="flex";
        taskEditorNewTaskBtn.style.display="none";
    };


};



export default taskEditor;