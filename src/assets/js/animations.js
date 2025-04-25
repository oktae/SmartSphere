// This file contains JavaScript code for animations used throughout the website.

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add hover effect for buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
});

gsap.registerPlugin(ScrollTrigger);

// Inicializar Locomotive Scroll
const scroller = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

// Cambiar colores según la sección
window.addEventListener("load", function () {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".container",
            start: "top 50%",
            onEnter: () =>
                gsap.to("body", {
                    backgroundColor: colorSection.dataset.bgcolor,
                    color: colorSection.dataset.textcolor,
                    overwrite: "auto"
                }),
            onLeaveBack: () =>
                gsap.to("body", {
                    backgroundColor: prevBg,
                    color: prevText,
                    overwrite: "auto"
                })
        });
    });
});

import { createTimeline, stagger } from "@motionone/dom";

// Añadir el contenedor dinámicamente
document.body.insertAdjacentHTML('beforeend', '<div class="background"></div>');

// Seleccionar el contenedor del fondo
const background = document.querySelector('.background');
const grid = 13; // 13x13 puntos

// Crear los puntos dinámicamente
for (let i = 0; i < grid * grid; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    background.appendChild(dot);
}

// Opciones de animación
const options = {
    grid: [13, 13],
    from: 'center',
};

// Crear la animación
createTimeline()
    .add('.dot', {
        scale: stagger([1.1, 0.75], options),
        ease: 'inOutQuad',
    }, stagger(200, options));

