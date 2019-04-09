"use strict";
var parallax = function(){
    const parallaxElements = [...document.getElementsByClassName('parallax')];
    const parallax = function(img) {
        var positionInfo = img.getBoundingClientRect();

        if (positionInfo.top <= window.innerHeight && positionInfo.bottom > 0 )  {
            const speed = img.getAttribute("data-parallax-speed") ? img.getAttribute("data-parallax-speed") : 2;
            let pos = ((((positionInfo.top/window.innerHeight) * positionInfo.height) * -1) / speed) + "px";
            img.style.backgroundPosition = `center ${ pos }`;
        }
    }
    window.addEventListener('scroll', function(e) {
        parallaxElements.forEach( (img) => {
            parallax(img);
        });
    });

    parallaxElements.forEach( (img) => {
        parallax(img);
    });
};

parallax();