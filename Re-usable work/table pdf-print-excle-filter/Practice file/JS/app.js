const { jsPDF } = window.jspdf;

// PDF button functionality
document.querySelector("#pdf").addEventListener("click", () => {
    const doc = new jsPDF();
    doc.autoTable({ 
        html: '#tableParent' 
    });
    doc.save('table.pdf');
});

// Print button functionality
document.querySelector("#print").addEventListener("click", () => {
    const printContents = document.getElementById('tableParent').outerHTML;
    const newWin = window.open('');
    newWin.document.write(`
        <html>
            <head>
                <title>Print</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
            </head>
            <body>
                ${printContents}
            </body>
        </html>
    `);
    newWin.document.close();
    newWin.print();
});

// Excel button functionality
document.querySelector("#xl").addEventListener("click", () => {
    const wb = XLSX.utils.table_to_book(document.getElementById('tableParent'), { sheet: "Sheet1" });
    XLSX.writeFile(wb, 'table.xlsx');
});

// Search functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableParent tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let match = false;
        
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(filter)) {
                match = true;
            }
        });

        row.style.display = match ? '' : 'none';
    });
});