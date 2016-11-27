// GalleryJS

var GalleryJS = {
	Gallery: function(container, pictures=[], preview_height=500, list_height=300) {
		console.log(this.test);
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
		console.log(this);
	}
}
var x = GalleryJS;
var test = new x.Image('test', 'test');
