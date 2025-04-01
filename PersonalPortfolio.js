document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttongithub');
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const projectText = this.nextElementSibling;
            if (projectText.style.display === "none" || projectText.style.display === "") {
                projectText.style.display = "block";  // Visa texten
            } else {
                projectText.style.display = "none";  // Dölj texten
            }
        });
    });
});