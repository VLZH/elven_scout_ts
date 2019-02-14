import Scene from "../Scene";
import GameScreen from "../Screen";
import FileLoader from "../util/FileLoader";

class LibScene extends Scene {
    public fl: FileLoader;
    public fl_finished_at: number;
    constructor(screen: GameScreen) {
        super(screen);
        // start loading
        this.fl = new FileLoader();
        this.fl.appendImage("orc", "/assets/orc.png");
        this.fl.appendImage("player", "/assets/player.png");
        this.fl.appendImage("sceleton", "/assets/sceleton.png");
        this.fl.appendImage("bg", "/assets/tiles.png");
        this.fl.appendImage("title", "/assets/title.jpg");
        // this.fl_finished_at = 0;
        this.fl.start();
    }

    public render(time?: number) {
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "22px Georgia";
        this.ctx.fillText(
            "Loading " + this.fl.loaded + "/" + this.fl.total,
            50,
            70
        );
        if (this.fl.status === "loaded") {
            if (!this.fl_finished_at) {
                this.fl_finished_at = time;
            }
            this.screen.imgs = this.fl.imgs;
            if (time - this.fl_finished_at > 1000) {
                return "l1";
            } else {
                return "lib";
            }
        }
        return "lib";
    }
}

export default LibScene;
