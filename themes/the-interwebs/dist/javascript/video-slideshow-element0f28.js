(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleButton = exports.toggle = void 0;

var toggle = function toggleVideoSlideshow(showElement, hideElement) {
  var newButton = "<i class=\"".concat(hideElement.icon, "\"></i>").concat(hideElement.buttonText);
  document.getElementsByClassName("".concat(hideElement.type, "-container"))[0].style.display = 'none';
  document.getElementsByClassName("".concat(showElement.type, "-container"))[0].style.display = 'block';
  document.getElementsByClassName('video-slideshow__title')[0].innerHTML = showElement.label;
  document.getElementsByClassName('video-slideshow__button')[0].innerHTML = newButton;
  document.getElementsByClassName('video-slideshow__button')[0].dataset.id = hideElement.targetId;
};

exports.toggle = toggle;

var handleButton = function handleVideoSlideshowButton(event) {
  var target = event.target.dataset.id;
  var video = window.VideoSlideshowData.video;
  var slideshow = window.VideoSlideshowData.slideshow;
  var vidyardPlayers = window.VidyardV4 ? window.VidyardV4.players : '';

  if (target === 'slideshow') {
    if (vidyardPlayers.length > 0 && vidyardPlayers[0]._ready === true) {
      vidyardPlayers[0].pause();
    }

    toggle(slideshow, video);
  } else if (target === 'video') {
    toggle(video, slideshow);
  } else {
    console.log('VideoSlideshow element error');
  }
};

exports.handleButton = handleButton;

},{}],2:[function(require,module,exports){
"use strict";

var _toggleVideoSlideshow = require("./util/toggle-video-slideshow");

document.querySelector('.video-slideshow__header button').addEventListener('click', _toggleVideoSlideshow.handleButton);

},{"./util/toggle-video-slideshow":1}]},{},[2]);
