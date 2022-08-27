const { Blog } = require("../config/db");

class blogController {
    async get(req, res, next) {
        await Blog.query("SELECT * FROM posts", (err, result) => {
            return res.json(result);
        });
    }
    
    async create(req, res, next) {
        const username = req.body.userName;
        const text = req.body.text;
        const img = req.body.postImg;

        pool.query(
            "INSERT INTO posts (post_text, user_name, post_img) VALUES (?,?,?)",
            [text, username, img],
            (err, result) => {
                if (err) {
                    console.log(err);
                }

                console.log(result);
            }
        );
    }
}

module.exports = new blogController();