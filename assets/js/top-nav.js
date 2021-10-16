"use strict";
const topNav = {
  menu: document.getElementById("top-menu"),
  toggle: function() {
    if(this.menu.style.display=="block") {
      this.menu.style.display="none";
    } else {
  	  this.menu.style.display="block";
    }
  }
}
