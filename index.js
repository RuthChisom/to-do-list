let toDo = document.getElementById("container");
let inputValue = document.getElementById("inputValue");
let toDoList = document.getElementById('myUL');


// window.addEventListener("click",function(){
//     console.log(inputValue.value);
//     toDoList.unshift(inputValue.value);
//     console.log(toDoList);
// }) 

// add a new item to the todo list
const addItem = () => {
    console.log(inputValue.value);
    
    if(!inputValue.value){
        alert("Please enter an item!!"); //prevent empty values from being added to the list
    }
    else{
        let li = document.createElement("li");  //create li tag
        let text = document.createTextNode(inputValue.value);   //input text

        let remove = document.createElement("button");  //create remove button
        remove.innerHTML = "Remove";    //label remove button
        // function to remove
        remove.onclick = function(){
            // alert('here be dragons');return false;
            li.parentNode.removeChild(li);
          };

        let edit = document.createElement("button");  //create edit button
        edit.innerHTML = "Edit";    //label edit button
        li.append(text);    //add text to list
        li.append(remove);  //add remove button to list
        li.append(edit);  //add edit button to list
        toDoList.insertBefore(li,toDoList.firstElementChild); //shows the most recently added item first on the list
        // document.getElementById('myUL').appendChild(li);  //shows the most recently added item last on the list

        inputValue.value = "";  //the input field must be reset when the add button is clicked on 
    }

}