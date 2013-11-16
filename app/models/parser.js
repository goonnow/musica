
exports.parse = function(data) {
    var song = {
        url: data.link
    };

    if( data.link.match(/chordtabs/) ) {
        song.title = data.title.replace(/คอร์ด คอร์ดเพลง คอร์ดกีต้าร์ เนื้อเพลง /g,'');
    } else if( data.link.match(/e-chords/) ){
        song.title= data.title;
    } else if( data.link.match(/chord\.in\.th/) ){
        song.title= data.title.replace(/คอร์ดเพลง /,'');
    }


    return song;
}
