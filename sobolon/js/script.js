new WOW().init();

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得しヘッダー分の高さを引く
  let position = jQuery(target).offset().top  - header;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});

//送信ボタンの色反転

window.addEventListener('DOMContentLoaded',function(){
  //document.getElementById('submit1').disabled = true;
  document.getElementById('contact-item-input').addEventListener('change',function(){
    if (this.value.length == 0) {
      jQuery('.util-link').removeClass( '-submit' );
    } 
    else {
      jQuery(this).addClass( '-submit' );
    }
  },false);
  return false;
},false);




