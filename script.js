$(".Part-Two-Yes").hide();
$(".Story-Ending-Yes").hide();

$(".Part-Two-No").hide();

$(".Story-Ending-Yes").hide();

$(".Story-Ending-No").hide();

$(".start-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".idk").hide();
});

$(".yes-button").dblclick(function() {
    $(".Story-Ending-Yes").show();
    $(".title").text("Your adventure has been chosen");
});

$(".no-button").dblclick(function() {
    $(".Story-Ending-No").show();
});