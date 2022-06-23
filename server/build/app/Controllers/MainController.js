"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
class MainController extends Controller_1.default {
    index(req, res) {
        res.send('index Page');
    }
}
exports.default = new MainController();
