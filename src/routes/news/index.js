const express = require("express");
const router = express.Router();
const NewsController = require("../../controllers/news/news.controller");

router.get("/", function (req, res, next) {
    res.status(200).json({
        status: "success",
        message: "Welcome message from API server.",
        data: { version_number: "v1.0.0" }
    });
});

router.get(
    "/latest-uk-news",
    NewsController.getLatestUkNews
);

router.get(
    "/search-news-via-keyword",
    NewsController.getNewsByKeyword
);


module.exports = router;
