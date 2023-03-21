// p5.js Example

let squares = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    squares.forEach((square) => {
        square.display();
    });

    if (frameCount % 150 === 0) {
        let x = random(width);
        let y = random(height);
        let pos = createVector(x, y);
        let size = random(25, 100);
        let s = new Square(pos, size);
        squares.push(s);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
