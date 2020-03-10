(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/custom-element.js":
/*!**************************************!*\
  !*** ./components/custom-element.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _preact_custom_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preact-custom-element */ "./components/preact-custom-element.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    <div style=", ">\n      <div>c u s t o m</div>\n      <div>e l e m e n t</div>\n    </div>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import { h } from 'preact'

 // import App from './containers/app'
// import { EventBus } from './utilities/bus'

var App = function App() {
  // const { errors } = useForm()
  return Object(htm_preact__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), {
    padding: '2vw 2vw'
  });
};

if (true) {
  Object(_preact_custom_element__WEBPACK_IMPORTED_MODULE_2__["default"])(App, 'womans-day', []); // window.EventBus = new EventBus()
}

/***/ }),

/***/ "./components/preact-custom-element.js":
/*!*********************************************!*\
  !*** ./components/preact-custom-element.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return register; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

function register(Component, tagName, propNames, options) {
  function PreactElement() {
    var inst = Reflect.construct(HTMLElement, [], PreactElement);
    inst._vdomComponent = Component;
    inst._root = options && options.shadow ? inst.attachShadow({
      mode: 'open'
    }) : inst;
    return inst;
  }

  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;
  PreactElement.prototype.connectedCallback = connectedCallback;
  PreactElement.prototype.attributeChangedCallback = attributeChangedCallback;
  PreactElement.prototype.detachedCallback = detachedCallback;
  PreactElement.observedAttributes = propNames || Component.observedAttributes || Object.keys(Component.propTypes || {});
  return customElements.define(tagName || Component.tagName || Component.displayName || Component.name, PreactElement);
}

function connectedCallback() {
  this._vdom = toVdom(this, this._vdomComponent);
  (this.hasAttribute('hydrate') ? preact__WEBPACK_IMPORTED_MODULE_0__["hydrate"] : preact__WEBPACK_IMPORTED_MODULE_0__["render"])(this._vdom, this._root);
}

function attributeChangedCallback(name, oldValue, newValue) {
  if (!this._vdom) return;
  var props = {};
  props[name] = newValue;
  this._vdom = Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(this._vdom, props);
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(this._vdom, this._root);
}

function detachedCallback() {
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(this._vdom = null, this._root);
}

function toVdom(element, nodeName) {
  if (element.nodeType === 3) return element.data;
  if (element.nodeType !== 1) return null;
  var children = [],
      props = {},
      i = 0,
      a = element.attributes,
      cn = element.childNodes;

  for (i = a.length; i--;) {
    props[a[i].name] = a[i].value;
  }

  for (i = cn.length; i--;) {
    children[i] = toVdom(cn[i]);
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(nodeName || element.nodeName.toLowerCase(), props, children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ __webpack_exports__["default"] = (function(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]});


/***/ }),

/***/ "./node_modules/htm/preact/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/htm/preact/index.module.js ***!
  \*************************************************/
/*! exports provided: h, render, Component, html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return m; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
var m=htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__["h"]);


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/preact/dist/preact.module.js from dll-reference dll_f30efca041c899b42f19 ***!
  \*********************************************************************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_f30efca041c899b42f19 */ "dll-reference dll_f30efca041c899b42f19"))("./node_modules/preact/dist/preact.module.js");

/***/ })

}]);
//# sourceMappingURL=1.js.map