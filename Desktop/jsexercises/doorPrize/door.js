$(document).ready(function(){
	console.log("door linked");

	var d1 = "RABIES! :)";
	var d2 = "CHOLERA! ;)";
	var d3 = "TUBERCULOSIS! :D";
	var d4 = "MALARIA! :P";
	var d4 = "SMALLPOX! ;)";
	var d5 = "YELLOW FEVER! :)";
	var d6 = "INFLUENZA! :D";
	var d7 = "HEPATITIS! :P";
	var d8 = "GOAT! :(";
	var d9 = "CHLAMYDIA! :)"



	var doors = new Array();
		doors[0] = d1;
		doors[1] = d2;
		doors[2] = d3;
		doors[3] = d4;
		doors[4] = d5;
		doors[5] = d6;
		doors[6] = d7;
		doors[7] = d8;
		doors[8] = d9;


	function randomNum() {
		var i = Math.floor(Math.random() * 8);
		console.log("random number "+ i);
		return i;
		
	}

	$("#d1").click( function(){
		$("#lightbox").show();
		$("#prize").html(doors[randomNum()]);
		console.log("clicked D1, random num: "+ randomNum());
	});

	$("#d2").click( function(){
		$("#lightbox").show();
		$("#prize").html(doors[randomNum()]);
		console.log("clicked D2, random num: "+ randomNum());

	});

	$("#d3").click( function(){
		$("#lightbox").show();
		// alert(doors[randomNum()]) ;
		$("#prize").html(doors[randomNum()]);
		console.log("clicked D3, random num: "+ randomNum());

		
	});

	$("#close").click( function(){
		$("#lightbox").hide();
		console.log("hide box");
	
	});

	
});