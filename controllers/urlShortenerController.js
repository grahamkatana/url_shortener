const { validationResult } = require('express-validator');
const shortId = require('shortid');
const shortenedUrlModel = require('../db/models/shortenedurl')
const create = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullUrl } = req.body;
    const generatedUrl = shortId.generate();
    const visits = 0;
    const newUrl = shortenedUrlModel.create({
        full_url: fullUrl,
        shortened_url: generatedUrl,
        visits: visits

    })
    if (!newUrl) {
        return res.status(422).json({
            'message': 'Error occured while creating your url'

        })
    }
    return res.status(201).json({
        message: 'Your url has been shortened',
        data: {
            fullUrl: fullUrl,
            clicks: visits,
            shortenedUrl: generatedUrl,
        }
    })

};

const index = async (req, res) => {
    const allUrls = await shortenedUrlModel.findAll({})
    return res.status(200).json({
        message: 'Server has responded',
        data: allUrls
    })

};

const openUrl = async (req, res) => {

    const { shortUrl } = req.params;
    console.log(shortUrl)
    const url = await shortenedUrlModel.findOne({ where: { shortened_url: shortUrl } })
    if (!url) {
        return res.status(404).json({
            message: 'Url not found'
        })
    }
    const visits = url.visits += 1;
    await url.update({
        visits: visits
    });
    res.redirect(url.full_url)
    return res.status(204)



}

module.exports = {
    create,
    index,
    openUrl
};