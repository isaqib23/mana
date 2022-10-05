(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widthResize = void 0;

var widthResize = function handleWidthResize() {
  var section = document.getElementById('resource-section');
  var formWrapper = document.getElementById('form-wrapper');
  var sidebar = document.getElementById('sidebar');
  var parentIsSection = formWrapper.parentElement === section;
  var mobileBreakpoint = 1024;
  var width = window.innerWidth;
  var isMobile = width <= mobileBreakpoint;

  if (isMobile && !parentIsSection) {
    section.prepend(formWrapper);
    formWrapper.classList.add('resource-page-sidebar');
  } else if (!isMobile && parentIsSection) {
    sidebar.prepend(formWrapper);
    formWrapper.classList.remove('resource-page-sidebar');
  }
};

exports.widthResize = widthResize;

},{}],2:[function(require,module,exports){
"use strict";

var _resourcePageMobileUtils = require("./resource-page-mobile-utils");

(function () {
  (0, _resourcePageMobileUtils.widthResize)();
  window.addEventListener('resize', _resourcePageMobileUtils.widthResize);
})();

},{"./resource-page-mobile-utils":1}]},{},[2]);
