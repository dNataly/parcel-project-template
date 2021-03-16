// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/form-check.svg":[["form-check.41058749.svg","images/form-check.svg"],"images/form-check.svg"],"./../images/icon-arrow.svg":[["icon-arrow.56d7c493.svg","images/icon-arrow.svg"],"images/icon-arrow.svg"],"./../images/hero-images/m-hero-circle.png":[["m-hero-circle.88216268.png","images/hero-images/m-hero-circle.png"],"images/hero-images/m-hero-circle.png"],"./../images/hero-images/m-hero-circle@2x.png":[["m-hero-circle@2x.56816c35.png","images/hero-images/m-hero-circle@2x.png"],"images/hero-images/m-hero-circle@2x.png"],"./../images/hero-images/t-hero-circle.png":[["t-hero-circle.51993a6a.png","images/hero-images/t-hero-circle.png"],"images/hero-images/t-hero-circle.png"],"./../images/hero-images/t-hero-circle@2x.png":[["t-hero-circle@2x.3b3c6953.png","images/hero-images/t-hero-circle@2x.png"],"images/hero-images/t-hero-circle@2x.png"],"./../images/hero-images/d-hero-circle.png":[["d-hero-circle.c11bf435.png","images/hero-images/d-hero-circle.png"],"images/hero-images/d-hero-circle.png"],"./../images/hero-images/d-hero-circle@2x.png":[["d-hero-circle@2x.f98cd8e9.png","images/hero-images/d-hero-circle@2x.png"],"images/hero-images/d-hero-circle@2x.png"],"./../images/products/products-img-1.png":[["products-img-1.419fd387.png","images/products/products-img-1.png"],"images/products/products-img-1.png"],"./../images/products/products-img-2.png":[["products-img-2.9816dd68.png","images/products/products-img-2.png"],"images/products/products-img-2.png"],"./../images/products/products-img-3.png":[["products-img-3.7bd34d58.png","images/products/products-img-3.png"],"images/products/products-img-3.png"],"./../images/about/mobile-1.png":[["mobile-1.14ec7571.png","images/about/mobile-1.png"],"images/about/mobile-1.png"],"./../images/about/mobile-1@2x.png":[["mobile-1@2x.d77c808c.png","images/about/mobile-1@2x.png"],"images/about/mobile-1@2x.png"],"./../images/about/mobile-2.png":[["mobile-2.d409e750.png","images/about/mobile-2.png"],"images/about/mobile-2.png"],"./../images/about/mobile-2@2x.png":[["mobile-2@2x.e7810fa7.png","images/about/mobile-2@2x.png"],"images/about/mobile-2@2x.png"],"./../images/about/tablet-1.png":[["tablet-1.9f03a3bf.png","images/about/tablet-1.png"],"images/about/tablet-1.png"],"./../images/about/tablet-1@2x.png":[["tablet-1@2x.aaa37d23.png","images/about/tablet-1@2x.png"],"images/about/tablet-1@2x.png"],"./../images/about/desktop-2.png":[["desktop-2.4d851839.png","images/about/desktop-2.png"],"images/about/desktop-2.png"],"./../images/about/desktop-1.png":[["desktop-1.e292f1c7.png","images/about/desktop-1.png"],"images/about/desktop-1.png"],"./../images/about/desktop-2@2x.png":[["desktop-2@2x.f467460f.png","images/about/desktop-2@2x.png"],"images/about/desktop-2@2x.png"],"./../images/about/desktop-1@2x.png":[["desktop-1@2x.e679705d.png","images/about/desktop-1@2x.png"],"images/about/desktop-1@2x.png"],"./../images/advantages/icon1.png":[["icon1.7ef6014f.png","images/advantages/icon1.png"],"images/advantages/icon1.png"],"./../images/advantages/icon1@2x.png":[["icon1@2x.938b52ac.png","images/advantages/icon1@2x.png"],"images/advantages/icon1@2x.png"],"./../images/advantages/icon2.png":[["icon2.f7a30458.png","images/advantages/icon2.png"],"images/advantages/icon2.png"],"./../images/advantages/icon2@2x.png":[["icon2@2x.e4ab06c5.png","images/advantages/icon2@2x.png"],"images/advantages/icon2@2x.png"],"./../images/advantages/icon3.png":[["icon3.42b26187.png","images/advantages/icon3.png"],"images/advantages/icon3.png"],"./../images/advantages/icon3@2x.png":[["icon3@2x.92bfb4cc.png","images/advantages/icon3@2x.png"],"images/advantages/icon3@2x.png"],"./../images/customer-reviews/customer-pic1@1x.jpg":[["customer-pic1@1x.386f33e0.jpg","images/customer-reviews/customer-pic1@1x.jpg"],"images/customer-reviews/customer-pic1@1x.jpg"],"./../images/customer-reviews/customer-pic1@2x.jpg":[["customer-pic1@2x.669fefc4.jpg","images/customer-reviews/customer-pic1@2x.jpg"],"images/customer-reviews/customer-pic1@2x.jpg"],"./../images/customer-reviews/customer-pic2@1x.jpg":[["customer-pic2@1x.33eef99a.jpg","images/customer-reviews/customer-pic2@1x.jpg"],"images/customer-reviews/customer-pic2@1x.jpg"],"./../images/customer-reviews/customer-pic2@2x.jpg":[["customer-pic2@2x.de7a16e0.jpg","images/customer-reviews/customer-pic2@2x.jpg"],"images/customer-reviews/customer-pic2@2x.jpg"],"./../images/customer-reviews/customer-pic3@1x.jpg":[["customer-pic3@1x.7a4b83ed.jpg","images/customer-reviews/customer-pic3@1x.jpg"],"images/customer-reviews/customer-pic3@1x.jpg"],"./../images/customer-reviews/customer-pic3@2x.jpg":[["customer-pic3@2x.96eb51f5.jpg","images/customer-reviews/customer-pic3@2x.jpg"],"images/customer-reviews/customer-pic3@2x.jpg"],"./../images/quotes.svg":[["quotes.4d7be276.svg","images/quotes.svg"],"images/quotes.svg"],"./../images/sectionbg.png":[["sectionbg.2fa7b5bc.png","images/sectionbg.png"],"images/sectionbg.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55045" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map