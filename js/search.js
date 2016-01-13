/**
 * Created by patrickpu on 1/13/2016.
 */
(function(){
    var $engine = $("#search-engine");
    var $input = $("#search-input");
    var $form = $("#search-form")

    $form.on('submit', function(e){
        e.preventDefault();
        if ($input.val().length > 0){
            var url = $engine.val() + $input.val();
            console.log('url', url);
            window.open(url);
        }
    });
})();