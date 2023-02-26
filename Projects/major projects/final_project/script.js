function first_page(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 0,
            pin: true,
            duration: 10,
            // markers: true,
        }
    });
    
    
    tl
    .from("#center_moving_img",{
        x: "65%",
        duration: 10,
    })
    
    .to("#center_moving_img_info",{
        opacity: 0,
    
    })
    
    .to("#center_moving_img_img",{
        scale: .00001,
    }, "same")
    
    .to("#circle #btm img", {
        rotate: "-180deg",
        scale: .6,
        stagger: .05,
        
        ease: Power1,
    }, "same")
    
    .to("#circle #top img", {
        scale: .6,
        ease: Power1
    }, "same")
    
    .to("#circle",{
        scale: .65,
        ease: Power1
    }, "same")
    
    .from("#moving_pink_circle",{
        scale: .2,
        y: "310%",
    },"same")
    
    .to("#gallery_heading_first",{
        y: "150%",
    
    },"same")
    
    
    
    
    .to("#smlcircle",{
        scale: .0005,
    
        ease: Power1
    }, "same2")
    
    .to(["#circle #top img","#circle #btm img"],{
        scale: 0.005,
        ease: Power1,
    
    },"same2")
    
    .to("#moving_pink_circle",{
        opacity: 0,
        delay: "-0.2",
    
    },"same2")
    
    .to("#gallery_heading_second",{
        rotate: 0,
        top: "-50%",
        delay: "-0.2",
    
    },"same2")
    
    .from("#left_pink_moving_box",{
        top: "100%",
    },"same3")
   
    
    
}
first_page();

function second_page(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#second_part",
            start: "top top",
            scrub: 0,
            pin: true,
            duration: 10,
            markers: true,
        }
    });

    tl.
    from("#circle_second",{
        top: "150%",
        stagger: 0.1,
        scale: 0.3,

    })

    .to("#circle_second",{
        left: "50%",
        transform: `translate(-50%,0)`,

    })
    .to("#circle_second",{
        scale: 10,

    })

    .to("#second_top > h1",{
        left: "-150%",
    },"same")
    .to("#circle_second",{
        background: `linear-gradient(to right, #D5A7B4 ,  #B4AAD5 )`,

    }, "same")

    .to(".rectangle_box",{
        top: "0%",
        stagger: .1,
    })
    .to(".rectangle_box > span:nth-child(2)",{
        right: "50%",

    },"same2")
    .to(".rectangle_box > span:nth-child(3)",{
        right: "75%",
    },"same2")

}

second_page();
