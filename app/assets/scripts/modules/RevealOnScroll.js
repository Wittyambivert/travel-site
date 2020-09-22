import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class RevealOnScroll {
    constructor(els, offset) {
        //JQuery
        this.itemsToReveal = els;

        //VanillaJS
        // this.itemsToReveal = document.querySelectorAll(".feature-item, .testimonial");
        // this.itemsToReveal = document.querySelectorAll(element);


        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        //JQuery
        this.itemsToReveal.addClass("reveal-item");

        //VanillaJS
        // this.itemsToReveal.forEach(function(dum) {
        //     dum.classList.add("reveal-item");
        // });
    }

    
    createWaypoints() {
        let that = this; 
        this.itemsToReveal.each(function() {
            let currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                // offset: "85%"
                offset: that.offsetPercentage
            });
        });
        // let that = this;
        // this.itemsToReveal.forEach(function(dart) {
        //     new Waypoint({
        //         element: dart,
        //         handler: function() {
        //            dart.classList.add("reveal-item--is-visible");
        //         },
        //         // offset: "85%"
        //         offset: that.offsetPercentage
        //     }); 
        // });
    }
}


export default RevealOnScroll;