function hovercard(list) {
	var hovercard=document.getElementsByClassName("Gp")[0].contentWindow.document;
	for (var i=0; i<list.length/2; i++) {
		var index=list.length/2+i;
		var status='<div><div class="vta">'+list[i].toLowerCase()+"<wbr>@students.harker.org</div></div>"+list[index];
		if (hovercard.getElementsByClassName("vta")[0].innerHTML.indexOf(list[i].toLowerCase()) != -1) {
			list[index]=list[index].replace(/class="Xx" tabindex="-1" dir="ltr"/g, 'class="mna"');
			list[index]=list[index].replace(/<span data-emo="/g, "");
			while (list[index].indexOf(' vm" style="display:inline-block;"></div') != -1)
				list[index]=list[index].substring(0, list[index].indexOf('" class="Pt tGvGdc"'))+list[index].substring(list[index].indexOf(' vm" style="display:inline-block;"></div')+48);
			document.getElementsByClassName("Gp")[0].contentWindow.document.getElementsByClassName("abc Fdc")[0].innerHTML='<div><div class="vta">'+list[i].toLowerCase()+"<wbr>@students.harker.org</div></div>"+list[index];
			for (var j=0; j<hovercard.getElementsByClassName("mna").length; j++) {
				var link=hovercard.getElementsByClassName("mna")[j].innerHTML;
				for (var k=10; k<link.length; k+=14) {
					document.getElementsByClassName("Gp")[0].contentWindow.document.getElementsByClassName("mna")[j].innerHTML=link.substring(0, k)+"<wbr>"+link.substring(k);
					link=hovercard.getElementsByClassName("mna")[j].innerHTML;
				}
			}
		}
	}
}
var list=[];
document.addEventListener("mousemove", function() {
	var frame2=document.getElementsByClassName("a1j")[0].contentWindow.document;
	for (var i=0; i<frame2.getElementsByClassName("HfhnEf").length; i++)
	list.push(frame2.getElementsByClassName("HfhnEf")[i].getAttribute("hovercard-email").slice(0, frame2.getElementsByClassName("HfhnEf")[i].getAttribute("hovercard-email").indexOf("@")));
	for (var j=0; j<frame2.getElementsByClassName("HHWV CRO0lc").length; j++)
	list.push(frame2.getElementsByClassName("HHWV CRO0lc")[j].innerHTML);
	setTimeout(function() {hovercard(list)}, 500);
	setTimeout(function() {hovercard(list)}, 750);
	setTimeout(function() {hovercard(list)}, 1500);
	list=[];
}, false);
