var t1 = gsap.timeline()


// t1.from("#nav-part1 h1, #nav-part1 p, #nav-part2 p", {
//     y: -100,
//     delay: .5,
//     duration: .5,
//     stagger: .2,
//     opacity: 0
// });

// t1.to("#nav-part2> button", {
//     opacity: 1,
//     duration: .1
// })


t1.from("#background h1", {
    y: 32, 
    duration: .3, 
    delay: 1,
    opacity: 0
})

t1.from("#background p", {
    y: 32, 
    duration: .3, 
    opacity: 0
})

t1.to("#background button", { 
    opacity: 1,
    duration: .2
})


t1.from("#attach-background", {
    scale: 0.5,
    duration: .3, 
    opacity: 0
})

t1.from(".boxes", {
    x:-200,
    opacity: 0,
    stagger: .3,
    delay: .2
})

t1.from("#mainh1",{
    y: 32, 
    duration: .3, 
    delay: .2,
    opacity: 0
})

t1.from("#left1-text h2, #left1-text p", {
    x: 100,
    stagger: .2,
    delay: .2, 
    opacity: 0
})

t1.from("#left1", {
    x: -100,
    duration: .3,
    opacity: 0
})

t1.to("#left1-text> button", {
    opacity: 1,
    duration: .1
})


t1.from("#left2-text h2, #left2-text p", {
    x: -100,
    stagger: .2,
    delay: .2, 
    opacity: 0
})

t1.from("#left2", {
    x: 100,
    duration: .3,
    opacity: 0
})

t1.to("#left2-text> button", {
    opacity: 1,
    duration: .1
})

t1.from(" #left3-text h2, #left3-text p", {
    x: 100,
    stagger: .2,
    delay: .2, 
    opacity: 0
})

t1.from("#left3", {
    x: -100,
    duration: .3,
    opacity: 0
})

t1.to("#left3-text> button", {
    opacity: 1,
    duration: .1
})

t1.from(".four-boxes", {
    x: 200,
    opacity: 0,
    stagger: .3,
    delay: .2
})


t1.from(".cube", {
    scale: 1.3,
    opacity: 0,
    stagger: .3,
    delay: 2
})
