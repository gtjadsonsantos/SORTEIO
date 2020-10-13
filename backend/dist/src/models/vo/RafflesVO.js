"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RafflesVO = /** @class */ (function () {
    function RafflesVO(raffle_id, image, created_at, date_raffle, description, value, title, subtitle, status, deleted_at) {
        this.raffle_id = raffle_id;
        this.image = image;
        this.created_at = created_at;
        this.date_raffle = date_raffle;
        this.description = description;
        this.value = value;
        this.title = title;
        this.subtitle = subtitle;
        this.status = status;
        this.deleted_at = deleted_at;
    }
    RafflesVO.prototype.getRaffle_id = function () {
        return this.raffle_id;
    };
    RafflesVO.prototype.setRaffle_id = function (raffle_id) {
        this.raffle_id = raffle_id;
    };
    RafflesVO.prototype.getImage = function () {
        return this.image;
    };
    RafflesVO.prototype.setImage = function (image) {
        this.image = image;
    };
    RafflesVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    RafflesVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    RafflesVO.prototype.getDate_Raffle = function () {
        return this.date_raffle;
    };
    RafflesVO.prototype.setDate_Raffle = function (date_raffle) {
        this.date_raffle = date_raffle;
    };
    RafflesVO.prototype.getDescription = function () {
        return this.description;
    };
    RafflesVO.prototype.setDescription = function (description) {
        this.description = description;
    };
    RafflesVO.prototype.getValue = function () {
        return this.value;
    };
    RafflesVO.prototype.setValue = function (value) {
        this.value = value;
    };
    RafflesVO.prototype.getTitle = function () {
        return this.title;
    };
    RafflesVO.prototype.setTitle = function (title) {
        this.title = title;
    };
    RafflesVO.prototype.getSubtitle = function () {
        return this.subtitle;
    };
    RafflesVO.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    RafflesVO.prototype.getStatus = function () {
        return this.status;
    };
    RafflesVO.prototype.setStatus = function (status) {
        this.status = status;
    };
    RafflesVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    RafflesVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return RafflesVO;
}());
exports.default = RafflesVO;
