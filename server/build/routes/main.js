"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = __importDefault(require("express"));
const MainController_1 = __importDefault(require("../app/Controllers/MainController"));
const router = express_1.default.Router();
exports.main = router;
router.get('/index', MainController_1.default.index);
