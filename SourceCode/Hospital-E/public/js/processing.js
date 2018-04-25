$(document).ready(function() {

    /* Effect Side bar */
    $(".dropdown-content").hide();
    $(".dropdown--box").mouseenter(function() {
        $(".dropdown-content").show(50);
    });
    $(".dropdown--box").mouseleave(function() {
        $(".dropdown-content").hide(5);
    });

    $("#logout").click(function(){
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    })
    //End Effect Side Bar
});