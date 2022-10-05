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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedinConversionPixel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LinkedinConversionPixel = /*#__PURE__*/function () {
  function LinkedinConversionPixel(url) {
    (0, _classCallCheck2["default"])(this, LinkedinConversionPixel);
    this.styleString = 'display: none; height: 1; width: 1';
    this.pixelSource = 'https://px.ads.linkedin.com/collect/?pid=687&conversionId=2852305&fmt=gif';
    this.url = url;
    this.pixel = this._buildPixel();
  }

  (0, _createClass2["default"])(LinkedinConversionPixel, [{
    key: "_buildPixel",
    value: function _buildPixel() {
      var node = document.createElement('img');
      node.setAttribute('style', this.styleString);
      node.setAttribute('src', this.pixelSource);
      node.setAttribute('alt', "");
      return node;
    }
  }, {
    key: "_isCorrectPage",
    value: function _isCorrectPage() {
      var currentUrl = location.href;
      return currentUrl.indexOf(this.url) > -1;
    }
  }, {
    key: "placePixel",
    value: function placePixel(location) {
      var parent = document.querySelector(location);

      if (this._isCorrectPage() && parent !== null) {
        parent.appendChild(this.pixel);
      }
    }
  }]);
  return LinkedinConversionPixel;
}();

exports.LinkedinConversionPixel = LinkedinConversionPixel;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],5:[function(require,module,exports){
"use strict";

require('./gate-with-modal')();

},{"./gate-with-modal":6}],6:[function(require,module,exports){
"use strict";

var _ifKnownUtil = require("./if-known-util");

var _modalLockdown = require("./modal-lockdown");

var _conversionPixel = require("./conversion-pixel");

var isProductTourPage = document.getElementsByClassName('ProductTourPage').length > 0;

module.exports = function () {
  var ungateIfKnown = window.GateData.ungateIfKnown;

  if (ungateIfKnown) {
    // Ungate the page if a lead is known
    if (!(0, _ifKnownUtil.checkFromCookie)()) {
      // User is not known, check the lead
      // If the tracking token is there, make the request from the API
      if (document.cookie.indexOf('_mkto_trk') > -1) {
        var url = '/lead-integrations/known-lead.php';
        fetch(url, {
          method: 'POST'
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          return JSON.parse(data);
        }).then(function (parsedData) {
          if (parsedData.hasOwnProperty('isKnown') && parsedData.isKnown === 'true') {
            // User is known, generate the cookie
            (0, _ifKnownUtil.generateKnownCookie)();
          } else {
            // User is not know, show the form
            document.querySelector('.form-modal-wrapper').style.display = 'flex';
          }
        })["catch"](function (error) {
          return console.log("There was an error fetching data: ".concat(error));
        });
      } else {
        // If not, they have not accepted cookies, so show the form.
        document.querySelector('.form-modal-wrapper').style.display = 'flex';
        document.querySelector('body').classList.add('no-scroll');
      }
    }
  } else {
    // Always show the modal
    document.querySelector('.form-modal-wrapper').style.display = 'flex';
    document.querySelector('body').classList.add('no-scroll');
  }
  /**
   * Processing for all forms on whenReady
   */


  MktoForms2.whenReady(function (form) {
    var $form = form.getFormElem();
    var formId = form.getId(); //Calling this function for accesiblity when modal is visible on Product Tour page

    if (isProductTourPage) {
      (0, _modalLockdown.setTabIndex)(-99, true);
    } // Remove styles


    $form.find('style').remove();
    $form.find('*').add($form).removeAttr('style'); // Set row width of legal language, without knowing position

    $form.find('.mktoHtmlText').closest('.mktoFormRow').css('width', '100%');
    $form.find('[class*="mktoPlaceholderHtmlText"]').closest('.mktoFormRow').css('width', '100%'); // Check for button text, and add it if it is there.

    if (window.GateData && window.GateData.hasOwnProperty(formId)) {
      if (window.GateData[formId].buttonText && window.GateData[formId].buttonText.trim().length > 0) {
        $form.find('button').text(window.GateData[formId].buttonText);
      }
    } // On submit, hide the form and create the cookie if necessary


    form.onSuccess(function () {
      document.querySelector('.form-modal-wrapper').style.display = 'none';
      document.querySelector('body').classList.remove('no-scroll'); //Calling this function for accesiblity when modal is removed on Product Tour page

      if (isProductTourPage) {
        (0, _modalLockdown.setTabIndex)(0, false);
      }

      var pixel = new _conversionPixel.LinkedinConversionPixel("marketo.com/product-tour");
      pixel.placePixel('footer');

      if (ungateIfKnown) {
        (0, _ifKnownUtil.generateKnownCookie)();
      }

      return false;
    });
  });
  /**
   * Allow Marketo forms to build by only including the html
   * e.g. <form id="mktoForm_1234"></form>
   */

  $('form[id^="mktoForm_"]').not('.initiated').each(function () {
    var ID = parseInt($(this).addClass('initiated').attr('id').match(/([0-9]+)/).pop());

    if (ID) {
      MktoForms2.loadForm('//app-ab29.marketo.com', '460-TDH-945', ID);
    }
  });
};

},{"./conversion-pixel":4,"./if-known-util":7,"./modal-lockdown":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFromCookie = exports.generateKnownCookie = void 0;

var generateKnownCookie = function generateKnownCookie() {
  var functionalGroup = 'C0003'; // Check for cookie consent - Functional

  if (window.adobePrivacy && window.adobePrivacy.activeCookieGroups() && window.adobePrivacy.activeCookieGroups().indexOf(functionalGroup) > -1) {
    // One week from now
    var expiryTime = new Date(Date.now() + 24000 * 60 * 60 * 7).toUTCString();
    document.cookie = "gate_knwn=true; expires=".concat(expiryTime, "; path=/; domain=marketo.com");
  }
};

exports.generateKnownCookie = generateKnownCookie;

var checkFromCookie = function checkFromCookie() {
  var cookieStrings = document.cookie.split(';');
  var cookiePairs = cookieStrings.map(function (cookie) {
    return cookie.split('=');
  });
  var known = false;
  cookiePairs.forEach(function (cookiePair) {
    if (cookiePair[0].trim() === 'gate_knwn' && cookiePair[1].trim() === 'true') {
      known = true;
    }
  });
  return known;
};

exports.checkFromCookie = checkFromCookie;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTabIndex = void 0;

var setTabIndex = function setTabIndex(tabIndexVal, ariaFlag) {
  window.setTimeout(function () {
    document.querySelector('.link-container .cta').tabIndex = tabIndexVal;
    document.querySelector('.link-container .cta-link').tabIndex = tabIndexVal;
    document.querySelector('.schedule-a-demo-wrapper .cta').tabIndex = tabIndexVal;
    document.querySelector('.feds-regionPicker').tabIndex = tabIndexVal;
    document.querySelector('.product-tour-page-wrapper iframe').tabIndex = tabIndexVal;
    document.querySelectorAll('.play-button').forEach(function (elem) {
      return elem.setAttribute('tabindex', tabIndexVal);
    });
    document.querySelectorAll('.gnavFooter .feds-navLink').forEach(function (elem) {
      return elem.setAttribute('tabindex', tabIndexVal);
    });

    if (ariaFlag) {
      document.querySelector('.product-tour-page-wrapper').setAttribute('aria-hidden', 'true');
      document.querySelector('.schedule-a-demo-wrapper').setAttribute('aria-hidden', 'true');
      document.querySelector('.gnavFooter').setAttribute('aria-hidden', 'true');
    } else {
      document.querySelector('.product-tour-page-wrapper').removeAttribute('aria-hidden');
      document.querySelector('.schedule-a-demo-wrapper').removeAttribute('aria-hidden');
      document.querySelector('.gnavFooter').removeAttribute('aria-hidden');
    }
  }, 1000);
};

exports.setTabIndex = setTabIndex;

},{}]},{},[5]);
