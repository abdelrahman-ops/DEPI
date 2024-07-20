let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let rollNo = document.getElementById("roll-no");
let tableBody = document.querySelector("table tbody");

function add() {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");
    let tr = document.createElement("tr");

    td1.innerHTML = firstName.value;
    tr.appendChild(td1);
    
    td2.innerHTML = lastName.value;
    tr.appendChild(td2);

    td3.innerHTML = rollNo.value;
    tr.appendChild(td3);

    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("edit");
    btnEdit.onclick = function() {
        // Functionality to edit the row
    };
    td4.appendChild(btnEdit);

    btnDelete.innerHTML = "Delete";
    btnDelete.classList.add("delete");
    btnDelete.onclick = function() {
        tr.remove();
    };
    td4.appendChild(btnDelete);

    tr.appendChild(td4);
    tableBody.appendChild(tr);

    // Clear input fields after adding
    firstName.value = "";
    lastName.value = "";
    rollNo.value = "";
}
