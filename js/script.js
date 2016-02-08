function onNumberClick(x){
    $(document).ready(function(){
        if(typeof(x) != Number){
            alert("Не делай так, пожалуйста");
        }else{
            $("#firstOut").append(x);
        }
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
        var text = $("#firstOut").text();
        var prevOperation = text.substr(text.length-2, text.length-2);
        var checkPrevOperation;
        if(prevOperation == "+ " || prevOperation == "- " || prevOperation == "* " || prevOperation == "/ " || prevOperation == ") " || prevOperation == "( "){
            checkPrevOperation = true;
        }
        if(checkPrevOperation){
            alert("Введите второе число!");
        }else{
            $(".result").text(eval($("#firstOut").text()));
        }
    });
}
function clearText(){
    $(document).ready(function(){
        $(".result").text("");
        $("#firstOut").text("");
    });
}
var operations = ["+", "-", "*", "/"];