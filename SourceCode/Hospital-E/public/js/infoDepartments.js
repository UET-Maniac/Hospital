$(document).ready(function() {
    $('div[name=false]').css('background-color', 'rgb(245, 195, 179)');

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
    
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
        // var form = $(this);
        // var data = form.serialize();
        var data = new FormData(this);
        $.ajax({
            method: 'POST', 
            url: '/gioi-thieu/khoa', 
            data: data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(data){
            hideScene('create');
            $('#listDepartments').html(data);
        });
    //         if(window.FormData !== undefined)  // for HTML5 browsers
    //         {
    //             var formData = new FormData(this);
    //             $.ajax({
    //                 url: formURL,
    //                 type: 'POST',
    //                 data:  formData,

    //            });
    //             e.preventDefault();
    //        }
    //        else  //for olden browsers
    //         {
    //             // Generate a random id for our hidden iframe form
    //             var  iframeId = '_form_' + (Math.random().toString());
    //            // Create an igrame      
    //             var iframe = $('<iframe src="javascript:false;" name="'+iframeId+'" />');
    //            iframe.hide();
    //            formObj.attr('target',iframeId);
    //            iframe.appendTo('body');
    //             iframe.load(function(e)
    //             {
    //                 var doc = getDoc(iframe[0]);
    //                 var docRoot = doc.body ? doc.body : doc.documentElement;
    //                 var data = docRoot.innerHTML;
    //                 // Do whatever with `data`
    //             });
    //         }     
    //   });
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
            url: '/gioi-thieu/khoa', 
            data: data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(data){
            hideScene(id);
            $('#listDepartments').html(data);
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
        method: 'DELETE', url: '/gioi-thieu/khoa', data: data
    }).done(function(data){
        $('#listDepartments').html(data);
    });
}