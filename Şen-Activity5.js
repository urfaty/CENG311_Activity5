var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	const max = Math.max(...scores);
	const index = scores.indexOf(max);

	document.getElementById("results").innerHTML="<h2> Results </h2> <p>Average score is "+average + "<br/> Highest score is " +scores[index]+"</p>";
}


function displayScores()
{
	var myTable = "<table><tr>";

	myTable += '<td><p>Name</p></td>';
	myTable += '<td><p>Average</p></td>';
	myTable += "</tr><tr>";



	for (let index = 0; index < names.length; index++) {
		var namesItem = names[index];
		myTable += `<td>${namesItem}</td>`;

		var scoresItem = scores[index];
		myTable += `<td>${scoresItem}</td>`;

		myTable += "</tr><tr>";
	
}
	   
myTable += "</tr></table>";
 
	document.getElementById("scores_table").innerHTML="<h2> Scores </h2>"+myTable;


}

function addScore()
{

    var len = names.length;
	var newitemname = document.getElementById("name").value;
	var newitemscore = document.getElementById("score").value;

	if(newitemname != '' && newitemscore>0 && newitemscore <=100)
	{
	names[len] = newitemname;  
	scores[len] = newitemscore;
	
	document.getElementById('name').value = '';
	document.getElementById('score').value = '';
	}
	else{
		document.getElementById('name').value = '';
	    document.getElementById('score').value = '';
		alert("You must enter a name and a valid score");
	}

	document.getElementById("name").focus();

}
