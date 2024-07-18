document.getElementById('submit').addEventListener('click', function () {
    // Get the input values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const rollNo = document.getElementById('roll-no').value;

    // Validate the inputs
    if (!firstName || !lastName || !rollNo) {
        alert('Please fill in all fields');
        return;
    }

    // Create a new table row
    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>
            <button class="edit" onclick="editRow(this)">Edit</button>
            <button class="delete" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Add the new row to the table
    tableBody.appendChild(newRow);

    // Clear the input fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('roll-no').value = '';
});

function deleteRow(button) {
    // Get the row to delete
    const row = button.parentElement.parentElement;
    row.remove();
}

function editRow(button) {
    // Get the row to edit
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');

    // Populate the form with the row's data
    document.getElementById('first-name').value = cells[0].textContent;
    document.getElementById('last-name').value = cells[1].textContent;
    document.getElementById('roll-no').value = cells[2].textContent;

    // Delete the row
    row.remove();
}
