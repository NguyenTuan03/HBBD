document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.querySelector(".envelope");
    if (envelope && !envelope.classList.contains("open")) {
        envelope.addEventListener("click", function () {
            this.classList.remove("new");
            this.classList.add("open");
        });
    }
});
