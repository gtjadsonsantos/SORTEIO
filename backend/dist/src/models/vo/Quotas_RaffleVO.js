"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quotas_RaffleVO = /** @class */ (function () {
    function Quotas_RaffleVO(quota_raffle_id, number, created_at, deleted_at) {
        this.quota_raffle_id = quota_raffle_id;
        this.number = number;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
    Quotas_RaffleVO.prototype.getQuota_raffle_id = function () {
        return this.quota_raffle_id;
    };
    Quotas_RaffleVO.prototype.setQuota_raffle_id = function (quota_raffle_id) {
        this.quota_raffle_id = quota_raffle_id;
    };
    Quotas_RaffleVO.prototype.getNumber = function () {
        return this.number;
    };
    Quotas_RaffleVO.prototype.setNumber = function (number) {
        this.number = number;
    };
    Quotas_RaffleVO.prototype.getCreated_at = function () {
        return this.created_at;
    };
    Quotas_RaffleVO.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
    };
    Quotas_RaffleVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    Quotas_RaffleVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    return Quotas_RaffleVO;
}());
exports.default = Quotas_RaffleVO;
