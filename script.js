// Student Task Manager
// Week 3 JavaScript DOM Application

const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

// Listen for the Add Task button
addButton.addEventListener("click", addTask);

// Allow the Enter key to add a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function used to add a new task
function addTask() {

    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;

    // Validate the input
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    // Create task information
    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    taskInfo.innerHTML =
        "<strong>" + taskText + "</strong><br>" +
        "Priority: " + priority;

    // Create container for buttons
    const buttons = document.createElement("div");
    buttons.className = "action-buttons";

    // Create Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function() {
        taskInfo.classList.toggle("completed");

        if (taskInfo.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
    });

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        totalTasks--;
        updateTaskCount();
    });

    // Add buttons to button container
    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);

    // Add information and buttons to task
    listItem.appendChild(taskInfo);
    listItem.appendChild(buttons);

    // Add task to the webpage
    taskList.appendChild(listItem);

    // Update task counter
    totalTasks++;
    updateTaskCount();

    // Clear input box
    taskInput.value = "";
    taskInput.focus();
}

// Update the displayed number of tasks
function updateTaskCount() {
    taskCount.textContent = "Total Tasks: " + totalTasks;
}
