// Navigation bar

function navHideShow() {

  document.getElementById('drop-down-anchor').style.display = 'none';
  document.getElementById('drop-down').style.display = 'flex';
}

function navShowHide() {
  document.getElementById('drop-down-anchor').style.display = 'flex';
  document.getElementById('drop-down').style.display = 'none';
}

// Techstack

function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("circText")[classIndex];

  let deg = 100 / txt.length,
    origin = -50;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}vw;position:absolute;transform:rotate(${origin}deg);transform-origin: 0 100%;right:5vw;bottom:5vw'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("TECHSTACK", 7, 0)