$(document).ready(function() {
    // ボタンクリック時のイベント処理
    $(".btn").click(function() {
        // テキストボックスに「クリックしました！」を設定
        $(".text-box").val("クリックしました！");
    });
});