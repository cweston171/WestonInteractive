(function(){
    'use strict';

    angular
        .module('westonInteractive')
        .service('slidesService', ['$http', function ($http) {
            this.getSlides = function () {
                return slides;
            };
            this.getSlider = function (num) {
                var x = num ? num : 3;
                for (var i = 0; i < num; i++) {
                    slider.slideSets.push(slides);
                }
                //slider.slideSets.push(slides2);
                return slider;
            }
        }]);

    var slider = {
        imgPath: "/Content/app/images/",
        imgPrefix: "slide_",
        imgSuffix: ".jpg",
        slideSets: []
    };
    var slides = [
        {
            "title": "Mitch Lee: Holy War",
            "caption": "Adobe Premiere CC | After Effects CC",
            "num": "001"
        },
        {
            "title": "Worth Unlimited",
            "caption": "C# Fullstack Front-End Dev",
            "num": "002"
        },
        {
            "title": "Dream With Me",
            "caption": "Illustration | Adobe Photoshop CC",
            "num": "003"
        },
        {
            "title": "Honor the Dead",
            "caption": "Illustration | Adobe Photoshop CC",
            "num": "004"
        },
        {
            "title": "Debt Free Seminar",
            "caption": "Dynamic Online Flyer | Microsoft VS 2015",
            "num": "005"
        },
        {
            "title": "The REAL U T-Shirt",
            "caption": "Product Design | Marketing Dev",
            "num": "006"
        }
    ];
    var slides2 = [
        {
            "title": "Another title here",
            "caption": "This is a slide caption test.",
            "num": "001"
        },
        {
            "title": "Random title!",
            "caption": "This is a slide test.",
            "num": "002"
        },
        {
            "title": "DUDE THIS!",
            "caption": "This is a slide capt test.",
            "num": "003"
        },
        {
            "title": "hOLY FUCKING SHIT",
            "caption": "This is a slide caption test.",
            "num": "004"
        },
        {
            "title": "THis is fucking amazeballs",
            "caption": "This is a slide test.",
            "num": "005"
        },
        {
            "title": "suck it",
            "caption": "This is a slide capt test.",
            "num": "006"
        }
    ];
})();