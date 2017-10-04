var moment = require('moment');

module.exports = function (timestamp, callback) {
    var d;
    if (/^\d{8,}$/.test(timestamp)) {
        d = moment(timestamp, "X");
    } else {
        d = moment(timestamp, "MMMM D, YYYY");
    }

    var returnData;

    if (d.isValid()) {
        returnData = {
            unix: d.format("X"),
            natural: d.format("MMMM D, YYYY")
        }
    } else {
        returnData = {
            unix: null,
            natural: null
        };
    }

    return callback(returnData);
};
