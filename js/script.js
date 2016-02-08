function onNumberClick(x){
    $(document).ready(function(){
        $("#firstOut").append(x);
    });
}
function onEventClick(x){
    $(document).ready(function(){
        $("#firstOut").append(" "+x+" ");
    });
    eventText = x;
}
function onEqualsClick(){
    var a = 0,b = 0;
    $(document).ready(function(){
        $(".result").text(eval($("#firstOut").text()));
    });
}
function clearText(){
    $(document).ready(function(){
        $(".result").text("");
        $("#firstOut").text("");
    });
}
var eventText = "";