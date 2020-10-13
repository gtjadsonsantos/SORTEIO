"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ImageControllers_1 = __importDefault(require("../controllers/ImageControllers"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeImage = express_1.Router();
routeImage.get("/image/:image_id", ImageControllers_1.default.indexOne);
routeImage.get("/images", ImageControllers_1.default.indexAll);
routeImage.post("/image", validateUserType_1.default, ImageControllers_1.default.create);
routeImage.put("/image", validateUserType_1.default, ImageControllers_1.default.update);
routeImage.delete("/image", ImageControllers_1.default.delete);
exports.default = routeImage;
