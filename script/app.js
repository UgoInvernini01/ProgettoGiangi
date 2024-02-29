

let item=document.querySelector(".hamburger")

item.addEventListener("click",()=>{

    document.body.classList.toggle("open")

    })

/*
    gsap.to(".logo", {opacity:1,duration:1 }); //duration
    gsap.from(".menu li",{opacity:0,y:60,duration:1.5,ease: Power3.easeOut,stragger:0.2})
    gsap.to(".hero__text", {x:200,duration:2,delay:0.3, ease: Power3.easeOut }); //duration

    gsap.from(".hero__image", {scale:0.4,duration:4,ease: Power3.easeOut,opacity:0}); //from

    gsap.from(".col-40 img",{opacity:0,x:-500,duration:3})
 
*/