const song = document.querySelector('#song');
gsap.from(".christmas", {opacity: 0,x: -200, duration:1, delay:1, stagger: 0.8});
gsap.from("h1", {opacity: 0,y: -200, duration:1, delay:0, stagger: 0.8});
gsap.from("#playbtn", {opacity: 0, duration:2, delay:4.4, stagger: 0.8});
 
function christamssDay(){

    const chrDay = new Date('December 31, 2023 00:00');
    const nowDay = new Date();
    const diff = chrDay - nowDay; 

    const msinSec = 1000;
    const msinMin = 60 * 1000;
    const msninHour = 60 * 60 * 1000;
    const msinDays = 24 * 60 * 60 * 1000;

    const showDays = Math.floor(diff/msinDays);



    const showHour = Math.floor((diff%msinDays) / msninHour);
    const showMin = Math.floor((diff%msninHour)/msinMin);
    const showSec = Math.floor((diff%msinMin)/msinSec);

    const days = document.querySelector('.days').textContent = showDays;
    const hours = document.querySelector('.hours').textContent = showHour;    
    const min = document.querySelector('.minutes').textContent = showMin;    
    const sec = document.querySelector('.seconds').textContent = showSec;
    if (diff<= 0) {
        const days = document.querySelector('.days').textContent = 0;
        const hours = document.querySelector('.hours').textContent = 0;    
        const min = document.querySelector('.minutes').textContent = 0;    
        const sec = document.querySelector('.seconds').textContent = 0;

        done();
    }
}

setInterval(christamssDay, 1000)

function done(){
    const name = document.querySelector('.heading')
    name.textContent = "Happy christamassss!"
    name.classList.add('red');
    gsap.to(".christmas", {opacity: 0});
    gsap.from(".h1", {opacity: 0});

}

const btn = document.querySelector('#playbtn');
btn.addEventListener('click', function(){
    if(song.paused) {
        song.play();
        btn.classList.add("ply")
     } else {
        song.pause();
        btn.classList.remove("ply")

     }   
})
 
particlesJS("particles-js", {
  particles: {
    number: {
      value: 152,
      density: {
        enable: true,
        value_area: 631.3280775270874
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
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
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
