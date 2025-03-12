// Dropdown functionality for mobile view
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    
    dropdown.addEventListener("click", function () {
        let dropdownMenu = this.querySelector(".dropdown-menu");
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
});
