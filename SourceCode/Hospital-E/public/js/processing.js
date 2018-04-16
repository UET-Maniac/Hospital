$(document).ready(function() {

    /* Effect Side bar */
    $(".dropdown-content").hide();
    $(".dropdown--box").mouseenter(function() {
        $(".dropdown-content").show(500);
    });
    $(".dropdown--box").mouseleave(function() {
        $(".dropdown-content").hide(500);
    });

    //End Effect Side Bar
});