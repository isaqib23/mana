(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable */
var addClicks = function addClicksToProductTour() {
  document.querySelectorAll('.pointer-triangle').forEach(function (node) {
    return node.addEventListener('click', function () {
      node.parentNode.parentNode.querySelector('img').click();
    });
  });
  document.querySelectorAll('.video-tile').forEach(function (node) {
    return node.addEventListener('click', function (event) {
      VidyardV4.players.forEach(function (player) {
        if (player._ready === true) {
          player.pause();
        }

        var currentVideoID = event.currentTarget.querySelector('.vidyard-player-container').getAttribute('uuid');
        var currentPlayer = VidyardV4.api.getPlayersByUUID(currentVideoID);
        setTimeout(function () {
          if (currentPlayer[0]._ready === true) {
            currentPlayer[0].play();
          }
        }, 1000);
      });
    });
  });
};

addClicks();
var _default = addClicks;
exports["default"] = _default;

},{}]},{},[1]);
