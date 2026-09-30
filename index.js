
        // boton de filtrar de proyectos
            const botonfiltrar = document.querySelectorAll('.filtro');
            const proyectos = document.querySelectorAll('.tarjeta-proyecto');
            botonfiltrar.forEach((boton) => {
                boton.addEventListener('click', () => {
            const filtroSeleccionado = boton.dataset.filtro;
                    proyectos.forEach((proyecto) => {
                const categoriaProyecto = proyecto.dataset.categoria;
                if(filtroSeleccionado === 'todos'){
                    proyecto.style.display = 'block';
                }else if(categoriaProyecto === filtroSeleccionado){
                    proyecto.style.display = 'block';
                }else{
                    proyecto.style.display = 'none';
                }

                    });
                });
            });


        // buton para cambiar el tema
        const tema = document.getElementById('btn-tema');
        console.log(tema);
        tema.addEventListener('click', () => {
            document.body.classList.toggle("modo-oscuro");
        });


        // boton para cambiar el idioma
        const btnIdioma = document.getElementById('btn-idioma');

        const textos = document.querySelectorAll('[data-es]');
        let idiomaIngles = false;
        btnIdioma.addEventListener('click', () => {

            if (idiomaIngles === false) {

                textos.forEach((texto) => {
                    texto.textContent = texto.dataset.en;
                });

                idiomaIngles = true;
                btnIdioma.textContent = "Español";

            } else {

                textos.forEach((texto) => {
                    texto.textContent = texto.dataset.es;
                });

                idiomaIngles = false;
                btnIdioma.textContent = "English";
            }
        });


        // boton para volver arriba
        const btnArriba = document.getElementById('btn-arriba');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                console.log("He bajado");
                btnArriba.style.display = 'block';
            } else {
                btnArriba.style.display = 'none';
            }
        });

        btnArriba.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });