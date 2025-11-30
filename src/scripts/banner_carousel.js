// src/scripts/banner-carousel.js

export function setupCarousel() {
    const container = document.getElementById('banner_container');
    
    if (!container) return; 

    const images = container.querySelectorAll('img');
    const totalImages = images.length;
    
    // 🔥 ESTE ES EL CHEQUEO IMPORTANTE:
    if (totalImages < 2) {
        // Si hay 0 o 1 imagen, no hace falta el carrusel.
        // Aseguramos que la única imagen visible (si existe) se queda activa.
        if (totalImages === 1) {
            images[0].classList.add('active');
        }
        return; 
    }

    // ----------------------------------------------------
    // Código de carrusel (Solo se ejecuta si hay 2 o más imágenes)
    // ----------------------------------------------------
    let currentIndex = 0;
    const intervalTime = 5000; 

    function rotateBanner() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages; 
        images[currentIndex].classList.add('active');
    }

    // Iniciamos el temporizador solo si es necesario
    setInterval(rotateBanner, intervalTime);
}