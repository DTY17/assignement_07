$(document).ready(function () {
  let letters = ["G", "F", "E", "D", "C", "B", "A"];
  var count = 1;
  var H_count = 2;
  var shows = false;
  function loop() {
    $("#user").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user1").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user2").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user3").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user4").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user5").attr("src", "/Case 01/src/img/" + count + ".png");
    $("#user6").attr("src", "/Case 01/src/img/" + count + ".png");

    if (H_count == 14) {
      H_count = 2;
      shows = !shows;
    } else {
      H_count++;
    }
    if (shows < 8) {
      if (shows) {
        $("#house" + H_count).hide();
      } else {
        $("#house" + H_count).show();
      }
    }

    count = count < 9 ? count + 1 : 1;
    setTimeout(loop, 100);
    console.log(count);
  }

  function loopLetters() {
    var le = $("#letter1").text();
    $("#letter1").text(letters[fintIndex(letters, le)]);
    le = $("#letter2").text();
    $("#letter2").text(letters[fintIndex(letters, le)]);
    le = $("#letter3").text();
    $("#letter3").text(letters[fintIndex(letters, le)]);
    le = $("#letter4").text();
    $("#letter4").text(letters[fintIndex(letters, le)]);
    le = $("#letter5").text();
    $("#letter5").text(letters[fintIndex(letters, le)]);
    le = $("#letter6").text();
    $("#letter6").text(letters[fintIndex(letters, le)]);
    le = $("#letter7").text();
    $("#letter7").text(letters[fintIndex(letters, le)]);

    setTimeout(loopLetters, 1000);
    console.log(count);
  }

  loop();
  loopLetters();
  function fintIndex(ar, letter) {
    for (var i = 0; i < 7; i++) {
      if (ar[i] == letter) {
        if (i == 6) {
          return 0;
        }
        return i + 1;
      }
    }
  }
});
