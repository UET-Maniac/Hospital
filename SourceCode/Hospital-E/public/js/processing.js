$(document).ready(function() {

    /* Effect Side bar */
    $(".infoBox-content").hide();
    $("#information").mouseenter(function() {
        $("#information-content").show(0);
    });
    $("#information").mouseleave(function() {
        $("#information-content").hide(0);
    });

    $("#record").mouseenter(function() {
        $("#record-content ").show(0);
    });
    $("#record").mouseleave(function() {
        $("#record-content").hide(0);
    });

    $("#appointment").mouseenter(function() {
        $("#appointment-content ").show(0);
    });
    $("#appointment").mouseleave(function() {
        $("#appointment-content").hide(0);
    });

    $("#logout").click(function(){
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    })
    //End Effect Side Bar
});