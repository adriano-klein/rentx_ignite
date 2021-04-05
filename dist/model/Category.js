"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var uuid_1 = require("uuid");
var Category = /** @class */ (function () {
    function Category() {
        if (this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Category;
}());
exports.Category = Category;
