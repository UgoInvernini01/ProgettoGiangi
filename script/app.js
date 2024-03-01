

let item=document.querySelector(".hamburger")

item.addEventListener("click",()=>{

    document.body.classList.toggle("open")

    })

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){
            document.body.classList.add("scrolled-down")
        }else{
        
            document.body.classList.remove("scrolled-down")
        }
        
        })

    gsap.to(".logo", {opacity:1,duration:1 }); //duration
    gsap.from(".menu li",{opacity:0,y:60,duration:1.5,ease: Power3.easeOut,stragger:0.2})
    
    gsap.from(".hero__text", {x:-100,duration:2,delay:0.3, ease: Power3.easeOut }); //duration
    gsap.from(".hero__image", {scale:0.7,duration:4,ease: Power3.easeOut,opacity:0}); //from

    
