// check if document has loaded
$(document).ready(function() {
//To Do
  $ //("p").hide(); //Element is hidden

  // works if mouse is hovered on h1
// mouseenter action starts here.
  $("h1").mouseenter (function()
{
  // fade the header
 $(this).fadeOut(2000);
 // change the background color of the body when you hover on h1.
 $("body").css("background-color","#CDB5CD");
});//end of mouseenter
// button click
$("#btn1").click(function()
{
$("#content").append("This is my div. It Has more content<br><hr>");

});//end of btn1 click.

$("#btn2").click(function()
{
$("#content").animate(
{
height:'400px',
width:'340px',
right:'500px'

});

});






});//end of doc
