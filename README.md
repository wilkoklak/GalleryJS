# GalleryJS
It's a little gallery written in JavaScript and CSS.
You just have to add 2 files to your project!

## Installation
Place ``gallery.js`` and ``galleryjs.min.css`` somewhere in your project.

## Usage
Let's say we have a project like this:
```
proj/
	css/
		main.css
		galleryjs.min.css
	js/
		gallery.js
	index.htm
```
You have to add ``gallery.js`` and ``galleryjs.min.css`` to your ``<head>`` tag:
``` html
<!doctype html>
<html lang='en'>
<head>
	<meta charset='utf8'>
	<link rel='stylesheet' href='css/galleryjs.min.css'>
	<script src='js/gallery.js'></script>
	<title>My gallery</title>
</head>
```
Then, inside ``<body>`` you have to add a container for gallery, for ex.:
``` html
<div id='container'></div>
```
Now, we have to tell GalleryJS where to bind itself.  
Let's create a ``<script>`` tag at the bottom of ``<body>``:
```html
<script>
var gallery = new GalleryJS.Gallery(document.querySelector('#container'));
</script>
```
We have created a new gallery and bound it with our div. However, we need to add
some pictures!

Let's create array of pics:
```html
<script>
var pics = [
	new GalleryJS.Picture(
		'http://i.imgur.com/pwbUJwD.jpg',
		'http://i.imgur.com/pwbUJwDs.jpg',
		'Picture 1',
		'Description 1'
	),
	new GalleryJS.Picture(
		'http://i.imgur.com/ApwmJHK.jpg',
		'http://i.imgur.com/ApwmJHKs.jpg',
		'Picture 2',
		'Description 2'
	),
	new GalleryJS.Picture(
		'http://i.imgur.com/dPh0k39.jpg',
		'http://i.imgur.com/dPh0k39s.jpg',
		'Picture 3',
		'Description 3'
	)
];

var gallery = new GalleryJS.Gallery(document.querySelector('#container'), pics);
</script>
```
We have created ``pics`` array and passed it as an argument for ``Gallery()``
constructor.

That's it! Your basic gallery that takes all of screen's width! You can specify
container's width and GalleryJS will inherit it. However, for now, you have to
pass an argument with height if you want to change it's height.

~~See API Docs for more!~~ Coming soon...
