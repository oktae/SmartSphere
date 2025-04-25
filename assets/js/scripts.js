document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        // Verifica si la imagen tiene un atributo src vacío o roto
        img.onerror = () => {
            console.error(`Error al cargar la imagen: ${img.src}`);
            // Cambia la ruta al GIF correcto
            if (img.alt === "Soluciones IoT en acción") {
                img.src = "assets/images/soluciones-iot.gif"; // Ajusta la ruta según tu estructura
            } else if (img.alt === "Hogar Inteligente en acción") {
                img.src = "assets/images/hogar-inteligente.gif"; // Ajusta la ruta según tu estructura
            }
        };

        img.addEventListener("mouseover", () => {
            img.classList.add("zoom");
        });

        img.addEventListener("mouseout", () => {
            img.classList.remove("zoom");
        });
    });

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink'); // Aplica la clase 'shrink' al desplazarse
        } else {
            header.classList.remove('shrink'); // Elimina la clase 'shrink' si vuelve al tope
        }
    });
});

<script src="scripts.js"></script>