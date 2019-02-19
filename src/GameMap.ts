import Camera from "./Camera";
import Character from "./Character";
import KeyboardController from "./KeyboardController";
import PhysObject from "./PhysObject";
import Tile from "./Tile";

type Tiles = Tile[][];

class GameMap {
    public tiles: Tiles;
    //
    public camera: Camera;
    private kbc: KeyboardController;
    private objects: PhysObject[];
    constructor(tiles: Tiles, kbc: KeyboardController) {
        this.tiles = tiles;
        this.camera = new Camera(0, 0);
        this.kbc = kbc;
        this.objects = [];
    }

    public addCharacter(ch: Character) {
        this.objects.push(ch);
    }

    public render(
        ctx: CanvasRenderingContext2D,
        imgs: { [key: string]: HTMLImageElement },
        time?: number
    ) {
        const start_col = Math.floor(this.camera.x / 64); // pix -> tile
        const start_row = Math.floor(this.camera.y / 64);
        for (let l = start_row; l < start_row + 11; l++) {
            for (let c = start_col; c < start_col + 11; c++) {
                if (l < 20 && c < 20) {
                    const tile = this.tiles[l][c];
                    ctx.drawImage(
                        imgs.bg,
                        tile.x * 64,
                        tile.y * 64,
                        64,
                        64,
                        c * 64 - this.camera.x,
                        l * 64 - this.camera.y,
                        64,
                        64
                    );
                }
            }
        }
        this.objects.forEach(o => o.render({ time }));
    }
}

export default GameMap;
