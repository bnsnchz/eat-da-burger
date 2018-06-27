var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: (burgersCol, burgersVal, cb) => {
        orm.insertOne("burgers", burgersCol, burgersVal, (res) => {
            cb(res);
        });
    },

    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
}

module.exports = burger;