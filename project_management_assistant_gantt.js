
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const generateTasksBtn = document.getElementById('generate-tasks');
    const taskListSection = document.getElementById('task-list');
    const ganttChartSection = document.getElementById('gantt-chart');
    const exportExcelBtn = document.getElementById('export-excel');
    const exportPdfBtn = document.getElementById('export-pdf');

    // Google Charts Loader
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    // Sample tasks data
    let tasks = [
        { name: 'Task 1', duration: 5, dependencies: [] },
        { name: 'Task 2', duration: 3, dependencies: ['Task 1'] },
        { name: 'Task 3', duration: 2, dependencies: ['Task 2'] }
    ];

    // Event Listeners
    generateTasksBtn.addEventListener('click', function() {
        generateTasks();
        drawChart();
    });
    exportExcelBtn.addEventListener('click', exportToExcel);
    exportPdfBtn.addEventListener('click', exportToPDF);

    function generateTasks() {
        // Simulated task generation based on project description
        tasks = [
            { name: 'Task 1', duration: 5, dependencies: [] },
            { name: 'Task 2', duration: 3, dependencies: ['Task 1'] },
            { name: 'Task 3', duration: 2, dependencies: ['Task 2'] }
        ];

        displayTasks(tasks);
    }

    function displayTasks(tasks) {
        // Clear previous tasks
        taskListSection.innerHTML = '';

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task.name + ' - Duration: ' + task.duration + ' days';
            taskListSection.appendChild(taskElement);
        });
    }

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        var today = new Date();
        tasks.forEach((task, index) => {
            data.addRows([
                [String(index), task.name, today, null, task.duration * 24 * 60 * 60 * 1000, 0, task.dependencies.join(', ')]
            ]);
        });

        var options = {
            height: 400,
            gantt: {
                trackHeight: 30
            }
        };

        var chart = new google.visualization.Gantt(ganttChartSection);
        chart.draw(data, options);
    }

    function exportToExcel() {
        // Placeholder for Excel export functionality
        console.log('Exporting to Excel...');
    }

    function exportToPDF() {
        // Placeholder for PDF export functionality
        console.log('Exporting to PDF...');
    }
});
