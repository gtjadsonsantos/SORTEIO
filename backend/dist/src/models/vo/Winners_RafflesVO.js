"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Winners_RafflesVO = /** @class */ (function () {
    function Winners_RafflesVO(winner_id, participants_raffle_participant_id, image, video, deleted_at, created_at) {
        this.winner_id = winner_id;
        this.participants_raffle_participant_id = participants_raffle_participant_id;
        this.image = image;
        this.video = video;
        this.deleted_at = deleted_at;
        this.created_at = created_at;
    }
    Winners_RafflesVO.prototype.getWinner_id = function () {
        return this.winner_id;
    };
    Winners_RafflesVO.prototype.setWinner_id = function (winner_id) {
        this.winner_id = winner_id;
    };
    Winners_RafflesVO.prototype.getParticipants_raffle_participant_id = function () {
        return this.participants_raffle_participant_id;
    };
    Winners_RafflesVO.prototype.setParticipants_raffle_participant_id = function (participants_raffle_participant_id) {
        this.participants_raffle_participant_id = participants_raffle_participant_id;
    };
    Winners_RafflesVO.prototype.getImage = function () {
        return this.image;
    };
    Winners_RafflesVO.prototype.setImage = function (image) {
        this.image = image;
    };
    Winners_RafflesVO.prototype.getVideo = function () {
        return this.video;
    };
    Winners_RafflesVO.prototype.setVideo = function (video) {
        this.video = video;
    };
    Winners_RafflesVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Winners_RafflesVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    Winners_RafflesVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Winners_RafflesVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    return Winners_RafflesVO;
}());
exports.default = Winners_RafflesVO;
