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
  document.body.addEventListener("keydown", function(e){
    checkKeys(e); 
  });
}

let index = 0; 

function checkKeys(e){
  const key = e.key; 
  if (key === codes[index]){
    index++; 
    if (index === codes.length){
      alert("the code was right!");
      
      index = 0; 
    }
  } else {
    index = 0; 
  }
}

