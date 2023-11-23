
document.addEventListener('DOMContentLoaded', function() {
    // Elements and Google Charts setup...

    // Task data
    let tasks = [];

    // Event Listeners for add, edit, delete tasks...

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        tasks.forEach((task, index) => {
            // Calculate start and end dates based on dependencies
            let startDate = new Date();
            if (task.dependencies.length > 0) {
                startDate = calculateStartDate(task.dependencies);
            }
            let endDate = new Date(startDate.getTime());
            endDate.setDate(startDate.getDate() + task.duration);

            data.addRows([
                [String(index), task.name, startDate, endDate, null, 0, task.dependencies.join(', ')]
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

    function calculateStartDate(dependencies) {
        // Simplified logic to calculate start date based on dependencies
        // In a real-world scenario, this would be more complex
        let latestEndDate = new Date();
        dependencies.forEach(dep => {
            let depTask = tasks.find(task => task.name === dep);
            if (depTask) {
                let depEndDate = new Date();
                depEndDate.setDate(depEndDate.getDate() + depTask.duration);
                if (depEndDate > latestEndDate) {
                    latestEndDate = depEndDate;
                }
            }
        });
        return latestEndDate;
    }
});
