
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const generateTasksBtn = document.getElementById('generate-tasks');
    const taskListSection = document.getElementById('task-list');
    const exportExcelBtn = document.getElementById('export-excel');
    const exportPdfBtn = document.getElementById('export-pdf');

    // Event Listeners
    generateTasksBtn.addEventListener('click', generateTasks);
    exportExcelBtn.addEventListener('click', exportToExcel);
    exportPdfBtn.addEventListener('click', exportToPDF);

    function generateTasks() {
        // Simulated task generation based on project description
        const tasks = [
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

    function exportToExcel() {
        // Placeholder for Excel export functionality
        console.log('Exporting to Excel...');
    }

    function exportToPDF() {
        // Placeholder for PDF export functionality
        console.log('Exporting to PDF...');
    }
});
