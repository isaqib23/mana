"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(e="Object"===e&&r.constructor?r.constructor.name:e)||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}MktoForms2.whenReady(function(r){var o=r.getFormElem(),r=[].concat(_toConsumableArray(o.find("input:not([type=hidden])")),_toConsumableArray(o.find("select"))),a=($(".mktoButton"),"label--focused");r.forEach(function(r){var t=$(r).closest("div").find("label"),e=$(r).closest("div").find(".mktoAsterix");"checkbox"!==r.type&&(o.find("button").wrap("<div class = 'button-holder'></div>"),r.addEventListener("focus",function(){t.addClass(a),e.addClass(a)}))})});