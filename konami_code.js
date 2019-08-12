const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
   let index = 0
document.body.addEventListener("keydown", (pressed) => {
  if (codes[index] === pressed.key) {
    index += 1
  } 
  else {
    idx = 0 
  }
  if (index === 10) {
    alert("Hurray!");
    index = 0 
  }
})
}

