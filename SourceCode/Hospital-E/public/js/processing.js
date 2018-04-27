$(document).ready(function() {

    /* Effect Side bar */
    $(".infoBox-content").hide();
    $("#information").mouseenter(function() {
        $("#information-content").show(50);
    });
    $("#information").mouseleave(function() {
        $("#information-content").hide(50);
    });

    $("#record").mouseenter(function() {
        $("#record-content ").show(50);
    });
    $("#record").mouseleave(function() {
        $("#record-content").hide(50);
    });

    $("#appointment").mouseenter(function() {
        $("#appointment-content ").show(50);
    });
    $("#appointment").mouseleave(function() {
        $("#appointment-content").hide(50);
    });

    $("#logout").click(function(){
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    })
    //End Effect Side Bar
});