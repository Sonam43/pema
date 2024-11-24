document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".accordion-header");
    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                this.querySelector(".icon").classList.remove("fa-chevron-up");
                this.querySelector(".icon").classList.add("fa-chevron-down");
            } else {
                content.style.display = "block";
                this.querySelector(".icon").classList.remove("fa-chevron-down");
                this.querySelector(".icon").classList.add("fa-chevron-up");
            }
        });
    });
});