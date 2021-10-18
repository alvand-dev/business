"use strict";

const topNav = {
  menu: document.getElementById("top-menu"),
  menuLinks: document.querySelectorAll('.top-menu-link'),
  toggle: function() {
    if(this.menu.style.display=="block") {
      this.menu.style.display="none";
    } else {
  	  this.menu.style.display="block";
    }
  }
}

topNav.menuLinks.forEach((item) => {
  item.addEventListener('click', () => { topNav.menu.style.display="none"; });
});
