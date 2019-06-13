var t = {
	"text"   : "",
	"image"  : "",
	readText : function(){ //console.log("r");
		t.text = $("#ta").val();
		t.writeText(t.text, true);
	},

	writeText : function(text, clear){ //console.dir("w:: " + text);
		t.image = text;
		var letter = null;

        if( clear ) { console.log("clear \n");
			$("#text").html("");
		}

		for(var i = 0; i < t.image.length; i++) {
			letter = $("<img></img>");
			$("#text").append( letter.attr( {"src" : "letters/" + l[t.image[i].toLowerCase()] } ).css({"width" : "63px"}) );
			letter = "";
		}
	},

	spellNumbers : function() {
		var n = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481";

		for(var i = 0; i < n.length; i++) {
			if( Number.isInteger( parseInt(n[i]), false ) ) {//console.log(n[i]);
				t.writeText(ni[n[i]]);
			}
			else if(n[i] == ".") {
				t.writeText("point", false);
			}
			else {
				t.writeText(" ", false);
			}
		}
	},

	deletrearNumeros : function() {
		var n = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481";

		for(var i = 0; i < n.length; i++) {
			if( Number.isInteger( parseInt(n[i]), false ) ) {//console.log(n[i]);
				t.writeText(ne[n[i]]);
			}
			else if(n[i] == ".") {
				t.writeText("punto", false);
			}
			else {
				t.writeText(" ", false);
			}
		}
	},
};


var l = {
	"a" : "a.jpg",
	"b" : "b.jpg",
	"c" : "c.jpg",
	"d" : "d.jpg",
	"e" : "e.jpg",
	"f" : "f.jpg",
	"g" : "g.jpg",
	"h" : "h.jpg",
	"i" : "i.jpg",
	"j" : "j.jpg",
	"k" : "k.jpg",
	"l" : "l.jpg",
	"m" : "m.jpg",
	"n" : "n.jpg",
	"o" : "o.jpg",
	"p" : "p.jpg",
	"q" : "q.jpg",
	"r" : "r.jpg",
	"s" : "s.jpg",
	"t" : "t.jpg",
	"u" : "u.jpg",
	"v"  : "v.jpg",
	"w" : "w.jpg",
	"x" : "x.jpg",
	"y" : "y.jpg",
	"z" : "z.jpg",
	"á" : "aa.jpg",
	"é" : "ea.jpg",
	"í" : "ia.jpg",
	"ó" : "oa.jpg",
	"ú" : "ua.jpg",
	"ñ" : "nt.jpg",
	"ü" : "up.jpg",
	" " : "sp.jpg",
	"." : "dot.jpg",
	"," : "com.jpg"
};

var ne = [
	"cero",
	"uno",
	"dos",
	"tres",
	"cuatro",
	"cinco",
	"seis",
	"siete",
	"ocho",
	"nueve"
];

var ni = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
];


$(document).ready(function(){
	//t.deletrearNumeros();
	//*
	$("#ta").on("keyup",function(){
		t.readText();
		console.log($("#ta").text());
	});
//*/
})