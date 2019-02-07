import Game from "./Game";
import LibScene from "./scenes/Lib";
import MenuScene from "./scenes/Menu";
import Screen from "./Screen";

const screen = new Screen("#canvas");
const game = new Game("lib", screen);

game.appendScene("lib", new LibScene(screen));
game.appendScene("menu", new MenuScene(screen));

game.start();
