(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-city-select"] = factory(require("react"));
	else
		root["react-city-select"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vdh7");


/***/ }),

/***/ "BEQ0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),

/***/ "CorD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("nmHn");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../node_modules/sass-loader/lib/loader.js!../node_modules/postcss-loader/index.js!./citySelect.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../node_modules/sass-loader/lib/loader.js!../node_modules/postcss-loader/index.js!./citySelect.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "FZ+f":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "Ie6m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__("gt/O");
  var loggedTypeFailures = {};

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/***/ }),

/***/ "JtmH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assign = __webpack_require__("BEQ0");

var ReactPropTypesSecret = __webpack_require__("gt/O");
var checkPropTypes = __webpack_require__("Ie6m");

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("release" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "KSGD":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("JtmH")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

/***/ }),

/***/ "MTIv":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("mJPh");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "Q4/m":
/***/ (function(module, exports) {

module.exports = {"indexCitys":{"pos":[{"id":"110100","name":"北京"}],"hot":[{"id":"110100","name":"北京"},{"id":"120100","name":"天津"},{"id":"130100","name":"石家庄"},{"id":"150100","name":"呼和浩特"},{"id":"210100","name":"沈阳"},{"id":"210200","name":"大连"},{"id":"220100","name":"长春"},{"id":"230100","name":"哈尔滨"},{"id":"310100","name":"上海"},{"id":"320100","name":"南京"},{"id":"320200","name":"无锡"},{"id":"320400","name":"常州"},{"id":"320500","name":"苏州"},{"id":"330100","name":"杭州"},{"id":"330200","name":"宁波"},{"id":"330300","name":"温州"},{"id":"340100","name":"合肥"},{"id":"350100","name":"福州"},{"id":"350200","name":"厦门"},{"id":"360100","name":"南昌"},{"id":"370100","name":"济南"},{"id":"370200","name":"青岛"},{"id":"410100","name":"郑州"},{"id":"420100","name":"武汉"},{"id":"430100","name":"长沙"},{"id":"440100","name":"广州"},{"id":"440300","name":"深圳"},{"id":"440600","name":"佛山"},{"id":"441900","name":"东莞"},{"id":"450100","name":"南宁"},{"id":"500100","name":"重庆"},{"id":"510100","name":"成都"},{"id":"520100","name":"贵阳"},{"id":"530100","name":"昆明"},{"id":"610100","name":"西安"}],"A":[{"id":"152900","name":"阿拉善盟"},{"id":"210300","name":"鞍山"},{"id":"340800","name":"安庆"},{"id":"410500","name":"安阳"},{"id":"513200","name":"阿坝藏族羌族自治州"},{"id":"520400","name":"安顺"},{"id":"542500","name":"阿里地区"},{"id":"610900","name":"安康"},{"id":"652900","name":"阿克苏地区"},{"id":"654300","name":"阿勒泰地区"},{"id":"820100","name":"澳门半岛"},{"id":"659002","name":"阿拉尔市"}],"B":[{"id":"110100","name":"北京"},{"id":"130600","name":"保定"},{"id":"150200","name":"包头"},{"id":"150800","name":"巴彦淖尔"},{"id":"210500","name":"本溪"},{"id":"220600","name":"白山"},{"id":"220800","name":"白城"},{"id":"340300","name":"蚌埠"},{"id":"341600","name":"亳州"},{"id":"371600","name":"滨州"},{"id":"450500","name":"北海"},{"id":"451000","name":"百色"},{"id":"511900","name":"巴中"},{"id":"522400","name":"毕节地区"},{"id":"530500","name":"保山"},{"id":"610300","name":"宝鸡"},{"id":"620400","name":"白银"},{"id":"652700","name":"博尔塔拉蒙古自治州"},{"id":"652800","name":"巴音郭楞蒙古自治州"}],"C":[{"id":"130800","name":"承德"},{"id":"130900","name":"沧州"},{"id":"140400","name":"长治"},{"id":"150400","name":"赤峰"},{"id":"220100","name":"长春"},{"id":"320400","name":"常州"},{"id":"341100","name":"滁州"},{"id":"341400","name":"巢湖"},{"id":"341700","name":"池州"},{"id":"430100","name":"长沙"},{"id":"430700","name":"常德"},{"id":"431000","name":"郴州"},{"id":"445100","name":"潮州"},{"id":"451400","name":"崇左"},{"id":"500100","name":"重庆"},{"id":"510100","name":"成都"},{"id":"532300","name":"楚雄彝族自治州"},{"id":"542100","name":"昌都地区"},{"id":"652300","name":"昌吉回族自治州"}],"D":[{"id":"140200","name":"大同"},{"id":"210200","name":"大连"},{"id":"210600","name":"丹东"},{"id":"230600","name":"大庆"},{"id":"232700","name":"大兴安岭地区"},{"id":"370500","name":"东营"},{"id":"371400","name":"德州"},{"id":"441900","name":"东莞"},{"id":"510600","name":"德阳"},{"id":"511700","name":"达州"},{"id":"532900","name":"大理白族自治州"},{"id":"533100","name":"德宏傣族景颇族自治州"},{"id":"533400","name":"迪庆藏族自治州"},{"id":"621100","name":"定西"},{"id":"469003","name":"儋州市"}],"E":[{"id":"150600","name":"鄂尔多斯"},{"id":"420700","name":"鄂州"},{"id":"422800","name":"恩施土家族苗族自治州"}],"F":[{"id":"210400","name":"抚顺"},{"id":"210900","name":"阜新"},{"id":"341200","name":"阜阳"},{"id":"350100","name":"福州"},{"id":"361000","name":"抚州"},{"id":"440600","name":"佛山"},{"id":"450600","name":"防城港"}],"G":[{"id":"360700","name":"赣州"},{"id":"440100","name":"广州"},{"id":"450300","name":"桂林"},{"id":"450800","name":"贵港"},{"id":"510800","name":"广元"},{"id":"511600","name":"广安"},{"id":"513300","name":"甘孜藏族自治州"},{"id":"520100","name":"贵阳"},{"id":"623000","name":"甘南藏族自治州"},{"id":"632600","name":"果洛藏族自治州"},{"id":"640400","name":"固原"},{"id":"710200","name":"高雄"},{"id":"712300","name":"高雄县"}],"H":[{"id":"130400","name":"邯郸"},{"id":"131100","name":"衡水"},{"id":"150100","name":"呼和浩特"},{"id":"150700","name":"呼伦贝尔"},{"id":"211400","name":"葫芦岛"},{"id":"230100","name":"哈尔滨"},{"id":"230400","name":"鹤岗"},{"id":"231100","name":"黑河"},{"id":"320800","name":"淮安"},{"id":"330100","name":"杭州"},{"id":"330500","name":"湖州"},{"id":"340100","name":"合肥"},{"id":"340400","name":"淮南"},{"id":"340600","name":"淮北"},{"id":"341000","name":"黄山"},{"id":"371700","name":"菏泽"},{"id":"410600","name":"鹤壁"},{"id":"420200","name":"黄石"},{"id":"421100","name":"黄冈"},{"id":"430400","name":"衡阳"},{"id":"431200","name":"怀化"},{"id":"441300","name":"惠州"},{"id":"441600","name":"河源"},{"id":"451100","name":"贺州"},{"id":"451200","name":"河池"},{"id":"460100","name":"海口"},{"id":"532500","name":"红河哈尼族彝族自治州"},{"id":"610700","name":"汉中"},{"id":"632100","name":"海东地区"},{"id":"632200","name":"海北藏族自治州"},{"id":"632300","name":"黄南藏族自治州"},{"id":"632500","name":"海南藏族自治州"},{"id":"632800","name":"海西蒙古族藏族自治州"},{"id":"652200","name":"哈密地区"},{"id":"653200","name":"和田地区"},{"id":"712600","name":"花莲县"}],"J":[{"id":"140500","name":"晋城"},{"id":"140700","name":"晋中"},{"id":"210700","name":"锦州"},{"id":"220200","name":"吉林"},{"id":"230300","name":"鸡西"},{"id":"230800","name":"佳木斯"},{"id":"330400","name":"嘉兴"},{"id":"330700","name":"金华"},{"id":"360200","name":"景德镇"},{"id":"360400","name":"九江"},{"id":"360800","name":"吉安"},{"id":"370100","name":"济南"},{"id":"370800","name":"济宁"},{"id":"410800","name":"焦作"},{"id":"420800","name":"荆门"},{"id":"421000","name":"荆州"},{"id":"440700","name":"江门"},{"id":"445200","name":"揭阳"},{"id":"620200","name":"嘉峪关"},{"id":"620300","name":"金昌"},{"id":"620900","name":"酒泉"},{"id":"710500","name":"金门县"},{"id":"710700","name":"基隆"},{"id":"710900","name":"嘉义"},{"id":"810200","name":"九龙"},{"id":"410881","name":"济源市"},{"id":"711900","name":"嘉义县"}],"K":[{"id":"410200","name":"开封"},{"id":"530100","name":"昆明"},{"id":"650200","name":"克拉玛依"},{"id":"653000","name":"克孜勒苏柯尔克孜自治州"},{"id":"653100","name":"喀什地区"}],"L":[{"id":"131000","name":"廊坊"},{"id":"141000","name":"临汾"},{"id":"141100","name":"吕梁"},{"id":"211000","name":"辽阳"},{"id":"220400","name":"辽源"},{"id":"320700","name":"连云港"},{"id":"331100","name":"丽水"},{"id":"341500","name":"六安"},{"id":"350800","name":"龙岩"},{"id":"371200","name":"莱芜"},{"id":"371300","name":"临沂"},{"id":"371500","name":"聊城"},{"id":"410300","name":"洛阳"},{"id":"431300","name":"娄底"},{"id":"450200","name":"柳州"},{"id":"451300","name":"来宾"},{"id":"510500","name":"泸州"},{"id":"511100","name":"乐山"},{"id":"513400","name":"凉山彝族自治州"},{"id":"520200","name":"六盘水"},{"id":"530700","name":"丽江"},{"id":"530900","name":"临沧"},{"id":"540100","name":"拉萨"},{"id":"542600","name":"林芝地区"},{"id":"620100","name":"兰州"},{"id":"621200","name":"陇南"},{"id":"622900","name":"临夏回族自治州"},{"id":"820200","name":"离岛"}],"M":[{"id":"231000","name":"牡丹江"},{"id":"340500","name":"马鞍山"},{"id":"440900","name":"茂名"},{"id":"441400","name":"梅州"},{"id":"510700","name":"绵阳"},{"id":"511400","name":"眉山"},{"id":"711500","name":"苗栗县"}],"N":[{"id":"320100","name":"南京"},{"id":"320600","name":"南通"},{"id":"330200","name":"宁波"},{"id":"350700","name":"南平"},{"id":"350900","name":"宁德"},{"id":"360100","name":"南昌"},{"id":"411300","name":"南阳"},{"id":"450100","name":"南宁"},{"id":"511000","name":"内江"},{"id":"511300","name":"南充"},{"id":"533300","name":"怒江傈僳族自治州"},{"id":"542400","name":"那曲地区"},{"id":"710600","name":"南投县"}],"P":[{"id":"211100","name":"盘锦"},{"id":"350300","name":"莆田"},{"id":"360300","name":"萍乡"},{"id":"410400","name":"平顶山"},{"id":"410900","name":"濮阳"},{"id":"510400","name":"攀枝花"},{"id":"530800","name":"普洱"},{"id":"620800","name":"平凉"},{"id":"712400","name":"屏东县"},{"id":"712700","name":"澎湖县"}],"Q":[{"id":"130300","name":"秦皇岛"},{"id":"230200","name":"齐齐哈尔"},{"id":"230900","name":"七台河"},{"id":"330800","name":"衢州"},{"id":"350500","name":"泉州"},{"id":"370200","name":"青岛"},{"id":"441800","name":"清远"},{"id":"450700","name":"钦州"},{"id":"522300","name":"黔西南布依族苗族自治州"},{"id":"522600","name":"黔东南苗族侗族自治州"},{"id":"522700","name":"黔南布依族苗族自治州"},{"id":"530300","name":"曲靖"},{"id":"621000","name":"庆阳"},{"id":"429005","name":"潜江市"}],"R":[{"id":"371100","name":"日照"},{"id":"542300","name":"日喀则地区"}],"S":[{"id":"130100","name":"石家庄"},{"id":"140600","name":"朔州"},{"id":"210100","name":"沈阳"},{"id":"220300","name":"四平"},{"id":"220700","name":"松原"},{"id":"230500","name":"双鸭山"},{"id":"231200","name":"绥化"},{"id":"310100","name":"上海"},{"id":"320500","name":"苏州"},{"id":"321300","name":"宿迁"},{"id":"330600","name":"绍兴"},{"id":"341300","name":"宿州"},{"id":"350400","name":"三明"},{"id":"361100","name":"上饶"},{"id":"411200","name":"三门峡"},{"id":"411400","name":"商丘"},{"id":"420300","name":"十堰"},{"id":"421300","name":"随州"},{"id":"430500","name":"邵阳"},{"id":"440200","name":"韶关"},{"id":"440300","name":"深圳"},{"id":"440500","name":"汕头"},{"id":"441500","name":"汕尾"},{"id":"460200","name":"三亚"},{"id":"510900","name":"遂宁"},{"id":"542200","name":"山南地区"},{"id":"611000","name":"商洛"},{"id":"640200","name":"石嘴山"},{"id":"429021","name":"神农架林区"},{"id":"659001","name":"石河子市"},{"id":"460300","name":"三沙市"}],"T":[{"id":"120100","name":"天津"},{"id":"130200","name":"唐山"},{"id":"140100","name":"太原"},{"id":"150500","name":"通辽"},{"id":"211200","name":"铁岭"},{"id":"220500","name":"通化"},{"id":"321200","name":"泰州"},{"id":"331000","name":"台州"},{"id":"340700","name":"铜陵"},{"id":"370900","name":"泰安"},{"id":"411100","name":"漯河"},{"id":"522200","name":"铜仁地区"},{"id":"610200","name":"铜川"},{"id":"620500","name":"天水"},{"id":"652100","name":"吐鲁番地区"},{"id":"654200","name":"塔城地区"},{"id":"710100","name":"台北"},{"id":"710300","name":"台南"},{"id":"710400","name":"台中"},{"id":"429006","name":"天门市"},{"id":"659003","name":"图木舒克市"},{"id":"711100","name":"台北县"},{"id":"711400","name":"桃园县"},{"id":"711600","name":"台中县"},{"id":"712200","name":"台南县"},{"id":"712500","name":"台东县"}],"W":[{"id":"150300","name":"乌海"},{"id":"150900","name":"乌兰察布"},{"id":"320200","name":"无锡"},{"id":"330300","name":"温州"},{"id":"340200","name":"芜湖"},{"id":"370700","name":"潍坊"},{"id":"371000","name":"威海"},{"id":"420100","name":"武汉"},{"id":"450400","name":"梧州"},{"id":"532600","name":"文山壮族苗族自治州"},{"id":"610500","name":"渭南"},{"id":"620600","name":"武威"},{"id":"640300","name":"吴忠"},{"id":"650100","name":"乌鲁木齐"},{"id":"659004","name":"五家渠市"}],"X":[{"id":"130500","name":"邢台"},{"id":"140900","name":"忻州"},{"id":"152200","name":"兴安盟"},{"id":"152500","name":"锡林郭勒盟"},{"id":"320300","name":"徐州"},{"id":"341800","name":"宣城"},{"id":"350200","name":"厦门"},{"id":"360500","name":"新余"},{"id":"410700","name":"新乡"},{"id":"411000","name":"许昌"},{"id":"411500","name":"信阳"},{"id":"420600","name":"襄樊"},{"id":"420900","name":"孝感"},{"id":"421200","name":"咸宁"},{"id":"430300","name":"湘潭"},{"id":"433100","name":"湘西土家族苗族自治州"},{"id":"532800","name":"西双版纳傣族自治州"},{"id":"610100","name":"西安"},{"id":"610400","name":"咸阳"},{"id":"630100","name":"西宁"},{"id":"710800","name":"新竹"},{"id":"810100","name":"香港岛"},{"id":"810300","name":"新界"},{"id":"429004","name":"仙桃市"},{"id":"711300","name":"新竹县"}],"Y":[{"id":"140300","name":"阳泉"},{"id":"140800","name":"运城"},{"id":"210800","name":"营口"},{"id":"222400","name":"延边朝鲜族自治州"},{"id":"230700","name":"伊春"},{"id":"320900","name":"盐城"},{"id":"321000","name":"扬州"},{"id":"360600","name":"鹰潭"},{"id":"360900","name":"宜春"},{"id":"370600","name":"烟台"},{"id":"420500","name":"宜昌"},{"id":"430600","name":"岳阳"},{"id":"430900","name":"益阳"},{"id":"431100","name":"永州"},{"id":"441700","name":"阳江"},{"id":"445300","name":"云浮"},{"id":"450900","name":"玉林"},{"id":"511500","name":"宜宾"},{"id":"511800","name":"雅安"},{"id":"530400","name":"玉溪"},{"id":"610600","name":"延安"},{"id":"610800","name":"榆林"},{"id":"632700","name":"玉树藏族自治州"},{"id":"640100","name":"银川"},{"id":"654000","name":"伊犁哈萨克自治州"},{"id":"711200","name":"宜兰县"},{"id":"712100","name":"云林县"}],"Z":[{"id":"130700","name":"张家口"},{"id":"211300","name":"朝阳"},{"id":"321100","name":"镇江"},{"id":"330900","name":"舟山"},{"id":"350600","name":"漳州"},{"id":"370300","name":"淄博"},{"id":"370400","name":"枣庄"},{"id":"410100","name":"郑州"},{"id":"411600","name":"周口"},{"id":"411700","name":"驻马店"},{"id":"430200","name":"株洲"},{"id":"430800","name":"张家界"},{"id":"440400","name":"珠海"},{"id":"440800","name":"湛江"},{"id":"441200","name":"肇庆"},{"id":"442000","name":"中山"},{"id":"510300","name":"自贡"},{"id":"512000","name":"资阳"},{"id":"520300","name":"遵义"},{"id":"530600","name":"昭通"},{"id":"620700","name":"张掖"},{"id":"640500","name":"中卫"},{"id":"711700","name":"彰化县"}]}}

/***/ }),

/***/ "gt/O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "it3B":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAMAAAAhSXi5AAAAM1BMVEVHcEzGxsbi4uLAwMDAwMDFxcXAwMDAwMDCwsLIyMjAwMDBwcHCwsLAwMDAwMDBwcHAwMBSZ3OjAAAAEHRSTlMAHQb2qS7M720S4U9f2Xq1kbxtKwAAALRJREFUKM91kkkSxCAIANt9iSb8/7VzUCtGnT5hF4WAAgCp2GpMtSXxou8gnXDrYZWXCa+6zfIhKwDtZcFr4JaNG1LYdUiUEUbn4kgp2G4VgOreUlsQW1exnSqmBa5p107mn86nIvnflfHUYCTJgQTPbh/g2vUF6LraqjmlX63ZZeG+P9p1TGaMNEYZzE8Rpi9RXl2mj/KWsbMl9UXm9NE4IyJiHAtx2vpS3u4W7b0+aNJ03Q/tQBm78y/hpQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "mJPh":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "nmHn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".citySelect__clSearchComponent-3ldYS {\n  padding-bottom: 13.33333vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__box-3bra5 div {\n  color: #000;\n  font-size: 4vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__section-3GLjB > .citySelect__title-3gNya {\n  padding: 0 2.66667vw;\n  height: 6.66667vw;\n  line-height: 6.66667vw;\n  background: #f0f0f0;\n  font-size: 3.2vw;\n  color: #999999; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__section-3GLjB > .citySelect__box-3bra5 {\n  padding: 0 2.66667vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__section-3GLjB > .citySelect__grid-1wL-L {\n  padding: 2.66667vw 2.66667vw 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__grid-1wL-L > div {\n  width: 21.33333vw;\n  text-align: center;\n  margin-bottom: 2.66667vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__line-1GL6L > div {\n  height: 8vw;\n  line-height: 8vw;\n  border-top: 0.26667vw solid #f0f0f0; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__nonius-1_aRF {\n  width: 10.66667vw;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  right: 0;\n  font-size: 3.2vw;\n  z-index: 999; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__nonius-1_aRF > div {\n  width: 100%;\n  text-align: center;\n  display: block;\n  height: 5.33333vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__icon-local-2cIbe {\n  width: 2.93333vw;\n  height: 4.26667vw;\n  pointer-events: none; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__keys-item-g2EzS {\n  display: block;\n  height: 5.33333vw;\n  width: 100%;\n  text-align: center;\n  font-size: 3.46667vw; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__keys-item-g2EzS > img {\n  height: 100%; }\n\n.citySelect__clSearchComponent-3ldYS .citySelect__on-select-VpeBu {\n  width: 13.33333vw;\n  border-radius: 1.33333vw;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  color: #fff;\n  background: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  padding: 10px;\n  z-index: 99;\n  font-size: 6.4vw;\n  font-weight: 600;\n  line-height: 8vw; }\n", ""]);

// exports
exports.locals = {
	"clSearchComponent": "citySelect__clSearchComponent-3ldYS",
	"box": "citySelect__box-3bra5",
	"section": "citySelect__section-3GLjB",
	"title": "citySelect__title-3gNya",
	"grid": "citySelect__grid-1wL-L",
	"line": "citySelect__line-1GL6L",
	"nonius": "citySelect__nonius-1_aRF",
	"icon-local": "citySelect__icon-local-2cIbe",
	"keys-item": "citySelect__keys-item-g2EzS",
	"on-select": "citySelect__on-select-VpeBu"
};

/***/ }),

/***/ "qZv8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citySelect_scss__ = __webpack_require__("CorD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__citySelect_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_json__ = __webpack_require__("Q4/m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_png__ = __webpack_require__("it3B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__icon_png__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// 引入组件样式




function log(info) {
  console.log('%c react-city-select %c ' + info + ' %c', "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:transparent");
}

var CitySelect = function (_React$Component) {
  _inherits(CitySelect, _React$Component);

  function CitySelect(props) {
    _classCallCheck(this, CitySelect);

    var _this = _possibleConstructorReturn(this, (CitySelect.__proto__ || Object.getPrototypeOf(CitySelect)).call(this, props));

    var dataKeys = Object.keys(_this.props.data).map(function (secKey) {
      return secKey;
    });
    // 根据数据项 键值 或 label属性 提取标识
    var noniusKeys = Object.keys(_this.props.data).map(function (secKey, secIndex) {
      return secKey;
    });

    if (_this.props.config) {
      for (var key in _this.props.config) {
        if (_this.props.config.hasOwnProperty(key)) {
          var pos = noniusKeys.indexOf(key);
          if (pos > -1) {
            noniusKeys[pos] = _this.props.config[key]['key'] || _this.props.config[key]['title'] || noniusKeys[pos];
          }
        }
      }
    }

    _this.state = {
      onSelectText: '', // 当前滑动位置标识文案
      isShowSelectText: false, // 是否展示文案
      dataKeys: dataKeys,
      noniusKeys: noniusKeys
    };

    // 当前滑动字母位置    
    _this.onScrollIndex = 0;
    // 列表元素 DOM
    _this.listTitleDom = [];
    // 检索区域总高度
    _this.noniusEleHeight = 0;
    // 检索区域具体顶部高度
    _this.noniusEleTop = 0;
    return _this;
  }

  _createClass(CitySelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.data) {
        log('init success');
        var noniusEle = document.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.nonius);
        var noniusEleChild = document.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.nonius + ' > .' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['keys-item']);
        this.listTitleDom = document.querySelectorAll('.' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.section + ' > .' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['title']);

        this.noniusEleTop = noniusEle.getClientRects()[0].top;
        this.noniusEleHeight = noniusEleChild.clientHeight;

        // 单独声明 touchmove 事件，解决页面滚动问题
        document.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.nonius).addEventListener("touchmove", function (e) {
          _this2.sidebarTouchMove(e);
        }, {
          passive: false // react 绑定事件默认为 true
        });
      }
    }

    // 游标位置合法检测

  }, {
    key: 'onScrollIndexCheck',
    value: function onScrollIndexCheck() {
      this.onScrollIndex = parseInt((this.scrollEleTop - this.noniusEleTop) / this.noniusEleHeight, 10);

      if (this.onScrollIndex < 0) {
        this.onScrollIndex = 0;
      }

      if (this.onScrollIndex >= this.listTitleDom.length - 1) {
        this.onScrollIndex = this.listTitleDom.length - 1;
      }
    }

    // 开始滑动字母检索区域

  }, {
    key: 'sidebarTouchStart',
    value: function sidebarTouchStart(e) {
      this.scrollEleTop = e.touches[0].clientY;
      this.onScrollIndexCheck();
      this.setState({
        isShowSelectText: true,
        onSelectText: this.state.noniusKeys[this.onScrollIndex]
      });
    }

    // 正在滑动字母检索区域

  }, {
    key: 'sidebarTouchMove',
    value: function sidebarTouchMove(e) {
      e.preventDefault();
      this.scrollEleTop = e.touches[0].clientY;
      this.onScrollIndexCheck();
      this.setState({
        isShowSelectText: true,
        onSelectText: this.state.noniusKeys[this.onScrollIndex]
      });
    }

    // 滑动字母检索区域结束，处理列表跳转

  }, {
    key: 'sidebarTouchEnd',
    value: function sidebarTouchEnd(e) {
      this.setState({
        isShowSelectText: false
      });
      this.onScrollIndexCheck();
      var target = this.listTitleDom[this.onScrollIndex];
      window.scrollTo(0, target.offsetTop);
    }
  }, {
    key: 'configAttr',
    value: function configAttr(key, attr) {
      var res = null;
      if (this.props.config) {
        return this.props.config[key] && this.props.config[key][attr] ? this.props.config[key][attr] : null;
      }
      return res;
    }
  }, {
    key: 'configAttrImg',
    value: function configAttrImg(key, attr) {
      var res = null;
      if (this.props.config) {
        res = this.props.config[key] && this.props.config[key][attr] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.props.config[key][attr], alt: '' }) : null;
      }
      return res;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.data) return false;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.clSearchComponent },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['nonius'],
            onTouchStart: this.sidebarTouchStart.bind(this),
            onTouchEnd: this.sidebarTouchEnd.bind(this)
          },
          this.state.dataKeys.map(function (secKey, secIndex) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['keys-item'], key: secIndex },
              _this3.configAttrImg(secKey, 'icon') || _this3.configAttr(secKey, 'key') || _this3.configAttr(secKey, 'title') || secKey
            );
          })
        ),
        this.state.isShowSelectText ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['on-select'] },
          this.state.onSelectText
        ) : null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          Object.keys(this.props.data).map(function (sec, secIndex) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.section,
                id: secIndex, key: secIndex },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['title'] },
                _this3.configAttr(sec, 'title') || sec
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a.box + ' ' + (__WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a[_this3.configAttr(sec, 'style')] || __WEBPACK_IMPORTED_MODULE_2__citySelect_scss___default.a['line']) },
                _this3.props.data[sec].map(function (item, itemIndex) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      onClick: _this3.props.onSelectItem.bind(_this3, item),
                      key: itemIndex },
                    item.name
                  );
                })
              )
            );
          })
        )
      );
    }
  }]);

  return CitySelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

// 默认Props 


/* harmony default export */ __webpack_exports__["a"] = (CitySelect);
CitySelect.defaultProps = {
  data: __WEBPACK_IMPORTED_MODULE_3__data_json___default.a.indexCitys,
  config: {
    pos: {
      icon: __WEBPACK_IMPORTED_MODULE_4__icon_png___default.a,
      title: '定位城市'
    },
    hot: {
      title: '热门城市',
      key: '热门',
      style: 'grid'
    }
  }

  // 类型检查
};CitySelect.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  config: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onSelectItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/***/ }),

/***/ "vdh7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CitySelect__ = __webpack_require__("qZv8");


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__CitySelect__["a" /* default */]);

/***/ })

/******/ });
});