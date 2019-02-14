class Tile {
    public name: string;
    public x: number;
    public y: number;
    public walk: boolean;
    constructor(name: string, x: number, y: number, walk: boolean = false) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.walk = walk;
    }
}

export default Tile;
