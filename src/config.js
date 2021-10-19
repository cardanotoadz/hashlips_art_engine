"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const description =
  "This is the description of your NFT project, remember to replace this";
// const baseUri = "ipfs://NewUriToReplace";
const baseUri = "image.png";

//this is layer order, back to front as you go down
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Goo" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

//image size
const format = {
  width: 512,
  height: 512,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  "name": "EternityCircle0",
  "symbol": "",
  "description": "The circle is a symbol of infinite time…birth, life, death, and eternal rebirth of life in another form. The bright colors celebrate the fun and adventure of life!",
  "seller_fee_basis_points": 500,
  "image": "image.png",
  "attributes": [
    {
      "trait_type": "website",
      "value": "https://cgenart.com"
    }
  ],
  "collection": {
     "name": "EternityCircles",
     "family": "CGenArt"
  },
  "properties": {
    "files": [
      {
        "uri": "image.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "FKk4RkEpkN9h2yyDTLt2RJQmPkP3gGcmbux1oN19Yxjg",
        "share": 100
      }
    ]
  }
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
};
