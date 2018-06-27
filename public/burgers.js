$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var ifEaten = $(this).data("eaten");

    var newEatState = {
      devoured: ifEaten
    };


    $.ajax("/api/burgers/"+id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("devoured");

        location.reload();
      }
    ); 
  });

  
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`\n\nYour ${newBurger} is ready!`);

                location.reload();
            }
        );
    });

});
