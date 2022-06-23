"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../config/app");
const main_1 = require("./main");
app_1.app.use(main_1.main);
