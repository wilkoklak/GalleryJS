# GalleryJS
Galeria napisana w JS + CSS na Twoją stronę internetową!

## Korzystanie
GalleryJS to dwa pliki - gallery.js i gallery.css

Musisz umieścić odnośnik do nich w kodzie HTML.

Przyjmijmy przykładową strukturę folderów:

```
www/
	css/
		gallery.css
	js/
		gallery.js
	index.htm
```
Strona na której będzie zamieszczona galeria jest w pliku ``index.htm``.  
Arkusz stylów do galerii znajduje się w ``css/gallery.css``, natomiast
kod JS do galeri w ``js/gallery.js``.

Teraz w pliku HTML w sekcji ``<head>`` umieść przykładowy odnośnik do arkusza stylów:

``` html
<link rel="stylesheet" href="css/gallery.css">
```
Następnie w wybranym miejscu na stronie umieść kontener dla galerii:

``` html
<body>
	<div class="gallery_container" style="width: 800px; margin: auto">
	</div>
</body>
```
Kolejnym krokiem jest umieszczenie odnośnika do ``gallery.js``.
Najlepiej umieścić go pod koniec tagu ``<body>`` lub po nim:

``` html
<script src="js/gallery.js"></script>
```
Kiedy potrzebne pliki zostały zamieszczone, można zainicjować galerię.
``` javascript
var pics = [
	new Picture("https://i.imgur.com/0V4gUeN.jpg", "Tytuł 1", "Opis 1"),
	new Picture("https://i.imgur.com/5EPnhzA.jpg", "Tytuł 2", "Opis 2")
]
var gallery = new Gallery(document.querySelector(".gallery_container"), pics);
```
``var pics = [...]`` Tworzy listę "zdjęć" za pomocą prototypu ``Picture()``

``` javascript
Picture(url, pic_title, desc, thumb, timestamp)
```
Gdzie:
* ``url`` - adres URL obrazka
* ``pic_title`` - tytuł obrazka
* ``desc`` - opis obrazka
* ``thumb`` - adres URL miniatury (jeśli nie jest podany, to jest taki sam jak ``url``)
* ``timestamp`` - znacznik czasowy oznaczający datę utworzenia zdjęcia. Jeśli nie jest podany, to jest to aktualna data.

Wymagane są tylko pierwsze 3 argumenty.

``Gallery()`` jest prototypem galerii i wygląda następująco:
``` javascript
Gallery(container, pictures, preview_height, thumb_size, list_height, background)
```
Gdzie:
* ``container`` - element DOM, w którym ma znajdować się galeria
* ``pics`` - array z listą obiektów ``Picture()``
* ``preview_height`` - wysokość pełnego podglądu (domyślnie 500px)
* ``thumb_size`` - długość boku miniatury (kwadrat, domyślnie 64x64px)
* ``list_height`` - wysokość listy miniatur (domyślnie 300px). Kiedy miniatury nie będą mieścić się w elemencie ``.list`` to zostanie dodany suwak.
* ``background`` - kolor tła podglądu i miniatur

Wymagane są tylko pierwsze 2 argumenty.

Należy także wspomnieć, że ``Gallery()`` dziedziczy szerokość kontenera.

Aktualnie całość trzeba skonfigurować na samym początku, ale w przyszłości planuję dodać możliwość zmiany atrybutów już po załadowaniu galerii.

Przykładowy ``index.htm``:
``` html
<!doctype html>
<html lang="pl">
<head>
	<meta charset="utf-8">
	<title>Demo</title>
	<link rel="stylesheet" href="css/gallery.css">
</head>
<body>
	<div class="gallery_container" style="width: 800px; margin: auto;">
	</div>
</body>
<script src="js/gallery.js"></script>
<script>
var pics = [
    new Picture("https://i.imgur.com/0V4gUeN.jpg", "Tytuł 1", "Opis 1"),
    new Picture("https://i.imgur.com/5EPnhzA.jpg", "Tytuł 2", "Opis 2")
]
var gallery = new Gallery(document.querySelector(".gallery_container"), pics);
</script>
</html>
```
