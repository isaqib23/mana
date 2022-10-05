(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
"use strict";

var _hashDebugger = require("../util/hash-debugger");

(function () {
  var url = '/lead-integrations/lead-source-comments.php';
  var formKey;
  var trackString;
  var debug = new _hashDebugger.hashDebugger();

  if (window.GateData) {
    var keys = Object.keys(window.GateData);
    formKey = keys[0];

    if (window.GateData[formKey].trackString !== '') {
      trackString = window.GateData[formKey].trackString;
    } else {
      trackString = "No track string for page: ".concat(document.location.href);
    }
  }

  var update = function updateLeadSourceComments() {
    var formData = new FormData();
    formData.append('leadSourceComments', trackString);
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      return JSON.parse(data);
    }).then(function (parsedData) {
      debug.message('inside fetch request');
      return parsedData;
    })["catch"](function (error) {
      return console.log("There was an error fetching data: ".concat(error));
    });
  };

  var button = document.querySelector('.get-that-asset button');

  if (button !== null) {
    button.addEventListener('click', function () {
      update();
    });
  }
})();

},{"../util/hash-debugger":5}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashDebugger = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var hashDebugger = /*#__PURE__*/function () {
  function hashDebugger() {
    (0, _classCallCheck2["default"])(this, hashDebugger);
    this.debugOn = false;

    this._checkHashForDebug();
  } // requires #debug=true to be in url to be enabled


  (0, _createClass2["default"])(hashDebugger, [{
    key: "_checkHashForDebug",
    value: function _checkHashForDebug() {
      var _this = this;

      var urlHash = document.location.hash;
      var hashParams = [];

      if (urlHash === '') {
        return;
      }

      urlHash.split('&').forEach(function (hashPair) {
        if (hashPair.indexOf('#') > -1) {
          hashPair = hashPair.slice(1, hashPair.length);
        }

        if (hashPair.split('=').length > 1) {
          var keyAndValue = hashPair.split('=');
          hashParams.push({
            key: keyAndValue[0],
            value: keyAndValue[1]
          });
        }
      });
      hashParams.forEach(function (pair) {
        if (pair.hasOwnProperty('key') && pair['key'] === 'debug') {
          if (pair.hasOwnProperty('value') && pair['value'] === 'true') {
            _this.debugOn = true;
          }
        }
      });
    }
  }, {
    key: "message",
    value: function message(string) {
      var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.debugOn) {
        if (typeof string !== 'string') {
          console.warn('non-string parameter passed to hashDebugger.message');
        } else {
          warn ? console.warn(string) : console.log(string);
        }
      }
    }
  }, {
    key: "checkVar",
    value: function checkVar(variable) {
      if (this.debugOn) {
        console.log(variable);
      }
    }
  }]);
  return hashDebugger;
}();

exports.hashDebugger = hashDebugger;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[4]);
