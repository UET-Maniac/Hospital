$(document).ready(function() {
    
    for (var i=0; i < 12; i++){
        $("#timeInday").append($('<option>', {value: i, text:(i+8) + ':00'}));
    }
    $( "#date" ).datepicker({
        dateFormat: "dd-mm-yy"
    });
    $("#departments").change(()=>{
        // chua tim duoc cachu truyen truc tiep array object tu ejs sang jquery
        var departments = JSON.parse($(".infoAppointment").attr('departments'));
        var index = $('#departments option:selected').val();
        $('#doctors').find('option').not("[value='-1']").remove();
        if (index > -1){
            if (departments[index].doctorIds){
                for (var i=0; i<departments[index].doctorIds.length; i++){
                    $("#doctors").append($('<option>', {value: i, text:departments[index].doctorIds[i].name}));
                }
            }
        }
    })
});

(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.infoAppointment ._select');

    $('#appointment-form').on('submit',function(){

        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        if(check){
            $('#time').val('123132');
        }

        return check;
    });

    input.each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('name') == 'doctors' || $(input).attr('name') == 'departments' || $(input).attr('name') == 'timeInday') {
            if ($(input).val() < 0)
                return false;
        }
        if($(input).attr('name') == 'date'){
            var date = $(input).val();
            return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
        }
        if($(input).attr('name') == 'address' || $(input).attr('name') == 'description'){
            if($(input).val().trim() == '')
                return false;
        }
        return true;
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);

// $('#mySelect')
//     .find('option')
//     .remove()
//     .end()
//     .append('<option value="whatever">text</option>')
//     .val('whatever')
// ;

// $('#mySelect').find('option').not(':first').remove();
// $('#mySelect').find('option').not('[value=123]').remove();