class GameScreen {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public imgs: { [key: string]: HTMLImageElement };
    constructor(selector: string) {
        const cnv = document.querySelector(selector);
        if (!cnv) {
            throw new Error(`Incorrect canvas element selector: ${selector}`);
        }
        this.canvas = cnv as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.imgs = {};
    }
    // public render(){}
}

export default GameScreen;
