import { Application, Assets, Container, Sprite, Text, Graphics } from "pixi.js";
import { VERSION } from "pixi.js";
// import { addStars } from "./addStars";
import Stats from "stats.js";
import { STAGES, ASSETS, GAMES } from "./constants";

// PixiJSのアプリを作成する
const app = new Application();

// Asynchronous IIFE
// 非同期即時実行関数式
(async () => {
  // アプリの初期化
  await app.init({ background: "#efefef", resizeTo: window });

  document.body.appendChild(app.canvas);

  // img
  // bunny
  const texture = await Assets.load("assets/images/bunny.png");
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
  // bg
  const texture_bg = await Assets.load("assets/images/dungeon.png");
  const pic_bg = new Sprite(texture_bg);
  app.stage.addChild(pic_bg);

  // text
  const basicText = new Text({
    text: "Hello Pixi! Ver. " + VERSION,
    style: {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0x333333,
      align: "center",
    },
  });
  basicText.y = 50;
  app.stage.addChild(basicText);

  // 星を追加
  // addStars(app);
})();

// stats
let stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.y = 100;
document.body.appendChild(stats.dom);

let oldTime = Date.now();
let ms = 1000;
let fps = GAMES.FPS;
let animate = () => {
  // console.log("animate()");
  let newTime = Date.now();
  let deltaTime = newTime - oldTime;
  oldTime = newTime;
  deltaTime < 0 ? (deltaTime = 0) : deltaTime;
  deltaTime > ms ? (deltaTime = ms) : deltaTime;
  // renderer.render(stage);
  stats.begin();
  requestAnimationFrame(animate);

  // GameLoop
  // if (gameLoopFlag) {
  //   gameLoop(deltaTime);
  // }

  stats.end();
};
requestAnimationFrame(animate);

// PixiJSのバージョンを表示
console.log(VERSION); // 8.17.1

// asset
const ASSET_BG = ASSETS.ASSET_BG;
// const ASSET_OBJ1: string = ASSETS.ASSET_OBJ1;
const ASSET_OBJ2 = ASSETS.ASSET_OBJ2;
const ASSET_OBJ3 = ASSETS.ASSET_OBJ3;
const ASSET_OBJ4 = ASSETS.ASSET_OBJ4;
const ASSET_OBJ5 = ASSETS.ASSET_OBJ5;
const ASSET_OBJ6 = ASSETS.ASSET_OBJ6;
const ASSET_OBJ7 = ASSETS.ASSET_OBJ7;
const ASSET_OBJ8 = ASSETS.ASSET_OBJ8;

const ASSET_OBJ9 = ASSETS.ASSET_OBJ9;
const ASSET_OBJ10 = ASSETS.ASSET_OBJ10;

const ASSET_OBJ11 = ASSETS.ASSET_OBJ11;
const ASSET_OBJ12 = ASSETS.ASSET_OBJ12;
const ASSET_OBJ13 = ASSETS.ASSET_OBJ13;

const ASSET_OBJ14 = ASSETS.ASSET_OBJ14;

const ASSET_OBJ15 = ASSETS.ASSET_OBJ15;
const ASSET_OBJ16 = ASSETS.ASSET_OBJ16;

// constant
const WIDTH = STAGES.WIDTH;
const HEIGHT = STAGES.HEIGHT;
const BG_COLOR = STAGES.BG_COLOR;

const BOUNDARY_RANGE_X = 28;
const BOUNDARY_RANGE_Y = 10;
const BOUNDARY_RANGE_WIDTH = 488;
const BOUNDARY_RANGE_HEIGHT = 488;

const FIRST = 1;
const NOT_FIRST = 2;

// container
// let container = new PIXI.Container();
let container = new Container();
container.width = WIDTH;
container.height = HEIGHT;
container.x = 0;
container.y = 0;
container.pivot.x = 0.5;
container.pivot.y = 0.5;
container.interactive = false;
container.interactiveChildren = true;
container.buttonMode = false;
app.stage.addChild(container);


///----------------------------------------------------------
// init
let bg;

let gameState= "init";
let gameLoopFlag = false;

let gameScene = new Container();
let gameOverScene = new Container();
let gameClearScene= new Container();
let message_gameover;
let message_gameclear;

// game sprite
let dungeon;
let door;
let explorer;
let treasure;

// explorer
let explorer_vx = 0,
  explorer_vy = 0,
  explorer_speed = 3;

// blobs
let numberOfBlobs = 6,
  blobs = [],
  blob_spacing = 48,
  blob_xOffset = 100,
  blob_speed = 2,
  blob_direction = 1,
  blob_vy = [];

// dragon
let dragon;
let dragonfire;
let dragonfireFlag = true;

// hp bar
let healthBar = new Container();
let innerBar = new Graphics();
let outerBar = new Graphics();
let maxHP = 120;

// arrow for cursor-key use
let arrow_white_left,
  arrow_white_up,
  arrow_white_right,
  arrow_white_down,
  arrow_red_left,
  arrow_red_up,
  arrow_red_right,
  arrow_red_down;

// arrow for pad use
let pad_circle,
  pad_arrow_right,
  pad_arrow_left,
  pad_arrow_up,
  pad_arrow_down;

// bgm button
let bt_bgm_on;
let bt_bgm_off;
let bgmFlag = false;
let sound_bgm;

// se
let se1;
let se2;
let se2Flag = true;

// text
let text_pixiVersion,
  text_gameTitle,
  text_hp,
  text_fps,
  text_bgm;
let text_hp_num;
let text_loadi;
