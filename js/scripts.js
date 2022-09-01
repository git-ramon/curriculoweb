/*!
* Start Bootstrap - Resume v7.0.0 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

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


temas.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    temas.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const id = button.getAttribute("id");

    /*button.querySelector(".color").classList.add("selected");*/

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
    
  });
});

function setcolorStorage() {
    localStorage.setItem('cor', 1);
  }

  var span = document.getElementById("span");

  span.addEventListener("click", setcolorStorage);

/*********************** */




