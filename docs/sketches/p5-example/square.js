// Square class

class Square {
    constructor(center, size) {
        this.center = center.copy();
        let top_left = createVector(center.x - (size / 2), center.y - (size / 2));
        this.top_left_p = createVector(top_left.x / width, top_left.y / height);
        let bottom_right = createVector(center.x + (size / 2), center.y + (size / 2));
        this.bottom_right_p = createVector(bottom_right.x / width, bottom_right.y / height);
    }

    display() {
        rectMode(CORNERS);
        fill(0, 0, 255);
        rect(this.top_left_p.x * width,
            this.top_left_p.y * height,
            this.bottom_right_p.x * width,
            this.bottom_right_p.y * height);
    }
}
