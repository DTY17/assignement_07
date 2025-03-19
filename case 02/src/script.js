$(document).ready(function () {
  function slowLoop() {
    var className1 = $("#div1").attr("class");
    var className2 = $("#div2").attr("class");
    var className3 = $("#div3").attr("class");
    var className4 = $("#div4").attr("class");
    var className5 = $("#div5").attr("class");
    var className6 = $("#div6").attr("class");

    $("#div1").removeClass(className1).addClass(className6);
    $("#div2").removeClass(className2).addClass(className1);
    $("#div3").removeClass(className3).addClass(className2);
    $("#div4").removeClass(className4).addClass(className3);
    $("#div5").removeClass(className5).addClass(className4);
    $("#div6").removeClass(className6).addClass(className5);

    setTimeout(slowLoop, 1000);
  }

  slowLoop(); // Start the loop
});
