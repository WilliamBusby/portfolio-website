// Navigation bar

  // Hide the top corner nav icon, show the nav ul bar

const navHideShow = () => {
  document.getElementById('drop-down-anchor').style.width = '0px';
  document.getElementById('drop-down-anchor').style.height = '0px';
  const listOfNavItems = document.getElementsByClassName('ul__item');
  for (let i = 0; i < listOfNavItems.length; i++) {
    if (document.getElementById('body').clientWidth < 768) { // Mobile view
      listOfNavItems[i].style.fontSize = '2.5vw';
    } else if (document.getElementById('body').clientWidth < 992) { // Tablet view
      listOfNavItems[i].style.fontSize = '2vw';
    } else { // Desktop view
      listOfNavItems[i].style.fontSize = '1.5vw';
    }
  }
}

  // Show the top corner nav icon, hide the nav ul bar

const navShowHide = () => {
  document.getElementById('drop-down-anchor').style.width = 'min(10vw,10vh)';
  document.getElementById('drop-down-anchor').style.height = 'min(10vw,10vh)';
  const listOfNavItems = document.getElementsByClassName('ul__item');
  for (let i = 0; i < listOfNavItems.length; i++) {
    listOfNavItems[i].style.fontSize = '0px';
  }
}

  // Loads the navigation bar on reload

window.onload = navHideShow()

// Auto activate navShowHide if user has scrolled down the page, if they scroll back up active navHideShow

window.addEventListener("scroll", function() {
    if((window.scrollY || document.documentElement.scrollTop) <=50) {
      navHideShow()
    } else {
      navShowHide()
    }
});

// Techstack

  // Circular text used for techstack

const  circularText = (txt, radius, classIndex) => {
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

  // Runs circularText for the TECHSTACK
circularText("TECHSTACK", 8, 0)

  // Changes the colour of the techstack icons to be visible, after 10 seconds they fade back

const techStackIcons = () => {
  document.getElementById("icons").style.color = "#f7fff7";
  setTimeout(techStackIconsRemove,10000); // Ten second timeout
};

  // Changes the colour of the techstack icons to not be visible (background colour)

const techStackIconsRemove = () => {
  document.getElementById("icons").style.color =  "#343434";
}

// Body height

  // Gets the body height of the document and changes the background related values for stars depending on this height. 
  // Only changes values on reload.

window.onload = function getBodyHeight() {
  const bodyHeight = document.getElementById('body').clientHeight;
  document.documentElement.style.setProperty('--body-height',bodyHeight); // Height of the body variable
  document.documentElement.style.setProperty('--transform-Y', -1 * bodyHeight + "px"); // TransformY value for transition
  document.documentElement.style.setProperty('--top-height-after',bodyHeight + "px"); // Top value for transition
}