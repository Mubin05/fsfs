// const tl = gsap.timeline();
// const tl2 = gsap.timeline();
// const tl3 = gsap.timeline();
// const tl4 = gsap.timeline();
// const tl5 = gsap.timeline();

// const img1 = document.getElementsByClassName("i1")[0];
// const img2 = document.getElementsByClassName("i2")[0];
// const dv = document.getElementsByClassName("int_body")[0];
// const v1 = document.getElementsByClassName("v1")[0];

// tl2.to(".int_sub1", {
//     left: "100%",
//     duration: 1.7,
// });

// tl3.to(".int_sub2", {
//     left: "100%",
//     duration: 1.5,
//     delay: 0.2,
// });

// tl4.to(".int_sub4", {
//     right: "100%",
//     duration: 1.7,
// });

// tl5.to(".int_sub5", {
//     right: "100%",
//     duration: 1.5,
//     delay: 0.2,
// });

// tl.to(".int_body .int_sub3", {
//     duration: 0.5,
//     delay: 0.2,
//     left: "0%",
//     ease: "power2.inOut",
// });

// tl.to(".int_sub3", {
//     duration: 1,
//     left: "100%",
//     ease: "power2.inOut",
//     onComplete: () => {
//         img1.style.display = "none";
//         img2.style.display = "flex";
//     }
// });

// tl.to(".int_sub3", {
//     duration: 0.5,
//     delay: 0.3,
//     left: "0%",
//     ease: "power2.inOut",
// });

// tl.to(".int_sub3", {
//     duration: 0.8,
//     left: "-100%",
//     ease: "power2.inOut",
// });

// tl2.to(".int_sub1", {
//     left: "-100%",
//     duration: 1.8,
//     ease: "power2.inOut",
// });

// tl3.to(".int_sub2", {
//     left: "-100%",
//     duration: 1.6,
//     ease: "power2.inOut",
// });

// tl4.to(".int_sub4", {
//     right: "-100%",
//     duration: 1.8,
//     ease: "power2.inOut",
// });

// tl5.to(".int_sub5", {
//     right: "-100%",
//     duration: 1.7,
//     ease: "power2.inOut",
//     onComplete(){
//         dv.style.display = "none";
//         // v1.style.display = "block";
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const img1 = document.querySelector(".i1");
    const img2 = document.querySelector(".i2");
    const dv = document.querySelector(".int_body");
    const v1 = document.querySelector(".v1");

    // Reset video to beginning
    v1.currentTime = 0;

    const mainTimeline = gsap.timeline();

    // Sub-timelines
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();
    const tl5 = gsap.timeline();

    // Timeline 1 (int_sub3)
    tl1.to(".int_sub3", { duration: 0.5, delay: 0.2, left: "0%", ease: "power2.inOut" })
       .to(".int_sub3", { duration: 0.63, delay:0.2, left: "100%", ease: "power1.inOut", onComplete: () => {
           img1.style.display = "none";
           img2.style.display = "flex";
       }})
       .to(".int_sub3", { duration: 0.4, delay: 0.3, left: "0%", ease: "power1.inOut" })
       .to(".int_sub3", { duration: 0.8, delay:0.3,left: "-100%", ease: "power1.inOut" });

    // Timeline 2 (int_sub1)
    tl2.to(".int_sub1", { left: "100%", duration: 1.5 })
       .to(".int_sub1", { left: "-100%", duration: 1.5, ease: "power1.inOut" }, "+=0.5");

    // Timeline 3 (int_sub2)
    tl3.to(".int_sub2", { left: "100%", duration: 1.5, })
       .to(".int_sub2", { left: "-100%", duration: 1.3, ease: "power1.inOut" }, "+=0.7");

    // Timeline 4 (int_sub4)
    tl4.to(".int_sub4", { right: "100%", duration: 1.5 })
       .to(".int_sub4", { right: "-100%", duration: 1.4, ease: "power1.inOut" }, "+=0.5");

    // Timeline 5 (int_sub5)
    tl5.to(".int_sub5", { right: "100%", duration: 1.5, })
       .to(".int_sub5", { right: "-100%", duration: 1.4, ease: "power1.inOut" }, "+=0.7");

    // Main timeline
    mainTimeline
        .add(tl1, 0)
        .add(tl2, 0)
        .add(tl3, 0)
        .add(tl4, 0)
        .add(tl5, 0)
        .add(() => {
            dv.style.display = "none";
            v1.style.display = "block";
            v1.currentTime = 0; // Ensure video starts from beginning
            v1.play();

            // Hide video after it has played once
            v1.onended = function() {
                v1.style.display = "none";
            };
        }, ">");

    // Pause the video initially
    v1.pause();
});