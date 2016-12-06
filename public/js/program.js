    var modal1 = document.getElementById('modal_program1');
    var program1 = document.getElementById('program1');
    var runner = document.getElementById('runner');
    program1.onclick = function(){
        modal1.style.display = "block";
        runner.style.display = "none";
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal1.style.display = "none";
        runner.style.display = "block";
    }

    var modal2 = document.getElementById('modal_program2');
    var program2 = document.getElementById('program2');
    program2.onclick = function(){
        modal2.style.display = "block";
        runner.style.display = "none";
    }
    var span = document.getElementsByClassName("close")[1];
    span.onclick = function() {
        modal2.style.display = "none";
        runner.style.display = "block";
    }

    var modal3 = document.getElementById('modal_program3');
    var program3 = document.getElementById('program3');
    program3.onclick = function(){
        modal3.style.display = "block";
        runner.style.display = "none";
    }
    var span = document.getElementsByClassName("close")[2];
    span.onclick = function() {
        modal3.style.display = "none";
        runner.style.display = "block";
    }

    var modal4 = document.getElementById('modal_program4');
    var program4 = document.getElementById('program4');
    program4.onclick = function(){
        modal4.style.display = "block";
        runner.style.display = "none";
    }
    var span = document.getElementsByClassName("close")[3];
    span.onclick = function() {
        modal4.style.display = "none";
        runner.style.display = "block";
    }