
var map_address = ["task1.jpg","task2.jpg","task3.jpg","task4.jpg","task5.jpg","task6.jpg"];
var i = 0;

function slideShow()
{
	document.getElementById("slider").src = ( "Assets/Images/" + map_address[i] );
	
	i++;
	
	setTimeout(slideShow,5000);
	if(i == map_address.length) 
	{ i=0;}
}

function validate()
{	

	if( document.contactForm.fname.value == "")
	{
		document.getElementById("firstnameMessage").innerHTML = " (First name is required!) ";
		return false;
	}	
	else if( document.contactForm.lname.value == "")
	{
		document.getElementById("lastnameMessage").innerHTML = " (Last name is required!) ";
		return false;
	}
	else if( document.contactForm.email.value == "")
	{
		document.getElementById("emailMessage").innerHTML = " (email is required!) ";
		return false;
	}
	
	return ( true );
}


video_list = new Array(3);
video_list[0] = "https://www.youtube.com/embed/WAl1mxnr-C8";
video_list[1] = "https://www.youtube.com/embed/zBazJls73XQ";
video_list[2] = "https://www.youtube.com/embed/IN5eK5E1Elw";

            
description = new Array(3);
description[0] = "The skeld map description";
description[1] = "Mira HQ map description";
description[2] = "Polus map description";

            
function change_video(vid_number) {
	document.getElementById("video2").src = video_list[vid_number];
	document.getElementById("description").innerHTML = description[vid_number];
}    

var question = [];

var answer = [];

question[0] = "Who's among us creator?";
answer[0] = "Innersloth";

question[1] = "How many maps does the game have?";
answer[1] = "3";

question[2] = "When did the game become more popular?";
answer[2] = "2020";

question[3] = "Who needs to complete tasks?";
answer[3] = "Crewmates";

question[4] = "What is the maximum number of players?";
answer[4] = "10";

var currentQuestion;   

function setQuestion(questionNumber){
	currentQuestion = questionNumber;
	document.getElementById("question").innerHTML = question[questionNumber];
}	

function checkAnswer() {
	var tmpAnswer = document.getElementById("answer").value;
	
	if (tmpAnswer == answer[currentQuestion]){
		document.getElementById("correct").innerHTML = "Correct!!!";
	}else {
		document.getElementById("correct").innerHTML = "Wrong!!!";
	}
}


