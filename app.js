const navLinks = document.querySelectorAll(".sidenav a");
const sections = document.querySelectorAll(".section");

// Navigation handling
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetSection = link.dataset.section;

        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active"));

        // Remove active from all links
        navLinks.forEach(l => l.classList.remove("active"));

        // Show selected section
        document.getElementById(targetSection).classList.add("active");
        link.classList.add("active");
    });
});

// Function example
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("output").innerText = "Button clicked!";
});
