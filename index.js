// Prototyp galerii
function Gallery(container, pictures = []) {
	this.container = container; // Tag, w którym umieszczona jest galeria
	this.container.className += " galleryjs"
	this.pictures = pictures; // Lista URL do pełnych zdjęć
	this.preview = document.createElement("div"); // podgląd zdjęcia
	this.preview.className = "preview";
	this.preview.style.backgroundImage = "url('" + this.pictures[0].url + "')";
	this.container.appendChild(this.preview);
	this.list = document.createElement("div"); // kontener dla listy zdjęć
	this.list.className = "list";
	this.container.appendChild(this.list);
	this.list_ul = document.createElement("ul"); // lista zdjęć
	this.list.appendChild(this.list_ul);
	this.list_thumbs = new Array();
	// utworzenie li dla każdego zdjęcia z listy
	for(i = 0; i < this.pictures.length; i++) {
		this.list_thumbs.push(document.createElement("li"));
		this.list_thumbs[i].className = "thumb";
		this.list_thumbs[i].style.backgroundImage = "url('" + this.pictures[i].thumb + "')";
		this.list_thumbs[i].addEventListener("click", function(url) {
			console.log("test");
			this.preview.style.backgroundImage = "url('" + url + "')";
		}.bind(this, this.pictures[i].url))
		this.list_ul.appendChild(this.list_thumbs[i]);
	}
}

// Prototyp zdjęcia
function Picture(url, pic_title = "Brak tytułu", desc = "Brak opisu", thumb = false, timestamp = new Date()) {
	this.url = url;
	this.pic_title = pic_title;
	this.desc = desc;
	this.thumb = thumb || this.url; // Jeśli nie ma ustalonej miniatury, to używa url do pełnego rozmiaru
	this.timestamp = timestamp;
}
