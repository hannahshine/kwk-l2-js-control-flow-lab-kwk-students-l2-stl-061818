// Write your code in this file!
function scuberGreetingForFeet(someValue){
  if (someValue<=400){
    return "This one is on me!";
    }
  else if (someValue>2000 && someValue<2500) {
    return "I will gladly take your thirty bucks."
    }
  else if(someValue>=2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

var switchOnCharmFromTip = document.getElementById("generous").value;
switch("generous"){
  case:"generous";
  text="Thank you so much.";
  case:"not as generous";
  text="Thank you.";
  
  
}