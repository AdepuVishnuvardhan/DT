// Sample JSON data
let todoData = [
    { id: 1, task: 'Learn JavaScript' },
    { id: 2, task: 'Complete homework' },
    { id: 3, task: 'Prepare for interview' }
  ];
  
  // Function to display tasks
  function displayTasks() {
    const todoListDiv = document.getElementById('todoList');
    todoListDiv.innerHTML = ''; // Clear previous list
  
    const ul = document.createElement('ul');
  
    todoData.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.task}</span>
        <button onclick="removeTask(${item.id})">Remove</button>
      `;
      ul.appendChild(li);
    });
  
    todoListDiv.appendChild(ul);
  }
  
  // Function to add a task
  document.getElementById('addTaskBtn').addEventListener('click', function () {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
  
    if (task) {
      const newTask = { id: Date.now(), task: task };
      todoData.push(newTask);
      input.value = ''; // Clear the input
      displayTasks(); // Re-render the tasks
    } else {
      alert('Please enter a valid task');
    }
  });
  
  // Function to remove a task
  function removeTask(id) {
    todoData = todoData.filter(item => item.id !== id);
    displayTasks(); // Re-render the tasks
  }
  
  // Initial call to render tasks
  displayTasks();
  