(function(){
    'use strict';

    angular
        .module('westonInteractive')
        .service('slidesService', ['$http', function ($http) {
            $http.get('/api/GetSlides')
                .success(function (data) { return data; })
                .error(function (err) { return err; });

            this.getSlides = function () {
                return slides;
            };
            this.getSlider = function (num) {
                //var x = num ? num : 1;
                //for (var i = 0; i < num; i++) {
                //    slider.slideSets[i].slides.push(slides);
                //}
                return slider;
            };
            this.getAllSkillz = function () {
                return allSkillz();
            }
        }]);

    var allSkillz = function () {
        return [
            {
                "id": 0,
                "isChecked": true,
                "className": "html-5",
                "title": "HTML5"
            },
            {
                "id": 1,
                "isChecked": true,
                "className": "css-3",
                "title": "CSS3"
            },
            {
                "id": 2,
                "isChecked": true,
                "className": "javascript",
                "title": "Javascript"
            },
            {
                "id": 3,
                "isChecked": true,
                "className": "jquery",
                "title": "jQuery"
            },
            {
                "id": 4,
                "isChecked": true,
                "className": "angular-js",
                "title": "AngularJS"
            },
            {
                "id": 5,
                "isChecked": true,
                "className": "node-js",
                "title": "Node.JS"
            },
            {
                "id": 6,
                "isChecked": true,
                "className": "git",
                "title": "Github &amp; Team Foundation Server"
            },
            {
                "id": 7,
                "isChecked": true,
                "className": "android",
                "title": "Android Development"
            },
            {
                "id": 8,
                "isChecked": true,
                "className": "c-sharp",
                "title": "ASP.Net 4.5, MVC, C#"
            },
            {
                "id": 9,
                "isChecked": true,
                "className": "photoshop",
                "title": "Photoshop"
            },
            {
                "id": 10,
                "isChecked": true,
                "className": "dreamweaver",
                "title": "Dreamweaver"
            },
            {
                "id": 11,
                "isChecked": true,
                "className": "adobe-illustrator",
                "title": "Adobe Illustrator"
            },
            {
                "id": 12,
                "isChecked": true,
                "className": "indesign",
                "title": "InDesign"
            },
            {
                "id": 13,
                "isChecked": true,
                "className": "flash",
                "title": "Flash"
            },
            {
                "id": 14,
                "isChecked": true,
                "className": "adobe-premiere",
                "title": "Adobe Premiere CC 2014"
            },
            {
                "id": 15,
                "isChecked": true,
                "className": "after-effects",
                "title": "Adobe AfterEffect CC"
            },
            {
                "id": 16,
                "isChecked": true,
                "className": "adobe-encore",
                "title": "Adobe Encore &amp; DVD Authoring"
            }
        ];
    }
    var buildSkillz = function (settings) {
        return [
            {
                "id": 0,
                "isChecked": settings.html5,
                "className": "html-5",
                "title": "HTML5"
            },
            {
                "id": 1,
                "isChecked": settings.css3,
                "className": "css-3",
                "title": "CSS3"
            },
            {
                "id": 2,
                "isChecked": settings.javascript,
                "className": "javascript",
                "title": "Javascript"
            },
            {
                "id": 3,
                "isChecked": settings.jquery,
                "className": "jquery",
                "title": "jQuery"
            },
            {
                "id": 4,
                "isChecked": settings.angular,
                "className": "angular-js",
                "title": "AngularJS"
            },
            {
                "id": 5,
                "isChecked": settings.node,
                "className": "node-js",
                "title": "Node.JS"
            },
            {
                "id": 6,
                "isChecked": settings.git,
                "className": "git",
                "title": "Github &amp; Team Foundation Server"
            },
            {
                "id": 7,
                "isChecked": settings.android,
                "className": "android",
                "title": "Android Development"
            },
            {
                "id": 8,
                "isChecked": settings.csharp,
                "className": "c-sharp",
                "title": "ASP.Net 4.5, MVC, C#"
            },
            {
                "id": 9,
                "isChecked": settings.photoshop,
                "className": "photoshop",
                "title": "Photoshop"
            },
            {
                "id": 10,
                "isChecked": settings.dreamweaver,
                "className": "dreamweaver",
                "title": "Dreamweaver"
            },
            {
                "id": 11,
                "isChecked": settings.illustrator,
                "className": "adobe-illustrator",
                "title": "Adobe Illustrator"
            },
            {
                "id": 12,
                "isChecked": settings.indesign,
                "className": "indesign",
                "title": "InDesign"
            },
            {
                "id": 13,
                "isChecked": settings.flash,
                "className": "flash",
                "title": "Flash"
            },
            {
                "id": 14,
                "isChecked": settings.premiere,
                "className": "adobe-premiere",
                "title": "Adobe Premiere CC 2014"
            },
            {
                "id": 15,
                "isChecked": settings.effects,
                "className": "after-effects",
                "title": "Adobe AfterEffect CC"
            },
            {
                "id": 16,
                "isChecked": settings.encore,
                "className": "adobe-encore",
                "title": "Adobe Encore &amp; DVD Authoring"
            }
        ];
    };

    var slides = [
        {
            "title": "Mitch Lee: Holy War",
            "caption": "Adobe Premiere CC | After Effects CC",
            "isFeatured": true,
            "id": 1,
            "skillz": buildSkillz({
                html5: false,
                css3: false,
                javascript: false,
                jquery: false,
                angular: false,
                node: false,
                git: false,
                android: false,
                csharp: false,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: false,
                flash: false,
                premiere: true,
                effects: true,
                encore: true
                })
        },
        {
            "title": "Worth Unlimited",
            "caption": "C# Fullstack Front-End Dev",
            "isFeatured": false,
            "id": 2,
            "skillz": buildSkillz({
                html5: true,
                css3: true,
                javascript: false,
                jquery: true,
                angular: true,
                node: false,
                git: false,
                android: false,
                csharp: true,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: true,
                flash: false,
                premiere: false,
                effects: false,
                encore: false
            })
        },
        {
            "title": "Dream With Me",
            "caption": "Illustration | Adobe Photoshop CC",
            "isFeatured": false,
            "id": 3,
            "skillz": buildSkillz({
                html5: false,
                css3: false,
                javascript: false,
                jquery: false,
                angular: false,
                node: false,
                git: false,
                android: false,
                csharp: false,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: false,
                flash: false,
                premiere: false,
                effects: false,
                encore: false
            })
        },
        {
            "title": "Honor the Dead",
            "caption": "Illustration | Adobe Photoshop CC",
            "isFeatured": true,
            "id": 4,
            "skillz": buildSkillz({
                html5: false,
                css3: false,
                javascript: false,
                jquery: false,
                angular: false,
                node: false,
                git: false,
                android: false,
                csharp: false,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: false,
                flash: false,
                premiere: false,
                effects: false,
                encore: false
            })
        },
        {
            "title": "Debt Free Seminar",
            "caption": "Dynamic Online Flyer | Microsoft VS 2015",
            "isFeatured": false,
            "id": 5,
            "skillz": buildSkillz({
                html5: true,
                css3: true,
                javascript: true,
                jquery: true,
                angular: false,
                node: false,
                git: false,
                android: false,
                csharp: true,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: false,
                flash: false,
                premiere: false,
                effects: false,
                encore: false
            })
        },
        {
            "title": "The REAL U T-Shirt",
            "caption": "Product Design | Marketing Dev",
            "isFeatured": true,
            "id": 6,
            "skillz": buildSkillz({
                html5: true,
                css3: true,
                javascript: true,
                jquery: true,
                angular: false,
                node: false,
                git: false,
                android: false,
                csharp: false,
                photoshop: true,
                dreamweaver: false,
                illustrator: false,
                indesign: false,
                flash: false,
                premiere: false,
                effects: false,
                encore: false
            })
        }
    ];

    var slider = {
        imgPath: "Content/app/images/",
        imgPrefix: "slide_00",
        imgSuffix: ".jpg",
        slideSet: slides
    };
})();