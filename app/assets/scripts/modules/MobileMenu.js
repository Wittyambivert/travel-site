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
        //Vanilla JS
        this.siteHeader = document.querySelector(".site-header");
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");

        //JQuery
        // this.siteHeader = $(".site-header");
        // this.menuIcon = $(".site-header__menu-icon");
        // this.menuContent = $(".site-header__menu-content");


        this.addEvent();
    }

    addEvent() {
        //Vanilla JS
        this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));

        //JQuery
        // this.menuIcon.click(this.toggleMenu.bind(this));

    }

    toggleMenu() {
        // console.log("Don't try this at home")

        //Vanila JS
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
        
        //JQuery
        // this.menuContent.toggleClass("site-header__menu-content--is-visible");
        // this.siteHeader.toggleClass("site-header--is-expanded");
        // this.menuIcon.toggleClass("site-header__menu-icon--close-x");
        
    }
}

export default MobileMenu;