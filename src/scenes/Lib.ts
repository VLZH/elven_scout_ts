import Scene from "../Scene";
import GameScreen from "../Screen";
import FileLoader from "../util/FileLoader";

class LibScene extends Scene {
    public fl: FileLoader;
    constructor(screen: GameScreen) {
        super(screen);
        // start loading
        this.fl = new FileLoader();
        this.fl.appendImage("orc", "/assets/orc.png");
        this.fl.appendImage("player", "/assets/player.png");
        this.fl.appendImage("sceleton", "/assets/sceleton.png");
        this.fl.appendImage("bg", "/assets/tiles.png");
        this.fl.appendImage("title", "/assets/title.jpg");
        this.fl.start();
    }

    public render() {
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "22px Georgia";
        this.ctx.fillText(
            "Loading " + this.fl.loaded + "/" + this.fl.total,
            50,
            70
        );
        const time = new Date();
        if (this.fl.status === "loaded") {
            this.screen.imgs = this.fl.imgs;
            if (time.getTime() - this.fl.finished_at.getTime() > 1000) {
                return "menu";
            } else {
                return "lib";
            }
        }
        return "lib";
    }
}

export default LibScene;
