$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var ifEaten = $(this).data("eaten");

    var newEatState = {
      devoured: ifEaten
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("devoured");

        location.reload();
      }
    ); 
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

});
