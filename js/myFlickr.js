$(document).ready(function() {
    $('#search').click(function(){
        $('#images').html('');
        $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags=' +
            $('#tag').val() + '&tagmode=any&format=json&jsoncallback=?', function(data){
	        $.each(data.items, function(i,item) {
                $('#images').append('<img src="' + item.media.m + '"/>');
	        });
        });
    });
});
