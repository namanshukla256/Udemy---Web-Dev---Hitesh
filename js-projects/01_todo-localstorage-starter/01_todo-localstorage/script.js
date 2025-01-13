document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// 

let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // get the tasks from local storage or an empty array if there are no tasks

tasks.forEach(task => renderTask(task)); //render each task


addTaskButton.addEventListener("click", () => {
   const taskText = todoInput.value.trim(); //ariaValueMax is a property that returns the maximum value of an element
   //trim() method removes whitespace from both ends of a string


    if(taskText === "") return; //if the taskText is empty, return

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    }; //create a new task object
    //Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    //This is used to create a unique id for each task
    tasks.push(newTask); //add the new task to the tasks array
    saveTasks(); //save the tasks to local storage
    renderTask(newTask); //render the new task
    todoInput.value = ""; //clear the input field
    console.log(tasks);
});

function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute('data-id', task.id);
    if(task.completed) li.classList.add('completed'); // if the task is completed, add the completed class to the list item
    li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>    
    `; //create a new list item element with the task text and a delete button

    li.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') return; //if the clicked element is a button, return
        task.completed = !task.completed; //toggle the completed property of the task
        li.classList.toggle('completed'); //toggle the completed class of the list item
        saveTasks(); //save the tasks to local storage
    });

    li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation(); //stop the click event from bubbling up to the list item
        tasks = tasks.filter(t => t.id !== task.id); //remove the task from the tasks array
        li.remove(); //remove the list item from the todoList
        saveTasks(); //save the tasks to local storage
    })

    todoList.appendChild(li); //append the list item to the todoList
    
} // render the tasks

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}  //save the tasks to local storage

}) 