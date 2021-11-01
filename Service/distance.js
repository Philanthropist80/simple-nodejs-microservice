'use strict';

var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "DemoOnly00rRyakTQbsQG7BMGHLXnTAPiFX3KLefl9eO6tR7KOtBiphWKML5vFHT";

const zipCodeURL = "https://www.zipcodeapi.com/rest/"


var distance = {

    find: function(req, res, next){
        var url = zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode1 + '/' + req.params.zipcode2 + '/mile';
        request(url,
                function(error, response,body){
                    if (!error && response.statusCode == 200){
                        response = JSON.parse(body);
                        res.send(response);

                    } else {
                        var errorMsg = response.statusCode + ' ' + response.body;
                        console.log(errorMsg);
                        res.send({url:url, msg: errorMsg, distance: -1});
                    }

                }
            )
    }

};


module.exports = distance;
