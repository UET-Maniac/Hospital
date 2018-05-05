$(document).ready(function() {
    $('.row100[name=false]').css('background-color', 'rgb(255, 165, 0)');

    $('#form-sidebar').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var data = form.serialize();
        $.ajax({
            method: 'PUT', url: '/gioi-thieu/tai-khoan', data: data
        }).done(function(data){
            $('#listUsers').html(data);
        });
    });
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
        // var form = $(this);
        // var data = form.serialize();
        var data = new FormData(this);
        $.ajax({
            method: 'POST', 
            url: '/gioi-thieu/tai-khoan', 
            data: data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(data){
            hideScene('create');
            $('#listUsers').html(data);
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
        var data = new FormData($('#'+form)[0]);
        $.ajax({
            method: 'Patch', 
            url: '/gioi-thieu/tai-khoan', 
            data: data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(data){
            hideScene(id);
            $('#listUsers').html(data);
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
        method: 'DELETE', url: '/gioi-thieu/tai-khoan', data: data
    }).done(function(data){
        $('#listUsers').html(data);
    });
}