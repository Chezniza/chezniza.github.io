// target page buttons
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");


var allpages = document.querySelectorAll(".page");

// hide all pages
function hideall() {
  for (let onepage of allpages) {
    onepage.style.display = "none";
  }
}

// show a selected page
function show(pgno) {
  hideall();
  let onepage = document.querySelector("#page" + pgno);
  onepage.style.display = "block";
}

// add page switching events
page1btn.addEventListener("click", function() { show(1); });
page2btn.addEventListener("click", function() { show(2); });
page3btn.addEventListener("click", function() { show(3); });
page4btn.addEventListener("click", function () {show(4);});



show(1);

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("ul");

function toggleMenus() {
  // toggle the menuShow class
  menuItemsList.classList.toggle("menuShow");

  // change button text depending on menu state
  if (menuItemsList.classList.contains("menuShow")) {
    hamBtn.innerHTML = "Close Menu";
  } else {
    hamBtn.innerHTML = "Open Menu";
  }
}

hamBtn.addEventListener("click", toggleMenus);



function changeStyle(styleType) {
  const img = document.querySelector("#aquaImg");
  const desc = document.querySelector("#aquaDesc");

  if (styleType === "nature") {
    img.src = "images/naturestyle.jpg";
    desc.innerText = "Nature style uses plants and driftwood to resemble natural landscapes like forests and mountains.";
  } else if (styleType === "iwagumi") {
    img.src = "images/iwagumi.jpg";
    desc.innerText = "Iwagumi style focuses on using stones in simple, elegant formations. It often uses 3 to 5 main rocks.";
  } else if (styleType === "jungle") {
    img.src = "images/junglestyle.jpg";
    desc.innerText = "Jungle style looks wild and untamed. It includes a lot of plants that grow freely.";
  }
}





// PAGE 2 -----------------------------------------------------------------
// Toggle Misconception Box
const toggleMisconceptionBtn = document.querySelector("#toggleMisconceptionBtn");
const misconceptionBox = document.querySelector("#misconceptionBox");

toggleMisconceptionBtn.addEventListener("click", function () {
  if (misconceptionBox.style.display === "block") {
    misconceptionBox.style.display = "none";
    toggleMisconceptionBtn.innerHTML = "Show Misconceptions";
  } else {
    misconceptionBox.style.display = "block";
    toggleMisconceptionBtn.innerHTML = "Hide Misconceptions";
  }
});





// AUDIO ELEMENTS -------------------------------------------------------------------------
const bgMusic = document.querySelector("#bgMusic");
const clickSound = document.querySelector("#clickSound");

// Start background music after first user click
document.addEventListener("click", function () {
  bgMusic.volume = 0.5;
  bgMusic.play();
}, { once: true });


// Play click sound when the user press the buttons
const navButtons = document.querySelectorAll("nav ul li button");
for (let btn of navButtons) {
  btn.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
  });
}


// FORM EVENT HANDLER, Page 3 ------------------------------------------------------
const fishForm = document.querySelector("#fishForm");
const fishResult = document.querySelector("#fishResult");



fishForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page refresh
  const fishName = document.querySelector("#favFish").value;
  fishResult.innerHTML = "You chose: " + fishName;
});





// === MINI GAME LOGIC ------------------------------------------------------
const draggables = document.querySelectorAll(".draggable");
const dropZone = document.querySelector("#dropZone");
const gameResult = document.querySelector("#gameResult");

draggables.forEach(item => {
  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("data-item"));
  });
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault(); // Allow drop
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  const droppedItem = e.dataTransfer.getData("text/plain");

  if (droppedItem === "food") {
    gameResult.innerHTML = "Correct! The fish is happy!";
  } else {
    gameResult.innerHTML = "Oops! That's not fish food!";
  }
});

// Reset game message
function resetGame() {
  gameResult.innerHTML = "";
}


// === MOVING FISH ANIMATION --------------------------------------------
const swimFish = document.querySelector("#swimFish");

function moveFishRandomly() {
  const maxX = 120; // horizontal limit inside drop zone
  const maxY = 120; // vertical limit

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  swimFish.style.transform = `translate(${randX}px, ${randY}px)`;
}

// Move fish every 2 seconds
setInterval(moveFishRandomly, 2000);