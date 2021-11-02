"use strict";

const topNav = {
  menu: document.querySelector("#top-menu"),
  menuLinks: document.querySelectorAll('.top-menu-link'),
  toggleIcon: document.querySelector('#toggle-icon'),
  toggle: function() {
    if(this.menu.style.display=="block") {
      this.menu.style.display="none";
      this.toggleIcon.className = 'fas fa-bars';
    } else {
  	  this.menu.style.display="block";
      this.toggleIcon.className = 'fas fa-times';
    }
  }
};

topNav.menuLinks.forEach((item) => {
  item.addEventListener('click', () => { topNav.toggle(); });
});
