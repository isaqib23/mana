(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithoutHoles.js":2,"./iterableToArray.js":6,"./nonIterableSpread.js":7,"./unsupportedIterableToArray.js":9}],9:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsentUtil = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _hashDebugger = require("../util/hash-debugger");

// constructor requires the formID of the applicable marketo form for GateData access.
var ConsentUtil = /*#__PURE__*/function () {
  function ConsentUtil(formId) {
    (0, _classCallCheck2["default"])(this, ConsentUtil);
    this.debug = new _hashDebugger.hashDebugger();
    this.textSelectorClass = '.mktoHtmlText';
    this.checkboxSelectorClass = '.mktoCheckboxList';
    this.mktoRowSelectorClass = '.mktoFormRow';
    this.formId = formId;
    this.targetLinkString = '/privacy/policy';
    this.canSwap = false;
    this.consentString = '';
    this.consentStringVariants = this._setConsentStringVariants();

    this._init();
  }
  /**
   *
   *  Initialization function. Checks that all the appropriate data is in place, if so, it sets some variables
   *
   * @private
   */


  (0, _createClass2["default"])(ConsentUtil, [{
    key: "_init",
    value: function _init() {
      if (GateData[this.formId].consentStringNumber === '') {
        this.debug.message('This form does not have a consent string set for it. Please add one in GateKeeper');
        return;
      }

      if (document.querySelectorAll(this.textSelectorClass).length < 1) {
        this.debug.message('Could not find legal language node selector on page', true);
        return;
      }

      if (!window.GateData) {
        this.debug.message('Gate data did not appear on page', true);
        return;
      }

      this.consentString = GateData[this.formId].consentStringText;
      this.canSwap = true;
    }
    /**
     *
     *  Checks to see if the consent string can be swapped, and then does so
     *
     * @public
     */

  }, {
    key: "swapConsentString",
    value: function swapConsentString() {
      var _this = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.canSwap) {
        this.debug.message('Data is missing to swap language', true);
        return;
      } // Select the parent form, in case of multiple forms on a page


      var parentForm = document.querySelector("#mktoForm_".concat(this.formId));
      var textNodeList = parentForm.querySelectorAll(this.textSelectorClass);
      var nodeForSwap = null;

      if (textNodeList.length > 1) {
        this.debug.message("Multiple elements with ".concat(this.textSelectorClass, " found")); // check to see if the node contains the privacy policy link, in case there are multiple nodes

        textNodeList.forEach(function (node) {
          if (node.innerHTML.indexOf(_this.targetLinkString)) {
            nodeForSwap = node;
          }
        });
      } else {
        nodeForSwap = textNodeList[0];
      }

      if (value) {
        nodeForSwap.innerHTML = value;
        return;
      }

      if (!nodeForSwap) return;
      nodeForSwap.innerHTML = this.consentString;
    }
    /**
     *
     *  Grabs two classes attached to legal text fields on Marketo Forms, and adds display block to them.
     *
     * @private
     */

  }, {
    key: "_showLegalLanguage",
    value: function _showLegalLanguage() {
      var _this2 = this;

      var fieldsToShow = [];
      document.querySelectorAll(this.mktoRowSelectorClass).forEach(function (row) {
        if (row.querySelector(_this2.textSelectorClass) || row.querySelector(_this2.checkboxSelectorClass)) {
          fieldsToShow.push(row);
        }
      });
      fieldsToShow.forEach(function (field) {
        return field.style.display = 'block';
      });
    }
    /**
     *
     *  Sets the consent string variants based on the current consent string.
     *
     * @private
     */

  }, {
    key: "_setConsentStringVariants",
    value: function _setConsentStringVariants() {
      if (window.GateData[this.formId] && GateData[this.formId].consentStringNumber) {
        var consentID = GateData[this.formId].consentStringNumber;
        return window.GateData[this.formId].allConsentStrings.filter(function (consentString) {
          return consentString.version === consentID;
        })[0];
      } else {
        this.debug.message('GateData is not present');
      }
    }
    /**
     *
     *  Ensures that all the necessary data is there, and then checks to see if the string needs to be swapped. If it does,
     *  it calls the swapConsentString function with the correct string, if not, it calls swapConsentString to change the
     *  string back.
     *
     * @param country - string | event.target.value
     */

  }, {
    key: "_manageConsentChange",
    value: function _manageConsentChange(country) {
      var currentGateData = window.GateData[this.formId];

      if (currentGateData) {
        if (this.consentStringVariants.optInCountryBackUp) {
          var optInBackUp = this.consentStringVariants.optInCountryBackUp;
          var backUpString = currentGateData.allConsentStrings.filter(function (consentString) {
            return consentString.version === optInBackUp;
          })[0];

          if (currentGateData.complianceCountries.includes(country)) {
            var stringToSwap = backUpString["consentString".concat(currentGateData.consentStringLang)];
            this.swapConsentString(stringToSwap);
          } else {
            this.swapConsentString();
          }
        } else {
          this.debug.message('This form does not require an opt in country variant');
        }
      }
    }
    /**
     *  Checks to see if the consent string variants is set, and then if the country field is found,
     *  and then adds an event listener to it.
     */

  }, {
    key: "listenForCountryChange",
    value: function listenForCountryChange() {
      var _this3 = this;

      if (this.consentStringVariants && Object.keys(this.consentStringVariants).length > 0) {
        var parentForm = document.querySelector("#mktoForm_".concat(this.formId));
        var countryField = parentForm.querySelector('#Country');

        if (countryField) {
          countryField.addEventListener('change', function (event) {
            _this3._manageConsentChange(event.target.value);
          });
        }
      }
    }
    /**
     *
     *  Allows user to "spoof" a truthy value here to see what the function would look like. Checks to see what country
     *  the user data is from, and if it is part of the explicit opt in countries attached to Gate Data, it shows the
     *  legal language. This can be removed once we also get the opt in data from the lead DB.
     *
     * @param data - GateData
     * @param spoof {boolean}
     * @public
     */

  }, {
    key: "showBasedOnOptInCountry",
    value: function showBasedOnOptInCountry(data) {
      var spoof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var userCurrentCountry = document.querySelector('#Country').value;

      if (spoof) {
        this._showLegalLanguage();
      }

      if (userCurrentCountry === null) {
        this.debug.message('No country field in form');
        return;
      }

      if (data && data[this.formId].complianceCountries.includes(userCurrentCountry)) {
        this._showLegalLanguage();
      }
    }
  }]);
  return ConsentUtil;
}();

exports.ConsentUtil = ConsentUtil;

},{"../util/hash-debugger":14,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":5}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarketoLead = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _hashDebugger = require("../util/hash-debugger");

var _consentUtil = require("./consent-util");

/* eslint-disable */
var MarketoLead = /*#__PURE__*/function () {
  function MarketoLead() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'email,firstName,lastName,company';
    var formId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck2["default"])(this, MarketoLead);
    this.connectorURL = '/lead-integrations/lead-data.php';
    this.cacheCookieName = 'LocalCache';
    this.fields = fields;
    this.formId = formId;
    this.debug = new _hashDebugger.hashDebugger();
    this.consentUtil = new _consentUtil.ConsentUtil(this.formId);
  } // Private Methods

  /**
   *  Main Request function, takes no params. It sets an interval
   *  checking to see if the Munchkin token appears (by checking to see if the mkto_trk cookie is loaded)
   *
   *  @private
   */


  (0, _createClass2["default"])(MarketoLead, [{
    key: "_requestFromLead",
    value: function _requestFromLead() {
      var _this = this;

      this.debug.message('requested from lead database');
      var url = this.connectorURL;
      var maxWaitTime = 3000;
      var currentWait = 0;
      var checkForMunchkin = window.setInterval(function () {
        if (_this._hasMarketoToken()) {
          _this._requestFromAPI(url);

          window.clearInterval(checkForMunchkin);
        } else if (currentWait >= maxWaitTime) {
          window.clearInterval(checkForMunchkin);
          console.error('A Munchkin token never appeared');
        } else {
          currentWait += 500;
        }
      }, 500);
    }
    /**
     *  Marketo's Munchkin uses the _mkto_trk cookie to track leads. This cookie is used to ping the lead DB and get lead
     *  information. This cookie is missing from our initial request, but is appended in the request in micro.
     *
     * @returns {boolean}
     * @private
     */

  }, {
    key: "_hasMarketoToken",
    value: function _hasMarketoToken() {
      return document.cookie.split(/(;|^) *_mkto_trk\=/).length > 1;
    }
    /**
     *
     *  Requests from the lead API, calls form prefill, and creates the cookie. This is where the bulk of the work is done
     *  and is only called if the cache cookie name is not found in the document cookies.
     *
     * @param url
     * @private
     */

  }, {
    key: "_requestFromAPI",
    value: function _requestFromAPI(url) {
      var _this2 = this;

      this.debug.message('requested from our API');
      var formData = new FormData();
      formData.append('fields', this.fields);
      formData.append('formID', this.formId);
      fetch(url, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return response.text();
      }).then(function (data) {
        return JSON.parse(data);
      }).then(function (parsedData) {
        _this2.debug.message('inside fetch request');

        if (typeof parsedData.result[0] !== 'undefined') {
          _this2._createCookie(parsedData.result[0]);
        }

        return parsedData;
      }).then(function (parsedData) {
        var form = MktoForms2.getForm(_this2.formId);

        _this2._prefillForm(form, parsedData.result[0]);
      })["catch"](function (error) {
        return console.log("There was an error fetching data: ".concat(error));
      });
    }
    /**
     *
     * Creates a cookie based on a JSON object. Ideally this object is a response from the lead db, but it could be any
     * shallow object.
     *
     * @param dataObj
     * @private
     */

  }, {
    key: "_createCookie",
    value: function _createCookie(dataObj) {
      this.debug.message('creating cookie');
      var functionalGroup = 'C0003';
      var correctFields = {};
      var cookieValue = '?';
      var expiryTime = new Date(Date.now() + 1000 * 60 * 60).toUTCString(); // Check for cookie consent - Functional

      if (window.adobePrivacy && window.adobePrivacy.activeCookieGroups() && window.adobePrivacy.activeCookieGroups().indexOf(functionalGroup) > -1) {
        // In order to store fields properly in the cookie for prefill, we need to upperCase the first letter of each field.
        Object.keys(dataObj).forEach(function (key) {
          correctFields["".concat(key.charAt(0).toUpperCase()).concat(key.slice(1))] = dataObj[key];
        }); // These fields will mess up the obscure and clarify functions, so we remove them.

        if (correctFields.Cookies) delete correctFields.Cookies; // Setting the cookie value to the new object

        for (var key in correctFields) {
          if (correctFields.hasOwnProperty(key)) {
            cookieValue += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(correctFields[key]), "&");
          }
        } // Trimming off the extra & at the end of the cookie string


        if (1 < cookieValue.length) {
          cookieValue = cookieValue.substr(0, cookieValue.length - 1);
        }

        document.cookie = "".concat(this.cacheCookieName, "=").concat(encodeURIComponent(this._obscure(cookieValue)), "; expires=").concat(expiryTime, "; path=/; domain=marketo.com");
      }
    }
    /**
     *
     *  Requires being called within MktoForms2.whenReady. Prefills a form, also calls the consent utility to unhide
     *  legal language if the country is an explicit opt in country.
     *
     * @param mktoForm - form passed from MktoForms2.whenReady
     * @param dataSet - an object of requested fields from the lead DB
     */

  }, {
    key: "_prefillForm",
    value: function _prefillForm(mktoForm, dataSet) {
      this.debug.message('prefill form running');
      var $form = mktoForm.getFormElem();

      for (var key in dataSet) {
        if (dataSet.hasOwnProperty(key)) {
          var newKey = key.charAt(0).toUpperCase() + key.substr(1);
          var selectedInput = $form.find("[name=\"".concat(newKey, "\"]"));
          var selectedValue = dataSet[key];

          if (0 < selectedInput.length) {
            selectedInput.val(selectedValue); // Adding resource center classes to pre-fill for style purposes

            selectedInput.closest('div').find('label').addClass('label--active');
            selectedInput.closest('div').find('.mktoAsterix').addClass('label--active');
          }
        }
      }

      this._hideFilledForm($form); // Pass "true" as second param to "spoof" your compliance country.


      this.consentUtil.showBasedOnOptInCountry(GateData);
    }
    /**
     *
     *  If all of the fields are filled, hide the form fields.
     *
     *  @param $form - form object passed from mktoForm.getFormElem()
     *  @private
     */

  }, {
    key: "_hideFilledForm",
    value: function _hideFilledForm($form) {
      this.debug.message('hiding prefilled form');
      var $visibleFields = $form.find(':input').filter(':visible').not(':button');
      var $rows = $form.find('.mktoFormRow');
      var $removableElements = $rows.add('#form-requirements');
      var $mktoFormContainer = document.getElementById("mktoForm_".concat(this.formId)).closest('.mkto-form-container');
      var currentFormData = GateData[this.formId];
      var buttonText = currentFormData.buttonText !== null ? currentFormData.buttonText : 'Submit';

      if (this._visibleFieldsFilled((0, _toConsumableArray2["default"])($visibleFields))) {
        $removableElements.hide();
        $form.find('button').addClass('cta').text(buttonText).appendTo($form);

        if ($mktoFormContainer) {
          $mktoFormContainer.classList.add('form-hidden');
        }
      } else {
        console.log('The form isn\'t completely filled out');
      }
    }
    /**
     *
     *  Checks to see if all of the visible fields have data in them.
     *
     *  @private
     */

  }, {
    key: "_visibleFieldsFilled",
    value: function _visibleFieldsFilled(fields) {
      var isFilled = true;
      fields.forEach(function (element) {
        if (element.value.length <= 0) {
          isFilled = false;
        }
      });
      return isFilled;
    }
    /**
     *  Retrieves cookie data, clarifies the data using internal methods, turns cookie into object, and prefills the form
     *  based on the object
     *
     *  @private
     */

  }, {
    key: "_prefillFromCookie",
    value: function _prefillFromCookie() {
      var _this3 = this;

      this.debug.message('prefilling from cookie');

      var cookie = this._retrieveCookie();

      var leadData = this._parseParams(cookie);

      MktoForms2.whenReady(function (form) {
        _this3._prefillForm(form, leadData);
      });
    }
    /**
     *
     *  Retrieves all of the cookies and places them in an object. Then uses the clarify method on the cookie and returns
     *  the clarified version.
     *
     * @private
     */

  }, {
    key: "_retrieveCookie",
    value: function _retrieveCookie() {
      this.debug.message('retrieving cookie');
      var cookie_string = document.cookie;
      var cookies = {};
      var parts;
      var name;
      cookie_string.split(/[,;]/).map(function (cookie) {
        parts = cookie.split(/=/, 2);
        name = decodeURIComponent(parts[0].replace(/^\s+/g, ''));
        cookies[name] = parts.length > 1 ? decodeURIComponent(parts[1].replace(/\s+$/g, '')) : null;
      });
      return this._clarify(cookies[this.cacheCookieName]);
    }
    /**
     *
     * Converts a parameter string (e.g. key=val&other=val) into an object for easy prefill
     *
     * @param queryString (string)
     * @return {object}
     * @private
     */

  }, {
    key: "_parseParams",
    value: function _parseParams(queryString) {
      var parsedParams = {};
      var keyVal = queryString.replace(/^\?/, '').split('&');
      keyVal.forEach(function (string) {
        var splitVals = string.split('=');
        parsedParams[splitVals[0]] = decodeURIComponent(splitVals[1]);
      });
      return parsedParams;
    }
    /**
     *
     *  Modifies the a cookie string passed to it. It expects the string to be URIencoded, and to have the pattern of a
     *  cookie string.
     *
     * @param str
     * @returns {string|*}
     * @private
     */

  }, {
    key: "_obscure",
    value: function _obscure(str) {
      if (typeof str !== 'string') {
        return str;
      }

      var strEncoded = '',
          strSkipped = [],
          i;
      str = str.replace(/\./, '%2E').split('').reverse().join('');

      for (i = 0; i < str.length; i++) {
        switch (i % 3) {
          case 0:
            strEncoded += '.' + parseInt(str.charCodeAt(i)).toString(36).split('').reverse().join('');
            break;

          default:
            if (typeof strSkipped[i % 3] === 'undefined') strSkipped[i % 3] = '';
            strSkipped[i % 3] += str[i];
            break;
        }
      }

      strEncoded = strEncoded.substr(1);
      str = strEncoded.split('.').reverse().join('.') + '..' + strSkipped[1] + '..' + strSkipped[2];
      return str;
    }
    /**
     *
     *  Takes a string, and unscrambles it. Makes several assumptions: 1, the string has been scrambled using _obscure;
     *  2, the string has been URIencoded; The cookie string omits they key of its key value pair.
     *
     * @param str
     * @returns {string | *}
     * @private
     */

  }, {
    key: "_clarify",
    value: function _clarify(str) {
      if (typeof str !== 'string') {
        return str;
      }

      var parts;
      var encodedList;
      var strDecoded = '';
      var strSkipped1;
      var strSkipped2;
      var i;
      parts = str.split('..');
      encodedList = parts[0].split('.').reverse(); //.join('.'); //not joining because we need to decode each

      strSkipped1 = parts[1];
      strSkipped2 = parts[2];

      for (i = 0; i < encodedList.length; i++) {
        strDecoded += String.fromCharCode(parseInt(encodedList[i].split('').reverse().join(''), 36));

        if (typeof strSkipped1[i] !== 'undefined') {
          strDecoded += strSkipped1[i];
        }

        if (typeof strSkipped2[i] !== 'undefined') {
          strDecoded += strSkipped2[i];
        }
      }

      str = strDecoded.split('').reverse().join('').replace(/%2E/, '.');
      return str;
    }
    /**
     *
     *  Initiates the prefill, either from the cookie or from the lead database.
     *
     * @public
     */

  }, {
    key: "prefill",
    value: function prefill() {
      this.debug.message('running public function prefill');

      if (-1 < document.cookie.indexOf(this.cacheCookieName)) {
        this._prefillFromCookie();
      } else {
        this._requestFromLead();
      }
    } // Setters, in case of longer lifespan for object.

  }, {
    key: "setConnectorUrl",
    value: function setConnectorUrl(url) {
      this.connectorURL = url;
    }
  }, {
    key: "setCacheCookieName",
    value: function setCacheCookieName(cookieName) {
      this.cacheCookieName = cookieName;
    }
  }, {
    key: "setFields",
    value: function setFields(fields) {
      this.fields = fields;
    }
  }]);
  return MarketoLead;
}();

exports.MarketoLead = MarketoLead;

},{"../util/hash-debugger":14,"./consent-util":10,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":5,"@babel/runtime/helpers/toConsumableArray":8}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lead = require("./lead");

var _consentUtil = require("./consent-util");

module.exports = function () {
  /**
   * Processing for all forms on whenReady
   */
  MktoForms2.whenReady(function (form) {
    var $form = form.getFormElem();
    var formId = form.getId();
    var clsList = $('body').attr('class').split(' ');
    var formElements = [].concat((0, _toConsumableArray2["default"])($form.find('input:not([type=hidden])')), (0, _toConsumableArray2["default"])($form.find('select')));
    var locale = '';
    var fieldArr = [];
    var legal = new _consentUtil.ConsentUtil(formId);
    form.addHiddenFields({
      productPageViewed: document.referrer,
      MarketoURL: window.location.href
    }); // Swap legal language for form

    legal.swapConsentString();
    legal.listenForCountryChange(); // Remove default form styles

    $form.find('style').remove();
    $form.find('*').add($form).removeAttr('style');
    clsList.forEach(function (cls) {
      if (cls.indexOf('locale-') >= 0) {
        locale = cls.split('-')[1];
      }
    });
    GateData['sEOComments'] = "seo - referrer: ".concat(document.referrer, " - locale: ").concat(locale); // Prepopulate Lead Data if not disabled

    if (!GateData[formId].disablePrefill) {
      formElements.forEach(function (element) {
        var name = element.name;
        var lowercaseName = name.charAt(0).toLowerCase() + name.slice(1);
        fieldArr.push(lowercaseName);
      });
      var fields = fieldArr.join();
      var lead = new _lead.MarketoLead(fields, formId);
      lead.prefill();
    }
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

},{"./consent-util":10,"./lead":11,"@babel/runtime/helpers/interopRequireDefault":5,"@babel/runtime/helpers/toConsumableArray":8}],13:[function(require,module,exports){
"use strict";

require('./marketo-form-helper')();

},{"./marketo-form-helper":12}],14:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":5}]},{},[13]);
