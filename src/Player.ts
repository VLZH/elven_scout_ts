import Camera from "./Camera";
import Character, { ICharacterRenderOptions } from "./Character";

class Player extends Character {
    public render(options: ICharacterRenderOptions) {
        this.status = "alive";
        if (this.kbc.down) {
            this.move("down");
        } else if (this.kbc.up) {
            this.move("up");
        } else if (this.kbc.left) {
            this.move("left");
        } else if (this.kbc.right) {
            this.move("right");
        } else {
            this.setStatus("alive");
        }
        super.render(options);
    }
}

export default Player;
