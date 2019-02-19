import KeyboardController from "./KeyboardController";
import PhysObject, { IPhysObjectOptions } from "./PhysObject";

type CharacterStatus = "alive" | "walking" | "dead" | "fire";
type CharacterDirection = "left" | "right" | "up" | "down";

type AnimationSprites = Array<[number, number]>;
interface IDirectionSprites {
    left?: AnimationSprites;
    right?: AnimationSprites;
    up?: AnimationSprites;
    down: AnimationSprites;
}

interface ICharacterSprites {
    alive: IDirectionSprites;
    walking: IDirectionSprites;
    dead: IDirectionSprites;
    fire: IDirectionSprites;
}

interface ICharacterOptions extends IPhysObjectOptions {
    sprites: ICharacterSprites;
    sprites_image: () => HTMLImageElement | HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    status?: CharacterStatus;
    direction?: CharacterDirection;
    ai?: boolean;
    kbc: KeyboardController;
    speed?: number;
}

export interface ICharacterRenderOptions {
    time?: number;
    x_correction: number;
    y_correction: number;
}

export class Character extends PhysObject {
    public status: CharacterStatus;
    public direction: CharacterDirection;
    public is_ai: boolean;
    protected kbc: ICharacterOptions["kbc"];
    /**
     * Current animation frame
     */
    private caf: number;
    private sprites_image: ICharacterOptions["sprites_image"];
    private sprites: ICharacterSprites;
    private ctx: CanvasRenderingContext2D;
    private speed: ICharacterOptions["speed"];
    constructor({
        ctx,
        kbc,
        sprites_image,
        sprites,
        status,
        direction,
        speed,
        ai,
        ...phys_object_options
    }: ICharacterOptions) {
        super(phys_object_options);
        this.sprites = sprites;
        this.sprites_image = sprites_image;
        this.status = status || "alive";
        this.direction = direction || "right";
        this.speed = speed || 5;
        this.is_ai = ai || false;
        //
        this.caf = 0;
        this.ctx = ctx;
        this.kbc = kbc;
    }

    public render({
        x_correction = 0,
        y_correction = 0
    }: ICharacterRenderOptions) {
        const current_frames = this.getSprites();
        this.caf++;
        if (this.caf >= current_frames.length) {
            this.caf = 0;
        }
        const current_frame = current_frames[this.caf];
        const sx = current_frame[0] * 64;
        const sy = current_frame[1] * 64;
        this.ctx.drawImage(
            typeof this.sprites_image === "function"
                ? this.sprites_image()
                : this.sprites_image,
            sx,
            sy,
            64,
            64,
            this.x + x_correction,
            this.y + y_correction,
            64,
            64
        );
    }

    public move(d: CharacterDirection) {
        if (this.direction !== d) {
            this.caf = 0;
        }
        this.setStatus("walking");
        this.direction = d;
        if (d === "left") {
            this.x -= this.speed;
            this.status = "walking";
        }
        if (d === "right") {
            this.x += this.speed;
        }
        if (d === "up") {
            this.y -= this.speed;
        }
        if (d === "down") {
            this.y += this.speed;
        }
    }

    public setStatus(s: CharacterStatus) {
        if (this.status !== s) {
            console.log("New status: ", s);
            this.status = s;
        }
    }

    private getSprites(): AnimationSprites {
        const result = this.sprites[this.status][this.direction];
        return result;
    }
}

export default Character;
