document.addEventListener("DOMContentLoaded", function () {
    // Show loading screen for 2.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hide-loading");
        document.body.classList.add("dark-mode"); // Default dark mode
    }, 2500);
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = "☀️";
const moonIcon = "🌙";

// Set default dark mode
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = sunIcon;
} else {
    themeToggle.textContent = moonIcon;
}

// Toggle between themes
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
    themeToggle.textContent = isDark ? sunIcon : moonIcon;
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show-menu");
    });

    // Close menu if clicked outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show-menu");
        }
    });
});
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 1000); // 1s fade-out effect
    }, 2500); // Show for 2.5s
};
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 1000); // 1s fade-out effect
    }, 2500); // Show for 2.5s
};



