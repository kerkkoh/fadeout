$(document).ready(function(){
    if (localStorage.getItem("text") && $(localStorage.getItem("text")).text() != "") {
      $("#editor").html(localStorage.getItem("text"));
    } else {
      $("#editor").html("<div style='text-align: center;'>&lt;TITLE&gt;</div><br><div style='text-align: center;'>Written by &lt;YOU&gt;</div><br>");
    }
    $(document).click(function() {
      $("#editor").focus();
    });
});

$("#editor").on("paste", function(e) {
  e.preventDefault();
  document.execCommand("insertHTML", false, e.originalEvent.clipboardData.getData("text/plain"));
});

const save = () => {
  localStorage.setItem("text", $("#editor").html());
                                        //fadeout. get it? get it? hahaha.. IT'S FUNNY ALRIGHT!!!!
  $("#saved").css( "display", "inline" ).fadeOut( 500 );
}

const cmd = (cmd,data) => {
  document.execCommand(cmd, false, data);
}