// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,  // Number of particles
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#ffffff' },  // Particle color
        shape: {
            type: 'circle',  // Shape of particles
            stroke: { width: 0, color: '#ffffff' },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 1,
            direction: 'random',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    retina_detect: true
});
