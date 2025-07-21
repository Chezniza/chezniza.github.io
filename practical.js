// target page buttons
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");

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






/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball

//functions to update variables to control ball position
function ResetPos() {
  ballX = ballY = 0; //reset to zero
  UpdateBallStyle();
}
function MovePos(leftInc, topInc) {
  ballX += leftInc;
  ballY += topInc;
  UpdateBallStyle();
}

//function to update ball css as well as display text
function UpdateBallStyle() {
    // add conditions for the boundaries basically
  // boundaries
  if (ballX < 0) {
    ballX = 0;
  }
  if (ballY < 0) {
    ballY = 0;
  }
  if (ballX > 1500) { // assume 80vw ~ 800px
    ballX = 1500;
  }
  if (ballY > 770) { // assume 80vh ~ 600px
    ballY = 770;
  }
  
  ball.style.left = ballX + "px"; //set left property
  ball.style.top = ballY + "px";  //set top property
  ball.innerText = ballX + "," + ballY; //update coordinate
}


//function just to move left (decrease left style)
function MoveLeft() {
  MovePos(-10, 0);
}

//eventlisteners to activate MovePos
leftBtn.addEventListener("click", MoveLeft);

//using anonymous function to pass in arguments from eventlistener
rightBtn.addEventListener("click", function () {
  MovePos(+10, 0);
});
upBtn.addEventListener("click", function () {
  MovePos(0, -10);
});
downBtn.addEventListener("click", function () {
  MovePos(0, +10);
});
resetBtn.addEventListener("click", ResetPos);

//using keyboard movements
document.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.code === "ArrowRight") {
    MovePos(10, 0);
  }
  if (e.code === "ArrowLeft") {
    MoveLeft();
  }
  if (e.code === "ArrowDown") {
    MovePos(0, +10);
  }
  if (e.code === "ArrowUp") {
    MovePos(0, -10);
  }
});


//define more variables and constants
var velX,velY;
const minLeft=minTop=0;
const maxTop=maxLeft=300;
//function to pick random number from a min-max range
function RandomRange(min,max){
return Math.round(Math.random()*(max-min)+min);
}
//function to activate automove
function StartAutoMove(){
velX=RandomRange(-10,10);
velY=RandomRange(-10,30);
setInterval(MoveIt,100);
}
//callback function for setInterval
function MoveIt(){
MovePos(velX,velY); //move at random velocity picked earlier
}


/* Move Pos function with collision check and reaction*/
function MovePosWifCollision(){
ballX += velX;
ballY += velY;
/*check if reach min/max left/top and flip velocity*/
if(ballX>maxLeft){
velX=-velX; //reverse the X velocity
ballX=maxLeft; //snap ballX to maxLeft
}
if(ballY>maxTop){
velY=-velY;
ballY=maxTop; //snap ballY to maxTop
}
if(ballX<minLeft){
velX=-velX;
ballX=minLeft;
}
if(ballY<minTop){
velY=-velY;
ballY=minTop;
}
UpdateBallStyle();
}


StartAutoMove(); //invoke the function to activate automove








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