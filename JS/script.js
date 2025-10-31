  gsap.registerPlugin(ScrollTrigger);


  gsap.from(".cont h1, .cont p, .cont a", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", 
        toggleActions: "play none none reverse"
      }
    });
  });


  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });


  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.inOut" });
    });
  });


  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 25,           // أقصى زاوية ميل
    speed: 400,        // سرعة الحركة
    glare: true,       // تشغيل تأثير الانعكاس
    "max-glare": 0.5   // أقصى مستوى للانعكاس
});