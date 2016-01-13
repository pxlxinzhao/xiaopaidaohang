/**
 * Created by patrickpu on 1/13/2016.
 */
(function () {
    var $feeds = $("#feeds");

    getFeed('http://news.qq.com/newsgn/rss_newsgn.xml', feedCallback)

    function getFeed(url, successCallback){
        $.ajax({
            type: "GET",
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
            dataType: 'json',
            error: function(){
                alert('Unable to load feed, Incorrect path or invalid feed');
            },
            success: successCallback
            //values = xml.responseData.feed.entries;
        });
    };

    function feedCallback(xml){
        var values = xml.responseData.feed.entries;
        console.log('values', values);
        for (var i=0; i<10; i++){
            var value = values[i];
            $feeds.append(
                '<li class="list-group-item"><a href="' + value.link + '"><small>' + value.title + '</small></a></li>'
            );
        }
    }
})();