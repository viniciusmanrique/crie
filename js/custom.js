$(document).ready(function() {
     $( ".cross" ).hide();
     $( ".menu" ).hide();
     $( ".hamburger" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".hamburger" ).hide();
     $( ".cross" ).show();
     });
     });

     $( ".cross" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".cross" ).hide();
     $( ".hamburger" ).show();
     });
     });

     $( ".speakers" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".cross" ).hide();
     $( ".hamburger" ).show();
     });
     });

     $( ".program" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".cross" ).hide();
     $( ".hamburger" ).show();
     });
     });

     $( ".registration" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".cross" ).hide();
     $( ".hamburger" ).show();
     });
     });

     $( ".contact-us" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".cross" ).hide();
     $( ".hamburger" ).show();
     });
     });
});
