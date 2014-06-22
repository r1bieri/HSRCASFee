/**
 * Created by Rolf on 27.05.2014.
 */

function time( element )
{
    uhrzeit=new Date();
//   document.write("<a>" + uhrzeit.getHours() + " Uhr " + uhrzeit.getMinutes() + " Minuten </a>");
   document.getElementById(element).innerHTML = "<a>" + uhrzeit.getHours() + " Uhr " + uhrzeit.getMinutes() + " Minuten "  + uhrzeit.getSeconds() + " Sekunden</a>";
}