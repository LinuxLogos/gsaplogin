document.addEventListener("DOMContentLoaded", () => {
  gsap.to("#register-section", { opacity: 1, duration: 1, delay: 0.5 });
  gsap.to("#logo-section", { opacity: 1, duration: 1, delay: 1 });

  gsap.from("#logo-section img", {
    scale: 0,
    rotation: 360,
    duration: 1.5,
    delay: 1,
    ease: "elastic.out(1, 0.3)",
  });

  gsap.from(".sig_log p", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  gsap.from("form input", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 2,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  gsap.from("#agree-section", {
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "power2.inOut",
  });

  gsap.from(".signwithother ul li", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 3,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
});
