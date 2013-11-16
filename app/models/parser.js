
exports.parse = function(data) {
    var song = {
        url: data.link,
        title: data.title
    };

    //if( data.link.match(/chordtabs/) ) {
        //var nameAndArtist = data.title.replace(/คอร์ด คอร์ดเพลง คอร์ดกีต้าร์ เนื้อเพลง /g,'');
        //var splited = nameAndArtist.split('|');

        //song.name = splited[0];
        //song.name = song.name.trim();

        //song.artist = splited[1].replace('...','');
        //song.artist = song.artist.split(':')[0].trim();
    //} else if( data.link.match(/e-chords/) ){
        //var splited = data.title.split(' chords by ');

        //song.name = splited[0].trim();

        //song.artist = splited[1].trim();
    //}


    return song;
}
