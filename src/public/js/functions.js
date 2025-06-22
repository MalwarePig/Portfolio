/* Cargar imagen de proyecto */
var proyectoActual = null
function Galeria(param) {
    const galeria = document.getElementById("galeria-img");
    galeria.src = './src/public/img/Proyectos/' + param + '-0.png';
    proyectoActual = param;
}

/* Botones para retroceder o adelantar imagen */
var contador = 1;
function cambiarImagen() {
    const galeria = document.getElementById("galeria-img");
    const imagenes = [
        proyectoActual + '-0.png',
        proyectoActual + '-1.png',
        proyectoActual + '-2.png',
    ];
    galeria.src = './src/public/img/Proyectos/' + imagenes[contador];
    contador++;
    if (contador === imagenes.length) {
        contador = 0;
    }
    console.log(contador, imagenes.length)
}


/* Carga los mensajes en marquecina */
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

/* detecta el section inicio para esconder el header */
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        var enlace = document.getElementById('EnlaceDinamico');
        enlace.href = '#id-Proyectos';
    } else {
        var enlace = document.getElementById('EnlaceDinamico');
        enlace.href = '#id-ProyectosMovil';
    }


    const header = document.querySelector('header');
    const inicio = document.getElementById('Inicio');
    const buttonHome = document.getElementById('home')

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                header.classList.add('oculto'); // Oculta el header cuando #Inicio está visible
                buttonHome.classList.add('oculto'); // Oculta el header cuando #Inicio está visible
            } else {
                header.classList.remove('oculto'); // Muestra el header cuando #Inicio NO está visible
                buttonHome.classList.remove('oculto'); // Oculta el header cuando #Inicio está visible
            }
        },
        { threshold: 0.5 } // Puedes ajustar el umbral según lo que necesites
    );
    if (inicio) observer.observe(inicio);
});


