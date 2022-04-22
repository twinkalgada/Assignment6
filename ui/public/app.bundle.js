/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.jsx */ "./src/Page.jsx");






var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_3__.render(element, document.getElementById('contents'));

if (false) {}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _ProductList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.jsx */ "./src/ProductList.jsx");
/* harmony import */ var _ProductEdit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductEdit.jsx */ "./src/ProductEdit.jsx");
/* harmony import */ var _ProductImage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductImage.jsx */ "./src/ProductImage.jsx");






var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/products",
    component: _ProductList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/edit/:id",
    component: _ProductEdit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/img/:id",
    component: _ProductImage_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    component: NotFound
  }));
}

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function format(num) {
  return num != null ? num.toString() : '';
}

function unformat(str, isDecimal) {
  var val = isDecimal ? parseFloat(str, 10) : parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

var NumInput = /*#__PURE__*/function (_React$Component) {
  _inherits(NumInput, _React$Component);

  var _super = _createSuper(NumInput);

  function NumInput(props) {
    var _this;

    _classCallCheck(this, NumInput);

    _this = _super.call(this, props);
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumInput, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^\d*\.?\d*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          _this$props$isDecimal = _this$props.isDecimal,
          isDecimal = _this$props$isDecimal === void 0 ? false : _this$props$isDecimal;
      var value = this.state.value;
      onChange(e, unformat(value, isDecimal));
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;

      var _this$props2 = this.props,
          isDecimal = _this$props2.isDecimal,
          restProps = _objectWithoutProperties(_this$props2, ["isDecimal"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, restProps, {
        type: "text",
        value: value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Grid.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");





function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bsStyle: "default",
    style: {
      borderRadius: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Brand, null, "My Company Inventory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Product List"))));
}

function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Product Add Form.
 * Expects 'addProduct' function as a prop.
 * Uses a controlled state for 'Price' input element for adding '$'.
 * And for rest of the elements, it uses native 'forms' object from DOM.
 */

var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  var _super = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super.call(this);
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var _document$forms$produ = document.forms.productAdd,
          name = _document$forms$produ.name,
          price = _document$forms$produ.price,
          category = _document$forms$produ.category,
          imageUrl = _document$forms$produ.imageUrl;
      var priceWithoutDollar = price.value.substring(1); // Getting value without '$'

      var product = {
        name: name.value,
        price: parseFloat(priceWithoutDollar),
        category: category.value,
        imageUrl: imageUrl.value
      };
      var addProduct = this.props.addProduct;
      addProduct(product); // Resetting the Form to initial value

      name.value = '';
      category.value = 'Shirts';
      imageUrl.value = '';
      this.setState({
        price: '$'
      });
    }
  }, {
    key: "handlePriceChange",
    value: function handlePriceChange(event) {
      var priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'

      this.setState({
        price: "$".concat(priceWithoutDollar)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var price = this.state.price;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit,
        className: "custom-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "category",
        className: "label"
      }, "Category", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        name: "category",
        className: "form-element-select"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "price",
        className: "label"
      }, "Price Per Unit", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "price",
        value: price,
        onChange: this.handlePriceChange,
        className: "form-element-input"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "name",
        className: "label"
      }, "Product Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "name",
        required: true,
        className: "form-element-input"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "imageUrl",
        className: "label"
      }, "Image URL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "imageUrl",
        className: "form-element-input"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: "button button-primary"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/ProductEdit.jsx":
/*!*****************************!*\
  !*** ./src/ProductEdit.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Panel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ProductEdit = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductEdit, _React$Component);

  var _super = _createSuper(ProductEdit);

  function ProductEdit() {
    var _this;

    _classCallCheck(this, ProductEdit);

    _this = _super.call(this);
    _this.state = {
      product: {},
      isLoading: true
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.match.params.id;
      var id = this.props.match.params.id;

      if (id !== prevId) {
        this.loadData();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event, naturalValue) {
      var _event$target = event.target,
          name = _event$target.name,
          textValue = _event$target.value;
      var value = naturalValue === undefined ? textValue : naturalValue;
      this.setState(function (prevState) {
        return {
          product: _objectSpread(_objectSpread({}, prevState.product), {}, _defineProperty({}, name, value))
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var product, query, id, changes, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                product = this.state.product;
                query = "mutation productUpdate(\n      $id: Int!\n      $changes: ProductUpdateInputs!\n    ) {\n      productUpdate(\n        id: $id\n        changes: $changes\n      ) {\n        id name category price imageUrl\n      }\n    }";
                id = product.id, changes = _objectWithoutProperties(product, ["id"]);
                _context.next = 6;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(query, {
                  id: id,
                  changes: changes
                });

              case 6:
                data = _context.sent;

                if (data) {
                  this.setState({
                    product: data.productUpdate
                  });
                  alert('Updated product successfully'); // eslint-disable-line no-alert
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, id, data, product;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query product($id: Int!) {\n      product(id: $id) {\n        id name category price imageUrl\n      }\n    }";
                id = this.props.match.params.id;
                _context2.next = 4;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(query, {
                  id: parseInt(id, 10)
                });

              case 4:
                data = _context2.sent;

                if (data) {
                  product = data.product;
                  product.name = product.name != null ? product.name : '';
                  product.category = product.category != null ? product.category : '';
                  product.price = product.price != null ? product.price : '';
                  product.imageUrl = product.imageUrl != null ? product.imageUrl : '';
                  this.setState({
                    product: product,
                    isLoading: false
                  });
                } else {
                  this.setState({
                    product: {},
                    isLoading: false
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          id = _this$state.product.id,
          isLoading = _this$state.isLoading;
      var propsId = this.props.match.params.id;

      if (id == null) {
        if (isLoading) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Loading Product details...");
        }

        if (propsId != null) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Product with ID ".concat(propsId, " not found."));
        }

        return null;
      }

      var _this$state$product = this.state.product,
          name = _this$state$product.name,
          category = _this$state$product.category,
          price = _this$state$product.price,
          imageUrl = _this$state$product.imageUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "panel-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Heading, {
        bsClass: "dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Title, null, "Editing Product: ".concat(id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        horizontal: true,
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"],
        sm: 3
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "name",
        value: name,
        onChange: this.onChange,
        key: id,
        className: "form-control"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"],
        sm: 3
      }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        componentClass: "select",
        name: "category",
        value: category,
        onChange: this.onChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"],
        sm: 3
      }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "price",
        value: price,
        onChange: this.onChange,
        key: id,
        className: "form-control"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"],
        sm: 3
      }, "Image Url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "imageUrl",
        value: imageUrl,
        onChange: this.onChange,
        key: id,
        className: "form-control"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        smOffset: 3,
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        bsStyle: "primary",
        type: "submit"
      }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
        to: "/products"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        bsStyle: "link"
      }, "Back"))))))));
    }
  }]);

  return ProductEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/ProductImage.jsx":
/*!******************************!*\
  !*** ./src/ProductImage.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ProductImage = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductImage, _React$Component);

  var _super = _createSuper(ProductImage);

  function ProductImage() {
    var _this;

    _classCallCheck(this, ProductImage);

    _this = _super.call(this);
    _this.state = {
      product: {}
    };
    return _this;
  }

  _createClass(ProductImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.match.params.id;
      var id = this.props.match.params.id;

      if (prevId !== id) {
        this.loadData();
      }
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.match.params.id;
                query = "query product($id: Int!) {\n      product (id: $id) {\n        id name imageUrl\n      }\n    }";
                _context.next = 4;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(query, {
                  id: parseInt(id, 10)
                });

              case 4:
                data = _context.sent;

                if (data) {
                  this.setState({
                    product: data.product
                  });
                } else {
                  this.setState({
                    product: {}
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state$product = this.state.product,
          id = _this$state$product.id,
          name = _this$state$product.name,
          imageUrl = _this$state$product.imageUrl;

      if (!id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Product with Id ".concat(id, " not present in the Database"));
      }

      if (!imageUrl) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No Image Url set for Product with id ".concat(id));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Viewing Image of Product with name - ".concat(name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: imageUrl,
        alt: "Product id ".concat(id)
      }));
    }
  }]);

  return ProductImage;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Panel.js");
/* harmony import */ var _ProductTable_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTable.jsx */ "./src/ProductTable.jsx");
/* harmony import */ var _ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductAdd.jsx */ "./src/ProductAdd.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var productTableHeadings = ['Product Name', 'Price', 'Category', 'Image'];
/**
 * Entry Point of our Application. Renders the whole page from here.
 */

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductList, _React$Component);

  var _super = _createSuper(ProductList);

  function ProductList() {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _super.call(this);
    _this.state = {
      products: [],
      initialLoading: true
    };
    _this.addProduct = _this.addProduct.bind(_assertThisInitialized(_this));
    _this.deleteProduct = _this.deleteProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "\n            query {\n                productList {\n                    id\n                    name\n                    category\n                    price\n                    imageUrl\n                }\n            }\n        ";
                _context.next = 3;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    products: data.productList,
                    initialLoading: false
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "addProduct",
    value: function () {
      var _addProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n            mutation addProduct($product: ProductInputs!) {\n                addProduct(product: $product) {\n                    id\n                }\n            }\n        ";
                _context2.next = 3;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  product: product
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addProduct(_x) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(index) {
        var query, products, _this$props, _this$props$location, pathname, search, history, id, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "mutation productDelete($id: Int!) {\n      productDelete(id: $id)\n    }";
                products = this.state.products;
                _this$props = this.props, _this$props$location = _this$props.location, pathname = _this$props$location.pathname, search = _this$props$location.search, history = _this$props.history;
                id = products[index].id;
                _context3.next = 6;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  id: id
                });

              case 6:
                data = _context3.sent;

                if (data && data.productDelete) {
                  this.setState(function (prevState) {
                    var newList = _toConsumableArray(prevState.products);

                    if (pathname === "/products/".concat(id)) {
                      history.push({
                        pathname: '/products',
                        search: search
                      });
                    }

                    newList.splice(index, 1);
                    return {
                      products: newList
                    };
                  });
                } else {
                  this.loadData();
                }

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteProduct(_x2) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          products = _this$state.products,
          initialLoading = _this$state.initialLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Showing all available products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        headings: productTableHeadings,
        products: products,
        loading: initialLoading,
        deleteProduct: this.deleteProduct
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        defaultExpanded: true,
        className: "panel-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {
        toggle: true
      }, "Add a new Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
        collapsible: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        addProduct: this.addProduct
      })))));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Table.js");




var NO_DATA_AVAILABLE = 'No Data Available';
/**
 * Renders a single Row in the Product table
 * @param props Expects props as a 'product' object which contains
 * name, price, category and imageUrl.
 */

function ProductTableRow(_ref) {
  var product = _ref.product,
      deleteProduct = _ref.deleteProduct,
      index = _ref.index;
  var name = product.name,
      price = product.price,
      category = product.category,
      imageUrl = product.imageUrl,
      id = product.id;
  var deleteTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "delete-tooltip",
    placement: "top"
  }, "Delete Product");
  var editTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "close-tooltip",
    placement: "top"
  }, "Edit Product");

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(index);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, name || NO_DATA_AVAILABLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price ? "$".concat(price) : NO_DATA_AVAILABLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/img/".concat(id)
  }, "View") : NO_DATA_AVAILABLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/edit/".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delayShow: 1000,
    overlay: editTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bsSize: "xsmall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    glyph: "edit"
  })))), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delayShow: 1000,
    overlay: deleteTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bsSize: "xsmall",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    glyph: "trash"
  })))));
}
/**
* Renders the Product Table
* @param props Expects 'headings' and 'products' array as props
*/


function ProductTable(_ref2) {
  var headings = _ref2.headings,
      products = _ref2.products,
      loading = _ref2.loading,
      deleteProduct = _ref2.deleteProduct;
  var productTableRows = products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProductTableRow, {
      key: product.id,
      product: product,
      deleteProduct: deleteProduct,
      index: index
    });
  });
  var initialTableMessage = loading ? 'Loading products...' : 'No Products added yet';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true,
    className: "table-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
    className: "text-left bordered-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, headings.map(function (heading, index) {
    return (
      /*#__PURE__*/
      // using index as keys as Table Headings will not change dynamically
      // eslint-disable-next-line implicit-arrow-linebreak, react/no-array-index-key
      react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        key: index
      }, heading)
    );
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, products.length > 0 ? productTableRows : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    colSpan: "5"
  }, initialTableMessage))));
}

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

var TextInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TextInput, _React$Component);

  var _super = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, props);
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextInput, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onChange = this.props.onChange;
      var value = this.state.value;
      onChange(e, unformat(value));
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;

      var _this$props = this.props,
          _this$props$tag = _this$props.tag,
          tag = _this$props$tag === void 0 ? 'input' : _this$props$tag,
          props = _objectWithoutProperties(_this$props, ["tag"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag, _objectSpread(_objectSpread({}, props), {}, {
        value: value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ graphQLFetch)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint "no-alert": "off" */

/**
 * Generic function to fetch graphQL queries and mutations
 * @param query GraphQL query to be sent in the body
 * @param variables Query variable to be passed with the query. Defaults to {}
 */
function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
    var variables,
        response,
        result,
        error,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            result = _context.sent;

            if (result.errors) {
              error = result.errors[0];
              alert('Error while quering for data - ', error);
            }

            return _context.abrupt("return", result.data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            alert("Error in sending data to server: ".concat(_context.t0.message));
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkassignment6_ui"] = self["webpackChunkassignment6_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map