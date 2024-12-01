let shiCount = 0;

const buttonShi = document.getElementById('shi');
const buttonNo = document.getElementById('no');

// Respuestas para el botón "Shi"
const responses = [
    'Awww, te re quiero, ¿sabías? 🥰',
    'Lo presionaste por segunda vez... ¡Eso es más que una confirmación, vrd! 🙀',
    '¡Espera! ¿Lo presionaste por tercera vez? ¡Te re amo! 😭😭'
];

// Función para redirigir a YouTube
const redirigir = () => {
    location.href = 'https://www.youtube.com/watch?v=E0UN-pVTLf4'; // Cancion Til Kingdom Come
};

// Función para mover el botón "Ño"
const moverNo = () => {
    const randomTop = Math.random() * window.innerHeight;
    const randomLeft = Math.random() * window.innerWidth;
    buttonNo.style.position = 'absolute';
    buttonNo.style.top = randomTop + 'px';
    buttonNo.style.left = randomLeft + 'px';
};

// Lógica para el botón "Shi"
buttonShi.addEventListener('click', () => {
    shiCount++;

    if (shiCount <= 3) {
        alert(responses[shiCount - 1]);
    } else if (shiCount === 4) {
        redirigir(); // Redirigir a YouTube al 4° clic
    }
});

// Lógica para el botón "Ño" (se mueve al pasar el mouse)
buttonNo.addEventListener('mouseover', moverNo);
