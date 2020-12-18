"use strict";

(function (global, document) {
    function MixGallery(container, elements) {
        // set up the global variables
        const _self = {};
        // array of all gallery item elements
        let _allElements = [];
        // the overall container
        const _mixGalContainer = document.createElement("div");
        _mixGalContainer.classList.add("mix-gallery");

        /*-----------------------------------------------------------*/

        // PRIVATE: create overlay element
        function _createOverlay() {
            // overlay when an element is clicked
            const overlay = document.createElement("div");
            overlay.id = "overlay";
            console.log(document.body);
            document.body.prepend(overlay);
        }

        // PRIVATE: event listeners for when an element is clicked and when exit
        function _addOverlayAction(el, newEl, overlay) {
            // onClick event
            newEl.addEventListener("click", (e) => {
                overlay.classList.add("active");

                // element
                let enlargedEl;
                if (el.type === "link") {
                    enlargedEl = document.createElement("iframe");
                } else {
                    enlargedEl = document.createElement(el.type);
                }
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
                overlayTitle.innerHTML = el.title + "  ";

                // Link
                if (el.type == "link") {
                    const link = document.createElement("a");
                    link.href = el.src;
                    const icon = document.createElement("img");
                    icon.classList.add("external-link-icon");
                    icon.src = "./static/external-link-symbol.png";
                    link.appendChild(icon);
                    // link.innerHTML = "Click here to access the full website.";
                    overlayTitle.appendChild(link);
                }

                const divider = document.createElement("hr");

                // caption
                const overlayCaption = document.createElement("h5");
                // overlayCaption.classList.add("overlay-caption");
                overlayCaption.innerHTML = el.caption;

                const overlayCaptionContainer = document.createElement("div");
                overlayCaptionContainer.classList.add("overlay-caption");
                overlayCaptionContainer.appendChild(overlayCaption);

                // container for title and caption (and link)
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
        }

        // PRIVATE: create all elements and populate in _self.elements
        function _createElements(elements) {
            elements.forEach((el) => {
                // container surrounding the main element
                const newElContainer = document.createElement("div");
                newElContainer.classList.add("element");

                // main element
                let newEl;
                if (el.type === "link") {
                    newEl = document.createElement("div");
                    newEl.classList.add("iframe-cover");
                    const iframe = document.createElement("iframe");
                    iframe.src = el.src;
                    iframe.scrolling = "no";
                    newElContainer.appendChild(iframe);
                } else if (el.type === "audio") {
                    newEl = document.createElement("div");
                    newEl.classList.add("audio-cover");
                    const audio = document.createElement("audio");
                    audio.controls = true;
                    newElContainer.appendChild(audio);
                } else {
                    newEl = document.createElement(el.type);
                    newEl.src = el.src;
                }
                _addOverlayAction(el, newEl, overlay);
                newElContainer.appendChild(newEl);

                // title
                const newTitleEl = document.createElement("h2");
                newTitleEl.classList.add("title");
                newTitleEl.innerHTML = el.title;
                if (el.type === "audio") {
                    newTitleEl.classList.add("audio-title");
                }

                // container surrounding elements container and title
                const galleryItem = document.createElement("div");
                galleryItem.classList.add(
                    "gallery-item",
                    `priority-${el.priority}`
                );
                galleryItem.appendChild(newElContainer);
                galleryItem.appendChild(newTitleEl);

                _allElements.push(galleryItem);
            });
        }

        // PRIVATE: filter elements displayed based on the nav button clicked
        function _applyFilter(btn, elType, navMenu) {
            btn.addEventListener("click", (e) => {
                _destroyAllElements();
                _removeButtonActiveClass(navMenu);
                btn.classList.add("button-active");
                const filteredElements = _allElements.filter((el) => {
                    return el.firstChild.firstChild.tagName === elType;
                });
                _displayElements(filteredElements);
            });
        }

        // PRIVATE: create navigation bar at the top
        function _createNavmenu() {
            const all = document.createElement("button");
            all.innerHTML = "All";

            const photo = document.createElement("button");
            photo.innerHTML = "Photo";

            const video = document.createElement("button");
            video.innerHTML = "Video";

            const audio = document.createElement("button");
            audio.innerHTML = "Audio";

            const link = document.createElement("button");
            link.innerHTML = "Link";

            const navMenu = document.createElement("div");
            navMenu.classList.add("nav-menu");
            navMenu.appendChild(all);
            navMenu.appendChild(photo);
            navMenu.appendChild(video);
            navMenu.appendChild(audio);
            navMenu.appendChild(link);

            // add eventlistener for filter button clicks
            all.addEventListener("click", (e) => {
                _removeButtonActiveClass(navMenu);
                all.classList.add("button-active");
                _destroyAllElements();
                _displayElements(_allElements);
            });
            _applyFilter(photo, "IMG", navMenu);
            _applyFilter(video, "VIDEO", navMenu);
            _applyFilter(audio, "AUDIO", navMenu);
            _applyFilter(link, "IFRAME", navMenu);

            _mixGalContainer.appendChild(navMenu);
        }

        // PRIVATE: remove "button-active" class from all navMenu buttons
        function _removeButtonActiveClass(navMenu) {
            const children = navMenu.children;
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove("button-active");
            }
        }

        // PRIVATE: display the given elements and append to the main container
        function _displayElements(elementsArr) {
            const elementsContainer = document.createElement("div");
            elementsContainer.classList.add("elements-container");
            elementsArr.forEach((el) => {
                elementsContainer.appendChild(el);
            });
            _mixGalContainer.appendChild(elementsContainer);
            container.appendChild(_mixGalContainer);
        }

        // PRIVATE: remove elements-container div from the DOM
        function _destroyAllElements() {
            const toRemove = _mixGalContainer.getElementsByClassName(
                "elements-container"
            )[0];
            if (typeof toRemove !== "undefined") {
                _mixGalContainer.removeChild(toRemove);
            }
        }

        /*-----------------------------------------------------------*/

        _self.render = () => {
            _createOverlay();
            _createNavmenu();
            _createElements(elements);
            _displayElements(_allElements);
        };

        return _self;
    }

    global.MixGallery = global.MixGallery || MixGallery;
})(window, window.document);
