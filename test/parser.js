var fs = require('fs-sync');
var assert = require("assert");
var parser = require("../app/models/parser");

it( 'song from chordtabs #1', function(){
    var obj = fs.readJSON('test/data/chordtabs-1.json');
    var song  = parser.parse(obj);

    assert.equal( song.name, 'ดินแดนแห่งความรัก' );
    assert.equal( song.artist, 'Crescendo' );
    assert.equal( song.url, obj.link );
});

it( 'song from echord #1', function(){
    var obj = fs.readJSON('test/data/echords-1.json');
    var song  = parser.parse(obj);

    assert.equal( song.name, 'Yellow' );
    assert.equal( song.artist, 'Coldplay' );
    assert.equal( song.url, obj.link );
});
