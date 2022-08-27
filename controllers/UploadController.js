class UploadController {
    async upload(req, res, next) {
        return res.json({
            ok: true
        });
    }
}

module.exports = new UploadController();