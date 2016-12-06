$(function(){
    $('#signup').on('click', function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var level = $('#level').val();
        var parameter = {"name": name, "email": email, "level": level};
        $.get("/signup", parameter, function(data) {
            alert(data);
        });
    });
});