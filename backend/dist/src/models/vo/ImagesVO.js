"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageVO = /** @class */ (function () {
    function ImageVO(image_id, name, data_image, created_at, deleted_at, draws_draw_id) {
        this.image_id = image_id;
        this.name = name;
        this.data_image = data_image;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
        this.draws_draw_id = draws_draw_id;
    }
    ImageVO.prototype.getImage_id = function () {
        return this.image_id;
    };
    ImageVO.prototype.setImage_id = function (image_id) {
        this.image_id = image_id;
    };
    ImageVO.prototype.getName = function () {
        return this.name;
    };
    ImageVO.prototype.setName = function (name) {
        this.name = name;
    };
    ImageVO.prototype.getData_image = function () {
        return this.data_image;
    };
    ImageVO.prototype.setData_image = function (data_image) {
        this.data_image = data_image;
    };
    ImageVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    ImageVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    ImageVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    ImageVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    ImageVO.prototype.getDraws_draw_id = function () {
        return this.draws_draw_id;
    };
    ImageVO.prototype.setDraws_draw_id = function (draws_draw_id) {
        this.draws_draw_id = draws_draw_id;
    };
    return ImageVO;
}());
exports.default = ImageVO;
