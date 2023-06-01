const draw = Snap('#drawing'); 

let i = 0;
let counter = 0;
let clicked = 0;

function drawTriangle() {

    i = i + 15;
    let hue = i % 360;
    let color = Snap.hsl(randomInteger(0,360),80,40);
    
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const triangle = draw.polygon([randomInteger(0, vw), randomInteger(0, vh), randomInteger(0, vw), randomInteger(0, vh), randomInteger(0, vw), randomInteger(0, vh)]);

    triangle.attr({
        fill: color
    });

    triangle.animate({ 
        points: [randomInteger(0, vw), randomInteger(0, vh), randomInteger(0, vw), randomInteger(0, vh), randomInteger(0, vw), randomInteger(0, vh)],
        opacity: 0,
        transform: 's0',
    }, 4000, function () {
        this.remove();
    });

    setTimeout(drawTriangle, 800);
}

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

drawTriangle();

