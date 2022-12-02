const $scroll = document.querySelector(".scroll"),
  $noticeBan = document.querySelector(".notice_ban"),
  $noticeBanBtn = document.querySelector(".notice_ban>button"),
  $hdLangBtn = document.querySelector(".hd_langbtn"),
  $hdLangList = document.querySelector(".hd_langlist"),
  $btnLogin = document.querySelector(".btn_login"),
  $roomBtn = document.querySelectorAll(".room_btn"),
  $sec3RightCon = document.querySelectorAll(".sec3_rightcon");

//   스크롤 마지막섹션에서 사라지기
window.addEventListener("scroll", function () {
  //   console.log(window.scrollY);
  let scrollTop = window.scrollY;
  if (scrollTop > 3600) {
    $scroll.classList.remove("on");
  } else {
    $scroll.classList.add("on");
  }
});

// 최상단 배너 사라지기
// $noticeBanBtn.addEventListener("click", function () {
//   $noticeBan.remove();
// });

// 다국어 페이지 전환버튼
$hdLangBtn.addEventListener("click", function () {
  $hdLangList.classList.toggle("on");
});

// 로그인버튼
window.addEventListener("scroll", function () {
  let hdscroll = window.scrollY;
  //   console.log(window.scrollY);
  if (hdscroll > 800) {
    $btnLogin.classList.add("on");
  } else {
    $btnLogin.classList.remove("on");
  }
});

// sec3_탭
$roomBtn.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    $roomBtn.forEach(function (test) {
      test.classList.remove("on");
    });
    this.classList.add("on");
    console.log(this);
    // test(idx);

    $sec3RightCon.forEach(function (test) {
      test.classList.remove("on");
    });
    $sec3RightCon[idx].classList.add("on");
  });
});
// function test(num) {
//   $sec3RightCon.forEach(function (Tcon, i) {
//     Tcon.classList.add("on");
//   });
//   $sec3RightCon[num].classList.add("on");
// }

const $sec4BtnsItem = document.querySelectorAll(".sec4_btns>div>button"),
  // $sec4Tabimg = document.querySelectorAll(".sec4_tabimg"),
  $sec4Tabimg = document.querySelectorAll(".sec4_left > li"),
  $sec4Text = document.querySelectorAll(".sec4_text");

// sec4_탭
// 호버시 이미지등장
$sec4BtnsItem.forEach(function (list, indx) {
  list.addEventListener("click", function (ev) {
    ev.preventDefault();

    test(indx);
  });
});
$sec4BtnsItem.forEach(function (list, indx) {
  list.addEventListener("click", function () {
    $sec4Tabimg.classList.add("on");
  });
});
function test(sec4num) {
  $sec4Tabimg.forEach(function (TIcon, index) {
    TIcon.classList.remove("on");
  });
  $sec4Tabimg[sec4num].classList.add("on");
}

// sec5_아코디언
const $sec5Con = document.querySelectorAll(".sec5_con"),
  $sec5TextTwo = document.querySelectorAll(".sec5_text>p:nth-of-type(2)");

$sec5Con.forEach(function (accolist, accoidx) {
  accolist.addEventListener("click", function () {
    $sec5Con.forEach(function (test) {
      test.classList.remove("on");
    });
    this.classList.add("on");
  });
});

// ham
const $hamOpen = document.querySelector(".ham_open"),
  $hamClose = document.querySelector(".ham_close"),
  $gnb = document.querySelector(".gnb");

$hamOpen.addEventListener("click", function () {
  setTimeout(function () {
    $gnb.classList.add("on");
    $hamClose.classList.add("on");
    $btnLogin.classList.add("gnbon");
  }, 300);
  document.body.classList.add("scrollLock");
});

$hamClose.addEventListener("click", function () {
  setTimeout(function () {
    $gnb.classList.remove("on");
    $hamClose.classList.remove("on");
    $btnLogin.classList.remove("gnbon");
  }, 300);
  document.body.classList.remove("scrollLock");
});
