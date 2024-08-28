document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-btn");

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
