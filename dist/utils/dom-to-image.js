"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _window = _interopRequireDefault(require("global/window"));

var _document = _interopRequireDefault(require("global/document"));

var _console = _interopRequireDefault(require("global/console"));

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This file is copied from https://github.com/tsayen/dom-to-image
 * Modified by heshan0131 to allow loading external stylesheets and inline webfonts
 */
var util = newUtil();
var inliner = newInliner();
var fontFaces = newFontFaces();
var images = newImages(); // Default impl options

var defaultOptions = {
  // Default is to fail on error, no placeholder
  imagePlaceholder: undefined,
  // Default cache bust is false, it will use the cache
  cacheBust: false
};
var domtoimage = {
  toSvg: toSvg,
  toPng: toPng,
  toJpeg: toJpeg,
  toBlob: toBlob,
  toPixelData: toPixelData,
  impl: {
    fontFaces: fontFaces,
    images: images,
    util: util,
    inliner: inliner,
    options: {}
  }
};
/**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options
   * @param {Function} options.filter - Should return true if passed node should be included in the output
   *          (excluding node means excluding it's children as well). Not called on the root node.
   * @param {String} options.bgcolor - color for the background, any valid CSS color value.
   * @param {Number} options.width - width to be applied to node before rendering.
   * @param {Number} options.height - height to be applied to node before rendering.
   * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
   * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
              defaults to 1.0.
    * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
    * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
    * @return {Promise} - A promise that is fulfilled with a SVG image data URL
    * */

function toSvg(node, options) {
  options = options || {};
  copyOptions(options);
  return Promise.resolve(node).then(function (nd) {
    return cloneNode(nd, options.filter, true);
  }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
    return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
  });

  function applyOptions(clone) {
    if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
    if (options.width) clone.style.width = "".concat(options.width, "px");
    if (options.height) clone.style.height = "".concat(options.height, "px");
    if (options.style) Object.keys(options.style).forEach(function (property) {
      clone.style[property] = options.style[property];
    });
    return clone;
  }
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
 * */


function toPixelData(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image data URL
 * */


function toPng(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.toDataURL();
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
 * */


function toJpeg(node, options) {
  options = options || {};
  return draw(node, options).then(function (canvas) {
    return canvas.toDataURL('image/jpeg', options.quality || 1.0);
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image blob
 * */


function toBlob(node, options) {
  return draw(node, options || {}).then(util.canvasToBlob);
}

function copyOptions(options) {
  // Copy options to impl options for use in impl
  if (typeof options.imagePlaceholder === 'undefined') {
    domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
  } else {
    domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
  }

  if (typeof options.cacheBust === 'undefined') {
    domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
  } else {
    domtoimage.impl.options.cacheBust = options.cacheBust;
  }
}

function draw(domNode, options) {
  return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
    var canvas = newCanvas(domNode);
    canvas.getContext('2d').drawImage(image, 0, 0);
    return canvas;
  });

  function newCanvas(dNode) {
    var canvas = _document["default"].createElement('canvas');

    canvas.width = options.width || util.width(dNode);
    canvas.height = options.height || util.height(dNode);

    if (options.bgcolor) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = options.bgcolor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  }
}

function cloneNode(node, filter, root) {
  if (!root && filter && !filter(node)) {
    return Promise.resolve();
  }

  return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
    return cloneChildren(node, clone, filter);
  }).then(function (clone) {
    return processClone(node, clone);
  });

  function makeNodeCopy(nd) {
    if (nd instanceof _window["default"].HTMLCanvasElement) {
      return util.makeImage(nd.toDataURL());
    }

    return nd.cloneNode(false);
  }

  function cloneChildren(original, clone, flt) {
    var children = original.childNodes;

    if (children.length === 0) {
      return Promise.resolve(clone);
    }

    return cloneChildrenInOrder(clone, util.asArray(children)).then(function () {
      return clone;
    });

    function cloneChildrenInOrder(parent, arrChildren) {
      var done = Promise.resolve();
      arrChildren.forEach(function (child) {
        done = done.then(function () {
          return cloneNode(child, flt);
        }).then(function (childClone) {
          if (childClone) parent.appendChild(childClone);
        });
      });
      return done;
    }
  }

  function processClone(original, clone) {
    if (!(clone instanceof _window["default"].Element)) {
      return clone;
    }

    ;
    return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
      return clone;
    });

    function cloneStyle() {
      var originalStyle = _window["default"].getComputedStyle(original);

      copyStyle(originalStyle, clone.style);

      function copyStyle(source, target) {
        if (source.cssText) {
          target.cssText = source.cssText; // add additional copy of composite styles

          if (source.font) {
            target.font = source.font;
          }
        } else {
          copyProperties(source, target);
        }

        function copyProperties(sourceStyle, targetStyle) {
          var propertyKeys = util.asArray(sourceStyle);
          propertyKeys.forEach(function (name) {
            targetStyle.setProperty(name, sourceStyle.getPropertyValue(name), sourceStyle.getPropertyPriority(name));
          });
        }
      }
    }

    function clonePseudoElements() {
      [':before', ':after'].forEach(function (element) {
        return clonePseudoElement(element);
      });

      function clonePseudoElement(element) {
        var style = _window["default"].getComputedStyle(original, element);

        var content = style.getPropertyValue('content');

        if (content === '' || content === 'none') {
          return;
        }

        var className = util.uid();
        clone.className = "".concat(clone.className, " ").concat(className);

        var styleElement = _document["default"].createElement('style');

        styleElement.appendChild(formatPseudoElementStyle(className, element, style));
        clone.appendChild(styleElement);

        function formatPseudoElementStyle(cln, elm, stl) {
          var selector = ".".concat(cln, ":").concat(elm);
          var cssText = stl.cssText ? formatCssText(stl) : formatCssProperties(stl);
          return _document["default"].createTextNode("".concat(selector, "{").concat(cssText, "}"));

          function formatCssText(stl1) {
            var cnt = stl1.getPropertyValue('content');
            return "".concat(stl.cssText, " content: ").concat(cnt, ";");
          }

          function formatCssProperties(stl2) {
            return "".concat(util.asArray(stl2).map(formatProperty).join('; '), ";");

            function formatProperty(name) {
              return "".concat(name, ":").concat(stl.getPropertyValue(name)).concat(stl.getPropertyPriority(name) ? ' !important' : '');
            }
          }
        }
      }
    }

    function copyUserInput() {
      if (original instanceof _window["default"].HTMLTextAreaElement) clone.innerHTML = original.value;
      if (original instanceof _window["default"].HTMLInputElement) clone.setAttribute('value', original.value);
    }

    function fixSvg() {
      if (!(clone instanceof _window["default"].SVGElement)) return;
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      if (!(clone instanceof _window["default"].SVGRectElement)) return;
      ['width', 'height'].forEach(function (attribute) {
        var value = clone.getAttribute(attribute);
        if (!value) return;
        clone.style.setProperty(attribute, value);
      });
    }
  }
}

function embedFonts(node) {
  return fontFaces.resolveAll().then(function (cssText) {
    var styleNode = _document["default"].createElement('style');

    node.appendChild(styleNode);
    styleNode.appendChild(_document["default"].createTextNode(cssText));
    return node;
  });
}

function inlineImages(node) {
  return images.inlineAll(node).then(function () {
    return node;
  });
}

function makeSvgDataUri(node, width, height) {
  return Promise.resolve(node).then(function (nd) {
    nd.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    return new _window["default"].XMLSerializer().serializeToString(nd);
  }).then(util.escapeXhtml).then(function (xhtml) {
    return "<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">".concat(xhtml, "</foreignObject>");
  }).then(function (foreignObject) {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\">").concat(foreignObject, "</svg>");
  }).then(function (svg) {
    return "data:image/svg+xml;charset=utf-8,".concat(svg);
  });
}

function newUtil() {
  return {
    escape: escape,
    parseExtension: parseExtension,
    mimeType: mimeType,
    dataAsUrl: dataAsUrl,
    isDataUrl: isDataUrl,
    isSrcAsDataUrl: isSrcAsDataUrl,
    canvasToBlob: canvasToBlob,
    resolveUrl: resolveUrl,
    getAndEncode: getAndEncode,
    uid: uid(),
    delay: delay,
    asArray: asArray,
    escapeXhtml: escapeXhtml,
    makeImage: makeImage,
    width: width,
    height: height
  };

  function mimes() {
    /*
            * Only WOFF and EOT mime types for fonts are 'real'
            * see http://www.iana.org/assignments/media-types/media-types.xhtml
            */
    var WOFF = 'application/font-woff';
    var JPEG = 'image/jpeg';
    return {
      woff: WOFF,
      woff2: WOFF,
      ttf: 'application/font-truetype',
      eot: 'application/vnd.ms-fontobject',
      png: 'image/png',
      jpg: JPEG,
      jpeg: JPEG,
      gif: 'image/gif',
      tiff: 'image/tiff',
      svg: 'image/svg+xml'
    };
  }

  function parseExtension(url) {
    var match = /\.([^\.\/]*?)$/g.exec(url);

    if (match) {
      return match[1];
    }

    return '';
  }

  function mimeType(url) {
    var extension = parseExtension(url).toLowerCase();
    return mimes()[extension] || '';
  }

  function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
  }

  function isSrcAsDataUrl(text) {
    var DATA_URL_REGEX = /url\(['"]?(data:)([^'"]+?)['"]?\)/;
    return text.search(DATA_URL_REGEX) !== -1;
  }

  function cvToBlob(canvas) {
    return new Promise(function (resolve) {
      var binaryString = _window["default"].atob(canvas.toDataURL().split(',')[1]);

      var length = binaryString.length;
      var binaryArray = new Uint8Array(length);

      for (var i = 0; i < length; i++) {
        binaryArray[i] = binaryString.charCodeAt(i);
      }

      resolve(new _window["default"].Blob([binaryArray], {
        type: 'image/png'
      }));
    });
  }

  function canvasToBlob(canvas) {
    if (canvas.toBlob) return new Promise(function (resolve) {
      canvas.toBlob(resolve);
    });
    return cvToBlob(canvas);
  }

  function resolveUrl(url, baseUrl) {
    var doc = _document["default"].implementation.createHTMLDocument();

    var base = doc.createElement('base');
    doc.head.appendChild(base);
    var a = doc.createElement('a');
    doc.body.appendChild(a);
    base.href = baseUrl;
    a.href = url;
    return a.href;
  }

  function fourRandomChars() {
    /* see http://stackoverflow.com/a/6248722/2519373 */
    return "0000".concat((Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
  }

  function uid() {
    var index = 0;
    return function () {
      return "u".concat(fourRandomChars()).concat(index++);
    };
  }

  function makeImage(uri) {
    return new Promise(function (resolve, reject) {
      var image = new _window["default"].Image();

      image.onload = function () {
        resolve(image);
      };

      image.onerror = reject;
      image.src = uri;
    });
  }

  function getAndEncode(url) {
    var TIMEOUT = 30000;

    if (domtoimage.impl.options.cacheBust) {
      // Cache bypass so we dont have CORS issues with cached images
      // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
      url += (/\?/.test(url) ? '&' : '?') + new Date().getTime();
    }

    return new Promise(function (resolve) {
      var request = new _window["default"].XMLHttpRequest();
      request.onreadystatechange = done;
      request.ontimeout = timeout;
      request.responseType = 'blob';
      request.timeout = TIMEOUT;
      request.open('GET', url, true);
      request.send();
      var placeholder;

      if (domtoimage.impl.options.imagePlaceholder) {
        var split = domtoimage.impl.options.imagePlaceholder.split(/,/);

        if (split && split[1]) {
          placeholder = split[1];
        }
      }

      function done() {
        if (request.readyState !== 4) return;

        if (request.status !== 200) {
          if (placeholder) {
            resolve(placeholder);
          } else {
            fail("cannot fetch resource: ".concat(url, ", status: ").concat(request.status));
          }

          return;
        }

        var encoder = new _window["default"].FileReader();

        encoder.onloadend = function () {
          var content = encoder.result.split(/,/)[1];
          resolve(content);
        };

        encoder.readAsDataURL(request.response);
      }

      function timeout() {
        if (placeholder) {
          resolve(placeholder);
        } else {
          fail("timeout of ".concat(TIMEOUT, "ms occured while fetching resource: ").concat(url));
        }
      }

      function fail(message) {
        _console["default"].error(message);

        resolve('');
      }
    });
  }

  function dataAsUrl(content, type) {
    return "data:".concat(type, ";base64,").concat(content);
  }

  function escape(string) {
    return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
  }

  function delay(ms) {
    return function (arg) {
      return new Promise(function (resolve) {
        _window["default"].setTimeout(function () {
          resolve(arg);
        }, ms);
      });
    };
  }

  function asArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;

    for (var i = 0; i < length; i++) {
      array.push(arrayLike[i]);
    }

    return array;
  }

  function escapeXhtml(string) {
    return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
  }

  function width(node) {
    var leftBorder = px(node, 'border-left-width');
    var rightBorder = px(node, 'border-right-width');
    return node.scrollWidth + leftBorder + rightBorder;
  }

  function height(node) {
    var topBorder = px(node, 'border-top-width');
    var bottomBorder = px(node, 'border-bottom-width');
    return node.scrollHeight + topBorder + bottomBorder;
  }

  function px(node, styleProperty) {
    var value = _window["default"].getComputedStyle(node).getPropertyValue(styleProperty);

    return parseFloat(value.replace('px', ''));
  }
}

function newInliner() {
  var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
  return {
    inlineAll: inlineAll,
    shouldProcess: shouldProcess,
    impl: {
      readUrls: readUrls,
      inline: inline
    }
  };

  function shouldProcess(string) {
    return string.search(URL_REGEX) !== -1;
  }

  function readUrls(string) {
    var result = [];
    var match;

    while ((match = URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }

    return result.filter(function (url) {
      return !util.isDataUrl(url);
    });
  }

  function inline(string, url, baseUrl, get) {
    return Promise.resolve(url).then(function (ul) {
      return baseUrl ? util.resolveUrl(ul, baseUrl) : ul;
    }).then(get || util.getAndEncode).then(function (data) {
      return util.dataAsUrl(data, util.mimeType(url));
    }).then(function (dataUrl) {
      return string.replace(urlAsRegex(url), "$1".concat(dataUrl, "$3"));
    });

    function urlAsRegex(url0) {
      return new RegExp("(url\\(['\"]?)(".concat(util.escape(url0), ")(['\"]?\\))"), 'g');
    }
  }

  function inlineAll(string, baseUrl, get) {
    if (nothingToInline() || util.isSrcAsDataUrl(string)) {
      return Promise.resolve(string);
    }

    return Promise.resolve(string).then(readUrls).then(function (urls) {
      var done = Promise.resolve(string);
      urls.forEach(function (url) {
        done = done.then(function (str) {
          return inline(str, url, baseUrl, get);
        });
      });
      return done;
    });

    function nothingToInline() {
      return !shouldProcess(string);
    }
  }
}

function newFontFaces() {
  return {
    resolveAll: resolveAll,
    impl: {
      readAll: readAll
    }
  };

  function resolveAll() {
    return readAll(_document["default"]).then(function (webFonts) {
      return Promise.all(webFonts.map(function (webFont) {
        return webFont.resolve();
      }));
    }).then(function (cssStrings) {
      return cssStrings.join('\n');
    });
  }

  function readAll() {
    return Promise.resolve(util.asArray(_document["default"].styleSheets)).then(loadExternalStyleSheets).then(getCssRules).then(selectWebFontRules).then(function (rules) {
      return rules.map(newWebFont);
    });

    function selectWebFontRules(cssRules) {
      return cssRules.filter(function (rule) {
        return rule.type === _window["default"].CSSRule.FONT_FACE_RULE;
      }).filter(function (rule) {
        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
      });
    }

    function loadExternalStyleSheets(styleSheets) {
      return Promise.all(styleSheets.map(function (sheet) {
        if (sheet.href) {
          return _window["default"].fetch(sheet.href, {
            credentials: 'omit'
          }).then(toText).then(setBaseHref(sheet.href)).then(toStyleSheet)["catch"](function (err) {
            // Handle any error that occurred in any of the previous
            // promises in the chain.
            _console["default"].log(err);

            return sheet;
          });
        }

        return Promise.resolve(sheet);
      }));

      function toText(response) {
        return response.text();
      }

      function setBaseHref(base) {
        base = base.split('/');
        base.pop();
        base = base.join('/');
        return function (text) {
          return util.isSrcAsDataUrl(text) ? text : text.replace(/url\(['"]?([^'"]+?)['"]?\)/g, addBaseHrefToUrl);
        };

        function addBaseHrefToUrl(match, p1) {
          var url = /^http/i.test(p1) ? p1 : concatAndResolveUrl(base, p1);
          return "url('".concat(url, "')");
        } // Source: http://stackoverflow.com/a/2676231/3786856


        function concatAndResolveUrl(url, concat) {
          var url1 = url.split('/');
          var url2 = concat.split('/');
          var url3 = [];

          for (var i = 0, l = url1.length; i < l; i++) {
            if (url1[i] === '..') {
              url3.pop();
            } else if (url1[i] !== '.') {
              url3.push(url1[i]);
            }
          }

          for (var _i = 0, _l = url2.length; _i < _l; _i++) {
            if (url2[_i] === '..') {
              url3.pop();
            } else if (url2[_i] !== '.') {
              url3.push(url2[_i]);
            }
          }

          return url3.join('/');
        }
      }

      function toStyleSheet(text) {
        var doc = _document["default"].implementation.createHTMLDocument('');

        var styleElement = _document["default"].createElement('style');

        styleElement.textContent = text;
        doc.body.appendChild(styleElement);
        return styleElement.sheet;
      }
    }

    function getCssRules(styleSheets) {
      var cssRules = [];
      styleSheets.forEach(function (sheet) {
        // try...catch because browser may not able to enumerate rules for cross-domain sheets
        var rules;

        try {
          rules = sheet.rules || sheet.cssRules;
        } catch (e) {
          _console["default"].log("'Can't read the css rules of: ".concat(sheet.href), e);

          return;
        }

        if (rules && (0, _typeof2["default"])(rules) === 'object') {
          try {
            util.asArray(rules || []).forEach(cssRules.push.bind(cssRules));
          } catch (e) {
            _console["default"].log("Error while reading CSS rules from ".concat(sheet.href), e);

            return;
          }
        } else {
          _console["default"].log('getCssRules can not find cssRules');

          return;
        }
      });
      return cssRules;
    }

    function newWebFont(webFontRule) {
      return {
        resolve: function resolve() {
          var baseUrl = (webFontRule.parentStyleSheet || {}).href;
          return inliner.inlineAll(webFontRule.cssText, baseUrl);
        },
        src: function src() {
          return webFontRule.style.getPropertyValue('src');
        }
      };
    }
  }
}

function newImages() {
  return {
    inlineAll: inlineAll,
    impl: {
      newImage: newImage
    }
  };

  function newImage(element) {
    return {
      inline: inline
    };

    function inline(get) {
      if (util.isDataUrl(element.src)) {
        return Promise.resolve();
      }

      return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
        return util.dataAsUrl(data, util.mimeType(element.src));
      }).then(function (dataUrl) {
        return new Promise(function (resolve, reject) {
          element.onload = resolve;
          element.onerror = reject;
          element.src = dataUrl;
        });
      });
    }
  }

  function inlineAll(node) {
    if (!(node instanceof Element)) {
      return Promise.resolve(node);
    }

    return inlineBackground(node).then(function () {
      if (node instanceof HTMLImageElement) {
        return newImage(node).inline();
      }

      return Promise.all(util.asArray(node.childNodes).map(function (child) {
        return inlineAll(child);
      }));
    });

    function inlineBackground(nd) {
      var background = nd.style.getPropertyValue('background');

      if (!background) {
        return Promise.resolve(nd);
      }

      return inliner.inlineAll(background).then(function (inlined) {
        nd.style.setProperty('background', inlined, nd.style.getPropertyPriority('background'));
      }).then(function () {
        return nd;
      });
    }
  }
}

var _default = domtoimage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kb20tdG8taW1hZ2UuanMiXSwibmFtZXMiOlsidXRpbCIsIm5ld1V0aWwiLCJpbmxpbmVyIiwibmV3SW5saW5lciIsImZvbnRGYWNlcyIsIm5ld0ZvbnRGYWNlcyIsImltYWdlcyIsIm5ld0ltYWdlcyIsImRlZmF1bHRPcHRpb25zIiwiaW1hZ2VQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImNhY2hlQnVzdCIsImRvbXRvaW1hZ2UiLCJ0b1N2ZyIsInRvUG5nIiwidG9KcGVnIiwidG9CbG9iIiwidG9QaXhlbERhdGEiLCJpbXBsIiwib3B0aW9ucyIsIm5vZGUiLCJjb3B5T3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm5kIiwiY2xvbmVOb2RlIiwiZmlsdGVyIiwiZW1iZWRGb250cyIsImlubGluZUltYWdlcyIsImFwcGx5T3B0aW9ucyIsImNsb25lIiwibWFrZVN2Z0RhdGFVcmkiLCJ3aWR0aCIsImhlaWdodCIsImJnY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJkcmF3IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImdldEltYWdlRGF0YSIsImRhdGEiLCJ0b0RhdGFVUkwiLCJxdWFsaXR5IiwiY2FudmFzVG9CbG9iIiwiZG9tTm9kZSIsIm1ha2VJbWFnZSIsImRlbGF5IiwiaW1hZ2UiLCJuZXdDYW52YXMiLCJkcmF3SW1hZ2UiLCJkTm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwicm9vdCIsIm1ha2VOb2RlQ29weSIsImNsb25lQ2hpbGRyZW4iLCJwcm9jZXNzQ2xvbmUiLCJ3aW5kb3ciLCJIVE1MQ2FudmFzRWxlbWVudCIsIm9yaWdpbmFsIiwiZmx0IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiY2xvbmVDaGlsZHJlbkluT3JkZXIiLCJhc0FycmF5IiwicGFyZW50IiwiYXJyQ2hpbGRyZW4iLCJkb25lIiwiY2hpbGQiLCJjaGlsZENsb25lIiwiYXBwZW5kQ2hpbGQiLCJFbGVtZW50IiwiY2xvbmVTdHlsZSIsImNsb25lUHNldWRvRWxlbWVudHMiLCJjb3B5VXNlcklucHV0IiwiZml4U3ZnIiwib3JpZ2luYWxTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJjb3B5U3R5bGUiLCJzb3VyY2UiLCJ0YXJnZXQiLCJjc3NUZXh0IiwiZm9udCIsImNvcHlQcm9wZXJ0aWVzIiwic291cmNlU3R5bGUiLCJ0YXJnZXRTdHlsZSIsInByb3BlcnR5S2V5cyIsIm5hbWUiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRQcm9wZXJ0eVByaW9yaXR5IiwiZWxlbWVudCIsImNsb25lUHNldWRvRWxlbWVudCIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJ1aWQiLCJzdHlsZUVsZW1lbnQiLCJmb3JtYXRQc2V1ZG9FbGVtZW50U3R5bGUiLCJjbG4iLCJlbG0iLCJzdGwiLCJzZWxlY3RvciIsImZvcm1hdENzc1RleHQiLCJmb3JtYXRDc3NQcm9wZXJ0aWVzIiwiY3JlYXRlVGV4dE5vZGUiLCJzdGwxIiwiY250Iiwic3RsMiIsIm1hcCIsImZvcm1hdFByb3BlcnR5Iiwiam9pbiIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJTVkdFbGVtZW50IiwiU1ZHUmVjdEVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXNvbHZlQWxsIiwic3R5bGVOb2RlIiwiaW5saW5lQWxsIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiZXNjYXBlWGh0bWwiLCJ4aHRtbCIsImZvcmVpZ25PYmplY3QiLCJzdmciLCJlc2NhcGUiLCJwYXJzZUV4dGVuc2lvbiIsIm1pbWVUeXBlIiwiZGF0YUFzVXJsIiwiaXNEYXRhVXJsIiwiaXNTcmNBc0RhdGFVcmwiLCJyZXNvbHZlVXJsIiwiZ2V0QW5kRW5jb2RlIiwibWltZXMiLCJXT0ZGIiwiSlBFRyIsIndvZmYiLCJ3b2ZmMiIsInR0ZiIsImVvdCIsInBuZyIsImpwZyIsImpwZWciLCJnaWYiLCJ0aWZmIiwidXJsIiwibWF0Y2giLCJleGVjIiwiZXh0ZW5zaW9uIiwidG9Mb3dlckNhc2UiLCJzZWFyY2giLCJ0ZXh0IiwiREFUQV9VUkxfUkVHRVgiLCJjdlRvQmxvYiIsImJpbmFyeVN0cmluZyIsImF0b2IiLCJzcGxpdCIsImJpbmFyeUFycmF5IiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInR5cGUiLCJiYXNlVXJsIiwiZG9jIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJiYXNlIiwiaGVhZCIsImEiLCJib2R5IiwiaHJlZiIsImZvdXJSYW5kb21DaGFycyIsIk1hdGgiLCJyYW5kb20iLCJwb3ciLCJ0b1N0cmluZyIsInNsaWNlIiwiaW5kZXgiLCJ1cmkiLCJyZWplY3QiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJUSU1FT1VUIiwidGVzdCIsIkRhdGUiLCJnZXRUaW1lIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib250aW1lb3V0IiwidGltZW91dCIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZW5kIiwicGxhY2Vob2xkZXIiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZmFpbCIsImVuY29kZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInN0cmluZyIsInJlcGxhY2UiLCJtcyIsImFyZyIsInNldFRpbWVvdXQiLCJhcnJheUxpa2UiLCJhcnJheSIsInB1c2giLCJsZWZ0Qm9yZGVyIiwicHgiLCJyaWdodEJvcmRlciIsInNjcm9sbFdpZHRoIiwidG9wQm9yZGVyIiwiYm90dG9tQm9yZGVyIiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGVQcm9wZXJ0eSIsInBhcnNlRmxvYXQiLCJVUkxfUkVHRVgiLCJzaG91bGRQcm9jZXNzIiwicmVhZFVybHMiLCJpbmxpbmUiLCJnZXQiLCJ1bCIsImRhdGFVcmwiLCJ1cmxBc1JlZ2V4IiwidXJsMCIsIlJlZ0V4cCIsIm5vdGhpbmdUb0lubGluZSIsInVybHMiLCJzdHIiLCJyZWFkQWxsIiwid2ViRm9udHMiLCJhbGwiLCJ3ZWJGb250IiwiY3NzU3RyaW5ncyIsInN0eWxlU2hlZXRzIiwibG9hZEV4dGVybmFsU3R5bGVTaGVldHMiLCJnZXRDc3NSdWxlcyIsInNlbGVjdFdlYkZvbnRSdWxlcyIsInJ1bGVzIiwibmV3V2ViRm9udCIsImNzc1J1bGVzIiwicnVsZSIsIkNTU1J1bGUiLCJGT05UX0ZBQ0VfUlVMRSIsInNoZWV0IiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRvVGV4dCIsInNldEJhc2VIcmVmIiwidG9TdHlsZVNoZWV0IiwiZXJyIiwibG9nIiwicG9wIiwiYWRkQmFzZUhyZWZUb1VybCIsInAxIiwiY29uY2F0QW5kUmVzb2x2ZVVybCIsImNvbmNhdCIsInVybDEiLCJ1cmwyIiwidXJsMyIsImwiLCJ0ZXh0Q29udGVudCIsImUiLCJiaW5kIiwid2ViRm9udFJ1bGUiLCJwYXJlbnRTdHlsZVNoZWV0IiwibmV3SW1hZ2UiLCJpbmxpbmVCYWNrZ3JvdW5kIiwiSFRNTEltYWdlRWxlbWVudCIsImJhY2tncm91bmQiLCJpbmxpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQXlCQTs7QUFDQTs7QUFDQTs7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFTQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sRUFBcEI7QUFDQSxJQUFNQyxPQUFPLEdBQUdDLFVBQVUsRUFBMUI7QUFDQSxJQUFNQyxT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TyxHQUFSLENBQ0xoUSxJQUFJLENBQUMwRSxPQUFMLENBQWF0RCxJQUFJLENBQUNtRCxVQUFsQixFQUE4QitDLEdBQTlCLENBQWtDLFVBQUF4QyxLQUFLO0FBQUEsZUFBSXNELFNBQVMsQ0FBQ3RELEtBQUQsQ0FBYjtBQUFBLE9BQXZDLENBREssQ0FBUDtBQUdELEtBUE0sQ0FBUDs7QUFTQSxhQUFTc04sZ0JBQVQsQ0FBMEIzUSxFQUExQixFQUE4QjtBQUM1QixVQUFNNlEsVUFBVSxHQUFHN1EsRUFBRSxDQUFDVyxLQUFILENBQVMrRCxnQkFBVCxDQUEwQixZQUExQixDQUFuQjs7QUFFQSxVQUFJLENBQUNtTSxVQUFMLEVBQWlCO0FBQ2YsZUFBT2hSLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkUsRUFBaEIsQ0FBUDtBQUNEOztBQUVELGFBQU92QixPQUFPLENBQ1hrSSxTQURJLENBQ01rSyxVQUROLEVBRUo5USxJQUZJLENBRUMsVUFBQStRLE9BQU8sRUFBSTtBQUNmOVEsUUFBQUEsRUFBRSxDQUFDVyxLQUFILENBQVM4RCxXQUFULENBQ0UsWUFERixFQUVFcU0sT0FGRixFQUdFOVEsRUFBRSxDQUFDVyxLQUFILENBQVNnRSxtQkFBVCxDQUE2QixZQUE3QixDQUhGO0FBS0QsT0FSSSxFQVNKNUUsSUFUSSxDQVNDO0FBQUEsZUFBTUMsRUFBTjtBQUFBLE9BVEQsQ0FBUDtBQVVEO0FBQ0Y7QUFDRjs7ZUFFY2IsVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxuICogVGhpcyBmaWxlIGlzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90c2F5ZW4vZG9tLXRvLWltYWdlXG4gKiBNb2RpZmllZCBieSBoZXNoYW4wMTMxIHRvIGFsbG93IGxvYWRpbmcgZXh0ZXJuYWwgc3R5bGVzaGVldHMgYW5kIGlubGluZSB3ZWJmb250c1xuICovXG5cbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCBjb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcblxuY29uc3QgdXRpbCA9IG5ld1V0aWwoKTtcbmNvbnN0IGlubGluZXIgPSBuZXdJbmxpbmVyKCk7XG5jb25zdCBmb250RmFjZXMgPSBuZXdGb250RmFjZXMoKTtcbmNvbnN0IGltYWdlcyA9IG5ld0ltYWdlcygpO1xuLy8gRGVmYXVsdCBpbXBsIG9wdGlvbnNcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAvLyBEZWZhdWx0IGlzIHRvIGZhaWwgb24gZXJyb3IsIG5vIHBsYWNlaG9sZGVyXG4gIGltYWdlUGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgLy8gRGVmYXVsdCBjYWNoZSBidXN0IGlzIGZhbHNlLCBpdCB3aWxsIHVzZSB0aGUgY2FjaGVcbiAgY2FjaGVCdXN0OiBmYWxzZVxufTtcblxuY29uc3QgZG9tdG9pbWFnZSA9IHtcbiAgdG9TdmcsXG4gIHRvUG5nLFxuICB0b0pwZWcsXG4gIHRvQmxvYixcbiAgdG9QaXhlbERhdGEsXG4gIGltcGw6IHtcbiAgICBmb250RmFjZXMsXG4gICAgaW1hZ2VzLFxuICAgIHV0aWwsXG4gICAgaW5saW5lcixcbiAgICBvcHRpb25zOiB7fVxuICB9XG59O1xuXG4vKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmZpbHRlciAtIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dFxuICAgKiAgICAgICAgICAoZXhjbHVkaW5nIG5vZGUgbWVhbnMgZXhjbHVkaW5nIGl0J3MgY2hpbGRyZW4gYXMgd2VsbCkuIE5vdCBjYWxsZWQgb24gdGhlIHJvb3Qgbm9kZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuYmdjb2xvciAtIGNvbG9yIGZvciB0aGUgYmFja2dyb3VuZCwgYW55IHZhbGlkIENTUyBjb2xvciB2YWx1ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMud2lkdGggLSB3aWR0aCB0byBiZSBhcHBsaWVkIHRvIG5vZGUgYmVmb3JlIHJlbmRlcmluZy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuaGVpZ2h0IC0gaGVpZ2h0IHRvIGJlIGFwcGxpZWQgdG8gbm9kZSBiZWZvcmUgcmVuZGVyaW5nLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5zdHlsZSAtIGFuIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIHRvIGJlIGNvcGllZCB0byBub2RlJ3Mgc3R5bGUgYmVmb3JlIHJlbmRlcmluZy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucXVhbGl0eSAtIGEgTnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHkgKGFwcGxpY2FibGUgdG8gSlBFRyBvbmx5KSxcbiAgICAgICAgICAgICAgZGVmYXVsdHMgdG8gMS4wLlxuICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciAtIGRhdGFVUkwgdG8gdXNlIGFzIGEgcGxhY2Vob2xkZXIgZm9yIGZhaWxlZCBpbWFnZXMsIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIGZhaWwgZmFzdCBvbiBpbWFnZXMgd2UgY2FuJ3QgZmV0Y2hcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5jYWNoZUJ1c3QgLSBzZXQgdG8gdHJ1ZSB0byBjYWNoZSBidXN0IGJ5IGFwcGVuZGluZyB0aGUgdGltZSB0byB0aGUgcmVxdWVzdCB1cmxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBTVkcgaW1hZ2UgZGF0YSBVUkxcbiAgICAqICovXG5mdW5jdGlvbiB0b1N2Zyhub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb3B5T3B0aW9ucyhvcHRpb25zKTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgIC50aGVuKG5kID0+IGNsb25lTm9kZShuZCwgb3B0aW9ucy5maWx0ZXIsIHRydWUpKVxuICAgIC50aGVuKGVtYmVkRm9udHMpXG4gICAgLnRoZW4oaW5saW5lSW1hZ2VzKVxuICAgIC50aGVuKGFwcGx5T3B0aW9ucylcbiAgICAudGhlbihjbG9uZSA9PlxuICAgICAgbWFrZVN2Z0RhdGFVcmkoXG4gICAgICAgIGNsb25lLFxuICAgICAgICBvcHRpb25zLndpZHRoIHx8IHV0aWwud2lkdGgobm9kZSksXG4gICAgICAgIG9wdGlvbnMuaGVpZ2h0IHx8IHV0aWwuaGVpZ2h0KG5vZGUpXG4gICAgICApXG4gICAgKTtcblxuICBmdW5jdGlvbiBhcHBseU9wdGlvbnMoY2xvbmUpIHtcbiAgICBpZiAob3B0aW9ucy5iZ2NvbG9yKSBjbG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJnY29sb3I7XG5cbiAgICBpZiAob3B0aW9ucy53aWR0aCkgY2xvbmUuc3R5bGUud2lkdGggPSBgJHtvcHRpb25zLndpZHRofXB4YDtcbiAgICBpZiAob3B0aW9ucy5oZWlnaHQpIGNsb25lLnN0eWxlLmhlaWdodCA9IGAke29wdGlvbnMuaGVpZ2h0fXB4YDtcblxuICAgIGlmIChvcHRpb25zLnN0eWxlKVxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5zdHlsZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgY2xvbmUuc3R5bGVbcHJvcGVydHldID0gb3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICB9KTtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBVaW50OEFycmF5IGNvbnRhaW5pbmcgUkdCQSBwaXhlbCBkYXRhLlxuICogKi9cbmZ1bmN0aW9uIHRvUGl4ZWxEYXRhKG5vZGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucyB8fCB7fSkudGhlbihjYW52YXMgPT5cbiAgICBjYW52YXNcbiAgICAgIC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAuZ2V0SW1hZ2VEYXRhKDAsIDAsIHV0aWwud2lkdGgobm9kZSksIHV0aWwuaGVpZ2h0KG5vZGUpKS5kYXRhXG4gICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxuICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFBORyBpbWFnZSBkYXRhIFVSTFxuICogKi9cbmZ1bmN0aW9uIHRvUG5nKG5vZGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucyB8fCB7fSkudGhlbihjYW52YXMgPT4gY2FudmFzLnRvRGF0YVVSTCgpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgSlBFRyBpbWFnZSBkYXRhIFVSTFxuICogKi9cbmZ1bmN0aW9uIHRvSnBlZyhub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zKS50aGVuKGNhbnZhcyA9PiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgb3B0aW9ucy5xdWFsaXR5IHx8IDEuMCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBQTkcgaW1hZ2UgYmxvYlxuICogKi9cbmZ1bmN0aW9uIHRvQmxvYihub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pLnRoZW4odXRpbC5jYW52YXNUb0Jsb2IpO1xufVxuXG5mdW5jdGlvbiBjb3B5T3B0aW9ucyhvcHRpb25zKSB7XG4gIC8vIENvcHkgb3B0aW9ucyB0byBpbXBsIG9wdGlvbnMgZm9yIHVzZSBpbiBpbXBsXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgPVxuICAgICAgZGVmYXVsdE9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcjtcbiAgfSBlbHNlIHtcbiAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyID0gb3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmNhY2hlQnVzdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy5jYWNoZUJ1c3QgPSBkZWZhdWx0T3B0aW9ucy5jYWNoZUJ1c3Q7XG4gIH0gZWxzZSB7XG4gICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuY2FjaGVCdXN0ID0gb3B0aW9ucy5jYWNoZUJ1c3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhdyhkb21Ob2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1N2Zyhkb21Ob2RlLCBvcHRpb25zKVxuICAgIC50aGVuKHV0aWwubWFrZUltYWdlKVxuICAgIC50aGVuKHV0aWwuZGVsYXkoMTAwKSlcbiAgICAudGhlbihpbWFnZSA9PiB7XG4gICAgICBjb25zdCBjYW52YXMgPSBuZXdDYW52YXMoZG9tTm9kZSk7XG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9KTtcblxuICBmdW5jdGlvbiBuZXdDYW52YXMoZE5vZGUpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8IHV0aWwud2lkdGgoZE5vZGUpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCB1dGlsLmhlaWdodChkTm9kZSk7XG5cbiAgICBpZiAob3B0aW9ucy5iZ2NvbG9yKSB7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmJnY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlLCBmaWx0ZXIsIHJvb3QpIHtcbiAgaWYgKCFyb290ICYmIGZpbHRlciAmJiAhZmlsdGVyKG5vZGUpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgIC50aGVuKG1ha2VOb2RlQ29weSlcbiAgICAudGhlbihjbG9uZSA9PiBjbG9uZUNoaWxkcmVuKG5vZGUsIGNsb25lLCBmaWx0ZXIpKVxuICAgIC50aGVuKGNsb25lID0+IHByb2Nlc3NDbG9uZShub2RlLCBjbG9uZSkpO1xuXG4gIGZ1bmN0aW9uIG1ha2VOb2RlQ29weShuZCkge1xuICAgIGlmIChuZCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHV0aWwubWFrZUltYWdlKG5kLnRvRGF0YVVSTCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5kLmNsb25lTm9kZShmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuKG9yaWdpbmFsLCBjbG9uZSwgZmx0KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBvcmlnaW5hbC5jaGlsZE5vZGVzO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2xvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZUNoaWxkcmVuSW5PcmRlcihjbG9uZSwgdXRpbC5hc0FycmF5KGNoaWxkcmVuKSlcbiAgICAudGhlbigoKSA9PiBjbG9uZSk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuSW5PcmRlcihwYXJlbnQsIGFyckNoaWxkcmVuKSB7XG4gICAgICBsZXQgZG9uZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgYXJyQ2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGRvbmUgPSBkb25lXG4gICAgICAgICAgLnRoZW4oKCkgPT4gY2xvbmVOb2RlKGNoaWxkLCBmbHQpKVxuICAgICAgICAgIC50aGVuKGNoaWxkQ2xvbmUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkQ2xvbmUpIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZENsb25lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Nsb25lKG9yaWdpbmFsLCBjbG9uZSkge1xuICAgIGlmICghKGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gY2xvbmVcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbihjbG9uZVN0eWxlKVxuICAgICAgLnRoZW4oY2xvbmVQc2V1ZG9FbGVtZW50cylcbiAgICAgIC50aGVuKGNvcHlVc2VySW5wdXQpXG4gICAgICAudGhlbihmaXhTdmcpXG4gICAgICAudGhlbigoKSA9PiBjbG9uZSk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZVN0eWxlKCkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbmFsKTtcbiAgICAgIGNvcHlTdHlsZShvcmlnaW5hbFN0eWxlLCBjbG9uZS5zdHlsZSk7XG4gICAgICBmdW5jdGlvbiBjb3B5U3R5bGUoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5jc3NUZXh0KSB7XG4gICAgICAgICAgdGFyZ2V0LmNzc1RleHQgPSBzb3VyY2UuY3NzVGV4dDtcbiAgICAgICAgICAvLyBhZGQgYWRkaXRpb25hbCBjb3B5IG9mIGNvbXBvc2l0ZSBzdHlsZXNcbiAgICAgICAgICBpZiAoc291cmNlLmZvbnQpIHtcbiAgICAgICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvcHlQcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjb3B5UHJvcGVydGllcyhzb3VyY2VTdHlsZSwgdGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eUtleXMgPSB1dGlsLmFzQXJyYXkoc291cmNlU3R5bGUpO1xuICAgICAgICAgIHByb3BlcnR5S2V5cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHNvdXJjZVN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnRzKCkge1xuICAgICAgWyc6YmVmb3JlJywgJzphZnRlciddLmZvckVhY2goZWxlbWVudCA9PiBjbG9uZVBzZXVkb0VsZW1lbnQoZWxlbWVudCkpO1xuXG4gICAgICBmdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbmFsLCBlbGVtZW50KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgICBpZiAoY29udGVudCA9PT0gJycgfHwgY29udGVudCA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdXRpbC51aWQoKTtcbiAgICAgICAgY2xvbmUuY2xhc3NOYW1lID0gYCR7Y2xvbmUuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gO1xuICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgZm9ybWF0UHNldWRvRWxlbWVudFN0eWxlKGNsYXNzTmFtZSwgZWxlbWVudCwgc3R5bGUpXG4gICAgICAgICk7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0UHNldWRvRWxlbWVudFN0eWxlKGNsbiwgZWxtLCBzdGwpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtjbG59OiR7ZWxtfWA7XG4gICAgICAgICAgY29uc3QgY3NzVGV4dCA9IHN0bC5jc3NUZXh0XG4gICAgICAgICAgICA/IGZvcm1hdENzc1RleHQoc3RsKVxuICAgICAgICAgICAgOiBmb3JtYXRDc3NQcm9wZXJ0aWVzKHN0bCk7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3NlbGVjdG9yfXske2Nzc1RleHR9fWApO1xuXG4gICAgICAgICAgZnVuY3Rpb24gZm9ybWF0Q3NzVGV4dChzdGwxKSB7XG4gICAgICAgICAgICBjb25zdCBjbnQgPSBzdGwxLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtzdGwuY3NzVGV4dH0gY29udGVudDogJHtjbnR9O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZm9ybWF0Q3NzUHJvcGVydGllcyhzdGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dXRpbC5hc0FycmF5KHN0bDIpLm1hcChmb3JtYXRQcm9wZXJ0eSkuam9pbignOyAnKX07YDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkobmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGAke25hbWV9OiR7c3RsLmdldFByb3BlcnR5VmFsdWUobmFtZSl9JHtzdGwuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSA/ICcgIWltcG9ydGFudCcgOiAnJ31gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weVVzZXJJbnB1dCgpIHtcbiAgICAgIGlmIChvcmlnaW5hbCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50KVxuICAgICAgICBjbG9uZS5pbm5lckhUTUwgPSBvcmlnaW5hbC52YWx1ZTtcbiAgICAgIGlmIChvcmlnaW5hbCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3JpZ2luYWwudmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFN2ZygpIHtcbiAgICAgIGlmICghKGNsb25lIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpKSByZXR1cm47XG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG5cbiAgICAgIGlmICghKGNsb25lIGluc3RhbmNlb2Ygd2luZG93LlNWR1JlY3RFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgWyd3aWR0aCcsICdoZWlnaHQnXS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2xvbmUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgICAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbWJlZEZvbnRzKG5vZGUpIHtcbiAgcmV0dXJuIGZvbnRGYWNlcy5yZXNvbHZlQWxsKCkudGhlbigoY3NzVGV4dCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZU5vZGUpO1xuICAgIHN0eWxlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbmxpbmVJbWFnZXMobm9kZSkge1xuICByZXR1cm4gaW1hZ2VzLmlubGluZUFsbChub2RlKS50aGVuKCgpID0+IG5vZGUpO1xufVxuXG5mdW5jdGlvbiBtYWtlU3ZnRGF0YVVyaShub2RlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSlcbiAgICAudGhlbihuZCA9PiB7XG4gICAgICBuZC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKTtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhuZCk7XG4gICAgfSlcbiAgICAudGhlbih1dGlsLmVzY2FwZVhodG1sKVxuICAgIC50aGVuKHhodG1sID0+XG4gICAgICBgPGZvcmVpZ25PYmplY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4ke3hodG1sfTwvZm9yZWlnbk9iamVjdD5gXG4gICAgKVxuICAgIC50aGVuKGZvcmVpZ25PYmplY3QgPT5cbiAgICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCI+JHtmb3JlaWduT2JqZWN0fTwvc3ZnPmBcbiAgICApXG4gICAgLnRoZW4oc3ZnID0+IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwke3N2Z31gKTtcbn1cblxuZnVuY3Rpb24gbmV3VXRpbCgpIHtcbiAgcmV0dXJuIHtcbiAgICBlc2NhcGUsXG4gICAgcGFyc2VFeHRlbnNpb24sXG4gICAgbWltZVR5cGUsXG4gICAgZGF0YUFzVXJsLFxuICAgIGlzRGF0YVVybCxcbiAgICBpc1NyY0FzRGF0YVVybCxcbiAgICBjYW52YXNUb0Jsb2IsXG4gICAgcmVzb2x2ZVVybCxcbiAgICBnZXRBbmRFbmNvZGUsXG4gICAgdWlkOiB1aWQoKSxcbiAgICBkZWxheSxcbiAgICBhc0FycmF5LFxuICAgIGVzY2FwZVhodG1sLFxuICAgIG1ha2VJbWFnZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfTtcblxuICBmdW5jdGlvbiBtaW1lcygpIHtcbiAgICAvKlxuICAgICAgICAgICAgKiBPbmx5IFdPRkYgYW5kIEVPVCBtaW1lIHR5cGVzIGZvciBmb250cyBhcmUgJ3JlYWwnXG4gICAgICAgICAgICAqIHNlZSBodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sXG4gICAgICAgICAgICAqL1xuICAgIGNvbnN0IFdPRkYgPSAnYXBwbGljYXRpb24vZm9udC13b2ZmJztcbiAgICBjb25zdCBKUEVHID0gJ2ltYWdlL2pwZWcnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdvZmY6IFdPRkYsXG4gICAgICB3b2ZmMjogV09GRixcbiAgICAgIHR0ZjogJ2FwcGxpY2F0aW9uL2ZvbnQtdHJ1ZXR5cGUnLFxuICAgICAgZW90OiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgcG5nOiAnaW1hZ2UvcG5nJyxcbiAgICAgIGpwZzogSlBFRyxcbiAgICAgIGpwZWc6IEpQRUcsXG4gICAgICBnaWY6ICdpbWFnZS9naWYnLFxuICAgICAgdGlmZjogJ2ltYWdlL3RpZmYnLFxuICAgICAgc3ZnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHRlbnNpb24odXJsKSB7XG4gICAgY29uc3QgbWF0Y2ggPSAvXFwuKFteXFwuXFwvXSo/KSQvZy5leGVjKHVybCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1pbWVUeXBlKHVybCkge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhcnNlRXh0ZW5zaW9uKHVybCkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbWltZXMoKVtleHRlbnNpb25dIHx8ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEYXRhVXJsKHVybCkge1xuICAgIHJldHVybiB1cmwuc2VhcmNoKC9eKGRhdGE6KS8pICE9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3JjQXNEYXRhVXJsKHRleHQpIHtcbiAgICBjb25zdCBEQVRBX1VSTF9SRUdFWCA9IC91cmxcXChbJ1wiXT8oZGF0YTopKFteJ1wiXSs/KVsnXCJdP1xcKS87XG5cbiAgICByZXR1cm4gdGV4dC5zZWFyY2goREFUQV9VUkxfUkVHRVgpICE9PSAtMTtcbiAgfVxuICBmdW5jdGlvbiBjdlRvQmxvYihjYW52YXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSB3aW5kb3cuYXRvYihjYW52YXMudG9EYXRhVVJMKCkuc3BsaXQoJywnKVsxXSk7XG4gICAgICBjb25zdCBsZW5ndGggPSBiaW5hcnlTdHJpbmcubGVuZ3RoO1xuICAgICAgY29uc3QgYmluYXJ5QXJyYXkgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBiaW5hcnlBcnJheVtpXSA9IGJpbmFyeVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICByZXNvbHZlKFxuICAgICAgICBuZXcgd2luZG93LkJsb2IoW2JpbmFyeUFycmF5XSwge3R5cGU6ICdpbWFnZS9wbmcnfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW52YXNUb0Jsb2IoY2FudmFzKSB7XG4gICAgaWYgKGNhbnZhcy50b0Jsb2IpXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBjdlRvQmxvYihjYW52YXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVVybCh1cmwsIGJhc2VVcmwpIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcbiAgICBjb25zdCBiYXNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICBjb25zdCBhID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBiYXNlLmhyZWYgPSBiYXNlVXJsO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gYS5ocmVmO1xuICB9XG5cbiAgZnVuY3Rpb24gZm91clJhbmRvbUNoYXJzKCkge1xuICAgIC8qIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82MjQ4NzIyLzI1MTkzNzMgKi9cbiAgICByZXR1cm4gYDAwMDAkeygoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCA0KSkgPDwgMCkudG9TdHJpbmcoMzYpfWAuc2xpY2UoLTQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdWlkKCkge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICByZXR1cm4gKCkgPT4gYHUke2ZvdXJSYW5kb21DaGFycygpfSR7aW5kZXgrK31gO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUltYWdlKHVyaSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFuZEVuY29kZSh1cmwpIHtcbiAgICBjb25zdCBUSU1FT1VUID0gMzAwMDA7XG4gICAgaWYgKGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmNhY2hlQnVzdCkge1xuICAgICAgLy8gQ2FjaGUgYnlwYXNzIHNvIHdlIGRvbnQgaGF2ZSBDT1JTIGlzc3VlcyB3aXRoIGNhY2hlZCBpbWFnZXNcbiAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L1VzaW5nX1hNTEh0dHBSZXF1ZXN0I0J5cGFzc2luZ190aGVfY2FjaGVcbiAgICAgIHVybCArPSAoL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZG9uZTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gdGltZW91dDtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgcmVxdWVzdC50aW1lb3V0ID0gVElNRU9VVDtcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xuXG4gICAgICBsZXQgcGxhY2Vob2xkZXI7XG4gICAgICBpZiAoZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcikge1xuICAgICAgICBjb25zdCBzcGxpdCA9IGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmltYWdlUGxhY2Vob2xkZXIuc3BsaXQoLywvKTtcbiAgICAgICAgaWYgKHNwbGl0ICYmIHNwbGl0WzFdKSB7XG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBzcGxpdFsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG5cbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHJlc29sdmUocGxhY2Vob2xkZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWlsKGBjYW5ub3QgZmV0Y2ggcmVzb3VyY2U6ICR7dXJsfSwgc3RhdHVzOiAke3JlcXVlc3Quc3RhdHVzfWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuY29kZXIgPSBuZXcgd2luZG93LkZpbGVSZWFkZXIoKTtcbiAgICAgICAgZW5jb2Rlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGVuY29kZXIucmVzdWx0LnNwbGl0KC8sLylbMV07XG4gICAgICAgICAgcmVzb2x2ZShjb250ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5jb2Rlci5yZWFkQXNEYXRhVVJMKHJlcXVlc3QucmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0aW1lb3V0KCkge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICByZXNvbHZlKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsKFxuICAgICAgICAgICAgYHRpbWVvdXQgb2YgJHtUSU1FT1VUfW1zIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgcmVzb3VyY2U6ICR7dXJsfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWwobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFBc1VybChjb250ZW50LCB0eXBlKSB7XG4gICAgcmV0dXJuIGBkYXRhOiR7dHlwZX07YmFzZTY0LCR7Y29udGVudH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gZXNjYXBlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFsuKis/XiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBhcmcgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGFyZyk7XG4gICAgICAgIH0sIG1zKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhc0FycmF5KGFycmF5TGlrZSkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSBhcnJheS5wdXNoKGFycmF5TGlrZVtpXSk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gZXNjYXBlWGh0bWwoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8jL2csICclMjMnKS5yZXBsYWNlKC9cXG4vZywgJyUwQScpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkdGgobm9kZSkge1xuICAgIGNvbnN0IGxlZnRCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICBjb25zdCByaWdodEJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItcmlnaHQtd2lkdGgnKTtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxXaWR0aCArIGxlZnRCb3JkZXIgKyByaWdodEJvcmRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgY29uc3QgdG9wQm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci10b3Atd2lkdGgnKTtcbiAgICBjb25zdCBib3R0b21Cb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpO1xuICAgIHJldHVybiBub2RlLnNjcm9sbEhlaWdodCArIHRvcEJvcmRlciArIGJvdHRvbUJvcmRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB4KG5vZGUsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgncHgnLCAnJykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5ld0lubGluZXIoKSB7XG4gIGNvbnN0IFVSTF9SRUdFWCA9IC91cmxcXChbJ1wiXT8oW14nXCJdKz8pWydcIl0/XFwpL2c7XG5cbiAgcmV0dXJuIHtcbiAgICBpbmxpbmVBbGwsXG4gICAgc2hvdWxkUHJvY2VzcyxcbiAgICBpbXBsOiB7XG4gICAgICByZWFkVXJscyxcbiAgICAgIGlubGluZVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaG91bGRQcm9jZXNzKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc2VhcmNoKFVSTF9SRUdFWCkgIT09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZFVybHMoc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IG1hdGNoO1xuICAgIHdoaWxlICgobWF0Y2ggPSBVUkxfUkVHRVguZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xuICAgICAgcmVzdWx0LnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigodXJsKSA9PiB7XG4gICAgICByZXR1cm4gIXV0aWwuaXNEYXRhVXJsKHVybCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmUoc3RyaW5nLCB1cmwsIGJhc2VVcmwsIGdldCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsKVxuICAgICAgLnRoZW4odWwgPT4gYmFzZVVybCA/IHV0aWwucmVzb2x2ZVVybCh1bCwgYmFzZVVybCkgOiB1bClcbiAgICAgIC50aGVuKGdldCB8fCB1dGlsLmdldEFuZEVuY29kZSlcbiAgICAgIC50aGVuKGRhdGEgPT4gdXRpbC5kYXRhQXNVcmwoZGF0YSwgdXRpbC5taW1lVHlwZSh1cmwpKSlcbiAgICAgIC50aGVuKGRhdGFVcmwgPT4gc3RyaW5nLnJlcGxhY2UodXJsQXNSZWdleCh1cmwpLCBgJDEke2RhdGFVcmx9JDNgKSk7XG5cbiAgICBmdW5jdGlvbiB1cmxBc1JlZ2V4KHVybDApIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICBgKHVybFxcXFwoW1xcJ1wiXT8pKCR7dXRpbC5lc2NhcGUodXJsMCl9KShbXFwnXCJdP1xcXFwpKWAsXG4gICAgICAgICdnJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVBbGwoc3RyaW5nLCBiYXNlVXJsLCBnZXQpIHtcbiAgICBpZiAobm90aGluZ1RvSW5saW5lKCkgfHwgdXRpbC5pc1NyY0FzRGF0YVVybChzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RyaW5nKVxuICAgICAgLnRoZW4ocmVhZFVybHMpXG4gICAgICAudGhlbih1cmxzID0+IHtcbiAgICAgICAgbGV0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUoc3RyaW5nKTtcbiAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgZG9uZSA9IGRvbmUudGhlbihzdHIgPT4gaW5saW5lKHN0ciwgdXJsLCBiYXNlVXJsLCBnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBub3RoaW5nVG9JbmxpbmUoKSB7XG4gICAgICByZXR1cm4gIXNob3VsZFByb2Nlc3Moc3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3Rm9udEZhY2VzKCkge1xuICByZXR1cm4ge1xuICAgIHJlc29sdmVBbGwsXG4gICAgaW1wbDoge3JlYWRBbGx9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbCgpIHtcbiAgICByZXR1cm4gcmVhZEFsbChkb2N1bWVudClcbiAgICAgIC50aGVuKHdlYkZvbnRzID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgIHdlYkZvbnRzLm1hcCh3ZWJGb250ID0+IHdlYkZvbnQucmVzb2x2ZSgpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGNzc1N0cmluZ3MgPT4gY3NzU3RyaW5ncy5qb2luKCdcXG4nKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkQWxsKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXRpbC5hc0FycmF5KGRvY3VtZW50LnN0eWxlU2hlZXRzKSlcbiAgICAgIC50aGVuKGxvYWRFeHRlcm5hbFN0eWxlU2hlZXRzKVxuICAgICAgLnRoZW4oZ2V0Q3NzUnVsZXMpXG4gICAgICAudGhlbihzZWxlY3RXZWJGb250UnVsZXMpXG4gICAgICAudGhlbihydWxlcyA9PiBydWxlcy5tYXAobmV3V2ViRm9udCkpO1xuXG4gICAgZnVuY3Rpb24gc2VsZWN0V2ViRm9udFJ1bGVzKGNzc1J1bGVzKSB7XG4gICAgICByZXR1cm4gY3NzUnVsZXNcbiAgICAgICAgLmZpbHRlcihydWxlID0+IHJ1bGUudHlwZSA9PT0gd2luZG93LkNTU1J1bGUuRk9OVF9GQUNFX1JVTEUpXG4gICAgICAgIC5maWx0ZXIocnVsZSA9PiBpbmxpbmVyLnNob3VsZFByb2Nlc3MocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdzcmMnKSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbFN0eWxlU2hlZXRzKHN0eWxlU2hlZXRzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgIHN0eWxlU2hlZXRzLm1hcChzaGVldCA9PiB7XG4gICAgICAgICAgaWYgKHNoZWV0LmhyZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZmV0Y2goc2hlZXQuaHJlZiwge2NyZWRlbnRpYWxzOiAnb21pdCd9KVxuICAgICAgICAgICAgICAudGhlbih0b1RleHQpXG4gICAgICAgICAgICAgIC50aGVuKHNldEJhc2VIcmVmKHNoZWV0LmhyZWYpKVxuICAgICAgICAgICAgICAudGhlbih0b1N0eWxlU2hlZXQpXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnJlZCBpbiBhbnkgb2YgdGhlIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZXMgaW4gdGhlIGNoYWluLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hlZXQ7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNoZWV0KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIHRvVGV4dChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRCYXNlSHJlZihiYXNlKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLnNwbGl0KCcvJyk7XG4gICAgICAgIGJhc2UucG9wKCk7XG4gICAgICAgIGJhc2UgPSBiYXNlLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gdGV4dCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHV0aWwuaXNTcmNBc0RhdGFVcmwodGV4dClcbiAgICAgICAgICAgID8gdGV4dFxuICAgICAgICAgICAgOiB0ZXh0LnJlcGxhY2UoL3VybFxcKFsnXCJdPyhbXidcIl0rPylbJ1wiXT9cXCkvZywgYWRkQmFzZUhyZWZUb1VybCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkQmFzZUhyZWZUb1VybChtYXRjaCwgcDEpIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSAvXmh0dHAvaS50ZXN0KHAxKSA/IHAxIDogY29uY2F0QW5kUmVzb2x2ZVVybChiYXNlLCBwMSk7XG4gICAgICAgICAgcmV0dXJuIGB1cmwoJyR7dXJsfScpYDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY3NjIzMS8zNzg2ODU2XG4gICAgICAgIGZ1bmN0aW9uIGNvbmNhdEFuZFJlc29sdmVVcmwodXJsLCBjb25jYXQpIHtcbiAgICAgICAgICBjb25zdCB1cmwxID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgY29uc3QgdXJsMiA9IGNvbmNhdC5zcGxpdCgnLycpO1xuICAgICAgICAgIGNvbnN0IHVybDMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHVybDEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXJsMVtpXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICB1cmwzLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmwxW2ldICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgdXJsMy5wdXNoKHVybDFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHVybDIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXJsMltpXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICB1cmwzLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmwyW2ldICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgdXJsMy5wdXNoKHVybDJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXJsMy5qb2luKCcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdG9TdHlsZVNoZWV0KHRleHQpIHtcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcbiAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICBzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBzdHlsZUVsZW1lbnQuc2hlZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3NzUnVsZXMoc3R5bGVTaGVldHMpIHtcbiAgICAgIGNvbnN0IGNzc1J1bGVzID0gW107XG4gICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKChzaGVldCkgPT4ge1xuICAgICAgICAvLyB0cnkuLi5jYXRjaCBiZWNhdXNlIGJyb3dzZXIgbWF5IG5vdCBhYmxlIHRvIGVudW1lcmF0ZSBydWxlcyBmb3IgY3Jvc3MtZG9tYWluIHNoZWV0c1xuICAgICAgICBsZXQgcnVsZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnVsZXMgPSBzaGVldC5ydWxlcyB8fCBzaGVldC5jc3NSdWxlcztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAnQ2FuJ3QgcmVhZCB0aGUgY3NzIHJ1bGVzIG9mOiAke3NoZWV0LmhyZWZ9YCwgZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVzICYmIHR5cGVvZiBydWxlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXRpbFxuICAgICAgICAgICAgICAuYXNBcnJheShydWxlcyB8fCBbXSlcbiAgICAgICAgICAgICAgLmZvckVhY2goY3NzUnVsZXMucHVzaC5iaW5kKGNzc1J1bGVzKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoaWxlIHJlYWRpbmcgQ1NTIHJ1bGVzIGZyb20gJHtzaGVldC5ocmVmfWAsIGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0Q3NzUnVsZXMgY2FuIG5vdCBmaW5kIGNzc1J1bGVzJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNzc1J1bGVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1dlYkZvbnQod2ViRm9udFJ1bGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBiYXNlVXJsID0gKHdlYkZvbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgfHwge30pLmhyZWY7XG4gICAgICAgICAgcmV0dXJuIGlubGluZXIuaW5saW5lQWxsKHdlYkZvbnRSdWxlLmNzc1RleHQsIGJhc2VVcmwpO1xuICAgICAgICB9LFxuICAgICAgICBzcmM6ICgpID0+IHdlYkZvbnRSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdJbWFnZXMoKSB7XG4gIHJldHVybiB7XG4gICAgaW5saW5lQWxsLFxuICAgIGltcGw6IHtcbiAgICAgIG5ld0ltYWdlXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG5ld0ltYWdlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5saW5lXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlubGluZShnZXQpIHtcbiAgICAgIGlmICh1dGlsLmlzRGF0YVVybChlbGVtZW50LnNyYykpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LnNyYylcbiAgICAgICAgLnRoZW4oZ2V0IHx8IHV0aWwuZ2V0QW5kRW5jb2RlKVxuICAgICAgICAudGhlbihkYXRhID0+IHV0aWwuZGF0YUFzVXJsKGRhdGEsIHV0aWwubWltZVR5cGUoZWxlbWVudC5zcmMpKSlcbiAgICAgICAgLnRoZW4oZGF0YVVybCA9PlxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGVsZW1lbnQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZGF0YVVybDtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUFsbChub2RlKSB7XG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmxpbmVCYWNrZ3JvdW5kKG5vZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZShub2RlKS5pbmxpbmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgdXRpbC5hc0FycmF5KG5vZGUuY2hpbGROb2RlcykubWFwKGNoaWxkID0+IGlubGluZUFsbChjaGlsZCkpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaW5saW5lQmFja2dyb3VuZChuZCkge1xuICAgICAgY29uc3QgYmFja2dyb3VuZCA9IG5kLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQnKTtcblxuICAgICAgaWYgKCFiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5saW5lclxuICAgICAgICAuaW5saW5lQWxsKGJhY2tncm91bmQpXG4gICAgICAgIC50aGVuKGlubGluZWQgPT4ge1xuICAgICAgICAgIG5kLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgaW5saW5lZCxcbiAgICAgICAgICAgIG5kLnN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkoJ2JhY2tncm91bmQnKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IG5kKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tdG9pbWFnZTtcbiJdfQ==