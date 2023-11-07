//particle.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#1e2558', '#4a3a58', '#292742', '#1b1c2b', '#3a2d4a'] // Cosmic-themed colors
        },
        shape: {
            type: 'triangle',
            stroke: {
                width: 0,
                color: '#453244'
            }
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#800080',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const textArray = [
            'I just wanna be in a place where you cant find me',
            'Realm beyond the scope of your existence',
            'A world that beats all antecedents',
            'I just wanna be in my imagination',
            'There, where new things come alive',
            'WELCOME TO MY SPACE\nYou found me!'
        ];

        const textElement = document.getElementById('typed-text');
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progress-bar');

        let currentTextIndex = 0;
        let currentCharacterIndex = 0;
        let cursorVisible = true;
        const typingSpeed = 16; // Characters per second

        function typeText(timestamp) {
            if (currentTextIndex < textArray.length) {
                if (currentCharacterIndex < textArray[currentTextIndex].length) {
                    if (!lastTimestamp) {
                        lastTimestamp = timestamp;
                    }
                    const elapsedTime = timestamp - lastTimestamp;
                    if (elapsedTime >= 1000 / typingSpeed) {
                        textElement.textContent = textArray[currentTextIndex].substring(0, currentCharacterIndex);
                        if (cursorVisible) {
                            textElement.textContent += textArray[currentTextIndex][currentCharacterIndex] + '_';
                        }
                        currentCharacterIndex++;
                        lastTimestamp = timestamp;

                        // Update the progress bar
                        const progress = (currentTextIndex + currentCharacterIndex / textArray[currentTextIndex].length) / textArray.length * 100;
                        progressBar.style.width = progress + '%';

                        if (progress >= 100) {
                            // When progress reaches 100%, hide the progress bar
                            progressBarContainer.style.display = 'none';
                            revealHiddenSections();
                        }
                    }
                    requestAnimationFrame(typeText);
                } else {
                    setTimeout(function () {
                        currentTextIndex++;
                        currentCharacterIndex = 0;
                        typeText();

                        if (currentTextIndex === textArray.length) {
                            revealHiddenSections();
                        }
                    }, 500); // Delay between texts
                }
            } else {
                cursorBlink();
            }
        }

function revealHiddenSections() {
    const hiddenSections = document.querySelectorAll('#about, #portfolio, #aspirations, #skills, #contact, #navbarNav, .foot, .navbar-toggler');
    hiddenSections.forEach(function (section) {
        setTimeout(function () {
            section.classList.add('visible');
        }, 1000);
    });
}


        function cursorBlink() {
            if (cursorVisible) {
                textElement.textContent = textArray[textArray.length - 1];
            } else {
                textElement.textContent = textArray[textArray.length - 1] + '_';
            }
            cursorVisible = +!cursorVisible;
            setTimeout(cursorBlink, 500);
        }

        let lastTimestamp = null;
        requestAnimationFrame(typeText);
    }, 1000);
});



document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.setAttribute('aria-expanded', 'false');
        } else {
            navbarToggler.setAttribute('aria-expanded', 'true');
        }
    });
});

$(document).ready(function () {
    $(".menu-ikon").on("click", function () {
        $(this).toggleClass("flipped");
    });
});

var navbar = document.querySelector('.navbar');
var scrollPosition = 0;
var scrollThreshold = 20; // Adjust this value based on when you want the change to occur

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
        navbar.classList.add('semi-opaque');
    } else {
        navbar.classList.remove('semi-opaque');
    }
});



