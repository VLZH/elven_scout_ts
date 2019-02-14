const MAPPING: {
    [key: string]: string[];
} = {
    down: ["KeyS", "ArrowDown"],
    esc: ["Escape"],
    left: ["KeyA", "ArrowLeft"],
    right: ["KeyD", "ArrowRight"],
    space: ["Space"],
    up: ["KeyW", "ArrowUp"]
};

class KeyboardController {
    public left: boolean;
    public right: boolean;
    public up: boolean;
    public down: boolean;
    public esc: boolean;
    public space: boolean;
    [key: string]: boolean;
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.esc = false;
        this.space = false;
        window.addEventListener("keydown", e => {
            const code = e.code;
            for (const kn in MAPPING) {
                if (MAPPING[kn].includes(code)) {
                    this[kn] = true;
                    console.info(`KeyboardController.${kn} = true`);
                }
            }
        });
        window.addEventListener("keyup", e => {
            const code = e.code;
            for (const kn in MAPPING) {
                if (MAPPING[kn].includes(code)) {
                    this[kn] = false;
                    console.info(`KeyboardController.${kn} = false`);
                }
            }
        });
    }
}

export default KeyboardController;
