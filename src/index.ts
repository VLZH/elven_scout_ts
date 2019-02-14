import Game from "./Game";
import GameMap from "./GameMap";
import GameScene from "./scenes/GameScene";
import LibScene from "./scenes/LibScene";
import MenuScene from "./scenes/MenuScene";
import Screen from "./Screen";
import Tile from "./Tile";
import KeyboardController from "./KeyboardController";

const screen = new Screen("#canvas");
const game = new Game("lib", screen);

const tiles = [
    new Tile("grass", 0, 0),
    new Tile("stone", 1, 0),
    new Tile("plant", 2, 0),
    new Tile("tree", 3, 0),
    new Tile("flowers", 4, 0),
    new Tile("wall", 5, 0),
    new Tile("top wall", 6, 0),
    new Tile("top wall with r end", 7, 0),
    new Tile("top wall with l end", 8, 0),
    new Tile("wall with r end", 9, 0),
    new Tile("bottom-wall", 5, 1),
    new Tile("bottom-wall with r-end", 6, 1),
    new Tile("bottom-wall with l-end", 7, 1),
    new Tile("wall with l end", 8, 1),
    new Tile("top-grass with l-end", 9, 1),
    new Tile("top-grass with r-end", 9, 2),
    new Tile("stairs", 8, 2),
    new Tile("sand in grass b-r", 0, 1),
    new Tile("sand in grass b", 1, 1),
    new Tile("sand in grass b-l", 2, 1),
    new Tile("sand in grass r", 0, 2),
    new Tile("sand", 1, 2),
    new Tile("sand in grass", 2, 2),
    new Tile("sand in grass u-r", 0, 3),
    new Tile("sand in grass u", 1, 3),
    new Tile("sand in grass u-l", 2, 3),
    new Tile("gras in sand b-r", 3, 1),
    new Tile("gras in sand b-l", 4, 1),
    new Tile("gras in sand u-r", 3, 2),
    new Tile("Some_name", 4, 2)
];

const _g = (idx: number) => tiles[idx];

const idxToTile = (tis: number[][]) => tis.map(ta => ta.map(ti => _g(ti)));

const kbc = new KeyboardController();
// prettier-ignore
const map1 = new GameMap(
    idxToTile([
        [3,20,22,3,3,3,3,1,1,3,3,14,3,0,3,3,0,3,15,3],
        [3,20,22,3,3,0,1,17,19,1,3,14,17,18,18,18,18,19,15,3],
        [3,20,22,3,3,0,0,20,22,0,3,14,23,24,24,24,24,25,15,3],
        [3,20,22,3,0,0,1,23,25,1,3,8,6,6,6,6,16,6,7,3],
        [3,20,22,0,0,3,3,1,1,3,3,13,5,5,5,5,16,5,9,3],
        [3,20,22,3,3,3,3,3,3,3,3,12,10,10,10,10,16,10,11,3],
        [3,20,22,3,3,2,0,2,0,3,3,0,2,0,4,0,0,0,2,3],
        [3,20,28,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,0,3 ],
        [3,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,3,3],
        [3,2,3,3,3,3,3,3,2,3,3,3,3,3,3,3,0,3,3,3],
        [3,0,0,0,0,0,0,3,0,3,17,18,18,19,0,0,2,0,0,1],
        [3,3,3,3,3,3,3,3,0,3,20,26,27,22,2,3,0,0,1,3],
        [3,0,0,0,0,0,0,0,0,0,20,28,29,22,0,0,3,0,0,3],
        [3,1,1,0,1,1,1,1,1,1,23,24,24,25,0,2,0,0,4,3],
        [3,1,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,1,0,3],
        [3,1,1,1,1,1,1,1,0,1,0,0,0,0,0,3,0,0,0,1],
        [3,1,0,0,0,0,0,0,0,1,2,2,0,1,0,0,0,2,0,1],
        [3,1,1,1,1,0,1,1,1,1,0,1,17,18,18,18,18,18,18,18],
        [3,0,0,0,0,0,0,0,0,0,0,1,23,24,24,24,24,24,24,24],
        [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]),
    kbc
);
// prettier-ignore-end

game.appendScene("lib", new LibScene(screen));
game.appendScene("menu", new MenuScene(screen));
game.appendScene("l1", new GameScene(screen, map1));

game.start();
