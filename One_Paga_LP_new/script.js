//Q&Aのアコーディオン
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accordion__btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        btn.classList.toggle("active");
        content.classList.toggle("open");
      });
    });
  });

  

//SP表示時のプラン表横矢印の表示
document.querySelectorAll('.nav-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const scrollEl = document.querySelector('.table-scroll');
    const scrollAmt = scrollEl.clientWidth * 0.5;
    scrollEl.scrollBy({
      left: btn.classList.contains('nav-arrow--left') ? -scrollAmt : scrollAmt,
      behavior: 'smooth'
    });
  });
});

// SP・タブレット時のみ有効にする例
// document.querySelectorAll('.flow__step').forEach(step => {
//   step.addEventListener('click', () => {
//     const isOpen = step.classList.contains('open');

//     // 他の開いているステップを閉じる
//     document.querySelectorAll('.flow__step.open').forEach(openStep => {
//       openStep.classList.remove('open');
//     });

//     // クリックしたステップが閉じていたら開く
//     if (!isOpen) {
//       step.classList.add('open');
//     }
//   });
// });

// document.querySelectorAll('.flow__step').forEach(step => {
//   step.addEventListener('click', () => {
//     const hover = step.querySelector('.flow__hover');
//     const isOpen = step.classList.toggle('open');

//     // 他の開いている STEP を閉じる（必要に応じて）
//     document.querySelectorAll('.flow__step.open').forEach(other => {
//       if (other !== step) {
//         other.classList.remove('open');
//         other.style.marginBottom = '';
//       }
//     });

//     if (isOpen) {
//       // 詳細の高さ＋余白分 margin-bottom を確保
//       step.style.marginBottom = (hover.scrollHeight + 16) + 'px';
//     } else {
//       step.style.marginBottom = '';
//     }
//   });
// });
//参考サイトから引用
const accordion =document.getElementsByClassName('accordion__item');
for(i = 0; i < accordion.length;++i) {
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('acctive')
  });
};