const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'The url shortener server is running',
        version: '1.0.0'
    })
})
// register the router
app.use("/api/v1/shorten", require("./routes/urlShortener"));
// start the server
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`App is listening on port ${process.env.PORT || 5000}`);
});


module.exports = { app, server };