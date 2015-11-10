// check if document has loaded
$(document).ready(function()
{
//To Do
  $("p").hide(); //Element is hidden

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
// button 2 click function begins here
$("#btn2").click(function()
{
    $("#content").animate(
{
    height:'400px',
    width:'340px'
});

}); // btn2 click function ends here
//add a css class to elements
$("#left").addClass("leftcontent");

$("#right").addClass("rightcontent");
$("#left").


});//end of doc
