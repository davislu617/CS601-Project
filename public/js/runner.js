$(function(){
        $('.runner').on('click', function(){
            $('.runner').hide();
        });
        
        $(window).scroll(function(event){
            if ($(this).scrollTop() < 600){
                $('.runner').show();
            }
        });
    });