document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-section h2", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".hero-section p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
    });

    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });
    });
});