import Swal from "sweetalert2";

export const showSuccess = (userName) => {
    Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome back, ${userName}!`,
    });
};

export const showError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: `Error al iniciar sesión: ${message}`,
        footer: '<a href="/alta">¿No tienes cuenta? Regístrate aquí</a>'
    });
};

export const compraExitosa = () => {
    Swal.fire({
        icon: 'success',
        title: 'Compra Exitosa',
        text: 'Gracias por tu compra!',
    });
};
