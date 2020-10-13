"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrawVO = /** @class */ (function () {
    function DrawVO(draw_id, title, subtitle, date_draw, value, description, status, created_at, deleted_at) {
        this.draw_id = draw_id;
        this.draw_id = draw_id;
        this.title = title;
        this.subtitle = subtitle;
        this.date_draw = date_draw;
        this.value = value;
        this.description = description;
        this.status = status;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
    DrawVO.prototype.getDraw_id = function () {
        return this.draw_id;
    };
    DrawVO.prototype.setDraw_id = function (draw_id) {
        this.draw_id = draw_id;
    };
    DrawVO.prototype.getTitle = function () {
        return this.title;
    };
    DrawVO.prototype.setTitle = function (title) {
        this.title = title;
    };
    DrawVO.prototype.getSubtitle = function () {
        return this.subtitle;
    };
    DrawVO.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    DrawVO.prototype.getDate_draw = function () {
        return this.date_draw;
    };
    DrawVO.prototype.setDate_draw = function (date_draw) {
        this.date_draw = date_draw;
    };
    DrawVO.prototype.getValue = function () {
        return this.value;
    };
    DrawVO.prototype.setValue = function (value) {
        this.value = value;
    };
    DrawVO.prototype.getDescription = function () {
        return this.description;
    };
    DrawVO.prototype.setDescription = function (description) {
        this.description = description;
    };
    DrawVO.prototype.getStatus = function () {
        return this.status;
    };
    DrawVO.prototype.setStatus = function (status) {
        this.status = status;
    };
    DrawVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    DrawVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    DrawVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    DrawVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return DrawVO;
}());
exports.default = DrawVO;
