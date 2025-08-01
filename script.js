// Animación de las barras de progreso de habilidades
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar EmailJS
    emailjs.init('G4kBg2ykXOLnw5A2C'); // Reemplazar con tu clave pública de EmailJS
    // Animar barras de progreso
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });

    // Proyectos 
    const proyectos = [
        {
            titulo: 'Calculadora Java',
            descripcion: 'Calculadora elegante y totalmente funcional',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+1',
            tecnologias: ['Desarrollado con: Java.'],
            url: 'https://github.com/JoaquinOromana/Calculadora-Java'
        },
        {
            titulo: 'Juego de Piedra, Papel o Tijera',
            descripcion: 'Implementación del famoso clásico juego de Piedra, Papel o Tijera en JavaScript',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+2',
            tecnologias: ['Desarrollado con: HTML', ', ', 'CSS', ', ', 'JavaScript.'],
            url: 'https://github.com/JoaquinOromana/Juego-piedra-papel-o-tijera'
        },
        {
            titulo: 'Tienda Online',
            descripcion: 'Web ficticia de una tienda de gadgets y productos tecnológicos',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+3',
            tecnologias: ['Desarrollado con: HTML', ', ', 'CSS', ', ', 'JavaScript.'],
            url: 'https://github.com/JoaquinOromana/Web-Ficticia-de-compra-de-gadgets-online'
        }
    ];

    // Función para crear las tarjetas de proyectos
    const crearTarjetasProyectos = () => {
        const contenedorProyectos = document.querySelector('.projects-container');
        
        proyectos.forEach(proyecto => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'project-card';
            
            tarjeta.innerHTML = `
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                <div class="project-info">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <div class="tecnologias">
                        ${proyecto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${proyecto.url ? `<a href="${proyecto.url}" target="_blank" class="project-link">Ver proyecto</a>` : ''}
                    </div>
                </div>
            `;
            
            contenedorProyectos.appendChild(tarjeta);
        });
    };

    crearTarjetasProyectos();

    // Este es el manejo de formulario de contacto
    const formularioContacto = document.getElementById('contact-form');
    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener los datos del formulario
        const formData = new FormData(formularioContacto);
        const templateParams = {
            from_name: formData.get('from_name'),
            from_email: formData.get('from_email'),
            message: formData.get('message'),
            to_email: 'j.segura.illana@gmail.com'
        };
        
        // Enviar email usando EmailJS
        emailjs.send('service_lhjl2ot', 'template_9e9wtoo', templateParams)
            .then(function(response) {
                alert('¡Mensaje enviado exitosamente! Le contactaré pronto, un saludo.');
                formularioContacto.reset();
            }, function(error) {
                alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                console.error('Error:', error);
            });
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste para el header fijo
                behavior: 'smooth'
            });
        });
    });
});