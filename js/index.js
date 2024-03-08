const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const spans = document.querySelectorAll("span");

inputs.forEach(input => {
    input.addEventListener("input", mudarBorda);
});

textarea.addEventListener("input", mudarBorda);

function mudarBorda(event) {
    const input = event.target;
    const associatedSpan = input.nextElementSibling;

    if (input.value !== "") {
        input.classList.add("bordaVerde");
        input.classList.remove("bordaVermelha");
        associatedSpan.style.display = "none";
    } else {
        input.classList.remove("bordaVerde");
        input.classList.add("bordaVermelha");
        associatedSpan.style.display = "block";
    };
};