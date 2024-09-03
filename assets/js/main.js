const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('#menu');
const body = document.body;

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

// funcion para mostrar los menus 
// document.addEventListener('DOMContentLoaded', () => {
//     // Selecciona todos los elementos <a> con la clase 'boton-menu'
//     const botonMenus = document.querySelectorAll('.boton-menu');
  
//     botonMenus.forEach(boton => {
//       boton.addEventListener('click', (event) => {
//         event.preventDefault(); // Evita el comportamiento por defecto del <a>
        
//         // Obtiene el <ul> que es el siguiente hermano del <a> clicado
//         const subMenu = boton.nextElementSibling;
  
//         // Verifica si el siguiente elemento es un <ul> con la clase 'lista-sub-menus'
//         if (subMenu && subMenu.classList.contains('lista-sub-menus')) {
//           // Oculta todos los submenús
//           document.querySelectorAll('.lista-sub-menus').forEach(menu => {
//             if (menu !== subMenu) {
//               menu.style.display = 'none';
//             }
//           });
  
//           // Alterna la visibilidad del submenú clicado
//           if (subMenu.style.display === 'block') {
//             subMenu.style.display = 'none';
//           } else {
//             subMenu.style.display = 'block';
//           }
//         }
//       });
//     });
  
//     // Opcional: Cerrar todos los submenús si el clic fue fuera del menú
//     document.addEventListener('click', (event) => {
//       if (!event.target.closest('.lista-menus')) {
//         document.querySelectorAll('.lista-sub-menus').forEach(menu => {
//           menu.style.display = 'none';
//         });
//       }
//     });
//   });
document.addEventListener('DOMContentLoaded', () => {

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
     // Función para cargar y renderizar un archivo HTML
     async function cargarContenido() {
        try {
            const respuesta = await fetch('footer.html');
            if (respuesta.ok) {
                const html = await respuesta.text();
                document.getElementById('contenido').innerHTML = html;
            } else {
                console.error('Error al cargar el archivo:', respuesta.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    // Llama a la función para cargar el contenido
    cargarContenido();
});

