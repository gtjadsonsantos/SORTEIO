"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BusinessVO = /** @class */ (function () {
    function BusinessVO(business_id, cnpj, fantasy_name, logo, social, phone, deleted_at, regulation, banner) {
        this.business_id = business_id;
        this.cnpj = cnpj;
        this.fantasy_name = fantasy_name;
        this.logo = logo;
        this.social = social;
        this.phone = phone;
        this.deleted_at = deleted_at;
        this.regulation = regulation;
        this.banner = banner;
    }
    BusinessVO.prototype.getBusiness_id = function () {
        return this.business_id;
    };
    BusinessVO.prototype.setBusiness_id = function (business_id) {
        this.business_id = business_id;
    };
    BusinessVO.prototype.getCnpj = function () {
        return this.cnpj;
    };
    BusinessVO.prototype.setCnpj = function (cnpj) {
        this.cnpj = cnpj;
    };
    BusinessVO.prototype.getFantasy_name = function () {
        return this.fantasy_name;
    };
    BusinessVO.prototype.setFantasy_name = function (fantasy_name) {
        this.fantasy_name = fantasy_name;
    };
    BusinessVO.prototype.getLogo = function () {
        return this.logo;
    };
    BusinessVO.prototype.setLogo = function (logo) {
        this.logo = logo;
    };
    BusinessVO.prototype.getSocial = function () {
        return this.social;
    };
    BusinessVO.prototype.setSocial = function (social) {
        this.social = social;
    };
    BusinessVO.prototype.getPhone = function () {
        return this.phone;
    };
    BusinessVO.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    BusinessVO.prototype.getDeleted_at = function () {
        return this.deleted_at;
    };
    BusinessVO.prototype.setDeleted_at = function (deleted_at) {
        this.deleted_at = deleted_at;
    };
    BusinessVO.prototype.getRegulation = function () {
        return this.regulation;
    };
    BusinessVO.prototype.setRegulation = function (regulation) {
        this.regulation = regulation;
    };
    BusinessVO.prototype.getBanner = function () {
        return this.banner;
    };
    BusinessVO.prototype.setBanner = function (banner) {
        this.banner = banner;
    };
    return BusinessVO;
}());
exports.default = BusinessVO;
