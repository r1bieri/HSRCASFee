/**
 * Created by Rolf on 05.06.2014.
 */
/* JSHint Globals */
/* global $:false */
/* global alert:false */
/* global console:false */
$(document).ready(function () {
    "use strict";
// Change body color
    $('body').css('background', '#eee');

    var $submitButton = $('#btnSubmit');

// Bind Click event
    $submitButton.on('click', onBtnSubmitClick);

});

// Methods

function showInfo(txt) {
    "use strict";
    var $lblInfo = $('#lblInfo');
    $lblInfo.html(txt);
}

function updateFirstAndLastItem($list) {
    "use strict";
// only for practice.
// we can also find the first and last items by CSS :first-child and :last-child

    var $listItems = $list.find('li'),
        $firstItem = $listItems.first(),
        $lastItem = $listItems.last();

// remove the existing classes on all items and color the first and last items then
    $listItems.removeClass('item-first item-last');
    $firstItem.addClass('item-first');
    $lastItem.addClass('item-last');
}

// Events

function onBtnSubmitClick(ev) {
    "use strict";

// Get the elements
    var $textField = $('#inputText'),
        $listComments = $('#listComments'),
// create the list item
        $listItem = $('<li class="list-item"></li>'),
        txtValue = $textField.val();

// Check if the input field is not empty
    if ( txtValue !== '' ) {

// We can't add the same item more than once, that why we clone it
        var $clonedItem = $listItem.clone();
        $clonedItem
            .append( txtValue + "<br/>")
            .append( $('<a class="link-remove-item" href="#">Remove Item</a>') );

// Append the created item to the list
        $listComments.append( $clonedItem );

// Bind mouse enter and leave events (hoveR)
        $clonedItem.on( 'mouseenter', onItemMouseEnter );
        $clonedItem.on( 'mouseleave', onItemMouseLeave );
        $clonedItem.on( 'click', ".link-remove-item", onLinkRemoveItemClick );

// Show an info message in the box below the button
        showInfo('Item added with text: <strong>' + txtValue + '</strong> ' );

// Empty the current value in the input box
        $textField.val('');

        updateFirstAndLastItem($listComments);
    }

}

function onLinkRemoveItemClick(ev) {
    "use strict";
    var $el = $(this);
// Go on item up in the DOM Tree (it's the list item and remove it)
    $el.parent().remove();
}

function onItemMouseEnter(ev) {
    "use strict";
    var $el = $(this);
    $el.addClass('item-hover'); // it's styled with a css class see in comments.html
}

function onItemMouseLeave(ev) {
    "use strict";
    var $el = $(this);
    $el.removeClass('item-hover');
}