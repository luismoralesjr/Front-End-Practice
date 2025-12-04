// Ejercicio 1 Creación carpeta JS y archivo main.js
//Ejercicio 2 Botón "Ir arriba" con JS
const btn = document.getElementById("btnTop");


btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });

    
});


window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});