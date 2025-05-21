/* Autor: Ademilson Nunes */ 
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Alternância do menu mobile
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função para destacar o item ativo
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Submenu para mobile
const submenuParents = document.querySelectorAll('.submenu-parent');

submenuParents.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const submenu = item.querySelector('.submenu');
            submenu.classList.toggle('active');

            // Fecha outros submenus
            submenuParents.forEach(other => {
                if (other !== item) {
                    const otherSubmenu = other.querySelector('.submenu');
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                    }
                }
            });

            e.stopPropagation();
        }
    });
});
