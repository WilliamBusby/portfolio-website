"use strict";

// Navigation bar
function navHideShow() {
  document.getElementById('drop-down-anchor').style.display = 'none';
  document.getElementById('drop-down').style.display = 'flex';
}

function navShowHide() {
  document.getElementById('drop-down-anchor').style.display = 'block';
  document.getElementById('drop-down').style.display = 'none';
} // function scrollNavBar() {
//   document.getElementById('drop-down-anchor').style.width = '10vw';
// }
// Techstack


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
  console.log(bodyHeight);
  document.documentElement.style.setProperty('--body-height', bodyHeight);
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px");
  document.documentElement.style.setProperty('--top-height-after', bodyHeight + "px");
};