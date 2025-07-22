//--------------------------------VARIABLES---------------------------------
let  password=document.getElementById("password-input");
let  slider=document.getElementById("length");
let  sliderValue=document.getElementById("char-value");
let upperCase=document.getElementById("checkbox_upperCase");
let lowerCase=document.getElementById("checkbox_lowerCase");
let numbers=document.getElementById("checkbox_numbers");
let symbols=document.getElementById("checkbox_symbols");
let copy=document.getElementById("copy-icon")


let button=document.getElementById("generate-btn");



//-----------------------------------SLIDER SECTION----------------------
sliderValue.textContent=slider.value; // hk hsb l slide , bghayi l raem 10, bs m tnse taeml event listner
slider.addEventListener("input", (e) => {
sliderValue.textContent=slider.value; 
  });

  //--------------------------------BUTTON SECTION--------------------------------

  
 function  generatePassword(){

    let length=slider.value;
    let passwordChars="";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let digits="0123456789";
    let symbol="!@#$%^&*()_+[]{}|;:,.<>?";
    if(upperCase.checked)
        passwordChars+=upper;
    if(lowerCase.checked)
        passwordChars+=lower;
    if(numbers.checked)
        passwordChars+=digits;
    if(symbols.checked)
        passwordChars+=symbol;
    if(passwordChars.length===0)
        return "Select option(s)"

    let result=""; //rjeena eemlna second variable la eedr sayi3 l awle fia bi tariea random w length mhadad
    //ex: passwordChars ABC123 , result C2A1B
    for(let i=0; i<length; i++){
        const randomIndex=Math.floor(Math.random()*passwordChars.length);
        result+=passwordChars[randomIndex];
    }
    
    return result;
 }

button.addEventListener("click", (e) => {
password.value=generatePassword();
  });


//------------------------------------------COPY SECTION----------------------
//TUTORIAL
copy.addEventListener("click", (e) => {
  if (password.value.length > 0) {
    navigator.clipboard.writeText(password.value);
    
    copy.innerText = "copy";      
    copy.title = "Copied";

    setTimeout(() => {
      //copy.innerHTML = "Content_copy"; fye ghayr l soura 
      copy.title = "";
      copy.innerText = "copy";     
    }, 1500); 
  }
});


