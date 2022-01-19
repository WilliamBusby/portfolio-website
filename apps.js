// Navigation bar

function navHideShow() {
  document.getElementById('drop-down-anchor').style.width = '0px';
  document.getElementById('drop-down-anchor').style.height = '0px';
  const listOfNavItems = document.getElementsByClassName('ul__item');
  for (let i = 0; i < listOfNavItems.length; i++) {
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
  const listOfNavItems = document.getElementsByClassName('ul__item');
  for (let i = 0; i < listOfNavItems.length; i++) {
    listOfNavItems[i].style.fontSize = '0px';
  }
}

// Auto activate navShowHide if scrolled down too far

// if(body.scrollTop > document.getElementById('body').clientHeight) {
//   navShowHide();
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
  document.documentElement.style.setProperty('--body-height',bodyHeight);
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px");
  document.documentElement.style.setProperty('--top-height-after',bodyHeight + "px");
}