// reference URL
// https://pixijs.com/8.x/tutorials/choo-choo-train

import { Application, Assets, Container, Sprite, Text } from "pixi.js";
import { VERSION } from "pixi.js";
// import { addStars } from "./addStars";
import Stats from "stats.js";
import { STAGES, ASSETS, GAMES } from "./constants";

// PixiJSのアプリを作成する
const app = new Application();

// 列車のすべてを格納するコンテナを作成する
// const trainContainer = new Container();

// stats
let stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.y = 100;
document.body.appendChild(stats.dom);

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
