
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name');
    const taskDurationInput = document.getElementById('task-duration');
    const taskDependenciesInput = document.getElementById('task-dependencies');
    const addTaskBtn = document.getElementById('add-task');
    const editTaskBtn = document.getElementById('edit-task');
    const deleteTaskBtn = document.getElementById('delete-task');
    const taskListSection = document.getElementById('task-list');
    const ganttChartSection = document.getElementById('gantt-chart');

    // Google Charts Loader
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    // Task data
    let tasks = [];

    // Event Listeners
    addTaskBtn.addEventListener('click', addTask);
    editTaskBtn.addEventListener('click', editTask);
    deleteTaskBtn.addEventListener('click', deleteTask);

    function addTask() {
        const taskName = taskNameInput.value;
        const duration = parseInt(taskDurationInput.value);
        const dependencies = taskDependenciesInput.value.split(',').map(item => item.trim());
        tasks.push({ name: taskName, duration, dependencies });
        displayTasks();
        drawChart();
    }

    function editTask() {
        const taskName = taskNameInput.value;
        const duration = parseInt(taskDurationInput.value);
        const dependencies = taskDependenciesInput.value.split(',').map(item => item.trim());
        const taskIndex = tasks.findIndex(task => task.name === taskName);
        if (taskIndex !== -1) {
            tasks[taskIndex] = { name: taskName, duration, dependencies };
        }
        displayTasks();
        drawChart();
    }

    function deleteTask() {
        const taskName = taskNameInput.value;
        const taskIndex = tasks.findIndex(task => task.name === taskName);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        displayTasks();
        drawChart();
    }

    function displayTasks() {
        taskListSection.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task.name + ' - Duration: ' + task.duration + ' days - Dependencies: ' + task.dependencies.join(', ');
            taskListSection.appendChild(taskElement);
        });
    }

    function drawChart() {
        // Logic to draw the Gantt chart using Google Charts
        // Placeholder for simplicity
        console.log('Drawing Gantt chart...');
    }
});
