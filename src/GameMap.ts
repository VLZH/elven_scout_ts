import Camera from "./Camera";
import KeyboardController from "./KeyboardController";
import Tile from "./Tile";

type Tiles = Tile[][];

class GameMap {
    public tiles: Tiles;
    private camera: Camera;
    private kbc: KeyboardController;
    constructor(tiles: Tiles, kbc: KeyboardController) {
        this.tiles = tiles;
        this.camera = new Camera(0, 0);
        this.kbc = kbc;
    }
    public render(
        ctx: CanvasRenderingContext2D,
        imgs: { [key: string]: HTMLImageElement }
    ) {
        if (this.kbc.left) {
            this.camera.moveLeft();
        }
        if (this.kbc.right) {
            this.camera.moveRight();
        }
        if (this.kbc.up) {
            this.camera.moveUp();
        }
        if (this.kbc.down) {
            this.camera.moveDown();
        }
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
    }
}

export default GameMap;
