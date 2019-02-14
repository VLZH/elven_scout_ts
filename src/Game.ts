import Scene from "./Scene";
import GameScreen from "./Screen";

class Game {
    public current_scene: string;
    public scenes: { [key: string]: Scene };
    public screen: GameScreen;
    constructor(current_scene: string = "lib", screen: GameScreen) {
        this.current_scene = current_scene;
        this.scenes = {};
        this.screen = screen;
    }

    public appendScene(name: string, scene: Scene) {
        this.scenes[name] = scene;
    }

    /**
     * Start loop
     */
    public start(time?: number) {
        const redirect = this.scenes[this.current_scene].render(time);
        if (redirect) {
            this.current_scene = redirect;
        }
        requestAnimationFrame(this.start.bind(this));
    }
    /**
     * Stop loop
     */
    // public stop() {}
}

export default Game;
