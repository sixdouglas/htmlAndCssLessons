
$("#search-btn").click(function() {
    var name = $("#search-txt").val();

    // https://itunes.apple.com/search?term=feder&limit=10&entity=song&country=fr
    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
           term: name,
           limit: 25,
           entity: 'song',
           country: 'fr'
        },
        error: function() {
           $('#info').html('<p>An error has occurred</p>');
        },
        success: function(data) {
            $('#song-list').empty();
            data.results.forEach(song => {
                var row = $('<tr>');

                var img = $('<img>');
                img.attr("src", song.artworkUrl60);
                var tdImg = $('<td>').append(img);
                row.append(tdImg);

                var tdTrackName = $('<td>').text(song.trackName);
                row.append(tdTrackName);

                var tdReleaseDate = $('<td>').text(song.releaseDate);
                row.append(tdReleaseDate);

                var tdPrice = $('<td>').text(song.trackPrice +' / ' + song.currency);
                row.append(tdPrice);

                $('#song-list').append(row);
            });
        }
     });
});
