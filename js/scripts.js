var trippler=function(Number){
  for(Number=1;Number<100;Number ++){
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
