$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        document.write(x);
    } else {
        if( x % 3 == 0 ) {
            document.write("ping");
        }
        if( x % 5 == 0 ) {
            document.write("pong");
        }
    }
    document.write('<br>'); //line breaks to enhance output readability
}​
