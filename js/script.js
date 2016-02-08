function onNumberClick(x){
    $(document).ready(function(){
        $("#firstOut").append(x);
    });
}
function onEventClick(x){
    $(document).ready(function(){
        var text = $("#firstOut").text();
        var prevOperation = text.substr(text.length-2, text.length-2);
        var checkPrevOperation = false;
        if(prevOperation == "+ " || prevOperation == "- " || prevOperation == "* " || prevOperation == "/ " || prevOperation == ") " || prevOperation == "( "){
            checkPrevOperation = true;
        }
        if(text == ""){
            alert("Сначала введите число!");
        }else if(checkPrevOperation) {
            alert("Нельзя вводить два знака подряд!");
        }else{
            $("#firstOut").append(" " + x + " ");
        }
    });
}
function onEqualsClick(){
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
var operations = ["+", "-", "*", "/"];