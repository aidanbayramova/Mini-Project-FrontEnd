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

document.querySelectorAll(".product_variation_one_boxed").forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.zIndex = "10"; // Şəkili qabağa gətirir
      this.style.transform = "scale(1.1)"; // Şəkili böyüdür
      this.style.transition = "transform 0.3s ease, z-index 0s";
    });
  
    box.addEventListener("mouseleave", function () {
      this.style.zIndex = "1"; // Normal vəziyyətə qaytarır
      this.style.transform = "scale(1)";
    });
  });

