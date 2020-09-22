/*=======================================================
 This is for testing babel and webpack only, with Person.js
========================================================*/

/*
let $ = require("jquery");
// let Person = require("./modules/Person");
import Person from "./modules/Person";

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes. ");
    }
}

// alert("ABC is what we do her ");

let john = new Person("John Doe", "Black");
john.greet();

let jane = new Adult("Jane Smith", "Mariano blue");
jane.greet();
jane.payTaxes();

// $("h1").remove();
*/


import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";

let mobileMenu = new MobileMenu();
// let revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
let stickyHeader = new StickyHeader();
