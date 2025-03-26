let display=document.getElementById("display");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);


arr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    if(display.value=="error"){
      string="";
      display.value= string;
    }
 
    if(e.target.innerHTML == 'ANS'){
      calculate();
    }
    else if(e.target.innerHTML == 'AC'){
      string="";
      display.value= string;
    }
    else if(e.target.innerHTML == 'DEL'){
     backsps();
    }
    else{
      string+=e.target.innerHTML;
      display.value= string;
    }
  })
})

body.addEventListener('onkeydown',(e)=>{
isKeyPressed(e);})

// function to handle keypress
function isKeyPressed(event) {
  let key = event.key;
  if (key=="Enter" || key=="=") {
    calculate();
  }
  
  else if(key=="Delete"){
    string="";
    display.value= string;
  }

  }


// function to calculate
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "error";
  }
}
// function to remove a single text
function backsps(){
  string=string.substring(0,string.length-1);
  display.value= string;
}