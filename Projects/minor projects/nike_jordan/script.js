let width = screen.width;
let landing_home = document.querySelector("#landing_home");

if(width<600){
    alert("This site is not fit with this screen size {shift to bigger screen");

    landing_home.style.display = "none";
}




var tl = gsap.timeline();

tl.from("#nike_logo",{
    scale: 2,
    opacity: 0,
    duration: 1,
});

tl.to("#landing_home", {
    y: "-100%",
    duration: 2,
    
});

tl.from("#right",{
    x: 200,
    duration: 1,
    opacity: 0,
});
tl.from("#nike_shoes",{
    opacity: 0,
    duration: 1.1,
    x: 300,
    rotate: "180deg",
});

tl.from("#nav", {
    opacity: 0,
    duration: 1,
    y: "-50",
});

tl.from("#left_card", {
    opacity: 0,
    duration: 1,
    x: "-50"
});
