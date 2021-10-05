
alert("Start the game?")
const gamebox=document.getElementById("gamebox");
setTimeout("Starts in 3,2,1",3000);
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
 
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

// DARK MORE AND LIGHT MODE JQUERY (rajitk13)
$(".dark_mode").click(function () {

  $("body").css({ "background-color": "black", "color": "white" });
  $(".game").css({ "border": "1px solid white" });

});

$(".light_mode").click(function () {
  $("body").css({ "background-color": "#FFFFFF", "color": "#000000" });
  $(".game").css({ "border": "1px solid black" });

})