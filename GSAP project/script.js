// site title animation
gsap.fromTo("#title", {
  scale : 5.2,
  y : -180
}, {
  scale: 1,
  y: 0,
  duration : 1,
  scrollTrigger: {
    trigger: "#title",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 2,
    ease : "expoScale(0.5,7,none)",
  }
})

// discover section Animation with gsap
const discover_t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide",
    start: "top 20%",
    // markers : true,   
    scrub: 2,
    ease: "ease"
  }
})
discover_t1.to(".slide1", {
  y: 220
});
discover_t1.to(".slide2", {
  y: 220
});
discover_t1.to(".slide3", {
  y: 220
});
discover_t1.to(".slide4", {
  y: 220
});



// image section Animation
gsap.to("#img_section2", {
  clipPath: "circle(100% at 50% 50%)",
  scrollTrigger: {
    trigger: "#image-section > .container",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    pin: true,
    onEnter: () => {
      document.body.classList.add("dark-theme");

    },
    onLeaveBack: () => { 
      document.body.classList.remove("dark-theme");
    }
  }

})


// furniture section animation
// select all .grid-items
const gridWrapper = gsap.utils.toArray(".grid-items");
gridWrapper.forEach(wrapper => {
  // select all box element within the cxurrent wrapper
  const boxes = wrapper.querySelectorAll('.box');

  //create gsap animation with the box
  boxes.forEach(box => {
    // creat gsap animation
    gsap.from(box, {
      y: 500,
      duration: 0.5,
      scrollTrigger: {
        trigger: box,
        start: "top bottom",
        end: "bottom top",
        scrub: 4
      
      }
    })
  })
});

//change text of furni name
const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

let text_h2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#furniture-section > .container",
    start: "top 50%",
    end: " top 50%",
    scrub: 2,
    ease: "ease",
    onEnter: () => {     
      gsap.set(heading, { position: "fixed", bottom: 0, zIndex: -1000})
    },
    onEnterBack: () => {      
      gsap.set(heading, { position: "relative", bottom: "0"})
    }
  }
})

//change text on scrool
sections.forEach((section, i) => {
  //  crteate Gsap Animations
  scrollTrigger.create({
    trigger: section,
    start: "bottom-=20% bottom",
    end: "bottom top",
    onEnter: () => {
      updateHeading(i)
      //add dark theme class to body when index is 0
      if (i === 0) {
        document.body.classList.remove("dark-theme");
      }
     
    },
    onEnterBack: () => {
      updateHeading(i)
    if (i === 0) {
        document.body.classList.add("dark-theme");
      } 

    }
  })
})


// update the heading text based on index

function updateHeading(index) {
  const headingTexts = ["Furniture", "Decor", "Office", "Tech"];
  heading.textContent = headingTexts[index];
}

// Initially set the Heading text to the first item
updateHeading(0);