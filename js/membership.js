var result = [];
$('#startBtn').click(function(){
    $('#start').fadeOut();
    $('#question1').delay(500).fadeIn();
});

$('#q1_1').click(function(){
    $('#question1').fadeOut();
    $('#question2').delay(500).fadeIn();
    result.push(1);
});

$('#q1_2').click(function(){
    $('#question1').fadeOut();
    $('#question2').delay(500).fadeIn();
    result.push(2);
});

$('#q1_3').click(function(){
    $('#question1').fadeOut();
    $('#question2').delay(500).fadeIn();
    result.push(3);
});

$('#q2_1').click(function(){
    $('#question2').fadeOut();
    $('#question3').delay(500).fadeIn();
    result.push(1);
});

$('#q2_2').click(function(){
    $('#question2').fadeOut();
    $('#question3').delay(500).fadeIn();
    result.push(2);
});

$('#q2_3').click(function(){
    $('#question2').fadeOut();
    $('#question3').delay(500).fadeIn();
    result.push(3);
});

$('#q3_1').click(function(){
    $('#question3').fadeOut();
    $('#question4').delay(500).fadeIn();
    result.push(1);
});

$('#q3_2').click(function(){
    $('#question3').fadeOut();
    $('#analyzing').delay(500).fadeIn();
    result.push(0);
});

$('#q4_1').click(function(){
    $('#question4').fadeOut();
    $('#question5').delay(500).fadeIn();
    result.push(1);
});

$('#q4_2').click(function(){
    $('#question4').fadeOut();
    $('#question5').delay(500).fadeIn();
    result.push(2);
});

$('#q4_3').click(function(){
    $('#question4').fadeOut();
    $('#question5').delay(500).fadeIn();
    result.push(2);
});

$('#q5_1').click(function(){
    $('#question5').fadeOut();
    $('#analyzing').delay(500).fadeIn();
    result.push(1);
});

$('#q5_2').click(function(){
    $('#question5').fadeOut();
    $('#analyzing').delay(500).fadeIn();
    result.push(2);
});

$('#q5_3').click(function(){
    $('#question5').fadeOut();
    $('#analyzing').delay(500).fadeIn();
    result.push(3);
});

$('#analyzingBtn').click(function(){
    $('#analyzing').fadeOut();
    $('#result').delay(500).fadeIn();
    //without family member
    if (result[2] == 0){
        //determine membership
        switch(result[1]){
            case 1:
                $('#resultOut').html("<p>Recommended Membership:  <span>Silver Individual</span></p>");
                break;
            case 2:
                $('#resultOut').html("<p>Recommended Membership:  <span>Gold Individual</span></p>");
                break;
            case 3:
                $('#resultOut').html("<p>Recommended Membership:  <span>Platinum Individual</span></p>");
                break;
        }
        //determine program
        switch(result[0]){
            case 1:
                $('#resultOut').append("<p>Recommended Program:  <span>Children's Program</span></p>");
                break;
            case 2:
                $('#resultOut').append("<p>Recommended Program:  <span>Teens Self Defense & Fitness</span></p>");
                break;
            case 3:
                $('#resultOut').append("<p>Recommended Program:  <span>Adult Self-Defense And Fitness</span></p>");
                break;
        }
    //with family member
    }else{
        //determine membership
        if(result[1] == 1 && result[4] == 1){
            $('#resultOut').html("<p>Recommended Membership:  <span>Gold Family</span></p>");            
        }else if((result[1] == 1 && result[4] == 2)||(result[1] == 2 && result[4] == 1)||(result[1] == 2 && result[4] == 2)){
            $('#resultOut').html("<p>Recommended Membership:  <span>Platinum Family</span></p>"); 
        }else{
            $('#resultOut').html("<p>Recommended Membership:  <span>Ultimate</span></p>"); 
        }
        //determine program
        switch(result[0]){
            case 1:
                switch(result[3]){
                    case 1:
                        $('#resultOut').append("<p>Recommended Program:  <span>Children's Program</span></p>");
                        break;
                    case 2:
                        $('#resultOut').append("<p>Recommended Program:  <span>Children's Program</span></p>");
                        $('#resultOut').append("<p>Recommended Program:  <span>Teens Self Defense & Fitness</span></p>");
                        break;
                    case 3:
                        $('#resultOut').append("<p>Recommended Program:  <span>Family Self Defense & Fitness</span></p>");
                        break;
                }
                break;
            case 2:
                switch(result[3]){
                    case 1:
                        $('#resultOut').append("<p>Recommended Program:  <span>Teens Self Defense & Fitness</span></p>");
                        $('#resultOut').append("<p>Recommended Program:  <span>Children's Program</span></p>");
                        break;
                    case 2:
                        $('#resultOut').append("<p>Recommended Program:  <span>Teens Self Defense & Fitness</span></p>");
                        break;
                    case 3:
                        $('#resultOut').append("<p>Recommended Program:  <span>Family Self Defense & Fitness</span></p>");
                        break;
                }
                break;
            case 3:
                switch(result[3]){
                    case 1:
                        $('#resultOut').append("<p>Recommended Program:  <span>Family Self Defense & Fitness</span></p>");
                        break;
                    case 2:
                        $('#resultOut').append("<p>Recommended Program:  <span>Family Self Defense & Fitness</span></p>");
                        break;
                    case 3:
                        $('#resultOut').append("<p>Recommended Program:  <span>Adult Self-Defense And Fitness</span></p>");
                        break;
                }
                break;
        }
    }
});

$('#reset').click(function(){
    $('#result').fadeOut();
    $('#question1').delay(500).fadeIn();
    result = new Array;
});