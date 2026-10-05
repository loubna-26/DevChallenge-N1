
/* FILTRO DE PROYECTOS */

const botonesFiltro = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".tarjeta-proyecto");

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        const filtroSeleccionado = boton.dataset.filtro;
        proyectos.forEach((proyecto) => {
            const categoriaProyecto = proyecto.dataset.categoria;
            const coincide =
                filtroSeleccionado === "todos" ||
                categoriaProyecto === filtroSeleccionado;
            proyecto.style.display = coincide ? "block" : "none";
        });

        /* Cambiar botón activo */

        botonesFiltro.forEach((boton) => {
            boton.classList.remove("activo");
        });
        boton.classList.add("activo");
    });
});

/* CAMBIAR TEMA */

const btnTema = document.getElementById("btn-tema");
const iconoClaro = document.getElementById("icono-claro");
const iconoOscuro = document.getElementById("icono-oscuro");

if (btnTema) {
    btnTema.addEventListener("click", () => {

        /* Añadir o quitar modo oscuro */

        const modoOscuro =
            document.body.classList.toggle("modo-oscuro");

        /* Cambiar el icono activo */

        if (modoOscuro) {
            iconoClaro.classList.remove("activo");
            iconoOscuro.classList.add("activo");
            btnTema.setAttribute("aria-pressed", "true");
        } else {
            iconoOscuro.classList.remove("activo");
            iconoClaro.classList.add("activo");
            btnTema.setAttribute("aria-pressed", "false");
        }
    });
}

/* CAMBIAR IDIOMA */

const btnIdioma = document.getElementById("btn-idioma");
const textoIdioma = document.getElementById("texto-idioma");
const banderaIdioma = document.getElementById("bandera-idioma");
const textos = document.querySelectorAll("[data-es]");
let idiomaIngles = false;

/* Función para aplicar el idioma */

function aplicarIdioma() {
    textos.forEach((texto) => {
        if (idiomaIngles) {
            texto.textContent = texto.dataset.en;
        } else {
            texto.textContent = texto.dataset.es;
        }
    });

    /* Cambiar texto del selector */

    if (textoIdioma) {
        textoIdioma.textContent =
            idiomaIngles ? "English" : "Español";
    }

    /* Cambiar bandera */

    if (banderaIdioma) {
        banderaIdioma.textContent =
            idiomaIngles ? "🇬🇧" : "🇪🇸";
    }

    /* Cambiar idioma del documento */
    document.documentElement.lang =
        idiomaIngles ? "en" : "es";
}

/* Detectar clic en idioma */

if (btnIdioma) {
    btnIdioma.addEventListener("click", () => {
        idiomaIngles = !idiomaIngles;
        aplicarIdioma();
    });
}

/* BOTÓN VOLVER ARRIBA */

const btnArriba = document.getElementById("btn-arriba");

if (btnArriba) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}