let contact = document.querySelector('.contact');
let about = document.querySelector('.about');
let works = document.querySelector('.works');

about.addEventListener('click', aboutt);
function aboutt(){    
gsap.to(".t2", { opacity: 0});
gsap.to(".t3", { opacity: 0});
gsap.to(".links", { opacity: 0,y:-10000});
gsap.to(".type2", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
gsap.to(".type3", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
gsap.to(".type1", { duration: .5, ease: "sine.out", y: 100,delay:.5, width:"40%"});
gsap.fromTo(".t1", { duration: .1, ease: "sine.out", x: 700,delay:.1, opacity: 0}, { duration: .5, ease: "sine.out", x: 700,y: 80,delay:1,  opacity: 1});
gsap.to(".test", { opacity: 0,y:-10000});    
}

works.addEventListener('click', work);
function work(e){
  e.preventDefault();    
gsap.to(".t1", { opacity: 0});
gsap.to(".t3", { opacity: 0});
gsap.to(".links", { opacity: 0,y:-10000});
gsap.to(".type3", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
gsap.to(".type1", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
gsap.to(".type2", { duration: .5, ease: "sine.out", yPercent: 1090,delay:.5, width:"40%"});
gsap.fromTo(".t2", { duration: .5, ease: "sine.out", x: 900, y:100, delay:.5, opacity: 0},{ duration: .5, ease: "sine.out", x: 900, y:100, delay:1, opacity: 1});
gsap.fromTo(".test", { duration: .5, ease: "sine.out", x: "50%", y:0, delay:.1, opacity: 0, width:"1%"},{ duration: .8, ease: "sine.out", x: "50%", y:0, delay:1, opacity: 1, width:"50%", });
}
contact.addEventListener('click', contacts);
function contacts(e){
  e.preventDefault();
  gsap.to(".t1", { opacity: 0});
  gsap.to(".t2", { opacity: 0, y:-10000});
  gsap.to(".type1", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
  gsap.to(".type2", { duration: .1, ease: "sine.out", x: 0, y:0,width:"30px"});
  gsap.to(".type3", { duration: .8, ease: "sine.out", x: 0, yPercent:31950, delay:.5, width:"70%"});
  gsap.fromTo(".links", { duration: .5, ease: "sine.out", xPercent: -10,  yPercent:32350, opacity: 0},{ duration: .5, ease: "sine.out", xPercent: -10, yPercent:31550, delay:1.5, opacity: 1});
  gsap.to(".test", { opacity: 0,y:-10000});
}
window.addEventListener('load', about);
function theend() {
  gsap.to(".t1", { opacity: 0 });
  gsap.to(".type1", { duration: 0.1, ease: "sine.out", x: 0, y: 0, width: "30px" });
}
$(document).ready(function() {
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".say").length) {
      theend();
    }
    e.stopPropagation();
  });
});

