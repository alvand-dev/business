"use strict";

{

// Grab the HTML elements
const menu = document.querySelector("#top-menu");
const menuLinks = document.querySelectorAll('.top-menu-link');
const openMenuBtn = document.querySelector('#open-top-menu');
const closeMenuBtn = document.querySelector('#close-top-menu');

// Open the top menu
openMenuBtn.addEventListener('click', () => {
  menu.classList.add('show-top-menu');
});

// Open the top menu
closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show-top-menu');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('show-top-menu');
  });
});

}
