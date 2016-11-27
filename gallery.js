// GalleryJS

function isItem(type, v) {
	if(v.constructor.toString().indexOf(type) != -1) {
		return true;
	} else {
		return false;
	}
}

var GalleryJS = {
	Gallery: function(container, pictures=[], preview_height=500, list_height=300) {
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
		if(isItem('Number', preview_height)) {
			this.preview_height = preview_height;
		} else {
			console.warn('Preview height must be a number! Set it to default for you.');
			this.preview_height = 500;
		}
		if(isItem('Number', list_height)) {
			this.list_height = list_height;
		} else {
			console.warn('Preview height must be a number! Set it to default for you.');
			this.list_height = list_height;
		}
	},
	Image: function(url, thumbnail, title, description) {
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
	}
}
// TESTING
var x = GalleryJS;
var test = new x.Image();
var gal = new GalleryJS.Gallery(document.querySelector('#container'));
