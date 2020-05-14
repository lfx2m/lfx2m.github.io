const churches = [
	{
		"name":     "Heilige-Familie-Kirche",
		"subtitle": "katholisch",
		"img":      "https://upload.wikimedia.org/wikipedia/commons/2/26/Heilige-Familie-Kirche_%28Berlin-Lichterfelde%29.jpg",
		"address":  "Kornmesserstraße 2, 12205 Berlin",
		"url":      "http://www.heilige-familie-berlin.de"
	},{
		"name":		"Johanneskirche",
		"subtitle":	"evangelisch",
		"img":		"https://upload.wikimedia.org/wikipedia/commons/b/bf/Johanneskirche_%28Berlin-Lichterfelde%29.jpg",
		"address":	"Ringstraße 36, 12205 Berlin",
		"url":		"http://www.ev-johannes.de/"
	},{
		"name":		"Martin-Luther-Kirche",
		"subtitle": "evangelisch",
		"img":		"https://upload.wikimedia.org/wikipedia/commons/e/e1/Martin-Luther-Kirche_%28Berlin-Lichterfelde%29.jpg",
		"address":	"Hortensienstraße 18, 12203 Berlin",
		"url":		"http://www.martin-luther-lichterfelde.de/"
	},{
		"name":		"Pauluskirche",
		"subtitle": "evangelisch",
		"img":		"https://upload.wikimedia.org/wikipedia/commons/a/a4/Pauluskirche_Lichterfelde.jpg",
		"address":	"Hindenburgdamm 101a, 12203 Berlin",
		"url":		"http://www.paulus-lichterfelde.de/"
	},{
		"name":		"Petrus-Kirche",
		"subtitle": "evangelisch",
		"img":		"https://upload.wikimedia.org/wikipedia/commons/5/53/Petruskirche_Lichterfelde.jpg",
		"address":	"Oberhofer Platz, 12209 Berlin",
		"url":		"http://www.petrus-kultur.de/"
	},{
		"name":		"St.-Annen-Kirche",
		"subtitle": "katholisch",
		"img":		"https://upload.wikimedia.org/wikipedia/commons/6/62/St._Annen-Kirche_%28Berlin-Lichterfelde%29-2.jpg",
		"address":	"Gardesch&uumltzenweg 17, 12203 Berlin",
		"url":		"http://www.st-annen-berlin.de/"
	}]

addEventListener('DOMContentLoaded', function () {
	// loading initial start page
	showStart();
	document.querySelector(".menubutton").addEventListener("click", function () {
		var nav = document.querySelector("nav");
		nav.classList.toggle("show");
	});

}, false);
addEventListener("hashchange", onHashChange);

function onHashChange(event) {
	let hash = event.newURL.split('#')[1];
	switch (hash) {
		case "start":
			showStart();
			break;
		case "churches":
			showChurches()
			break;
		case "kontakt":
			showImpressum();
			break;
		case "":
			break;
		default:
			showStart();
	}
}

function clearInhalt() {
	let inhalt = document.getElementById("inhalt");
	inhalt.innerText = " ";
}

function switchInhalt(page, link) {
	// clear current page from content container
	clearInhalt();

	// append new page fragment to content container
	let node = document.getElementById(page);
	let clone = node.cloneNode(true);
	document.getElementById("inhalt").appendChild(clone.content);

	// clear active class tag from previous page fragment
	let activePage = document.getElementsByClassName("active");
	activePage[0].classList.toggle("active");

	// set new page fragment as active
	let newFrag = document.getElementById(link);
	newFrag.classList.toggle("active");
	let nav = document.querySelector("nav");
	if (nav.classList.contains("show")) nav.classList.toggle("show");
}
function showStart() {
	switchInhalt("intro", "start");
}

function showChurches() {
	switchInhalt("church", "churches");
	
    let cardsDiv = document.querySelector('div.cards');
    let template = document.querySelector('#card');
    
    churches.forEach(function(element) {
        let clone = document.importNode(template.content, true);
        
        clone.querySelector('h3').insertAdjacentHTML('beforeend', element.name);
        clone.querySelector('div.subtitle').innerHTML = element.subtitle;
        clone.querySelector('img').src = element.img;
        clone.querySelector('#cardAddress').innerHTML = element.address;
        clone.querySelector('#cardUrl a').innerHTML = element.url;
        
        cardsDiv.appendChild(clone);
    });
}

function showImpressum() {
	switchInhalt("impressum", "kontakt");
}
