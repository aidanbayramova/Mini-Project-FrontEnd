"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.getElementById("menuBtn");
    let sidebar = document.getElementById("sidebar");
    let closeBtn = document.getElementById("closeBtn");
    
    let newMenuBtn = document.getElementById("searchIcon");
    let newSidebar = document.getElementById("newSidebar");
    let newCloseBtn = document.getElementById("newCloseBtn");

  
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
        newSidebar.classList.remove("show"); 
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    newMenuBtn.addEventListener("click", function () {
        newSidebar.classList.add("show");
        sidebar.classList.remove("show"); 
    });
    
    newCloseBtn.addEventListener("click", function () {
        newSidebar.classList.remove("show");
    });
});


setTimeout(() => {
    fill.style.transition = 'width 6s ease'; // Smooth transition for filling
    fill.style.width = `${(width / 100) * maxWidth}px`; // Fill according to the percentage value (600px is max width)
    percentage.textContent = `${width}%`; // Update percentage text
}, 6000); // Wait for 6 seconds before starting to fill the bar