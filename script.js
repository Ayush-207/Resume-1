var navbarAnchor = document.querySelectorAll('.nav-menu a');
var interval
for (var i = 0; i < navbarAnchor.length; i++) {
    navbarAnchor[i].addEventListener('click', function (event) {
        event.preventDefault();
        // console.log(this.getAttribute('href'));
        var targetSectionID = this.getAttribute('href');
        var targetSection = document.querySelector(targetSectionID);
        interval = setInterval(scrollVertically, 15, targetSection);
    })
}

function scrollVertically(targetSection) {
    var coordinates = targetSection.getBoundingClientRect();
    if (coordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// SKILLBAR ANIMATION

var skillBar = document.querySelectorAll('.skills-progress>div');
var skillsSection = document.getElementById('skills-display');
function initialWidth() {
    for (let i of skillBar) {
        i.style.width = 0 + '%';
    }
}
initialWidth();
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function regainWidth() {

    for (let bar of skillBar) {
        var data = bar.getAttribute('data-skill');
        var currWidth = 0;
        var skillInterval = setInterval(function () {
            if (currWidth > data) {
                clearInterval(skillInterval);w
                return;
            }
            currWidth++;
            bar.style.width = currWidth + '%';
        }, 40);
    }
}

var skillsCord;
function checkScroll() {
    skillsCord = skillsSection.getBoundingClientRect();
    if (skillsCord.top < window.innerHeight && !animationDone) {
        animationDone = true;
        console.log('skill section visible');
        regainWidth();
        return;
    }
}


