(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleKeydownMenu = exports.handleKeydownButton = exports.toggle = exports.initRegionPicker = exports.removeSearch = void 0;

/* eslint-disable */
var removeSearch = function removeSearch() {
  var search = document.querySelector('.feds-search-trigger');

  if (search !== null) {
    search.remove();
    return true;
  }

  return false;
};

exports.removeSearch = removeSearch;

var closeMenu = function closeRegionPicker(button, menu) {
  // Close the menu
  button.removeAttribute('aria-expanded');
  menu.setAttribute('hidden', 'true'); // Set focus to button

  button.focus();
};

var openMenu = function openRegionPicker(button, menu) {
  // Open the menu
  button.setAttribute('aria-expanded', 'true');
  menu.removeAttribute('hidden'); // Set focus to first menu item

  menu.querySelector('[role="menuitem"]').focus();
};

var toggle = function toggleRegionPicker(button, menu) {
  if (button.getAttribute('aria-expanded') === 'true') {
    closeMenu(button, menu);
  } else {
    openMenu(button, menu);
  }
};

exports.toggle = toggle;

var handleKeydownButton = function handleKeydownRegionPickerButton(key, button, menu) {
  switch (key) {
    case 'Enter':
    case ' ':
    case 'Spacebar':
      openMenu(button, menu);
      break;

    default:
      break;
  }
};

exports.handleKeydownButton = handleKeydownButton;

var handleKeydownMenu = function handleKeydownRegionPickerMenu(key, currentLink, button) {
  var menu = currentLink.parentNode.parentNode;

  switch (key) {
    case 'ArrowDown':
    case 'Down':
      var nextListItem = currentLink.parentNode.nextElementSibling;

      if (nextListItem) {
        // Focus on next item
        nextListItem.querySelector('[role="menuitem"]').focus();
      } else {
        // Go back to first item
        menu.querySelector('[role="menuitem"]').focus();
      }

      break;

    case 'ArrowUp':
    case 'Up':
      var previousListItem = currentLink.parentNode.previousElementSibling;

      if (previousListItem) {
        // Focus on next item
        previousListItem.querySelector('[role="menuitem"]').focus();
      } else {
        // Go to last item
        menu.querySelector('li:last-of-type > [role="menuitem"]').focus();
      }

      break;

    case 'Enter':
    case ' ':
    case 'Spacebar':
      currentLink.click();
      break;

    case 'Escape':
    case 'Esc':
    case 'Tab':
      closeMenu(button, menu);
      break;

    default:
      break;
  }
};

exports.handleKeydownMenu = handleKeydownMenu;

var initRegionPicker = function initRegionPickerMenu() {
  var button = document.querySelector('.feds-regionPicker');
  var menuId = 'marketo-regionPicker-menu';
  var menu = document.getElementById(menuId);

  if (button && menu && menu.querySelectorAll('[role="menuitem"]').length > 0) {
    // Move Region Picker Menu into Feds Footer
    button.parentNode.appendChild(menu);
    button.parentNode.style.position = 'relative';
    button.setAttribute('aria-controls', menuId);
    button.addEventListener('click', function (event) {
      event.preventDefault();
      toggle(button, menu);
    });
    button.addEventListener('keydown', function (event) {
      handleKeydownButton(event.key, event.target, menu);
    });
    menu.querySelectorAll('[role="menuitem"]').forEach(function (menuitem) {
      menuitem.addEventListener('keydown', function (event) {
        event.preventDefault();
        handleKeydownMenu(event.key, event.target, button);
      });
    });
  } else {
    console.error('Could not initialize Region Picker. Button or Menu does not exist.');
  }

  window.removeEventListener('feds.events.experience.loaded', initRegionPicker);
}; // Check if GNAV has loaded


exports.initRegionPicker = initRegionPicker;

if (window.feds && window.feds.events && window.feds.events.experience) {
  removeSearch();
  initRegionPicker();
} else {
  window.addEventListener('feds.events.experience.loaded', removeSearch);
  window.addEventListener('feds.events.experience.loaded', initRegionPicker);
}

},{}]},{},[1]);
