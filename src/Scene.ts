import Screen from "./Screen";

class Scene {
    public canvas?: HTMLCanvasElement;
    public ctx?: CanvasRenderingContext2D;
    constructor(screen: Screen) {
        this.canvas = screen.canvas;
        this.ctx = screen.ctx;
    }
    public render() {}
}

export default Scene;
