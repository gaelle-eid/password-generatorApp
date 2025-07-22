//--------------------------------SLIDER SECTION---------------------------------

let  slider=document.getElementById("length");
let  sliderValue=document.getElementById("char-value");
sliderValue.textContent=slider.value; // hk hsb l slide , bghayi l raem 10, bs m tnse taeml event listner
slider.addEventListener("input", (e) => {
sliderValue.textContent=slider.value; 
  });
