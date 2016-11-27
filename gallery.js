// GalleryJS

function isItem(type, v) {
	if(v.constructor.toString().indexOf(type) != -1) {
		return true;
	} else {
		return false;
	}
}
function createNode(tag='div', clazz, id) {
	if(isItem('String', tag)) {
		var node = document.createElement(tag);
	} else {
		console.warn('Tag argument must be a string!');
		return false;
	}
	if(clazz) {
		node.classList = clazz;
	}
	if(id) {
		node.id = id;
	}
	return node;
}

var GALLERYJS_DEFAULTS = {
	preview_height: 500,
	list_height: 300
}

var GALLERYJS_FOCUSED;

var GalleryJS = {
	Gallery: function(container, pictures=[], start=0, preview_height=GALLERYJS_DEFAULTS.preview_height, list_height=GALLERYJS_DEFAULTS.list_height) {
		if(container) {
			this.container = container;
			if(this.container.className != '') {
				this.container.className += ' galleryjs';
			} else {
				this.container.className = 'galleryjs';
			}
		} else {
			console.error('You must specify a containing element for gallery!');
			return false;
		}
		if(isItem('Array', pictures)) {
			this.pictures = pictures;
			if(this.pictures.length == 0) {
				console.warn('Pictures list is empty! Consider adding some!');
			}
		} else {
			this.pictures = [];
			console.error('Pictures list must be an Array!\nCreated an empty array for you.');
		}
		if(isItem('Number', start)) {
			this.currentId = start;
		} else {
			console.warn('Start picture id must be a number! Set to 0 for you.');
			this.currentId = 0;
		}
		if(isItem('Number', preview_height)) {
			this.preview_height = preview_height;
		} else {
			console.warn('Preview height must be a number! Set it to default for you.');
			this.preview_height = 500;
		}
		if(isItem('Number', list_height)) {
			this.list_height = list_height;
		} else {
			console.warn('List height must be a number! Set it to default for you.');
			this.list_height = GALLERYJS_DEFAULTS.list_height;
		}
		this.loadPictures = () => {
			var list = document.querySelector('.galleryjs-list');
			while(list.firstChild) {
				list.removeChild(list.firstChild);
			}
			for(i = 0; i < this.pictures.length; i++) {
				let pic = createNode('div', 'galleryjs-thumbnail');
				pic.style.backgroundImage = `url('${this.pictures[i].thumbnail}')`;
				pic.addEventListener('click', function(id) {
					this.setPreview(id);
				}.bind(this, i))
				list.appendChild(pic);
			}
		}
		this.setPreview = (id) => {
			let preview = document.querySelector('.galleryjs-preview');
			while(preview.firstChild) {
				preview.removeChild(preview.firstChild);
			}
			let img = new Image();
			let l = this.pictures.length - 1;
			if(id > l) {
				id = l;
			} else if (id < 0) {
				id = 0;
			}
			img.src = this.pictures[id].url;
			preview.appendChild(img);
			this.currentId = id;
		}
		this.addPicture = function(pic) {
			if(pic.galleryJSStamp) {
				this.pictures.push(pic);
				this.loadPictures();
			} else {
				console.error('Image must be of Picture() class!');
				return false;
			}
		}
		this.preview = createNode('div', 'galleryjs-preview');
		this.list = createNode('div', 'galleryjs-list');
		this.preview.style.height = this.preview_height + "px";
		this.container.appendChild(this.preview);
		this.container.appendChild(this.list);
		this.container.addEventListener('click', function(e) {
			GALLERYJS_FOCUSED = this;
		}.bind(this))
		this.loadPictures();
		this.setPreview(this.currentId);
	},
	Picture: function(url, thumbnail, title, description) {
		if(url && url.trim() != '') {
			this.url = url;
		} else {
			console.error('You must specify URL for a picture!');
			return false;
		}
		if(thumbnail && thumbnail.trim() != '') {
			this.thumbnail = thumbnail;
		} else {
			this.thumbnail = this.url;
			console.warn('Thumbnail URL is empty!\nSetting thumbnail URL to full picture URL');
		}
		if(title || title === '') {
			this.title = title;
		} else {
			this.title = 'No title';
			console.warn('Title is not specified! Will use "No title" instead.\nSpecify ' +
			'empty string if you want empty title field.');
		}
		if(description || description === '') {
			this.description = description;
		} else {
			this.description = 'No description';
			console.warn('Description is not specified! Will use "No description" instead.\n' +
			'Specify empty string if you want empty description field.');
		}
		this.galleryJSStamp = true;
	}
}

window.addEventListener('keypress', (e) => {
	if(e.keyCode == 39) {
		if(GALLERYJS_FOCUSED) {
			GALLERYJS_FOCUSED.setPreview(GALLERYJS_FOCUSED.currentId + 1);
		}
	} else if (e.keyCode == 37) {
		if(GALLERYJS_FOCUSED) {
			GALLERYJS_FOCUSED.setPreview(GALLERYJS_FOCUSED.currentId - 1);
		}
	}
})

// TESTING
var x = GalleryJS;
var pics = [
	new x.Picture('http://i.imgur.com/Jf77TsR.jpg'),
	new x.Picture('http://i.imgur.com/RYgYZr0.jpg')
]
var gal = new GalleryJS.Gallery(document.querySelector('#container'), pics);
