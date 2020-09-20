import $ from "jquery";

// class MobileMenu {
//     constructor() {
//         this.menuIcon = $(".site-header__menu-icon");
//         this.events();
//     }

//     events() {
//         this.menuIcon.click(this.toggleTheMenu);
//     }

//     toggleTheMenu() {
//         console.log("jjj is not good"); 
//     }
// }

class MobileMenu {
    constructor() {
        // this.menuIcon = document.querySelector(".site-header__menu-icon");
        // this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.addEvent();
    }

    addEvent() {
        // this.menuIcon.addEventListener("click", this.toggleMenu()).bind(this);
        this.menuIcon.click(this.toggleMenu.bind(this));

    }
    toggleMenu() {
        // console.log("Don't try this at home")
        // console.log(2+2)
        // this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;