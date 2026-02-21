import SideNav from './src/components/SideNav.js';
import Scope from './src/components/Scope.js';


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize SideNav component
    document.getElementById('sidebar-container').innerHTML = SideNav();
    document.getElementById('scope').innerHTML = Scope();
    
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
    const btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.getElementById("output").innerText = "Button clicked!";
        });
    }
});