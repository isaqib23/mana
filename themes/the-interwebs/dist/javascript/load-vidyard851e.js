(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * Load Vidyard
 * API Reference: https://knowledge.vidyard.com/hc/en-us/articles/360019034753
*/
// Requires Performance and Functionality Cookie Groups (minimum)
var loadVidyard = function loadVidyardAPI() {
  var loaded = 'vidyard-loaded'; // Only load vidyard if not loaded already

  if (!document.head.classList.contains(loaded)) {
    var url = 'https://play.vidyard.com/embed/v4.js';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
    document.head.classList.add(loaded);
  }
};

(function () {
  // Requires Advertising Cookie Group
  var addConsent = function addGDPRConsent() {
    window.onVidyardAPI = function (VidyardV4) {
      VidyardV4.api.GDPR.consent(true);
    };
  };

  var removeConsent = function removeGDPRConsent() {
    window.onVidyardAPI = function (VidyardV4) {
      VidyardV4.api.GDPR.consent(false);
    };
  };

  var setAlertDisplay = function setCookieAlertDisplay(display) {
    var alerts = document.querySelectorAll('.vidyard-cookie-alert');

    if (alerts && typeof display === 'string') {
      alerts.forEach(function (alert) {
        alert.style.display = display;
      });
    }
  };

  var checkConsent = function checkVidyardCookieConsent() {
    var privacy = window.adobePrivacy;
    var advertising = 'C0004';
    var functionality = 'C0003';
    var performance = 'C0002'; // Cookie Consent - Check if All cookie groups are active

    if (privacy && privacy.activeCookieGroups() && privacy.activeCookieGroups().indexOf(advertising) > -1 && privacy.activeCookieGroups().indexOf(functionality) > -1 && privacy.activeCookieGroups().indexOf(performance) > -1) {
      loadVidyard();
      addConsent();
      setAlertDisplay('none');
    } else if (privacy && privacy.activeCookieGroups() && privacy.activeCookieGroups().indexOf(functionality) > -1 && privacy.activeCookieGroups().indexOf(performance) > -1) {
      // Remove vidyard consent if user only enabled Functionality and Performance groups
      loadVidyard();
      removeConsent();
      setAlertDisplay('none');
    } else {
      // Vidyard cannot load so show cookie alert
      console.warn('Vidyard did not load due to lack of cookie consent');
      setAlertDisplay('');
    }
  };

  checkConsent(); // Re-check consent when privacy settings are updated

  window.addEventListener('adobePrivacy:PrivacyConsent', checkConsent);
  window.addEventListener('adobePrivacy:PrivacyCustom', checkConsent);
})();

var _default = loadVidyard;
exports["default"] = _default;

},{}]},{},[1]);
