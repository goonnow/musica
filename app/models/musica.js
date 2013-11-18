var request = require('request');
var querystring = require('querystring');
var parser = require('./parser');

var API = 'https://www.googleapis.com/customsearch/v1?';
var paramsString = querystring.stringify({
    key: 'AIzaSyBUDdHilhBjmw25XvIloyptJyO7PmqZtDA',
    cx: '007766642348401515101:bldwhjg6uei',
    q: ''
});

API = API + paramsString;

exports.search = function( q, callback ) {
    if( !q || q.length < 4 ) {
        callback();
    }

    var res =  [
        {name: 'ABC'}
    ];

    request( API+q, function (error, response, body) {
        console.log(body);
        var json = JSON.parse(body);
        if (!error && response.statusCode == 200 && json.items) {

            var items = json.items;
            var res =[];

            for( var i = 0; i < items.length; i++ ) {
                var song = parser.parse(items[i]);
                res.push(song);
            }

            callback(res);
        }
    })
}

function parse(data) {

}
