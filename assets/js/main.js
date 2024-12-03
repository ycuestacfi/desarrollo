document.addEventListener('DOMContentLoaded', () => {

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('#menu');
const body = document.body;



    window.addEventListener("load", function () {
        const loader = document.getElementById("loader-page-container");
        loader.classList.add("hidden");  // Aplicamos la clase para ocultar el loader
    });

    document.addEventListener("scroll", function() {
        var iframe = document.querySelector("#panel-noticias iframe");
        if (iframe && iframe.getBoundingClientRect().top < window.innerHeight) {
          iframe.src = iframe.dataset.src;
        }
      });


    // Abre y cierra el menú hamburguesa
    menuToggle.addEventListener('click', (event) => {
        // Prevenir que el clic en el botón hamburguesa cierre el menú
        event.stopPropagation();
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        
    });

    // Cierra el menú cuando se hace clic fuera de él
    body.addEventListener('click', (event) => {
        // Verificar si el clic está fuera del menú y el botón hamburguesa
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });


    
    function manejarMenu(etiqueta) {
        const boton = document.getElementById(etiqueta);
        const boton_submenu = document.getElementsByClassName('redirrecion-pages');


        if (!boton) return;

        const listaMenus = boton.closest('li.lista-menus');
        if (!listaMenus) return;

        // Obtén el <ul> que está dentro del <li> clicado
        const subMenuObjetivo = listaMenus.querySelector('.lista-sub-menus');

        // Si el submenú no existe, no hacer nada
        if (!subMenuObjetivo) return;

        // Oculta todos los submenús
        document.querySelectorAll('.lista-sub-menus').forEach(menu => {
            if (menu !== subMenuObjetivo) {
                menu.style.display = 'none';
            }
        });

        // Alterna la visibilidad del submenú clicado
        if (subMenuObjetivo.style.display !== 'block') {
            subMenuObjetivo.style.display = 'block';
        } else {
            subMenuObjetivo.style.display = 'none';
        }
    }

    // Añade event listeners a los botones
    document.querySelectorAll('.boton-menu').forEach(btn => {
        btn.addEventListener('click', (evento) => {
            manejarMenu(evento.target.id);
        });
    });
      // Maneja el clic en el documento para ocultar los submenús si se hace clic fuera
      document.addEventListener('click', (evento) => {
        // Verifica si el clic se realizó fuera del menú actual
        if (!evento.target.closest('.lista-menus')) {
            document.querySelectorAll('.lista-sub-menus').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });

    // Maneja el evento de tecla Esc para ocultar los submenús
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            document.querySelectorAll('.lista-sub-menus').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
    
});

