//Current Year
document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    var year = document.getElementById("currentYear");
    if (year) {
        year.textContent = currentYear;
    }

    var lastModified = new Date(document.lastModified);

    var formattedLastModified = lastModified.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short"
    });

    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + formattedLastModified;
    }
});