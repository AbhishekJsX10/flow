

document.addEventListener("DOMContentLoaded",()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".sticky",{
        scrollTrigger: {
            trigger: ".sticky",
            start: "top top",
            end: ()=>
                "+=" + (window.innerHeight + document.querySelector(".website-content").offsetHeight * 0.5 ),
            scrub: 1,
            pin: true
        },
        y: 250,
        scale: 0.75,
        rotation: -15,
        ease: "power3.out"
    })

    gsap.fromTo(".website-content",{
            x: -100,
            scale: 0.01,
            rotation: 15
        },
        {
            scrollTrigger: {
                trigger: ".website-content",
                start: "top 200%",
                end: "top 50%",
                scrub: 1
            },
            x:0,
            scale: 1,
            rotation: 0,
            ease: "power3.out",
        }
    )   
})

const wrapper = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emojiFace = document.querySelector(".emoji-face");
const mouth = document.querySelector(".mouth");

const moveEvent = (e) => {
    const wrapperRect = wrapper.getBoundingClientRect();

    const relx = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
    const rely = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

    const emojiMaxDisplacement = 50;
    const emojiFaceMaxDisplacement = 75;

    const emojiDisplacementX = (relx / wrapperRect.width) * emojiMaxDisplacement;
    const emojiDisplacementY = (rely / wrapperRect.height) * emojiMaxDisplacement;
    // const emojiMouthX = (relx / wrapperRect.width) * 10;
    // const emojiMouthY = (rely / wrapperRect.height) * 10;

    const emojiFaceDisplacementX = (relx / wrapperRect.width) * emojiFaceMaxDisplacement;
    const emojiFaceDisplacementY = (rely / wrapperRect.height) * emojiFaceMaxDisplacement;
    // const mouthDisplacementX = (relx / wrapperRect.width) * emojiMouthX;
    // const mouthDisplacementY = (rely / wrapperRect.height) * emojiMouthY;

    gsap.to(emoji,{
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        ease: "power3.out",
        duration: 0.35,
    })

    gsap.to(emojiFace,{
        x: emojiFaceDisplacementX,
        y: emojiFaceDisplacementY,
        ease: "power3.out",
        duration: 0.35,
    })

    gsap.to(mouth,{
        x: emojiFaceDisplacementX,
        y: emojiFaceDisplacementY,
        ease: "power3.out",
        duration: 0.35,
    })
   
}


const leaveEvent = () =>{
    gsap.to([emoji,emojiFace],{
        x:0,
        y:0,
        ease: "power3.out",
        duration: 1,
    })
}

wrapper.addEventListener("mousemove",moveEvent);
wrapper.addEventListener("mousemove",moveEvent);


