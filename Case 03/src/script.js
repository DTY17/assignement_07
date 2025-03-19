$(document).ready(function () {
  let count = 4;
  let side = 1;
  let interval = null;

  function loop() {
    if (count > 7 || count <= 0) {
    } else {
      if (side < 0) {
        $("#div_" + (count + 1)).removeClass("redDiv");
      } else {
        $("#div_" + (count - 1)).removeClass("redDiv");
      }
      $("#div_" + count).addClass("redDiv");
    }

    if (side < 0) {
      // -1
      $("#div_" + (count + 2)).removeClass("redDiv_1");
      $("#div_" + (count + 3)).removeClass("redDiv_2");
      $("#div_" + (count + 4)).removeClass("redDiv_3");

      $("#div_" + (count + 1)).addClass("redDiv_1");
      $("#div_" + (count + 2)).addClass("redDiv_2");
      $("#div_" + (count + 3)).addClass("redDiv_3");
      if (count <= 0) {
        $("#div_" + 1).addClass("redDiv");
        $("#div_" + 1).removeClass("redDiv_1");
        $("#div_" + 1).removeClass("redDiv_2");
        $("#div_" + 1).removeClass("redDiv_3");
      }
    } else {
      $("#div_" + (count - 2)).removeClass("redDiv_1");
      $("#div_" + (count - 3)).removeClass("redDiv_2");
      $("#div_" + (count - 4)).removeClass("redDiv_3");

      $("#div_" + (count - 1)).addClass("redDiv_1");
      $("#div_" + (count - 2)).addClass("redDiv_2");
      $("#div_" + (count - 3)).addClass("redDiv_3");
      if (count > 7) {
        $("#div_" + 7).addClass("redDiv");
        $("#div_" + 7).removeClass("redDiv_1");
        $("#div_" + 7).removeClass("redDiv_2");
        $("#div_" + 7).removeClass("redDiv_3");
      }
    }

    if (count < 2 && side == -1 && count > -4) {
      console.log(count + " " + side + "Negative");
      count -= 1;
      if (count == -3) {
        count = 1;
        side = 1;
      }
    } else if (count > 6 && side == 1 && count <= 11) {
      console.log(count + " " + side + "positive");
      count += 1;
      if (count == 11) {
        count = 7;
        side = -1;
      }
    } else {
      console.log(count + " " + side);
      count = count + side;
    }
  }

  function startLoop() {
    if (!interval) {
      interval = setInterval(loop, 100);
    }
  }

  function stopLoop() {
    clearInterval(interval);
    interval = null;
  }

  startLoop();
  $("#StartBtn").click(startLoop);
  $("#StopBtn").click(stopLoop);
});
