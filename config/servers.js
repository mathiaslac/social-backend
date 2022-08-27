/**
 * Servers config file
 */

const { Awp, Retake, Bhop, Hdns, Dm, Comp } = require("./db");

module.exports = {
    awp: {
        ip: "37.187.221.140",
        port: 27015,
        db: Awp
    },
    retake: {
        ip: "37.187.221.141",
        port: 27015,
        db: Retake
    },
    bhop: {
        ip: "141.95.134.28",
        port: 27015,
        db: Bhop
    },
    hns: {
        ip: "37.187.221.138",
        port: 27015,
        db: Hdns
    },
    dm: {
        ip: "46.105.220.236",
        port: 27015,
        db: Dm
    },
    comp: {
        ip: "54.36.34.185",
        port: 27015,
        db: Comp
    },
};