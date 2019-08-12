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

}

  document.addEventListener('keydown', function(e) {
   var index = 0
   function onKeyDownHandler(e) {
  const key = e.key
 
  if (key === codes[index]) {
    index+=1;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
   }
  
})
