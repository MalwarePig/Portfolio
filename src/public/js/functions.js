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
            caja.textContent += mensajes[fraseActual][letra];
            /* caja.className = 'letra-fade'; */

            letra++;
            /*  */
            if (letra === mensajes[fraseActual].length) {

            }
            if (letra >= mensajes[fraseActual].length) {
                clearInterval(escribirLetra);
                cursor.classList.add('Cursor');
                caja.classList.add('visible');
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