//$(document).ready(function(){
alert("Let the game begin!");
	

	
		
		
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;

	if (question1 == "CAR"){
	 	correct++;
 }
 	if (question2 == "NON"){
 		correct++;
 } 
 	if (question3 == "TS"){
 		correct++;
}
	if (question4 == "TMR"){
		correct++;
     }	
  var messages = ["Superb!", "You need to hit the books!","Disastrous!"];
  var pictures = ["assets/images/dumblin.gif","assets/images/meh.gif","assets/images/snape.gif"];
  var range;

  	if (correct < 1){
  		range = 2;
  	}
  	if (correct > 0 && correct < 4){
  		range = 1;
  	}

  	if (correct > 2){
  		range = 0;
  	}

  var count = 30;
var counter = setInterval(timer,3000);
	count = count-1;
		if (count <= 0)
		{
	clearInterval(counter);
	alert("times up!");
		}
	 document.getElementById("timer").innerHTML = count + " secs ";
	 document.getElementById("after_submit").style.visibility = "visible";
	 document.getElementById("message").innerHTML = messages[range];
     document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
     document.getElementById("pictures").src = pictures[range];
}



 
   
   








 






 // required to not refresh the page; just leave this here