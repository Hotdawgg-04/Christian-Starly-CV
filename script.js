document.addEventListener("DOMContentLoaded", function() {
    const qrImage = document.querySelector(".portfolio img");

    qrImage.addEventListener("mouseover", function() {
        qrImage.style.transform = "scale(1.1)";
        qrImage.style.boxShadow = "0 0 15px 5px rgba(44, 156, 106, 0.7)";
    });

    qrImage.addEventListener("mouseout", function() {
        qrImage.style.transform = "scale(1)";
        qrImage.style.boxShadow = "none";
    });
});
