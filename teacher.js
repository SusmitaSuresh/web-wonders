// Popup elements
const modal = document.getElementById("taskForm");
const createBtn = document.getElementById("createTaskBtn");
const closeBtn = document.querySelector(".close");

// Open popup
createBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close popup when × is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// View Task
document.querySelectorAll(".viewBtn").forEach(button => {

    button.addEventListener("click", function () {

        alert("Display full task details here.");

    });

});

// Edit Task
document.querySelectorAll(".editBtn").forEach(button => {

    button.addEventListener("click", function () {

        modal.style.display = "block";

        // Later, fill the form with the selected task details

    });

});

// Delete Task
document.querySelectorAll(".deleteBtn").forEach(button => {

    button.addEventListener("click", function () {

        let confirmDelete = confirm("Delete this task?");

        if (confirmDelete) {

            alert("Task Deleted");

            // Later remove from page and database

        }

    });

});

// Student Submissions
document.querySelectorAll(".submissionBtn").forEach(button => {

    button.addEventListener("click", function () {

        alert("Open student submissions.");

    });

});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "homepage.html";

});