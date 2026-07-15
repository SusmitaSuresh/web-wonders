// Get the dropdown button and dropdown content
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

// Toggle dropdown
dropdownBtn.addEventListener("click", () => {

    dropdownContent.classList.toggle("show");

    // Rotate the arrow icon
    dropdownBtn.querySelector("i").classList.toggle("rotate");

});