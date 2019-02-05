import Scene from "./Scene";
import Screen from "./Screen";
class Game {
    public current_scene: string;
    public scenes: { [key: string]: Scene };
    public screen: Screen;
    constructor(current_scene: string = "lib", screen: Screen) {
        this.current_scene = current_scene;
        this.scenes = {};
        this.screen = screen;
    }
    public start() {
        // TODO: !!!
        this.scenes[this.current_scene].render();
    }
}

export default Game;
