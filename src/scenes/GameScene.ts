import GameMap from "../GameMap";
import Scene from "../Scene";
import GameScreen from "../Screen";

class GameScene extends Scene {
    public map: GameMap;
    constructor(screen: GameScreen, map: GameMap) {
        super(screen);
        this.map = map;
    }

    public render(time?: number) {
        this.map.render(this.ctx, this.screen.imgs);
    }
}

export default GameScene;
