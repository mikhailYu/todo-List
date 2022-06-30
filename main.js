(()=>{"use strict";const t=[];let e=0;function n(){return t[e].taskList.length}function a(){return e}function c(t,e){return t.classList.add(e)}const s=document.querySelector(".projName"),i=(document.querySelector(".projEdit"),document.querySelector(".taskCont")),o=document.querySelector(".projectsList");let l=0;function d(n){let a=function(n){return t[e].taskList[n]}(n);const s=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("img"),r=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),k=document.createElement("div"),p=document.createElement("div"),v=document.createElement("img"),h=document.createElement("div"),E=document.createElement("img");c(s,"taskBox"),c(o,"taskCheckBoxCont"),c(l,"taskCheckBox"),c(d,"taskTick"),c(r,"taskNameCont"),c(u,"taskName"),c(m,"taskDateCont"),c(k,"taskDate"),c(p,"taskStarCont"),c(v,"taskStarIcon"),c(h,"taskDelCont"),c(E,"taskDelIcon"),d.src="./images/tick.png",E.src="./images/deleteIcon.png",0==t[e].taskList[n].taskStar?v.src="./images/importantIcon.png":v.src="./images/importantIconActive.png",u.textContent=t[e].taskList[n].taskName.value,u.textContent=a.taskName,d.style.display="none",k.textContent="update due date",i.appendChild(s),s.appendChild(o),o.appendChild(l),l.appendChild(d),s.appendChild(r),r.appendChild(u),s.appendChild(m),m.appendChild(k),s.appendChild(p),p.appendChild(v),s.appendChild(h),h.appendChild(E),0==t[e].taskList[n].taskChecked?d.style.display="none":d.style.display="inline-block",E.addEventListener("click",(function(){const a=s;t[e].taskList[n].taskActive=!1,console.log(t),a.remove()})),l.addEventListener("click",(function(){0==a.taskChecked?(a.taskChecked=!0,d.style.display="inline-block"):(a.taskChecked=!1,d.style.display="none")})),p.addEventListener("click",(function(){0==a.taskStar?(a.taskStar=!0,v.src="./images/importantIconActive.png"):(a.taskStar=!1,v.src="./images/importantIcon.png")})),u.addEventListener("click",(function(){!function(n){C=!0;const a=t[e].taskList[n];f.style.display="flex",newTaskBtn.style.display="none",taskNameInput.value=a.taskName,taskDescInput.value=a.taskDesc,y=a.taskStar,I(),g=n}(n)}))}function r(e){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("img"),i=t[e].index;c(n,"projectBox"),c(a,"projectName"),c(s,"projectDelImg"),s.src="./images/deleteIcon.png",o.appendChild(n),n.appendChild(a),n.appendChild(s),a.textContent=t[i].projectName,s.addEventListener("click",(function(){n.remove(),t[i].active=!1,function(){let e=null;for(let n=0;n<t.length;n++)1==t[n].active?e=n:k(),u(e)}()})),a.addEventListener("click",(function(){u(i)})),u(i)}function u(n){null==n?(s.textContent="No Project Selected",e=0):(s.textContent=t[n].projectName,e=n,k(),m())}function m(){if(l=0,n()>0)for(let a=0;a<n();a++)1==t[e].taskList[a].taskActive&&(l=a,d(l))}function k(){for(;i.firstChild;)i.removeChild(i.firstChild)}const p=function(){const e=document.getElementById("newProjInput");document.querySelector(".projectsList"),e.value?e.value.length>=19?e.value=e.value.slice(0,18).concat("..."):e.value:e.value="Untitled Project "+(t.length+1);const n=new function(e){this.projectName=e,this.index=t.length,this.active=!0,this.taskList=[]}(e.value);t.push(n),e.value="",r(t.length-1)},v=function(){if(null==t[a()]&&p(),1==function(){let e=!1;for(let n=0;n<t.length;n++)return 1==t[n].active&&(e=!0),e}()){const e="12/34/56";function c(t,e,n,a){this.taskIndex=t,this.taskDesc=n,this.taskChecked=!1,this.taskDueDate=a,this.taskStar=E,this.taskActive=!0,e?e.length>=30?this.taskName=e.slice(0,29).concat("..."):this.taskName=e:this.taskName="Untitled Task "+(t+1)}const s=new c(n(),taskNameInput.value,taskDescInput.value,e);t[a()].taskList.push(s),L(),d(n()-1)}else L()},f=document.getElementById("taskEditorCont"),h=document.querySelector(".taskEditorStarIcon");let g,y=!1,E=!1,C=!1;function I(){h.src=0==y?"./images/importantIcon.png":"./images/importantIconActive.png"}function L(){f.style.display="none",newTaskBtn.style.display="inline-block",taskNameInput.value="",taskDescInput.value="",y=!1}h.src="./images/importantIcon.png",h.addEventListener("click",(function(){0==y?(y=!0,h.src="./images/importantIconActive.png",E=!0):(y=!1,h.src="./images/importantIcon.png",E=!1)}));const N=document.getElementById("projectNameEditorCont"),S=document.querySelector(".pneBtn");let B=document.getElementById("pneInput");function j(){N.style.display="none"}S.addEventListener("click",(function(){if(B.value&&0!=B.value.length){let n=e;t[e].projectName=B.value,function(){for(;o.firstChild;)o.removeChild(o.firstChild);for(let e=0;e<t.length;e++)1==t[e].active&&(r(e),console.log(e))}(),u(n),j()}else j()}));const x=document.querySelector(".taskEditorClose"),D=document.getElementById("newTaskBtn"),q=document.getElementById("newProjBtn"),w=document.getElementById("confirmBtn"),A=(document.getElementById("taskNameInput"),document.getElementById("taskDescInput"),document.querySelector(".projEdit")),T=document.querySelector(".tabImportant"),b=document.querySelector(".tabTasks");x.addEventListener("click",L),D.addEventListener("click",(function(){f.style.display="flex",newTaskBtn.style.display="none",E=!1,I()})),w.addEventListener("click",(function(){C?(function(){const n=t[e].taskList[g];n.taskName=taskNameInput.value,n.taskDesc=taskDescInput.value,n.taskStar=y,k(),m(),L()}(),C=!1):v()})),q.addEventListener("click",p),A.addEventListener("click",(function(){let n=!1;if(t.length>0)for(let e=0;e<=t.length;e++)if(1==t[e].active){n=!0;break}1==n?(N.style.display="flex",B.value=t[e].projectName):j()})),T.addEventListener("click",(function(){k();for(let n=0;n<t[e].taskList.length;n++)1==t[e].taskList[n].taskStar&&1==t[e].taskList[n].taskActive&&d(n)})),b.addEventListener("click",(function(){k(),m()})),function(){p();for(let t=0;t<5;t++)v(),E=!0,v(),E=!1}(),u()})();