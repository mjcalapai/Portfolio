const hobbyTitles = document.querySelectorAll(".hobby-title");

hobbyTitles.forEach(function(hobbyTitle) {
    hobbyTitle.addEventListener("click", function(event) {
        event.preventDefault();
        const hobby = hobbyTitle.getAttribute("data-hobby");
        const description = document.getElementById(hobby);

        // Toggle visibility of the hobby content with fade-up
        if (description.style.display === "none" || !description.style.display) {
            description.style.display = "flex";  // Use 'flex' for image and text to display correctly
            AOS.refresh();  // Refresh AOS to animate newly displayed content
        } else {
            description.style.display = "none";
        }
    });
});