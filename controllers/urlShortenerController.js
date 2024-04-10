const { validationResult } = require('express-validator');
const shortId = require('shortid');
// initialize the database model
const shortenedUrlModel = require('../db/models/shortenedurl')
const create = async (req, res) => {
    // validate the incoming requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // get the full url from the request
    const { fullUrl } = req.body;
    const generatedUrl = shortId.generate();
    const visits = 0;
    const newUrl = shortenedUrlModel.create({
        full_url: fullUrl,
        shortened_url: generatedUrl,
        visits: visits

    })
    // if the url is not created return a 422 error
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
    // get all the urls from the database
    const allUrls = await shortenedUrlModel.findAll({})
    return res.status(200).json({
        message: 'Server has responded',
        data: allUrls
    })

};

const openUrl = async (req, res) => {
    // handle redirect to a Url
    const { shortUrl } = req.params;
    const url = await shortenedUrlModel.findOne({ where: { shortened_url: shortUrl } })
    if (!url) {
        return res.status(404).json({
            message: 'Url not found'
        })
    }
    // update the visits count on each click
    const visits = url.visits += 1;
    await url.update({
        visits: visits
    });
    res.redirect(url.full_url)
    return res.status(204)



}
// export the controller functions
module.exports = {
    create,
    index,
    openUrl
};