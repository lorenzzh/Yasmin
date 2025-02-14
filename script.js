document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showMessage");
    const message = document.getElementById("message");

    if (button && message) {
        button.addEventListener("click", function () {
            message.classList.add("show");
            message.innerHTML = " Eres una persona increíble y especial mi Yasmin. ¡Feliz día, te amo mucho!❤️";
        });
    } else {
        console.error("Error: No se encontró el botón o el mensaje en el HTML.");
    }
});
