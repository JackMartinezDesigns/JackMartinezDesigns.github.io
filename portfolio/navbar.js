// Function to load the navigation bar and highlight the current page
function loadNavbar() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Now that the navbar is loaded, highlight the current page
            var currentPath = window.location.pathname;
            console.log('Current Path:', currentPath);

            var navLinks = document.querySelectorAll('.topnav a');

            navLinks.forEach(function (link) {
                // Compare the link's href with the current path
                var linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
                console.log('Link Path:', linkPath);

                if (linkPath === currentPath) {
                    link.classList.add('active');
                    console.log('Active class added to:', linkPath);
                }
            });
        })
        .catch(error => console.error('Error loading the navigation bar:', error));
}

// Load the navigation bar when the page loads
document.addEventListener('DOMContentLoaded', loadNavbar);
