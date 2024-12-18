// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', evento => {
        evento.preventDefault();
        const idDestino = enlace.getAttribute('href').substring(1);
        const seccionDestino = document.getElementById(idDestino);

        if (seccionDestino) {
            window.scrollTo({
                top: seccionDestino.offsetTop - 50, // Ajuste por navegación fija
                behavior: 'smooth',
            });
        }
    });
});

// Validación del formulario en la sección de reservas
const formulario = document.querySelector('#reservations form');
if (formulario) {
    formulario.addEventListener('submit', evento => {
        evento.preventDefault();

        const nombre = formulario.name.value.trim();
        const correo = formulario.email.value.trim();
        const fecha = formulario.date.value;
        const hora = formulario.time.value;

        if (!nombre || !correo || !fecha || !hora) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert(`Gracias, ${nombre}. Tu reserva para el ${fecha} a las ${hora} ha sido confirmada.`);
        formulario.reset(); // Limpia el formulario
    });
}

// Resalta el enlace activo de navegación al hacer scroll
const secciones = document.querySelectorAll('section');
const enlacesNavegacion = document.querySelectorAll('nav a');

if (secciones.length > 0 && enlacesNavegacion.length > 0) {
    window.addEventListener('scroll', () => {
        let seccionActual = '';

        secciones.forEach(seccion => {
            const topSeccion = seccion.offsetTop - 60;
            if (window.scrollY >= topSeccion) {
                seccionActual = seccion.getAttribute('id');
            }
        });

        enlacesNavegacion.forEach(enlace => {
            enlace.classList.remove('activo');
            if (enlace.getAttribute('href').substring(1) === seccionActual) {
                enlace.classList.add('activo');
            }
        });
    });
}
