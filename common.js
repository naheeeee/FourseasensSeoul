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
  if (hdscroll > 900) {
    $btnLogin.classList.add("on");
  } else {
    $btnLogin.classList.remove("on");
  }
});

// sec3_탭
$roomBtn.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("on");

    test(idx);
  });
});
function test(num) {
  $sec3RightCon.forEach(function (Tcon, i) {
    Tcon.classList.remove("on");
  });
  $sec3RightCon[num].classList.add("on");
}
