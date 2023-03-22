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
        let li = document.createElement("li");
        var text = document.createTextNode(inputValue.value);
        li.append(text);
        toDoList.insertBefore(li,toDoList.firstElementChild); //shows the most recently added item first on the list
        // document.getElementById('myUL').appendChild(li);  //shows the most recently added item last on the list

        inputValue.value = "";  //the input field must be reset when the add button is clicked on 
    }

}