// motodynasty


//create select 
	function makeComps(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = cV('selectCompany'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "theCompany");
		for(var i=0, j=companies.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = companies[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);

		}
		selectLi.appendChild(makeSelect);
	}

	var companies = ["--Select Rider--", "#1 Ryan Villipoto", "#5 Ryan Dungey", "#10 Justin Brayton","#12 Jake Weimer", "#18 Davi Millsaps", "#20 Broc Tickle", "#22 Chad Reed"."#29 Andrew Short", "#39 Rober Kiniry", "#41 Trey Canard", "#46 Weston Peick", "#49 Phillip Nicoletti", "#51 Justin Barcia", "#54 Les Smith", "#57 Ben Lamay", "#64 Justin Sipes", "#75 Josh Hill", "#84 Chris Blose", "#85 Kyle Partridge", "#800 Mike Alessi", "#79 Kevin Rookstool", "#83 Austin Howell", "#93 Landen Powell", "#95 Tevin Tapia", "#206 Travis Sewell", "#222 Chris Howell", "#229 Jeff Loop","#247 Teddy Parks", "#250 Justin Keeney","#281 Lance Phillips","#297 Dalton Carlson","#325 Jarred Browne","#374 Cody Gilmore","#686 Daniel McCoy", "#903 Anonion Balbi", "#982 Akira Narita"];
