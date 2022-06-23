"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Cors
require("./config/cors");
// Routes
require("./routes/index");
const PORT = process.env.PORT || 5000;
app_1.app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port !!!`);
});
