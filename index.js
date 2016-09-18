// Prototyp galerii
function Gallery(container, pictures = [], preview_height = 500, thumb_size = 64, list_height = 300, background="transparent") {
	this.container = container; // Tag, w którym umieszczona jest galeria
	this.container.className += " galleryjs";
	this.pictures = pictures; // Lista URL do pełnych zdjęć
	this.preview_height = preview_height;
	this.list_height = list_height;
	this.thumb_size = thumb_size;
	this.background = background;
	this.preview = document.createElement("div"); // podgląd zdjęcia
	this.preview.className = "preview";
	this.preview.style.backgroundColor = this.background;
	this.preview.style.height = this.preview_height + "px";
	this.preview.addEventListener("click", function(e) {
		var mouseX = e.clientX;
		var preview = this.preview.getBoundingClientRect();
		var halfWidth = preview.x + preview.width / 2;
		if(mouseX > halfWidth) {
			this.changePicture("next");
		} else {
			this.changePicture("prev");
		}
	}.bind(this))
	this.more = document.createElement("div");
	this.more.className = "more";
	this.currentTitle = document.createElement("h1");
	this.currentDesc = document.createElement("p");
	this.changePicture = function(id) {
		if(typeof id == "number") {
			if(id < 0) {
				id = this.pictures.length - 1;
			} else if (id >= this.pictures.length) {
				id = 0;
			}
			this.currentId = id;
		} else if(typeof id == "string") {
			if(id == "next") {
				this.currentId++;
			} else if(id == "prev") {
				this.currentId--;
			}
			if(this.currentId < 0) {
				this.currentId = this.pictures.length - 1;
			} else if (this.currentId >= this.pictures.length) {
				this.currentId = 0;
			}
			id = this.currentId;
		}
		var picture = this.pictures[id];
		this.preview.style.backgroundImage = "url('" + picture.url + "')";
		this.currentTitle.innerHTML = picture.pic_title;
		this.currentDesc.innerHTML = picture.desc;
	}
	this.currentId = 0;
	this.changePicture(0);
	this.more.appendChild(this.currentTitle);
	this.more.appendChild(this.currentDesc);
	this.preview.appendChild(this.more);
	this.container.appendChild(this.preview);
	this.list = document.createElement("div"); // kontener dla listy zdjęć
	this.list.className = "list";
	this.list.style.height = this.list_height + "px";
	this.container.appendChild(this.list);
	this.list_ul = document.createElement("ul"); // lista zdjęć
	this.list.appendChild(this.list_ul);
	this.list_thumbs = new Array();
	// utworzenie li dla każdego zdjęcia z listy
	for(i = 0; i < this.pictures.length; i++) {
		this.list_thumbs.push(document.createElement("li"));
		this.list_thumbs[i].className = "thumb";
		this.list_thumbs[i].style.backgroundImage = "url('" + this.pictures[i].thumb + "')";
		this.list_thumbs[i].style.backgroundColor = this.background;
		this.list_thumbs[i].style.height = this.thumb_size + "px";
		this.list_thumbs[i].style.width = this.thumb_size + "px";
		this.list_thumbs[i].addEventListener("click", function(id) {
			this.changePicture(id);
		}.bind(this, i))
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
