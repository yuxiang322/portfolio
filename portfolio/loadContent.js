document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".sidebar a");

    loadPage("introduction.html");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const page = link.getAttribute("data-page");
            console.log("Loading page:", page);
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading page:", error);
            });
    }
});
