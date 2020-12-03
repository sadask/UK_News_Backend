const config = require("./../../config/config");
// const axios = require("axios");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(config.APIKEY);

const NewsController = {

    /**
     * Get Latest news
     * @param {object} req
     * @param {object} res
     * @returns {object} JSON response
     */
    async getLatestUkNews(req, res) {
        try {

            // API call using axios.
            // let latestNews = await axios.get(config.newsUrl, {
            //     params: {
            //         country: 'us',
            //         language: 'en'
            //     },
            //     headers: { "Authorization": `Bearer ${config.APIKEY}` }
            // });

            // APi call using client library - newsapi.
            let latestNews = await newsapi.v2.topHeadlines({
                language: 'en',
                country: 'gb' // Country UK.
            })

            return res.status(200)
                .json({
                    success: true,
                    data: latestNews
                });

        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: false, message: error, data: null });
        }
    },


    /**
 * Get Latest news
 * @param {object} req
 * @param {object} res
 * @returns {object} JSON response
 */
    async getNewsByKeyword(req, res) {
        console.log(req.body);
        try {
            let result = await newsapi.v2.everything({
                q: req.body.keyword,
                sources: 'bbc-news,the-verge',
                domains: 'bbc.co.uk',
            })

            return res.status(200)
                .json({
                    success: true,
                    data: result
                });

        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: false, message: error, data: null });
        }
    }
};


module.exports = NewsController;
