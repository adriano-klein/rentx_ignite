"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categoriesRoutes_1 = require("./routes/categoriesRoutes");
var app = express_1.default();
app.use(express_1.default.json());
app.use("/categories", categoriesRoutes_1.categoriesRoutes);
app.listen(3333, function () { return console.log("Server is running"); });
