/*
 * POST creates a short url from a long url
 */
exports.createShort = function(req, res){
    var urlToShorten = req.body.urlToShorten;

    if(!urlToShorten){
        console.log('Request did not contain a url to shorten, please provide urlToShorten')
        res.send('Request did not contain a url to shorten, please provide urlToShorten')
    } else {
        console.log("Shortening url of " + urlToShorten);
        res.send("This will respond with a shortened url for " + urlToShorten);
    }
};

/*
 * GET retrieves long url from short url
 */
exports.getLong = function(req, res){
    // grab the path and strip the leading slash
    var shortUrl = req.path.substring(1)

    console.log("fetching short url " + shortUrl)

    res.send("This will return the long url from " + shortUrl);
};
