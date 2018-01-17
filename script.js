// TOP Frame
if (window.self===window.top) {
	window.addEventListener("message", function(event) {
		if (event.origin!=="https://hangouts.google.com" || event.data.indexOf(",null]")!=-1) return;
		if (document.getElementsByClassName("Gp")[0]!=undefined)
			document.getElementsByClassName("Gp")[0].contentWindow.postMessage(event.data, "https://apis.google.com");
	}, false);
}
// WBLH0-0 (frame2)
else if (window.self.location.hash.indexOf("-0")!=-1) {
	var list=[];
	document.addEventListener("mouseover", function() {
			var HfhnEf=document.getElementsByClassName("HfhnEf");
			for (var i=0; i<HfhnEf.length; i++)
				list.push(HfhnEf[i].getAttribute("hovercard-oid"));
			var HHWV_CRO0lc=document.getElementsByClassName("HHWV CRO0lc");
			for (var j=0; j<HHWV_CRO0lc.length; j++)
				list.push(HHWV_CRO0lc[j].innerHTML);
			parent.postMessage(list, "https://mail.google.com");
			list=[];
	}, false);
}
// HOVERCARD Frame
else if (window.self.origin=="https://apis.google.com") {
	function hovercard(event) {
		for (var i=0; i<event.data.length/2; i++) {
			var index=event.data.length/2+i;
			if (document.getElementsByClassName("ho Yub aYpOjc")[0].getAttribute("oid")==event.data[i]) {
				event.data[index]=event.data[index].replace(/class="Xx" tabindex="-1" dir="ltr"/g, 'class="mna"');
				event.data[index]=event.data[index].replace(/<span data-emo="/g, "");
				while (event.data[index].indexOf(' vm" style="display:inline-block;"></div')!=-1)
					event.data[index]=event.data[index].substring(0, event.data[index].indexOf('" class="Pt tGvGdc"'))+event.data[index].substring(event.data[index].indexOf(' vm" style="display:inline-block;"></div')+48);
				var abc_Fdc=document.getElementsByClassName("abc Fdc")[0];
				if (abc_Fdc.childNodes[1]==undefined)
					abc_Fdc.innerHTML+=event.data[index];
				else
					abc_Fdc.childNodes[1].nodeValue=event.data[index];
				for (var j=0; j<document.getElementsByClassName("mna").length; j++)
					document.getElementsByClassName("mna")[j].setAttribute("style","word-break: break-all;");
			}
		}
	}
	window.addEventListener("message", function(event) {
		if (event.origin!=="https://mail.google.com" || event.data.indexOf(':".."}')!=-1) return;
		data=event;
	}, false);
	var now=new Date(), count=0;
	var callback=function(mutationsList) {
		if (new Date()-now>800)
			count=1;
		else if (count>=2) {
			hovercard(data);
			count=0;
		}
		else
			count++;
		now=new Date();
	};
	var observer=new MutationObserver(callback);
	observer.observe(document.getElementsByTagName("body")[0], {childList: true});
}