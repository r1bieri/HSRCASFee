/**
 * Created by Rolf on 22.06.2014.
 */
$(document).ready(function() {
    var block = $('#block');
    console.log("width       : " + block.width());
    console.log("height      : " + block.height());

    console.log("inner width : " + block.innerWidth());
    console.log("inner height: " + block.innerHeight());

    console.log("outer width : " + block.outerWidth());
    console.log("outer height: " + block.outerHeight());

    console.log("outer width  (incl margin): " + block.outerWidth(true));
    console.log("outer height (incl margin): " + block.outerHeight(true));

    console.log("offset left: " + block.offset().left);
    console.log("offset top : " + block.offset().top);

    console.log("position left: " + block.position().left);
    console.log("position top : " + block.position().top);

    window.setInterval(function() {
        var current_offset = block.offset();
        if(current_offset.left > 0) {
            block.offset({
                left: current_offset.left - 1,
                top:  current_offset.top - 1
            });
        }
    }, 50);
});