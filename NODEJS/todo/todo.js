const { log } = require("console"); // Importing the console module
const fs = require("fs"); // Importing the file system module
const filePath = "./tasks.json"; // File path to store the tasks

const loadTasks = () => {
    try {
      const dataBuffer = fs.readFileSync(filePath); // Reading the file
      const dataJSON = dataBuffer.toString(); // Converting the buffer data to string
      return JSON.parse(dataJSON); // Parsing the data to JSON
    } catch (error) {
        return []; // If the file is empty, return an empty array
    }
} // Function to load the tasks from the file

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks); // Converting the tasks to JSON
    fs.writeFileSync(filePath, dataJSON); // Writing the tasks to the file
} // Function to save the tasks to the file

const addTask = (task) => {
    const tasks = loadTasks(); // Loading the tasks
    tasks.push({ task }); // Adding the task to the tasks
    saveTasks(tasks); // Saving the tasks
    console.log("Task added ", task); // Logging the task added
}; // Function to add a task

const listTasks = () => {
    const tasks = loadTasks() // Loading the tasks
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`)); // Logging the tasks
}; // Function to list the tasks

const command = process.argv[2]; // Getting the command from the arguments
const argument = process.argv[3]; // Getting the argument from the arguments

if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    removeTask(parseInt(argument));
} else {
    console.log("Command not found!");
} // Checking the command and executing the respective function

