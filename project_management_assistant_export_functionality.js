
document.addEventListener('DOMContentLoaded', function() {
    // Elements, Google Charts setup, and task management functionalities...

    // Export to Excel Function
    function exportToExcel() {
        const ws = XLSX.utils.json_to_sheet(tasks);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Tasks");

        // Create a temporary anchor element to trigger download
        let tmpDownloadLink = document.createElement('a');
        tmpDownloadLink.download = 'tasks.xlsx';
        const blob = new Blob([XLSX.write(wb, {bookType:'xlsx', type: 'binary'})], {type: "application/octet-stream"});
        tmpDownloadLink.href = URL.createObjectURL(blob);

        // Simulate a click on the anchor to trigger download
        document.body.appendChild(tmpDownloadLink);
        tmpDownloadLink.click();
        document.body.removeChild(tmpDownloadLink);
    }

    // Export to PDF Function
    function exportToPDF() {
        html2canvas(document.getElementById('gantt-chart')).then(canvas => {
            const pdf = new jspdf.jsPDF();
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10);
            pdf.save('gantt-chart.pdf');
        });
    }

    // Event listeners for export buttons...
});
