var tl = gsap.timeline()

tl.from(" header h3",{
    opacity:0,
    y:-30,
    duration:1
})
tl.from("h4",{
    opacity:0,
    y:-30,
    duration:0.7
})
tl.from(".main-heading",{
    x:-50,
    opacity:0,
    duration:0.5
})
tl.from(".sub-heading",{
    x:-50,
    opacity:0,
    duration:0.5
})
tl.from(".hero-pera",{
    x:-50,
    opacity:0,
    duration:0.5
})
tl.from(".buttons",{
    x:-50,
    opacity:0,
    duration:0.5
})