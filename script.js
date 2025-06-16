// Animación de las barras de progreso de habilidades
document.addEventListener('DOMContentLoaded', () => {
    // Animar barras de progreso
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });

    // Proyectos de ejemplo
    const proyectos = [
        {
            titulo: 'Proyecto 1',
            descripcion: 'Descripción del proyecto 1. Añade aquí los detalles de tu proyecto.',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+1',
            tecnologias: ['HTML', 'CSS', 'JavaScript']
        },
        {
            titulo: 'Proyecto 2',
            descripcion: 'Descripción del proyecto 2. Añade aquí los detalles de tu proyecto.',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+2',
            tecnologias: ['React', 'Node.js', 'MongoDB']
        },
        {
            titulo: 'Proyecto 3',
            descripcion: 'Descripción del proyecto 3. Añade aquí los detalles de tu proyecto.',
            imagen: 'https://dummyimage.com/800x600/3498db/ffffff&text=Proyecto+3',
            tecnologias: ['Vue.js', 'Express', 'PostgreSQL']
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
        
        // Aquí agregamos la lógica para enviar el formulario
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        formularioContacto.reset();
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