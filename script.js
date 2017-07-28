// TOP Frame
if (window.self===window.top) {
	window.addEventListener("message", function(event) {
		if (event.origin !== "https://hangouts.google.com" || event.data.indexOf(",null]") != -1)
			return;
		document.getElementsByClassName("Gp")[0].contentWindow.postMessage(event.data, "https://apis.google.com");
	}, false);
}
// WBLH0-0 (frame2)
if (document.getElementsByClassName("HHWV CRO0lc")[0] != undefined) {
	var list = [];
	document.addEventListener("mousemove", function() {
		for (var i=0; i<document.getElementsByClassName("HfhnEf").length; i++)
		list.push(document.getElementsByClassName("HfhnEf")[i].getAttribute("hovercard-email").slice(0, document.getElementsByClassName("HfhnEf")[i].getAttribute("hovercard-email").indexOf("@")));
		for (var j=0; j<document.getElementsByClassName("HHWV CRO0lc").length; j++)
		list.push(document.getElementsByClassName("HHWV CRO0lc")[j].innerHTML);
		parent.postMessage(list, "https://mail.google.com");
		list = [];
	}, false);
}
// HOVERCARD Frame
if (document.getElementById("js") != null) {
	function hovercard(event) {
		for (var i=0; i<event.data.length/2; i++) {
			var index = event.data.length/2 + i;
			var status = '<div><div class="vta">' + event.data[i].toLowerCase() + "<wbr>@students.harker.org</div></div>" + event.data[index];
			if (document.getElementsByClassName("vta")[0].innerHTML.indexOf(event.data[i].toLowerCase()) != -1) {
				event.data[index] = event.data[index].replace(/class="Xx" tabindex="-1" dir="ltr"/g, 'class="mna"');
				event.data[index] = event.data[index].replace(/<span data-emo="/g, "");
				while (event.data[index].indexOf(' vm" style="display:inline-block;"></div') != -1)
					event.data[index] = event.data[index].substring(0, event.data[index].indexOf('" class="Pt tGvGdc"')) + event.data[index].substring(event.data[index].indexOf(' vm" style="display:inline-block;"></div') + 48);
				document.getElementsByClassName("abc Fdc")[0].innerHTML = '<div><div class="vta">' + event.data[i].toLowerCase() + "<wbr>@students.harker.org</div></div>" + event.data[index];
				for (var j=0; j<document.getElementsByClassName("mna").length; j++) {
					var link = document.getElementsByClassName("mna")[j].innerHTML;
					for (var k=10; k<link.length; k+=14) {
						document.getElementsByClassName("mna")[j].innerHTML = link.substring(0, k) + "<wbr>" + link.substring(k);
						link = document.getElementsByClassName("mna")[j].innerHTML;
					}
				}
			}
		}
	}
	window.addEventListener("message", function(event) {
		if (event.origin !== "https://mail.google.com" || event.data.indexOf(':".."}') != -1)
			return;
		setTimeout(function() {hovercard(event)}, 500);
		setTimeout(function() {hovercard(event)}, 750);
		setTimeout(function() {hovercard(event)}, 1500);
	}, false);
}
