# 💼 Portfólio Profissional — Ademilson Nunes

> 👨‍💻 **Especialista em Desenvolvimento, Análise de Dados e Automação de Processos**

Bem-vindo ao meu portfólio profissional! Este projeto foi desenvolvido com foco em demonstrar minhas habilidades nas áreas de desenvolvimento de sistemas, análise de dados, automação de processos e consultoria em TI e ERP.

---

## 🛠️ Tecnologias Utilizadas

- 🔹 **HTML5**
- 🔸 **CSS3**
- 🔹 **JavaScript (Vanilla)**
- 🔸 Design Responsivo
- 🔹 Estrutura leve e sem dependências de frameworks externos

---

## 🎯 Objetivos do Projeto

- ✅ Criar um **site portfólio** profissional, responsivo e funcional.
- ✅ Implementar um **menu de navegação adaptável**, com submenu funcional.
- ✅ Demonstrar **projetos desenvolvidos**, serviços prestados e minhas especialidades.
- ✅ Aumentar minha presença profissional e facilitar contatos.

---

## 📂 Estrutura de Diretórios

/portfolio-ademilson
├── css/
│ └── style.css
├── img/
│ ├── banner.jpg
│ ├── perfil.png
│ ├── projeto1.png
│ ├── projeto2.png
│ ├── projeto3.png
├── js/
│ └── script.js
├── index.html
└── README.md

---

## 🚀 Funcionalidades Implementadas

### ✔️ Menu Responsivo

- ☑️ **Menu hamburguer** funcional em dispositivos móveis.
- ☑️ **Submenus:** 
  - Abertura no **hover** (desktop).
  - Abertura no **clique** (mobile) com fechamento automático dos outros submenus.
- ☑️ **Destaque visual** para o item selecionado no menu.

### ✔️ Seções

- 🏠 **Início:** Banner com apresentação profissional.
- 👤 **Sobre:** Descrição do perfil profissional.
- 🔧 **Serviços:** Áreas de atuação e consultoria.
- 🗂️ **Portfólio:** Galeria de projetos desenvolvidos.
- ✉️ **Contato:** Dados para contato profissional.

---

## 🧠 Código-Fonte Estruturado

### 🔹 HTML

```html
<header>
  <div class="logo">Ademilson Nunes</div>
  <nav>
    <div class="menu-toggle" id="menu-toggle">&#9776;</div>
    <ul class="menu" id="menu">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
</header>
/* Banner com overlay */
.banner {
  background: url('img/banner.jpg') center/cover no-repeat;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
}

.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.banner h1, .banner p {
  position: relative;
  z-index: 2;
}
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// Submenu mobile
const submenuParents = document.querySelectorAll('.submenu-parent');
submenuParents.forEach(item => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const submenu = item.querySelector('.submenu');
      submenu.classList.toggle('active');

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

🏗️ Melhorias Futuras
🔹 Adicionar formulário de contato funcional com backend.

🔸 Implementar uma versão com React, Next.js ou Vue.

🔹 SEO otimizado.

🔸 Integração com APIs (LinkedIn, GitHub, WhatsApp).
