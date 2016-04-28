// http://www.webmasterpro.de/coding/article/objektorientierte-programmierung-in-javascript.html

function exercise () {
	// private properties
	var a;
	var b;
	var x;
	var text;
	var szGood = [
		"Völlig richtig!",
		"Ganz genau!",
		"Richtig! Weiter so!",
		"Das ist korrekt!",
		"So ist es!",
		"In der Tat!",
		"Exakt!"
		];

	var szBad = [
		"Hmm. Überleg nochmal.",	
		"Nicht ganz.",	
		"Fast. Noch ein Versuch!",	
		"Netter Versuch!",	
		"Bist Du sicher?",	
		"Leider nicht.",	
		"Keineswegs!",	
		"Das ist so nicht ganz korrekt.",	
		"Durchaus nicht."
		];
	
	// private methods
	var rand = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	// public methods
	this.new = function() {
			a = rand(1, 50);
			b = rand(1, 50);
			x = a + b;
			text = "Wieviel ist " + a + " + " + b + "?";
	}
	
	this.getText = function() {
		return text;
	}
	
	this.getX = function() {
		return x;
	}
	
	this.guess = function(g) {
		if(g == x) {
			$("#auswertung").attr("class", "alert alert-success");
			return(szGood[rand(0, szGood.length - 1)]);
		} else {
			$("#auswertung").attr("class", "alert alert-danger");
			return(szBad[rand(0, szBad.length - 1)]);
		}
	}
}

$(function() {
	Q = new exercise();
	Q.new();
	$("#aufgabe").text(Q.getText());
	$("#guess").focus();
});


$('#check').on('click', function () {
	var txt = Q.guess($("#guess").val());
	$("#auswertung").text(txt);
	$("#guess").val("");
	$("#guess").focus();
});

$("#guess").keyup( function(c) {
	if(c.which == 13) {
		$("#check").click();
	}
});

