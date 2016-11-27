// GalleryJS

function Gallery(container, pictures=[], preview_height=500, list_height=300) {

}

function Image(url, thumbnail, title, description) {
	if(url && url.trim() != '') {
		this.url = url;
	} else {
		console.error('You must specify URL for a picture!')
	}
}
