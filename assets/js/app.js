tsParticles.load("tsparticles", {
    background: {
      color: "#28c5f9"
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        resize: true,
        onHover: {
          enable: false,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 300,
          opacity: 0.8,
          size: 100
        }
      }
    },
    particles: {
      color: {
        value: ["#0b3043"],
        animation: {
          enable: false,
          speed: 40,
          sync: false
        }
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 50
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.2
        },
        value: 0.8
      },
      shape: {
        type: "circle"
      },
      stroke: {
        color: "#ff0000",
        width: 0
      },
      size: {
        random: {
          enable: true,
          minimumValue: 95
        },
        value: 100
      }
    },
    detectRetina: true
});
