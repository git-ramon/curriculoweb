
window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

/* Tema de Cores */
const temas = document.querySelectorAll("#menu-color li");
const cor = document.querySelector(".bg-primary");
const cortext = document.querySelector(".text-primary");
const corlink = document.querySelector(".linkmail");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const iconlinkedin = document.querySelector(".link-icon-linkedin");
const icongithub = document.querySelector(".link-icon-github");
const iconinsta = document.querySelector(".link-icon-insta");
const iconwhatsapp = document.querySelector(".link-icon-whatsapp");

/* Salvando cor do tema em localstorage */
const criastorage = () => {
  document.querySelectorAll("#menu-color li").forEach(function (button) {

    button.addEventListener("click", function (event) {
      const el = event.target;
      const id = el.id;

      window.localStorage.setItem('cor', id)

      location.reload();
    });
  });
};

criastorage();

/* Pegando cor do tema em localstorage */
const getstorage = () => {
  const getcor = window.localStorage.getItem('cor');

  if (getcor) {
    cor.classList.remove('bg-primary');
    cor.classList.add(getcor)

    cortext.classList.remove('text-primary');
    corlink.classList.remove('linkmail');
    text1.classList.remove('text-primary');
    text2.classList.remove('text-primary');
    text3.classList.remove('text-primary');
    text4.classList.remove('text-primary');
    text5.classList.remove('text-primary');
    text6.classList.remove('text-primary');

    cortext.setAttribute("style", `color: var(--${getcor})`);
    corlink.setAttribute("style", `color: var(--${getcor})`);
    text1.setAttribute("style", `color: var(--${getcor})`);
    text2.setAttribute("style", `color: var(--${getcor})`);
    text3.setAttribute("style", `color: var(--${getcor})`);
    text4.setAttribute("style", `color: var(--${getcor})`);
    text5.setAttribute("style", `color: var(--${getcor})`);
    text6.setAttribute("style", `color: var(--${getcor})`);

    iconlinkedin.setAttribute("style", `background-color: var(--${getcor}) !important`);
    iconlinkedin.setAttribute("onmouseover", `this.style.backgroundColor='#001219';`);
    iconlinkedin.setAttribute("onmouseout", `this.style.backgroundColor='var(--${getcor})';`);
    icongithub.setAttribute("style", `background-color: var(--${getcor}) !important`);
    icongithub.setAttribute("onmouseover", `this.style.backgroundColor='#001219';`);
    icongithub.setAttribute("onmouseout", `this.style.backgroundColor='var(--${getcor})';`);
    iconinsta.setAttribute("style", `background-color: var(--${getcor}) !important`);
    iconinsta.setAttribute("onmouseover", `this.style.backgroundColor='#001219';`);
    iconinsta.setAttribute("onmouseout", `this.style.backgroundColor='var(--${getcor})';`);
    iconwhatsapp.setAttribute("style", `background-color: var(--${getcor}) !important`);
    iconwhatsapp.setAttribute("onmouseover", `this.style.backgroundColor='#001219';`);
    iconwhatsapp.setAttribute("onmouseout", `this.style.backgroundColor='var(--${getcor})';`);
  }
};

getstorage();