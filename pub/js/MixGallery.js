"use strict";

function MixGallery(container, elements) {
    // set up the global variables
    const _self = {};
    // array of all gallery item elements
    _self.allElements = [];
    // _self.currElement;
    _self.filter = "all";
    _self.mixGalContainer = document.createElement("div");
    _self.mixGalContainer.classList.add("mix-gallery");

    /*-----------------------------------------------------------*/

    // PRIVATE: create overlay element
    _self.createOverlay = () => {
        // overlay when an element is clicked
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        console.log(document.body);
        document.body.prepend(overlay);
    };

    // PRIVATE: event listeners for when an element is clicked and when exit
    _self.addOverlayAction = (el, newEl, overlay) => {
        // onClick event
        newEl.addEventListener("click", (e) => {
            overlay.classList.add("active");

            // element
            const enlargedEl = document.createElement(el.type);
            if (el.type === "video" || el.type == "audio") {
                enlargedEl.controls = true;
            }
            enlargedEl.src = el.src;

            // container surrounding the main element
            const elContainer = document.createElement("div");
            elContainer.classList.add("overlay-element");
            elContainer.appendChild(enlargedEl);

            // title
            const overlayTitle = document.createElement("h1");
            overlayTitle.classList.add("overlay-title");
            overlayTitle.innerHTML = el.title;

            const divider = document.createElement("hr");

            // caption
            const overlayCaption = document.createElement("h5");
            // overlayCaption.classList.add("overlay-caption");
            overlayCaption.innerHTML = el.caption;

            const overlayCaptionContainer = document.createElement("div");
            overlayCaptionContainer.classList.add("overlay-caption");
            overlayCaptionContainer.appendChild(overlayCaption);

            // container for title and caption
            const overlayText = document.createElement("div");
            overlayText.classList.add("overlay-textContainer");
            overlayText.appendChild(overlayTitle);
            overlayText.appendChild(divider);
            overlayText.appendChild(overlayCaptionContainer);

            // container for element and textContainer
            const elTextContainer = document.createElement("div");
            elTextContainer.classList.add("overlay-elTextContainer");
            elTextContainer.appendChild(elContainer);
            elTextContainer.appendChild(overlayText);

            while (overlay.firstChild) {
                overlay.removeChild(overlay.firstChild);
            }
            overlay.appendChild(elTextContainer);
        });

        // Click outside of the element
        overlay.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
                overlay.classList.remove("active");
            }
        });
    };

    // PRIVATE: create all elements and populate in _self.elements
    _self.createElements = (elements) => {
        elements.forEach((el) => {
            // main element
            const newEl = document.createElement(el.type);
            if (el.type == "audio") {
                newEl.controls = true;
            }
            newEl.src = el.src;

            _self.addOverlayAction(el, newEl, overlay);

            // container surrounding the main element
            const newElContainer = document.createElement("div");
            newElContainer.classList.add("element");
            newElContainer.appendChild(newEl);

            // title
            const newTitleEl = document.createElement("h2");
            newTitleEl.classList.add("title");
            newTitleEl.innerHTML = el.title;

            // container surrounding elements container and title
            const galleryItem = document.createElement("div");
            galleryItem.classList.add(
                "gallery-item",
                `priority-${el.priority}`
            );
            galleryItem.appendChild(newElContainer);
            galleryItem.appendChild(newTitleEl);

            _self.allElements.push(galleryItem);
        });
        console.log(_self.allElements);
    };

    // PRIVATE: filter elements displayed based on the nav button clicked
    _self.applyFilter = (btn, elType) => {
        btn.addEventListener("click", (e) => {
            _self.destroyAllElements();
            const filteredElements = _self.allElements.filter((el) => {
                return el.firstChild.firstChild.tagName === elType;
            });
            _self.displayElements(filteredElements);
        });
    };

    // PRIVATE: create navigation bar at the top
    _self.createNavmenu = () => {
        const all = document.createElement("button");
        all.innerHTML = "All";
        all.addEventListener("click", (e) => {
            _self.destroyAllElements();
            _self.displayElements(_self.allElements);
        });

        const photo = document.createElement("button");
        photo.innerHTML = "Photo";
        _self.applyFilter(photo, "IMG");

        const video = document.createElement("button");
        video.innerHTML = "Video";
        _self.applyFilter(video, "VIDEO");

        const audio = document.createElement("button");
        audio.innerHTML = "Audio";
        _self.applyFilter(audio, "AUDIO");

        const navMenu = document.createElement("div");
        navMenu.classList.add("nav-menu");
        navMenu.appendChild(all);
        navMenu.appendChild(photo);
        navMenu.appendChild(video);
        navMenu.appendChild(audio);

        // const line = document.createElement("hr");

        _self.mixGalContainer.appendChild(navMenu);
        // _self.mixGalContainer.appendChild(line);
    };

    // PRIVATE: display the given elements and append to the main container
    _self.displayElements = (elementsArr) => {
        const elementsContainer = document.createElement("div");
        elementsContainer.classList.add("elements-container");
        elementsArr.forEach((el) => {
            elementsContainer.appendChild(el);
        });
        _self.mixGalContainer.appendChild(elementsContainer);
        container.appendChild(_self.mixGalContainer);
    };

    // PRIVATE: remove elements-container div from the DOM
    _self.destroyAllElements = () => {
        const toRemove = _self.mixGalContainer.getElementsByClassName(
            "elements-container"
        )[0];
        if (typeof toRemove !== "undefined") {
            _self.mixGalContainer.removeChild(toRemove);
        }
    };

    /*-----------------------------------------------------------*/

    _self.render = () => {
        _self.createOverlay();
        _self.createNavmenu();
        _self.createElements(elements);
        _self.displayElements(_self.allElements);
    };

    return _self;
}
