"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Routes
require("./routes/index");
app_1.app.listen(5000, () => {
    console.log('Server is Running!!!');
});
