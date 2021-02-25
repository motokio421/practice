// アコーディオンの作成
$(`.header-course`).on("click",function(){
    $(`.header-toggle`).slideToggle();
    $(`.header-toggle`).toggleClass("active");
});

// トップへ戻るボタンの作成
$(function(){
  var page_top = $(`#page_top`);
  // ボタンの非表示
  page_top.hide();
  // トップから80pxスクロールしたら表示
  $(window).on("scroll",function(){
    if($(this).scrollTop() > 80) {
      page_top.fadeIn();
    } else {
      page_top.fadeOut();
    }
  });
  page_top.on("click",function() {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });
});