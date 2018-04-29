$(document).ready(function() {
    $('#form-sidebar').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var data = form.serialize();
        $.ajax({
            method: 'PUT', url: '/gioi-thieu/khoa', data: data
        }).done(function(data){
            $('#listDepartments').html(data);
        });
    });
})
function search(){
    $('#form-sidebar').submit()
}
// function changeScene(hide,show){
//     $("#"+hide).hide("slow");
//     $("#"+show).slideDown("slow");
// }

function delete_action() {
    var accept_delete;
    var rep = confirm("Do you want delete?");
    if (rep == true) {
        accept_delete = 1;
    } else {
        accept_delete = 0;
    }
}
// (function ($) {
//     // "use strict";
    
// })(jQuery);