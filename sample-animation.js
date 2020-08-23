(function () {
  function ease (params) {
    const topImage = $('.visual')
    topImage.addClass('loaded')
  }
  $(document).ready(function (params) {
    ease()
  })

  // 全体を制御するコントローラを作成
  // 大抵のサイトでは、ブラウザ・ウィンドウ用に1つのコントローラーをもつ
  // const controller = new ScrollMagic();

  // // シーンを作成
  // let scene = new ScrollMagic.Scene({
  //   triggerElement: ".intro", // トリガー
  //   triggerHook: 'onEnter', // トリガーが見えたら
  //   duration: 1000, // 100pxスクロールするまで
  //   offset: 50, // 50pxスクロールしたら
  //   reverse: false, // 逆スクロールに対応しない
  // })
  // // .setPin('.intro') // 指定した要素を固定
  // .setClassToggle('.intro', '.loaded')// classを追加
  // .addIndicators({ name: '.loaded!' }) // デバッグ用インジケータの表示
  //     .addTo(controller); // controllerに追加

  var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 1000 } })
  new ScrollMagic.Scene({
    triggerElement: '#sec1',
    duration: 1000, // 100pxスクロールするまで
    offset: 50, // 50pxスクロールしたら,
    reverse: false
  }) // トリガー要素
    .setClassToggle('#sec1', 'loaded') // 対象要素と入れ替えるクラス
    .addTo(controller)
})()
