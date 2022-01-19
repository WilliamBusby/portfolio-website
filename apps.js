// Navigation bar

function navHideShow() {
  document.getElementById('drop-down-anchor').style.width = '0px';
  document.getElementById('drop-down-anchor').style.height = '0px';
  document.getElementById('drop-down').style.display = 'flex';
}

function navShowHide() {
  document.getElementById('drop-down-anchor').style.width = 'min(10vw,10vh)';
  document.getElementById('drop-down-anchor').style.height = 'min(10vw,10vh)';
  document.getElementById('drop-down').style.display = 'none';
}

// function scrollNavBar() {
//   document.getElementById('drop-down-anchor').style.width = '10vw';
// }

// Techstack

function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("circText")[classIndex];

  let deg = 120 / txt.length,
    origin = -60;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}vw;position:absolute;transform:rotate(${origin}deg);transform-origin: 0 100%;right: 4vw;bottom: 5.5vw;'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("TECHSTACK", 8, 0)
// window.onscroll(scrollNavBar())

// Body height

window.onload = function getBodyHeight() {
  const bodyHeight = document.getElementById('body').clientHeight;
  console.log(bodyHeight);
  document.documentElement.style.setProperty('--body-height',bodyHeight);
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px");
  document.documentElement.style.setProperty('--top-height-after',bodyHeight + "px");
}

// Smooth scrolling

const smoothScrolling = () => {
  if (this.attributes.href.value.substr(0, 1) === '#') {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
}}