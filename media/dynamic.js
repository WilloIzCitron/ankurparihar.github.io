var content = document.getElementsByClassName("content")[0];
var parallax_container = document.getElementsByClassName("parallax_container")[0];
var home_hero = document.getElementsByClassName("home_hero")[0];
var page_location_text = document.getElementsByClassName("page-location-text")[0];
var cur_tab = "nav-home-icon";
var url_trim, url_slashed;
var references = {
	"": {
		id: "nav-home-icon",
		page_location_text: "Home"
	},
	"recent": {
		id: "nav-recent-icon",
		page_location_text: "Recent"
	},
	"browse": {
		id: "nav-browse-icon",
		page_location_text: "Browse"
	},
	"search": {
		id: "nav-search-icon",
		page_location_text: "Search"
	},
	"res-iitr": {
		id: "nav-res-iitr",
		page_location_text: "IITR"
	},
	"demo": {
		id: "nav-live-demo",
		page_location_text: "Live Demos"
	},
	"changelog": {
		id: "nav-about-whatnew",
		page_location_text: "What's New"
	},
	"about-me": {
		id: "nav-resource-aboutme",
		page_location_text: "About Me"
	}
};

function loadDoc(relative_url, origin, flag) {
	if (cur_tab == origin) {
		return;
	}
	// console.log("processing...");
	var xhttp;
	if (window.XMLHttpRequest) {
		// code for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// Small tasks first
			if (flag != "no_toggle_nav") {
				toggleNav();
			}
			window.history.pushState(null, null, relative_url.replace("index.html", ""));
			update_nav_highlight(origin);
			// Replace html
			var fake_elem = document.createElement("div");
			fake_elem.innerHTML = this.responseText;
			content.innerHTML = fake_elem.getElementsByClassName('content')[0].innerHTML;
			if (origin == "nav-home-icon") {
				parallax_container.style.display = "block";
				home_hero.style.display = "block";
				calculateHeroScale();
			}
			else {
				parallax_container.style.display = "none";
				home_hero.style.display = "none";
			}
			update_url_trim();
			page_location_text.innerHTML = references[url_trim].page_location_text;
			backToTop();
		}
		else if (this.readyState == 4) {
			displayError(this.status, this.statusText);
		}
	};
	xhttp.open("GET", relative_url, true);
	xhttp.send();
}

function update_nav_highlight(origin_id) {
	document.getElementById(cur_tab).parentElement.classList.remove("active-list-tile");
	document.getElementById(origin_id).parentElement.classList.add("active-list-tile");
	cur_tab = origin_id;
}

window.addEventListener('popstate', function (e) {
	// var pop_event = e;
	update_url_trim();
	if (url_trim == "demo" && Projects[url_slashed[4]]) {
		loadDoc("/demo/" + url_slashed[4] + "/index.html", references[url_trim].id, "no_toggle_nav");
	}
	else {
		loadDoc(((url_trim == "") ? "" : "/") + url_trim + "/index.html", references[url_trim].id, "no_toggle_nav");
	}
});

function update_url_trim() {
	url_slashed = window.location.href.split("/");
	url_trim = url_slashed[3];
}

function displayError(status, statusText) {
	parallax_container.style.display = "none";
	home_hero.style.display = "none";
	content.innerHTML = '\
	<div class="error-container flex justify-center align-center">\
	<div>\
	<div class="error-message">\
	<h1>Something\'s not right :(</h1>\
		</div>\
		<h2 id="error-code">Error Code: NULL</h2>\
		</div>\
		</div>';
	// console.log(status);
	document.getElementById("error-code").innerHTML = "Error Code: " + status + " " + statusText;
	toggleNav();
}

function injectJS(file_url){
	if(!file_url || file_url=="") return;
	var jsELem = document.createElement("script");
	jsELem.type = "application/javascript";
	jsELem.src = file_url;
	content.appendChild(jsELem);
}