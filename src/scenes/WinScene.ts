import Scene from "../Scene";

class WinScene extends Scene {
    public render() {
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "22px Georgia";
        this.ctx.fillText("You won!", 50, 70);
        return "win";
    }
}

export default WinScene;
