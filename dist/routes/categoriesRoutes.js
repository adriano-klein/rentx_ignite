"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var Category_1 = require("../model/Category");
var express_1 = require("express");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var categories = [];
categoriesRoutes.post('/', function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var category = new Category_1.Category();
    Object.assign(Category_1.Category, {
        name: name,
        description: description,
        created_at: new Date()
    });
    categories.push(category);
    response.status(201).json(category);
});
