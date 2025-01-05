$(document).ready(function () {
    // ①「文字色変化」ボタンを押した際に文字色を変更
    $("#change-color").on("click", function () {
      $("#target").css("color", "blue"); // 任意の色を指定（例: 青色）
    });
  
    // ②「文字内容変化」ボタンを押した際に文字内容を変更
    $("#change-text").on("click", function () {
      $("#target").text("文字が切り替わりました！"); // 任意の文字内容
    });
  
    // ③「フェードアウト」ボタンを押した際に文字をフェードアウトで消す
    $("#fade-out").on("click", function () {
      $("#target").fadeOut();
    });
  
    // ④「フェードイン」ボタンを押した際に文字をフェードインで表示
    $("#fade-in").on("click", function () {
      $("#target").fadeIn();
    });
  });