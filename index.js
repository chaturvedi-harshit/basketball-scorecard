// event handles

// HOME
const homePlusOneBtn = document.querySelector(".home_plus_one");
const homePlusTwoBtn = document.querySelector(".home_plus_two");
const homePlusThreeBtn = document.querySelector(".home_plus_three");
const guestPlusOneBtn = document.querySelector(".guest_plus_one");
const guestPlusTwoBtn = document.querySelector(".guest_plus_two");
const guestPlusThreeBtn = document.querySelector(".guest_plus_three");
const startNewGameBtn = document.querySelector(".new-game-btn");

let home_score = 0;
let guest_score = 0;

homePlusOneBtn.addEventListener("click", () => {
  home_score += 1;
  console.log(home_score);
  document.querySelector(".home_score").textContent = home_score;
});
homePlusTwoBtn.addEventListener("click", () => {
  home_score += 2;
  document.querySelector(".home_score").textContent = home_score;
});
homePlusThreeBtn.addEventListener("click", () => {
  home_score += 3;
  document.querySelector(".home_score").textContent = home_score;
});

guestPlusOneBtn.addEventListener("click", () => {
  guest_score += 1;
  document.querySelector(".guest_score").textContent = guest_score;
});
guestPlusTwoBtn.addEventListener("click", () => {
  guest_score += 2;
  document.querySelector(".guest_score").textContent = guest_score;
});
guestPlusThreeBtn.addEventListener("click", () => {
  guest_score += 3;
  document.querySelector(".guest_score").textContent = guest_score;
});

startNewGameBtn.addEventListener("click", start_new_game);

function start_new_game() {
  home_score = 0;
  guest_score = 0;
  document.querySelector(".home_score").textContent = home_score;
  document.querySelector(".guest_score").textContent = guest_score;
}
