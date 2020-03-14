$.ajax({
    url:'data/profile.json',
    method:'GET',
    datatype:'JSON',
    data:'',
    beforeSend: function(){

    },
    success: function (data) {

        let description='<p>'+data.services.description+'</p>';
        $('#descServices').append(description);

        data.services.listServices.forEach(element => {
            let card='<div class="col-md-6">'+
                    '<div class="card"'+
                    '<div class="card-body">'+
                    '<h5 class="card-title">'+element.title+'</h5>'+
                    '<p class="card-text">'+element.description+'</p>'+
                    '<a href="#" class="btn btn-primary">Go more</a>'+
                    '</div>'+
                    '</div>'
                    '</div>';

            $('#contentServices').append(card);
        })
              
    },
    error: function(){
        alert('Error en la conexión');
    }
});