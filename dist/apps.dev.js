"use strict";

// Navigation bar
function navHideShow() {
  document.getElementById('drop-down-anchor').style.width = '0px';
  document.getElementById('drop-down-anchor').style.height = '0px';
  var listOfNavItems = document.getElementsByClassName('ul__item');

  for (var i = 0; i < listOfNavItems.length; i++) {
    if (document.getElementById('body').clientWidth < 768) {
      listOfNavItems[i].style.fontSize = '2vw';
    } else if (document.getElementById('body').clientWidth < 992) {
      listOfNavItems[i].style.fontSize = '1.5vw';
    } else {
      listOfNavItems[i].style.fontSize = '1.2vw';
    }
  }
}

function navShowHide() {
  document.getElementById('drop-down-anchor').style.width = 'min(10vw,10vh)';
  document.getElementById('drop-down-anchor').style.height = 'min(10vw,10vh)';
  var listOfNavItems = document.getElementsByClassName('ul__item');

  for (var i = 0; i < listOfNavItems.length; i++) {
    listOfNavItems[i].style.fontSize = '0px';
  }
} // Auto activate navShowHide if scrolled down too far


window.addEventListener("scroll", function () {
  var changeHeightValue = window.pageYOffset || document.documentElement.scrollTop;

  if (changeHeightValue > lastScrollTop) {
    navShowHide();
  }

  lastScrollTop = changeHeightValue <= 0 ? 0 : changeHeightValue; // For Mobile or negative scrolling
}, false); // Techstack

function circularText(txt, radius, classIndex) {
  txt = txt.split(""), classIndex = document.getElementsByClassName("circText")[classIndex];
  var deg = 120 / txt.length,
      origin = -60;
  txt.forEach(function (ea) {
    ea = "<p style='height:".concat(radius, "vw;position:absolute;transform:rotate(").concat(origin, "deg);transform-origin: 0 100%;right: 4vw;bottom: 5.5vw;'>").concat(ea, "</p>");
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("TECHSTACK", 8, 0); // window.onscroll(scrollNavBar())
// Body height

window.onload = function getBodyHeight() {
  var bodyHeight = document.getElementById('body').clientHeight;
  document.documentElement.style.setProperty('--body-height', bodyHeight);
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px");
  document.documentElement.style.setProperty('--top-height-after', bodyHeight + "px");
};