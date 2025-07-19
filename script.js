// Get references to DOM elements
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click event from bubbling up to the list item
      taskList.removeChild(listItem);
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Toggle completion status when the task is clicked
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

// Allow pressing "Enter" to add a task
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
