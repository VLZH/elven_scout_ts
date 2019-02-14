const SPEED = 5;
class Camera {
    public x: number;
    public y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    public moveLeft() {
        const next_x = this.x - SPEED;
        if (next_x < 0) {
            this.x = 0;
        } else {
            this.x = next_x;
        }
    }
    public moveRight() {
        const next_x = this.x + SPEED;
        if (next_x > 20 * 64 - 480) {
            this.x = 20 * 64 - 480;
        } else {
            this.x = next_x;
        }
    }
    public moveUp() {
        const next_y = this.y - SPEED;
        if (next_y < 0) {
            this.y = 0;
        } else {
            this.y = next_y;
        }
    }
    public moveDown() {
        const next_y = this.y + SPEED;
        if (next_y > 20 * 64 - 480) {
            this.y = 20 * 64 - 480;
        } else {
            this.y = next_y;
        }
    }
}

export default Camera;
