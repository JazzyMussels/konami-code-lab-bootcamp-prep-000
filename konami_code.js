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
document.body.addEventListener("keydown", (pressed) => {
  let index = 0
  const key = pressed.key 
  if (codes[index] == key) {
    ++index 
  } 
  
  else {
    idx = 0 
  }
  
  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0 
  }
}); 
}

