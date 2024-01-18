gsap.to("#box", {
    x:700,
    y:300,
    duration: 2,
    delay:1,
    backgroundColor: "blue",
    rotate:360,
    scale:0.5,
    borderRadius:50,
});

gsap.from("#box", {
    x:700,
    y:300,
    duration:2,
    delay:1,
    backgroundColor: "lightseagreen",
    rotate:360,
    scale:0.9,
    borderRadius:2,
});

// gsap.to("h1", {
//     x:300,
//     color: "orange",
//     duration:2,
//     delay:1,
// });

// gsap.to("h2", {
//     x:600,
//     color:"red",
//     duration:2,
//     delay:5,
// });

// gsap.to("h3", {
//     x:700,
//     color:"lightseagreen",
//     duration:2,
//     delay:7,
// });

gsap.to("p", {
    x:500,
    duration:1,
    delay:0.5,
    stagger:1,
    // repeat:1,
    repeat: -1,
    yoyo: true,
});

let tl = gsap.timeline();

tl.to("h1", {
    x:600,
    duration:1,
    color:"blue",
});

tl.to("h2", {
    x:700,
    duration:1,
    color:"red",
});

tl.to('h3', {
    x:800,
    duration:1,
    color:"purple",
})