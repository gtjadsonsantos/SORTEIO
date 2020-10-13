"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param dateInit Date
 * @param dateEnd Date
 * @returns true
 * @example updateAllResevations(new Date(), new Date("2020-09-20 09:00:00")
 *
 */
function updateAllResevations(dateInit, dateEnd) {
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
    var date1 = new Date(Date.UTC(dateInit.getUTCFullYear(), months[dateInit.getMonth()], dateInit.getDate(), dateInit.getHours(), dateInit.getMinutes(), dateInit.getSeconds()));
    var date2 = new Date(Date.UTC(dateEnd.getUTCFullYear(), months[dateEnd.getMonth()], dateEnd.getDate(), dateEnd.getHours(), dateEnd.getMinutes(), dateEnd.getSeconds()));
    var difference = date1 - date2;
    var timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft.hours > 11 ? true : false;
}
exports.default = updateAllResevations;
