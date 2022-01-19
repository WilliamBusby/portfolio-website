"use strict";

var _this = void 0;

// Navigation bar
function navHideShow() {
  document.getElementById('drop-down-anchor').style.width = '0px';
  document.getElementById('drop-down-anchor').style.height = '0px';
  document.getElementById('drop-down').style.display = 'flex';
}

function navShowHide() {
  document.getElementById('drop-down-anchor').style.width = 'min(10vw,10vh)';
  document.getElementById('drop-down-anchor').style.height = 'min(10vw,10vh)'; // document.getElementById('drop-down').style.display = 'none';

  document.getElementById('drop-down').style.height = '0';
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
  document.documentElement.style.setProperty('--body-height', bodyHeight);
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px");
  document.documentElement.style.setProperty('--top-height-after', bodyHeight + "px");
}; // Smooth scrolling


var smoothScrolling = function smoothScrolling() {
  if (_this.attributes.href.value.substr(0, 1) === '#') {
    // Prevent default anchor click behavior
    event.preventDefault(); // Store hash

    var hash = _this.hash; // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
};