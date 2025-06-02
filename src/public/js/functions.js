function Galeria(param) {
    const galeria = document.getElementById("galeria-img");
    galeria.src = './src/public/img/Proyectos/' + param;
}

function Mensajes() {
    const caja = document.getElementById('CajaMensajes');
    const cursor = document.getElementById('Cursor');
    const mensajes = [
        '¡Hola mundo!',
        'Gamer!',
        'Desarrollador!',
        'RGB!',
        'Backend!',
    ];

    let frase = 0;
    function escribirFrase(fraseActual) {
        caja.textContent = '';
        let letra = 0;

        const escribirLetra = setInterval(() => {
            cursor.classList.remove('Cursor');//quitar el pulso del cursor
            const span = document.createElement('span');
            span.className = 'letra-fade';

            span.textContent = mensajes[fraseActual][letra] === ' ' ? ' ' : mensajes[fraseActual][letra];
            caja.appendChild(span);

            setTimeout(() => {
                span.classList.add('visible');
            }, 10);

            letra++;
            /*  */
            if (letra === mensajes[fraseActual].length) {

            }
            if (letra >= mensajes[fraseActual].length) {
                clearInterval(escribirLetra);
                cursor.classList.add('Cursor');

                // Espera 1 segundo antes de mostrar la siguiente frase
                setTimeout(() => {
                    frase++;
                    if (frase < mensajes.length) {
                        escribirFrase(frase);
                        console.log(`Frase actual: ${frase}`);
                    } else if (frase >= mensajes.length) {
                        frase = 0;
                        escribirFrase(frase);
                    }
                }, 4000);
            }
        }, 200);
    }

    escribirFrase(frase);
}


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const inicio = document.getElementById('Inicio');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                header.classList.add('oculto'); // Oculta el header cuando #Inicio está visible
            } else {
                header.classList.remove('oculto'); // Muestra el header cuando #Inicio NO está visible
            }
        },
        { threshold: 0.5 } // Puedes ajustar el umbral según lo que necesites
    );

    if (inicio) observer.observe(inicio);
});

