import GameScreen from "./Screen";

class Scene {
    public ctx: CanvasRenderingContext2D;
    public screen: GameScreen;
    constructor(screen: GameScreen) {
        this.ctx = screen.ctx;
        this.screen = screen;
    }
    public render(): string | void {
        console.error("Scene.render()");
    }
}

export default Scene;
