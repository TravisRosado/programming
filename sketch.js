var x = 0;


function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() {
    background("#003366");
    stroke("#ffff00");
    strokeWeight(5);

    fill("#ff0000");

    push();
    x += 0;
    translate(width / 2, height / 2);
    rotate(x);

    // Right Part
    rect(90, 0, 100, 50)
    ellipse(180, 0, 100, 100)
    // Left Part
    rect(-90, 0, 100, 50)
    ellipse(-180, 0, 100, 100)
    // Bottom part
    rect(1, 94, 50, 100)
    ellipse(1, 180, 100, 100)
    // Top Part
    rect(-1, -94, 50, 100)
    ellipse(-1, -180, 100, 100)
    pop();
    ellipse(width / 2, height / 2, 100, 100)


    if (mouseIsPressed) {
    x += 0.08;
    }






        text('hold on mouse', 50, 100)






}
