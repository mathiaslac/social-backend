class VipController {
    async get(req, res, next) {
        return res.json({
            ok: true
        });
    }
}

module.exports = new VipController();