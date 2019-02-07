type LoaderStatus = "loading" | "loaded";

class FileLoader {
    public status: LoaderStatus;
    public total: number;
    public loaded: number;
    public _files: { [key: string]: string };
    public imgs: { [key: string]: HTMLImageElement };
    public finished_at: Date;
    constructor() {
        this.total = 0;
        this.loaded = 0;
        this.status = "loading";
        this._files = {};
        this.imgs = {};
    }

    public appendImage(name: string, path: string) {
        this._files[name] = path;
        this.total++;
    }

    public start() {
        for (const f in this._files) {
            if (!this._files[f]) {
                continue;
            }
            const img = new Image();
            img.onload = () => {
                this.loaded++;
                if (this.total === this.loaded) {
                    this.changeStatus("loaded");
                }
            };
            img.src = this._files[f];
            this.imgs[f] = img;
        }
    }

    private changeStatus(status: LoaderStatus) {
        this.status = status;
        if (this.status === "loaded") {
            this.finished_at = new Date();
        }
    }
}

export default FileLoader;
