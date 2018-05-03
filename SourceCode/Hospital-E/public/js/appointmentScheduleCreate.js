(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    for (var i=0; i < 12; i++){
        $("#timeInday").append($('<option>', {value: i, text:(i+8) + ':00'}));
    }
    $( "#date" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        hideIfNoPrevNext: true,
        showAnim: 'slideDown',
        showOtherMonths: true,
        showStatus: true
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
            var departments = JSON.parse($(".infoAppointment").attr('departments'));
            var indexDep = $('#departments option:selected').val();
            var indexDoc = $('#doctors option:selected').val();
            $('#doctorId').val(departments[indexDep].doctorIds[indexDoc]._id);
            var date = $('#date').val().split("-").reverse().join("-");
            var timeInday = $('#timeInday option:selected').text()
            $('#time').val(date + " " + timeInday);
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
            // do dinh dang dd-mm-yy doi sang yy-mm-dd
            var date = $(input).val().split("-").reverse().join("-");
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