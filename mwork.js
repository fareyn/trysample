

	function openSidebar() {
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("sidebar").style.display = "block";
		document.getElementById("main").style.marginLeft = "250px";
		document.getElementById("mbutton").style.zIndex = -1;
	}

	function closeSidebar(){
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.getElementById("mbutton").style.zIndex = 1;
	}

	function myFunction(x) {
		if(x.matches)
		{

			var half= document.body.clientWidth;
			console.log(half);
			half=half/2;
			console.log(half);
			half=half-50;
			console.log(half);
			document.getElementById("himage").style.width= half+"px";
			half=half-(1/4)*half;
			document.getElementById("himage").style.height= half+"px";
		}
		else{
			var t= document.body.clientWidth;
			console.log(t);
			t-=100;
			document.getElementById("himage").style.width= t+"px";
			t=t-(1/4)*t;
			document.getElementById("himage").style.height= t+"px";
		}
	}

	var x= window.matchMedia("(min-width: 1000px)");
	myFunction(x);
	x.addListener(myFunction);


	
	


