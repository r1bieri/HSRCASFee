/**
 * Created by Rolf on 28.05.2014.
 */
jQuery(document).ready(function(){

 var listElement = $('.comments');

$('body').css('background-color', 'grey');

    // Liste über die Variable (listElement) ansprechen.
    // Jedes gerade Listenelement rot hinterlegen.
    listElement.find('li:odd').css('background-color', 'red').css('color','white');

    // Liste über $ ansprechen
    // Jedes ungerade Listenelement grün hinterlegen.
    $('li:even', listElement).css('background-color', 'green').css('color','white');

    $('.comments').find('li').addClass("list").append('<a class="Link" href="#">Click me</a>');

    listElement.find('li').hover(fhover, fhout);


    $('#ok').on('click',onClick);


    function fhover(){
        this.oldColor =   $(this).css('background-color');
        $(this).css('background-color','yellow');
    }

    function fhout(colorOld){
        $(this).css('background-color',this.oldColor);

    }

    function onClick(){
        $(this).css('background-color','green');
    }
});

