/*
**  Sample jQuery File
*/

$(function(){

    // Sample Mock Data Submission, jQuery onClick event.
    $("#save-doggo-submission-btn").on("click", function(){
      // Define data as variables to match HTML id's.
      let dogEmailAddress = $("#dog-email-address").val();
      let dogCity = $("#dog-owner-city-select-menu").val();
      let dogMessage = $("#owner-message-about-doggo").val();
      // Alert this data as the assigned variables, with labels to be more readable.
      alert("Email Address: " + dogEmailAddress + "\nCity: " + dogCity + "\nMessage: " + dogMessage);
    });

});
