var trippler=function(Number){
  for(Number=1;Number<30;Number ++){
    if(Number%3===0 && Number%5===0){ alert("pingpong");
  }else if(Number%3===0){ alert("ping");
}else if (Number%5===0){
                      aleart("pong")
                  }else{ alert(Number)};};};
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var Number=parseInt($("inout#put").val());
    var Result=deter(Number)
    $("ul#trippler").append("<li>result</li>");
  });
});





$("ul").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});$("ul").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});
