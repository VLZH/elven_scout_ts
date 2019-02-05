class Screen {
    public canvas?: HTMLCanvasElement;
    public ctx?: CanvasRenderingContext2D;
    constructor(selector: string) {
        const cnv = document.querySelector(selector);
        if (cnv) {
            this.canvas = cnv as HTMLCanvasElement;
        }
    }
    // public render(){}
}

export default Screen;
