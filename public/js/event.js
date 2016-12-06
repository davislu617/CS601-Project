    var eventName = "";
    var year = 2017;
    var month = 1;
    var day = 1;
    var image = "";
    var id = "";
    var divCount = -1;
    $(function() {
        $("#timeBtn").on("click", function(event){
            //remove previous Countdowns
            for(var i = divCount; i > -1; i--){
                id = "countdown"+i;
                $('#'+id).countdown('destroy');
            }
            $("#events").html("");
            //initialize the number of events
            divCount = -1;
            var event;var time = $('#time').val();
            var parameter = {"time": time};
            //get events; the parameter is the month that users select
            $.get("/getEvent", parameter, function(data) {
                  for(var i = 0; i < data.length; i++){
                      divCount ++;
                      eventName = data[i].eventName;
                      year = data[i].year;
                      month = data[i].month;
                      day = data[i].day;
                      image = data[i].image;
                      id = "countdown"+i;
                      $("#events").append('<div class="events"><div class="event-img"><img alt="event" src='
                                        +image+'></div><div class="event-countdown"><div class="heading"><h2>'
                                        +eventName+'</h1><h3>Date: '+month+'/'+day+'/'+year+
                                        '</h2></div><div id='+id+' class="countdown"></div></div></div><br><br>');
                      $('#'+id).countdown({
                        until: $.countdown.UTCDate(
                              -5, year, month-1, day, 0, 0, 0, 0
                              )
                      });
                  }
              });
          });             
      });