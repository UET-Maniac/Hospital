$(document).ready(function() {
    $(".row100[acceptance=false]").css('background-color', '#ffff00');
    $('.row100[name=false]').css('background-color', 'rgb(255, 165, 0)');
    $('#form-sidebar').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var data = form.serialize();
        $.ajax({
            method: 'PUT', url: '/dat-lich-hen/lich-hen', data: data
        }).done(function(data){
            $('#listAS').html(data);
        });
    });
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var data = form.serialize();
        $.ajax({
            method: 'POST', 
            url: '/dat-lich-hen/lich-hen', 
            data: data
        }).done(function(data){
            hideScene('create');
            $('#listAS').html(data);
        });
    })
})

function search(){
    $('#form-sidebar').submit()
}

function hideScene(hide){
    $('#'+hide).hide()
}

function showScene(show){
    $('#'+show).show()
}

function submitUpdate(form, id){
    $('#'+form).submit((event)=>{
        event.preventDefault();
        var data = $('#'+form).serialize();
        $.ajax({
            method: 'Patch', 
            url: '/dat-lich-hen/lich-hen', 
            data: data
        }).done(function(data){
            hideScene(id);
            $('#listAS').html(data);
        });
    })
    
}

function displayImage(input, id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#' + id)
                .attr('src', e.target.result)
                // .width(150)
                // .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function deletes(id){
    if(!confirm('Bạn chắc chắn muốn xóa?')){
        return false;
    }
    var data = {
        _id: $('#'+id).val()
    }
    $.ajax({
        method: 'DELETE', url: '/dat-lich-hen/lich-hen', data: data
    }).done(function(data){
        $('#listAS').html(data);
    });
}

function updates(id){
    if(!confirm('Bạn có chắc chắn?')){
        return false;
    }
    var data = {
        _id: $('#'+id).val()
    }
    $.ajax({
        method: 'Patch', url: '/dat-lich-hen/lich-hen', data: data
    }).done(function(data){
        $('#listAS').html(data);
    });
}