const camposFormulario = document.querySelectorAll(".campo");
const botaoEnviar = document.getElementById("btn-enviar");

botaoEnviar.addEventListener("click", validarCampos);
camposFormulario.forEach(input => input.addEventListener("input", validarCampo));

function validarCampo(event) {
    const input = event.target;
    const isValid = input.value.trim() !== "";

    atualizarEstiloInput(input, isValid);
};

function validarCampos() {
    camposFormulario.forEach(input => {
        const isValid = input.value.trim() !== "";
        atualizarEstiloInput(input, isValid);
    });
};

function atualizarEstiloInput(input, isValid) {
    input.classList.toggle("valido", isValid);
    input.classList.toggle("erro", !isValid);
    input.nextElementSibling.style.display = isValid ? "none" : "block";
};