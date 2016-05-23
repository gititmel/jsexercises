$( document ).ready( function(){
	console.log("jQuery linked")

	$( "#topBox" ).animate(
		{top:"-120px"}, 1000, "linear",
			function(){
				$("#h1Name").fadeOut(1000);}
	);

	$( "#bottomBox" ).animate(
		{bottom:"-120px"}, 1000, "linear",
			function(){
				$("#splashContent img").add("#myName").add("#navBar").fadeIn(2000);}
					
	);

	$( "#aboutContent" ).click(function() {
  console.log( "Handler for .click() called." );
	});

});