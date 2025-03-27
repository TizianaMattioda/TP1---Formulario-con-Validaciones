document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const showError = (input, message) => {
        const errorSpan = document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`);
        errorSpan.textContent = message;
        errorSpan.classList.add("text-danger");
        errorSpan.classList.remove("text-success");
    };

    const showSuccess = (input) => {
        const errorSpan = document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`);
        errorSpan.textContent = "✓";
        errorSpan.classList.add("text-success");
        errorSpan.classList.remove("text-danger");
    };
    const resetSpan = (input) => {
        const errorSpan = document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`);
        errorSpan.textContent = "";
        errorSpan.classList.remove("text-success");
        errorSpan.classList.remove("text-danger");
    }

    const validarNombre = () => {
        if (nombre.value.trim().length < 3) {
            showError(nombre, "El nombre debe tener al menos 3 caracteres");
            return false;
        }
        showSuccess(nombre);
        return true;
    };

    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Ingrese un email válido");
            return false;
        }
        showSuccess(email);
        return true;
    };

    const validarPassword = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password.value.trim())) {
            showError(password, "Mínimo 8 caracteres, una letra y un número");
            return false;
        }
        showSuccess(password);
        return true;
    };

    const validarConfirmPassword = () => {
        if (confirmPassword.value.trim() !== password.value.trim()) {
            showError(confirmPassword, "Las contraseñas no coinciden");
            return false;
        }
        showSuccess(confirmPassword);
        return true;
    };

    nombre.addEventListener("input", validarNombre);
    email.addEventListener("input", validarEmail);
    password.addEventListener("input", validarPassword);
    confirmPassword.addEventListener("input", validarConfirmPassword);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validarNombre() && validarEmail() && validarPassword() && validarConfirmPassword()) {
            alert("Registro exitoso");
            form.reset();
            resetSpan(nombre);
            resetSpan(email);
            resetSpan(password);
            resetSpan(confirmPassword);
        }
    });
});
