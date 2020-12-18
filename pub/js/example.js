const log = console.log;

const elements = [
    {
        src: "./static/image1.jpg",
        type: "img",
        title: "Nice Landscape",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.",
        priority: 2,
    },
    {
        src: "./static/image2.jpg",
        type: "img",
        title: "Fantasy",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        priority: 1,
    },
    {
        src: "./static/image3.jpg",
        type: "img",
        title: "Rainy City",
        caption: "Aesthetic view.",
        priority: 1,
    },
    {
        src: "./static/birds.mp3",
        type: "audio",
        title: "Birds Chirping",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        priority: 3,
    },
    {
        src: "./static/image4.jpg",
        type: "img",
        title: "Purple Sky",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.",
        priority: 3,
    },
    {
        src: "./static/image5.jpg",
        type: "img",
        title: "Winter Wonderland",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla est. Sollicitudin tempor id eu nisl nunc mi ipsum. Egestas pretium aenean pharetra magna. Interdum posuere lorem ipsum dolor sit. Odio morbi quis commodo odio. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Maecenas sed enim ut sem. Ultrices neque ornare aenean euismod. Tortor condimentum lacinia quis vel eros donec. Ridiculus mus mauris vitae ultricies leo integer malesuada. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Dui id ornare arcu odio ut. Vivamus arcu felis bibendum ut tristique. Imperdiet massa tincidunt nunc pulvinar. Enim ut sem viverra aliquet eget. Dui accumsan sit amet nulla facilisi morbi. Facilisis sed odio morbi quis. Potenti nullam ac tortor vitae purus. Nec ultrices dui sapien eget. In ante metus dictum at tempor commodo ullamcorper a. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Ac tincidunt vitae semper quis lectus nulla at. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Quisque sagittis purus sit amet volutpat consequat. Ultrices neque ornare aenean euismod elementum. Et tortor consequat id porta nibh venenatis cras sed. Convallis aenean et tortor at. Adipiscing diam donec adipiscing tristique risus nec. Est ultricies integer quis auctor elit sed vulputate mi. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Nisl nisi scelerisque eu ultrices vitae. Ut etiam sit amet nisl. Id nibh tortor id aliquet lectus.",
        priority: 2,
    },
    {
        src: "./static/image6.jpg",
        type: "img",
        title: "Sunset",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priority: 1,
    },
    {
        src: "./static/ocean_wave.mp3",
        type: "audio",
        title: "Ocean Waves",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        priority: 1,
    },
    {
        src: "./static/image7.jpg",
        type: "img",
        title: "Lake View",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priority: 1,
    },
    {
        src: "./static/cubic_landscape.mp4",
        type: "video",
        title: "My Film",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priority: 1,
    },
    {
        src: "./static/sea-video.mp4",
        type: "video",
        title: "Sea",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priority: 2,
    },
    {
        src: "http://jquery.com",
        type: "link",
        title: "Example",
        caption: "Lorem ipsum",
        priority: 2,
    },
];

const mixgallery = MixGallery(document.querySelector("#gallery"), elements);
mixgallery.render();
// log(document.querySelector(".mix-gallery"));
// log(document.querySelector("body"));
