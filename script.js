document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('todo-input');
    const add = document.getElementById('add-btn');
    const main = document.getElementById('mainArea');
    const taskContainer = document.getElementById('task-container');
    let i;
    if(localStorage.getItem('i')==null){
        i=0;
    }
    else{
        i = localStorage.getItem('i');
    }
    
    let tasksArray = [];
    add.addEventListener('click', () => {

        if(input.value==""){
            alert("You must write something!");
        }
        else{

        let val = input.value;
        let div = document.createElement("div");
        div.className = "tasks";

        div.innerHTML = `
            <span id="check-txt-${++i}" class="check-txt">
        <input type="checkbox" id="check-${i}" >
            <label for="check-${i}" class="task-txt"> ${val}</label>
            </span>
            <span id="x-icon-${i}" class="x-icon">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
             </span>`;

        taskContainer.appendChild(div);
        tasksArray.push(div);
        console.log(tasksArray);
        input.value = "";
        saveList();
}
    });


        taskContainer.addEventListener('click',function(e){
 
             if(e.target.className === "task-txt" || e.target.className === "task-txt line"){

                e.target.classList.toggle('line');
                console.log(e.target.previousElementSibling.checked);

                console.log(document.getElementById('check-2').checked);
                saveList();
            }

             
            else if(e.target.tagName === "svg" || e.target.tagName === "path"){
                e.target.closest(".tasks").remove();
                saveList();
            }
            saveList();
        })
            
        function saveList(){
            localStorage.setItem("data",taskContainer.innerHTML);
            localStorage.setItem("i",i);
        }
        

        function getList(){
            taskContainer.innerHTML=localStorage.getItem("data");
        }

        getList();
        
        
});