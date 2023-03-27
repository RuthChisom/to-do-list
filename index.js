// On app load, get all tasks from localStorage
window.onload = loadTasks;

let toDo = document.getElementById("container");
let inputValue = document.getElementById("inputValue");
let toDoList = document.getElementById('myUL');

// load task initially from local storage
function loadTasks() {
    console.log("local tasks= ",localStorage.getItem("tasks"));
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("tasks") === null) return;


    // if yes, Get the tasks from localStorage and convert it to an array
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    console.log("local tasks object= ",tasks);

    // Loop through the tasks and add them to the list
    tasks.forEach(task => {
    //   const list = document.querySelector("ul");
    //   const li = document.createElement("li");
    //   li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
    //     <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
    //     <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    //   list.insertBefore(li, list.children[0]);
    createList(task.task);
    });
  }

// create list format
const createList = (item) => {
        let li = document.createElement("li");  //create li tag
        let text = document.createTextNode(item);   //input text

        // delete task
        let remove = document.createElement("button");  //create remove button
        remove.innerHTML = "Remove";    //label remove button
        // function to remove
        remove.onclick = function(){
            if (confirm("Are you sure you want to delete this item?")) {
                // remove from localstorage 
                let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
                console.log(tasks);
                tasks.forEach(task => {
                    console.log(task);
                    console.log(li.parentNode);
                    console.log(li.parentNode.children);
                    console.log(li.parentNode.children[1]);
                    console.log(li.parentNode.children[1].value);
                    if (task.task === li.parentNode.children[1].value) {
                    // delete task
                    tasks.splice(tasks.indexOf(task), 1);
                    }
                });
                console.log(tasks);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                console.log(localStorage);

                li.parentNode.removeChild(li);
            }
          };

        // edit task
        let edit = document.createElement("button");  //create edit button
        edit.innerHTML = "Edit";    //label edit button
        // function to edit
        edit.onclick = function(){
            alert('here be dragons');return false;
            
        };

        li.append(text);    //add text to list
        li.append(remove);  //add remove button to list
        li.append(edit);  //add edit button to list
        toDoList.insertBefore(li,toDoList.firstElementChild); //shows the most recently added item first on the list
        // document.getElementById('myUL').appendChild(li);  //shows the most recently added item last on the list

}

// add a new item to the todo list
const addItem = () => {
    console.log(inputValue.value);
    
    if(!inputValue.value){
        alert("Please enter an item!!"); //prevent empty values from being added to the list
    }
    else{
        // add task to local storage
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: inputValue.value }]));
        createList(inputValue.value);
        
        inputValue.value = "";  //the input field must be reset when the add button is clicked on 
    }

}