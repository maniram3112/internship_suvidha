function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

loadHTML('navbar.html', 'navbar-container');
loadHTML('footer.html', 'footer-container');


document.addEventListener("DOMContentLoaded", function() {
    console.log('Current Pathname:', location.pathname);

    var current = location.pathname.split("/").pop();
    console.log('Current Page:', current);

    setTimeout(function() {
        var links = document.querySelectorAll(".navbar-nav .nav-link");

        links.forEach(function(link) {
            console.log('Checking link:', link.getAttribute("href"));
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
                console.log('Active link:', link);
            }
        });
    }, 100);
});

