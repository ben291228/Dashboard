// Importar Firebase Authentication
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyANd1n-bFrv_LQJL8IJUXjRHqn2htrLlBI",
    authDomain: "usuarios-722d3.firebaseapp.com",
    projectId: "usuarios-722d3",
    storageBucket: "usuarios-722d3.appspot.com",
    messagingSenderId: "244499361712",
    appId: "1:244499361712:web:e4fcfcb96c506e85083075",
    measurementId: "G-6QPTC2691B"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para registrar usuario
function registrar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registro exitoso");
            window.location.href = "dashboard.html"; // Redirigir tras registro exitoso
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

// Asegurar que el formulario usa la función al registrarse
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            registrar();
        });
    }
});
