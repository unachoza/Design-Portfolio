import React, { Component } from 'react';

export class AnimatedHeader extends Component {
  componentDidMount() {
    this.cbpAnimatedHeader();
  }
  cbpAnimatedHeader = () => {
    let docElem = document.documentElement,
      header = document.querySelector('.cbp-af-header'),
      didScroll = false,
      changeHeaderOn = 300;

    const init = () => {
      this.scrollPage();
      window.addEventListener(
        'scroll',
        (event) => {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 250);
          }
        },
        false
      );
    };

    const scrollPage = () => {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        classie.add(header, 'cbp-af-header-shrink');
      } else {
        classie.remove(header, 'cbp-af-header-shrink');
      }
      didScroll = false;
    };

    const scrollY = () => {
      return window.pageYOffset || docElem.scrollTop;
    };

    init();
  };

  render() {
    return <div></div>;
  }
}

export default AnimatedHeader;

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

// ( function( window ) {

// 'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg(className) {
  return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ('classList' in document.documentElement) {
  hasClass = function (elem, c) {
    return elem.classList.contains(c);
  };
  addClass = function (elem, c) {
    elem.classList.add(c);
  };
  removeClass = function (elem, c) {
    elem.classList.remove(c);
  };
} else {
  hasClass = function (elem, c) {
    return classReg(c).test(elem.className);
  };
  addClass = function (elem, c) {
    if (!hasClass(elem, c)) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function (elem, c) {
    elem.className = elem.className.replace(classReg(c), ' ');
  };
}

function toggleClass(elem, c) {
  var fn = hasClass(elem, c) ? removeClass : addClass;
  fn(elem, c);
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass,
};

// transport
if (typeof define === 'function' && define.amd) {
  // AMD
  define(classie);
} else {
  // browser global
  window.classie = classie;
}

// })( window );
