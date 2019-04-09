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
var reveal = function() {
    const revealElements = [...document.getElementsByClassName('reveal')];
    const revealEle = function(element) {
        var positionInfo = element.getBoundingClientRect();

        var menuWidth = positionInfo.width;
        var menuHeight = positionInfo.height;

        var mousePositionX = event.clientX - positionInfo.left;
        var mousePositionY = event.clientY - positionInfo.top;

        if (mousePositionX > -100 && mousePositionX < menuWidth + 100 && mousePositionY > -100 && mousePositionY < menuHeight + 100) {
            var percentageX = (mousePositionX / menuWidth) * 100;
            var percentageY = (mousePositionY / menuHeight) * 100;

            var intensity = 0.1;

            if (percentageX > 0 && percentageX < 100 && percentageY > 0 && percentageY < 100) {
                intensity = 0.85;
                element.style.borderColor = "transparent";
                element.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(255,255,255," + intensity + "), rgba(255,255,255,0.3) 200px) 1";
                return;
            }
            else if (mousePositionX > -20 && mousePositionX < menuWidth + 20 && mousePositionY > -20 && mousePositionY < menuHeight + 20) {
                intensity = 0.65;
            }
            else if (mousePositionX > -40 && mousePositionX < menuWidth + 40 && mousePositionY > -40 && mousePositionY < menuHeight + 40) {
                intensity = 0.5;
            }
            else if (mousePositionX > -60 && mousePositionX < menuWidth + 60 && mousePositionY > -60 && mousePositionY < menuHeight + 60) {
                intensity = 0.35;
            }
            else if (mousePositionX > -80 && mousePositionX < menuWidth + 80 && mousePositionY > -80 && mousePositionY < menuHeight + 80) {
                intensity = 0.2;
            }
            else if (mousePositionX > -100 && mousePositionX < menuWidth + 100 && mousePositionY > -100 && mousePositionY < menuHeight + 100) {
                intensity = 0.1;
            }
            element.style.borderColor = "transparent";
            element.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(255,255,255," + intensity + "), transparent 200px) 1";
        }
        else {
            element.style.borderColor = "transparent";
            element.style.borderImage = "none";
        }
    };

    document.addEventListener('mousemove', function (event) {
        revealElements.forEach((element) => {
            revealEle(element)
        });
    });
}

reveal();