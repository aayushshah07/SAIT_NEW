var $aboutText=$('.aboutText');

$( document ).ready(function() {

    // your code here

    $aboutText.waypoint(function()
{
    console.log("About text comes");
},{offset:'50%'});

});
