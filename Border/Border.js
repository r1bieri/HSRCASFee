/**
 * Created by Rolf on 22.06.2014.
 */
$(document).ready(function() {
    var block = $('#block');
    var _run = false;/* Die innere Box wird mit diesem Flag getoppt oder bewegt. */

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

    block.click(function()
    {
       _run = !_run;
    });

    var ibl = $('<div />', {
            text: "offset left : " + block.position().left });
    $('#iBoxLeft').append(ibl);

    var ibr = $('<div />', {
            text: "offset top :" + block.position().left });
    $('#iBoxRight').append(ibr);


    window.setInterval(function() {
        var current_offset = block.offset();
        if ( _run ) {
            if (current_offset.left > 0) {
                block.offset({
                    left: current_offset.left - 1,
                    top: current_offset.top - 1
                });
            }
         ibl.text("offset left = " + block.position().left);
         ibr.text("offset top = " + block.position().top);
        }
    }, 50);
});