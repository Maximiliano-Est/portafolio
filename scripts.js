// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', evento => {
        evento.preventDefault();
        const idDestino = evento.target.getAttribute('href').substring(1);
        const seccionDestino = document.getElementById(idDestino);

        if (seccionDestino) {
            window.scrollTo({
                top: seccionDestino.offsetTop - 50, // Ajuste para la altura de la navegación fija
                behavior: 'smooth'
            });
        }
    });
});

// Validación del formulario en la sección de reservas
document.querySelector('#reservations form').addEventListener('submit', evento => {
    evento.preventDefault(); // Evita que el formulario se envíe

    const nombre = evento.target.name.value.trim();
    const correo = evento.target.email.value.trim();
    const fecha = evento.target.date.value;
    const hora = evento.target.time.value;

    if (!nombre || !correo || !fecha || !hora) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Simula el envío exitoso del formulario
    alert(`Gracias, ${nombre}. Tu reserva para el ${fecha} a las ${hora} ha sido confirmada.`);
    evento.target.reset(); // Limpia el formulario
});

// Resalta el enlace activo de navegación al hacer scroll
const secciones = document.querySelectorAll('section');
const enlacesNavegacion = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let seccionActual = '';

    secciones.forEach(seccion => {
        const topSeccion = seccion.offsetTop - 60; // Ajuste para la altura de la navegación fija
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
