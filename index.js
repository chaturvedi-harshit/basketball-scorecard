// Selectors
const homePlusOneBtn = document.querySelector(".home_plus_one");
const homePlusTwoBtn = document.querySelector(".home_plus_two");
const homePlusThreeBtn = document.querySelector(".home_plus_three");
const guestPlusOneBtn = document.querySelector(".guest_plus_one");
const guestPlusTwoBtn = document.querySelector(".guest_plus_two");
const guestPlusThreeBtn = document.querySelector(".guest_plus_three");
const startNewGameBtn = document.querySelector(".new-game-btn");

let home_score = 0;
let guest_score = 0;

// Event Listners
homePlusOneBtn.addEventListener("click", () => incrementScore("home", 1));
homePlusTwoBtn.addEventListener("click", () => incrementScore("home", 2));
homePlusThreeBtn.addEventListener("click", () => incrementScore("home", 3));

guestPlusOneBtn.addEventListener("click", () => incrementScore("guest", 1));
guestPlusTwoBtn.addEventListener("click", () => incrementScore("guest", 2));
guestPlusThreeBtn.addEventListener("click", () => incrementScore("guest", 3));
startNewGameBtn.addEventListener("click", startNewGame);

// Functions
function incrementScore(team, points) {
  if (team === "home") {
    home_score += points;
    displayScore(team);
    checkAndHiglightLeader();
  } else if (team === "guest") {
    guest_score += points;
    displayScore(team);
    checkAndHiglightLeader();
  }
}

function displayScore(team) {
  if (team === "home") {
    document.querySelector(".home_score").textContent = home_score;
  } else if (team === "guest") {
    document.querySelector(".guest_score").textContent = guest_score;
  }
}

function startNewGame() {
  home_score = 0;
  guest_score = 0;
  document.querySelector(".home_score").textContent = home_score;
  document.querySelector(".guest_score").textContent = guest_score;
  document.querySelector(".home-score-card").style.backgroundColor = "black";
  document.querySelector(".guest-score-card").style.backgroundColor = "black";
}

function checkAndHiglightLeader() {
  document.querySelector(".home-score-card").style.backgroundColor = "black";
  document.querySelector(".guest-score-card").style.backgroundColor = "black";

  if (home_score > guest_score) {
    document.querySelector(".home-score-card").style.backgroundColor = "green";
  }
  if (guest_score > home_score) {
    document.querySelector(".guest-score-card").style.backgroundColor = "green";
  }
}
