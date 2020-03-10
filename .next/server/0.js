exports.ids = [0];
exports.modules = {

/***/ "./components/custom-element.js":
/*!**************************************!*\
  !*** ./components/custom-element.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "htm/preact");
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(htm_preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preact_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preact-custom-element */ "./components/preact-custom-element.js");
// import { h } from 'preact'

 // import App from './containers/app'
// import { EventBus } from './utilities/bus'

const App = () => {
  // const { errors } = useForm()
  return htm_preact__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div style=${{
    padding: '2vw 2vw'
  }}>
      <div>c u s t o m</div>
      <div>e l e m e n t</div>
    </div>
  `;
};

if (false) {}

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
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

function register(Component, tagName, propNames, options) {
  function PreactElement() {
    const inst = Reflect.construct(HTMLElement, [], PreactElement);
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
  const props = {};
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
  let children = [],
      props = {},
      i = 0,
      a = element.attributes,
      cn = element.childNodes;

  for (i = a.length; i--;) props[a[i].name] = a[i].value;

  for (i = cn.length; i--;) children[i] = toVdom(cn[i]);

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(nodeName || element.nodeName.toLowerCase(), props, children);
}

/***/ })

};;
//# sourceMappingURL=0.js.map