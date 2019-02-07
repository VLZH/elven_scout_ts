import Scene from "../Scene";

class MenuScene extends Scene {
    public render() {
        this.ctx.drawImage(
            this.screen.imgs.title,
            0,
            0,
            640,
            640,
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        );

        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.font = "22px Arial";
        this.ctx.fillText("Нажмите пробел", 250, 500);
    }
}

export default MenuScene;
