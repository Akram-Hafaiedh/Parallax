GSAP : GreenStock Animation Plateform.
Usage :  Ui , SVG , Three.js or React components.
Plugins : Scroll based animation, draggable interactions, morphing ..

Included : 
    Core:
        GSAP  (timeline and tween)
    Plugins:
        attr
        css
        endArray
        modifiers
        snap
    Eases:
        linear == "none" or "power0"
        power1  == "quadratic"
        power2 == " cubic"
        power3 == " quart"
        power 4  == "quint" or "strong"
        back
        bounce
        circ
        elastic
        expo
        sine
        steps(n)
    Utility methods:
        checkPrefix()
        clamp()
        distribute()
        getUnit()
        interpolate()
        mapRange()
        normalize()
        pipe()
        random()
        selector()
        shuffle()
        snap()
        splitColor()
        toArray()
        unitize()
        wrap()
        wrapYoyo()
Extra : 
    Draggable
    Easel
    Flip
    MotionPath
    Observer
    Pixi
    ScrollTo
    ScrollTrigger
    Text
Extra Eases
    rough
    slow
    expoScale
    

1 - Creating an animation :
    gsap.to(".box", { x: 200 })
    method: to
    target(s): ".box"
    variables: {x:200}

1-1 methods :
    gsap.to() => start at element current state and animate to values befined in the tween
    gsap.from() => like backwards .to() from the values in the tween and ends at the element current positon
    gsap.fromTo() => both starting and ending values
    gsap.set() => immediatly sets properties ( no animation ). its .to() with zero duration

Examples :
    gsap.to(".circle", { x: 40, fill: 'blue', });
    gsap.from(".circle", { x: -40, fill: 'blue', });
    gsap.fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
    gsap.set(".circle", { x: 40, fill: 'blue', });

1-2 Targets:
    uses document.querySelectorAll()
    so "#id" or ".class" or you can pass a variable or even an array

Examples : 
    // use a class or ID
    gsap.to(".box", { x: 200 });
    // a complex CSS selector
    gsap.to("section > .box", { x: 200 });
    // a variable
    let box = document.querySelector(".box");
    gsap.to(box, { x: 200 })
    // or even an Array of elements
    let square = document.querySelector(".square");
    let circle = document.querySelector(".circle");

    gsap.to([square, circle], { x: 200 })   

1-3 The variables:
    arbitrary values or special properties like : duration ,onComplete or repeat
    gsap.to(target, {
    // this is the vars object
    // it contains properties to animate
    x: 200,
    rotation: 360,
    // and special properties
    duration: 2
    })

2- Animations:

2-1 Classic CSS : 
    transform: rotate(360deg) translateX(10px) translateY(50%);
GSAP shorthand : 
    {rotation:360,x:10,yPercent:50}


examples :
    -x : 100  =>  transform : translateX(100px); ( Move horizentally ( px or SVG units) )
    -y : 100 => transform: translateY(100px); ( Move vertically (px or SVG units) )
    -xPercent : -50 => transform : translateX(-50%) ( Move Horizentally (percentage of elements width) )
    -yPercent : -50 => transform : translateY(-50%) ( Move vertically (% of element height) )
    -rotation : 360 => transform : rotate(360deg) ( rotate (degrees) )
    -scale : 2 => transform : scale(2,2) ( increase and decrease size )
    -transformOrigin:"0% 100%" => transform-origin : 0% 100% ( the center of translation, will rotate around the bottom left )
    -rotationX : 360 => transform : rotateX(360deg)
    -rotationY : 360 => transform : rotateY(360deg)
    -skewX : 45 => transform : skewX(45deg)
    -skewY : 45 => transform : skewY(45deg)
    -scaleX : 2 => transform : scaleX(2)
    -scaleY : 2 => transform : scaleY(2)
more exmpales :
    x: 200, // use default of px
    x: "+=200" // relative values
    x: '40vw', // or pass in a string with a different unit for GSAP to parse
    x: () => window.innerWidth / 2, // you can even use functional values to do a calculation!
    
    rotation: 360 // use default of degrees
    rotation: "1.25rad" // use radians

2-2 CSS properties:
    we use camelcase:
    background-color => backgroundColor
    example : 
    gsap.to(".box", { 
        duration: 2,
        backgroundColor: '#8d3dae',
    });

2-3 SVG attributes:
    width
    height
    fill
    stroke
    cx
    opacity
    viewBox with attr object
Examples:
    gsap.to(".svgBox", { 
    duration: 2,
    x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
    xPercent: -100,
    // or target SVG attributes
    attr: {
        fill: '#8d3dae',
        rx: 50, 
    },
    });
2-4 Any numeric value, color, or complex string containing numbers:
    Dont need DOM elemnts in order to animate properties u can target any property of any object even arbitrary ones: 
example:
    let obj = { myNum: 10, myColor: "red" };
    gsap.to(obj, {
        myNum: 200,
        myColor: "blue",
        onUpdate: () => console.log(obj.myNum, obj.myColor)
    })

    const canvas = document.getElementById("canvas");
more examples using canvas:
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#28a92b";

    let position = { x: 0, y: 0 };

    function draw() {
    // erase the canvas
    ctx.clearRect(0, 0, 300, 300);
    // redraw the square at it's new position
    ctx.fillRect(position.x, position.y, 100, 100);
    }

    //animate x and y of point
    gsap.to(position, { 
        x: 200, 
        y: 200, 
        duration: 4,
        // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
        onUpdate: draw 
    });
3-Special properties
    -duration: duration of animation (0.5 def)
    -delay: amount of delay before the animation (secs)
    -repeat: number of times it should repeat.
    -yoyo:true/false(false def)
    -stagger: time (secs) between the start of each target's animation (if multipel targets are povided) 
    -ease : rate of change during the animation :like the motion's "personality" or feel (power1.out def)
    -onComplete: A function that runs when animation completes
3-1 Repeats and alternating repeats 
    gsap.to(".box", { 
        rotation: 360,
        x: '100vw',
        xPercent: -100,
        // special properties
        duration: 2, // how long the animation lasts
        repeat: 2, // the number of repeats - this will play 3 times
        yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    });
3-2 Delays:
    gsap.to(".green", { 
        rotation: 360,
        duration: 1,
        repeat: 1,
        repeatDelay: 1,
    });


    gsap.to(".purple", { 
        rotation: 360,
        duration: 1,
        delay: 1 // delay the start of this animation
    });
3-3 Easing:
    gsap.to(".green", { 
        rotation: 360,
        duration: 2,
        ease: "none"
    });

    gsap.to(".purple", { 
        rotation: 360,
        duration: 2,
        ease: "bounce.out"
    });

3-4 Staggerfa-spin

    gsap.from(".box", {
        duration: 2,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true
    });
    gsap.to(".box", 1, {
        scale: 0.1, 
        y: 60,
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut",
        delay: 1,
        stagger: {
            amount: 1.5, 
            grid: "auto",
            from: "center"
        }
    });
3-5 Sequencing animations:
    gsap.to(".green", { 
        rotation: 360,
        duration: 1,
    });
    gsap.to(".purple", { 
        rotation: 360,
        duration: 1,
        delay: 1,
    });
    gsap.to(".orange", { 
        rotation: 360,
        duration: 1,
        delay: 2,
    });
3.6 Timelines
    let tl = gsap.timeline() 
    tl.to(".green", { x: 600, duration: 2 });
    tl.to(".purple", { x: 600, duration: 1 });
    tl.to(".orange", { x: 600, duration: 1 });