# js-library-jungseo7
# MixGallery.js

A simple and lightweight Javascript library where you can display all your multimedia in one compact gallery.
See the [project website](http://mixgallery.herokuapp.com/) to view a demo and documentation.

## Getting Started

### Download 
Download the javascript and css files from  [GitHub.](https://github.com/csc309-fall-2020/js-library-jungseo7)

### Initialization

 Link the .css file into the  `<head>`  section of your HTML document:

```html
<link rel="stylesheet" type="text/css" href="MixGallery.css"></link>
```

Add the .js file into the  `<body>`  section of your HTML document:

```html
<script type="text/javascript" src="js/MixGallery.js"></script>
```

 Create an empty  `<div>`  element in the DOM and specify its  `id`:

```html
<div id="gallery"></div>
```
In your .js file, create an array of objects where each object represents each media element in the gallery.
```javascript
const elements = [
    {
        src: "./image.jpg",
        type: "img",
        title: "A title.",
        caption: "This is an example of a caption.",
        priority: 2,
    },
    {
        src: "./video.mp4",
        type: "video",
        title: "Another title.",
        caption: "Another caption!",
        priority: 1,
    }
]
```
Lastly, create a new instance of MixGallery and pass in the  `<div>`  that was created earlier. Call  `render()`  to invoke MixGallery.

```javascript
const mixgallery = MixGallery(document.querySelector("#gallery"), elements);
mixgallery.render();
```
See the [documentation page](https://mixgallery.herokuapp.com/#api-section) for more information.
