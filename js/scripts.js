
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

const criastorage = () => {
    document.querySelectorAll("#menu-color li").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target;
    const id = el.id;

    window.localStorage.setItem('cor', id)

  });  
});

};

criastorage();

const getstorage = () => {
  const getcor = window.localStorage.getItem('cor');

  if (getcor) {
    cor.classList.remove('bg-primary');
    cor.classList.add(getcor)
  }
  
    temas.forEach((btn) => {

      btn.addEventListener("click", (e) => { 


    const button = e.target;

    const id = button.getAttribute("id");

        cor.setAttribute("style", `background-color: ${id} !important`);
        cortext.setAttribute("style", `color: ${id} !important`);
        corlink.setAttribute("style", `color: ${id} !important`);
        text1.setAttribute("style", `color: ${id} !important`);
        text2.setAttribute("style", `color: ${id} !important`);
        text3.setAttribute("style", `color: ${id} !important`);
        text4.setAttribute("style", `color: ${id} !important`);
        text5.setAttribute("style", `color: ${id} !important`);
        text6.setAttribute("style", `color: ${id} !important`);
        iconlinkedin.setAttribute("onmouseover", `this.style.backgroundColor='${id}';`);
        iconlinkedin.setAttribute("onmouseout", `this.style.backgroundColor='#001219';`);
        icongithub.setAttribute("onmouseover", `this.style.backgroundColor='${id}';`);
        icongithub.setAttribute("onmouseout", `this.style.backgroundColor='#001219';`);
        iconinsta.setAttribute("onmouseover", `this.style.backgroundColor='${id}';`);
        iconinsta.setAttribute("onmouseout", `this.style.backgroundColor='#001219';`);
        iconwhatsapp.setAttribute("onmouseover", `this.style.backgroundColor='${id}';`);
        iconwhatsapp.setAttribute("onmouseout", `this.style.backgroundColor='#001219';`);

        location.reload();
      });
    });    
};

getstorage();




















/* Metodo 02 */
/*
let pink = document.getElementById('sideNav');
const cortext = document.querySelector('.text-primary');
const corlinkmail = document.querySelector('.linkmail');
const cortext1 = document.querySelector('.text1');
const cortext2 = document.querySelector('.text2');
const cortext3 = document.querySelector('.text3');
const cortext4 = document.querySelector('.text4');
const cortext5 = document.querySelector('.text5');
const cortext6 = document.querySelector('.text6');
const temas = document.querySelectorAll("#menu-color li");
let select = document.querySelector('.rosa');

const criastorage = () => {
  window.localStorage.setItem('cor', 'rosa')

  location.reload();
};

const getstorage = () => {
  const cor = window.localStorage.getItem('cor');

  if (cor) {
    pink.classList.remove('bg-primary');
    pink.classList.add('rosa');

    cortext.classList.remove('text-primary');
    cortext.classList.add('colortextrosa')
    
    corlinkmail.classList.remove('text-primary');
    corlinkmail.classList.add('colortextrosa')

    cortext1.classList.remove('text1', 'text-primary');
    cortext1.classList.add('colortextrosa')
    cortext2.classList.remove('text2', 'text-primary');
    cortext2.classList.add('colortextrosa')
    cortext3.classList.remove('text3', 'text-primary');
    cortext3.classList.add('colortextrosa')
    cortext4.classList.remove('text4', 'text-primary');
    cortext4.classList.add('colortextrosa')
    cortext5.classList.remove('text5', 'text-primary');
    cortext5.classList.add('colortextrosa')
    cortext6.classList.remove('text6', 'text-primary');
    cortext6.classList.add('colortextrosa')

    temas.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );
    
    select.classList.add('selected');
  }
};

document.getElementById('pink').onclick = criastorage;

getstorage();

*/