"use strict"

document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.getElementById("menuBtn");
    let sidebar = document.getElementById("sidebar");
    let closeBtn = document.getElementById("closeBtn");

    // Sidebar açma
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
    });

    // Sidebar bağlama
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    // Ekranın başqa yerinə klik edəndə sidebar-ı bağla
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("show");
        }
    });
});