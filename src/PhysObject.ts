export interface IPhysObjectOptions {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default abstract class PhysObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    constructor(options: IPhysObjectOptions) {
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
    }
    public abstract render(option: { time?: number }): any;
}
