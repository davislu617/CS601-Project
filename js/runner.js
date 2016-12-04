$(function(){
        $('.runner').on('click', function(){
            $('.runner').hide();
            console.log($(this).scrollTop());
        });
        
        $(window).scroll(function(event){
            if ($(this).scrollTop() < 600){
                $('.runner').show();
            }
        });
    });