/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/2019/07/30/hello-world/index.html","79a023a4d3f18f68bad5c31dea2b9ed6"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/archives/2019/07/index.html","872435b480a7e6f2195a690c47eaec34"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/archives/2019/index.html","0f21f8c42bca8a1b2168b2d9e3c798a4"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/archives/index.html","515b60f7b2a5863a1625dbad0b11653c"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/books/index.html","db362c692d76a6d3a8662d05ba9ef0e3"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/catagories/index.html","14467fd0ac8276e49df56bcc92baeb0c"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/css/index.css","858c003375265c11773775f84c3d2c1c"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/gallery/index.html","8f008e739f33d7db1d084f410c3a5d05"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/games/index.html","0a1f4c027dec6837dcff8bf7a725ce7f"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/IMG_5869.jpg","f330b637b5d98cd906165796f81e1339"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/144x144.png","4376c294fdda391d129ff97cf4aa9e73"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/192x192.png","2184f920b8bfd8d9134e2a5698bbc8a4"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/36x36.png","458fcb914f41a85e362b3c521666f170"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/48x48.png","3b4def7cc4727e7c41aa518e23b3e7c6"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/512x512.png","109b584ec7529f231e5ddd9bc41a8204"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/72x72.png","7c12516ed0efa1e4a2b84fd92957ee8c"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/images/pwaicons/96x96.png","ca3763341381e5c5d19f5011c5c23f54"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/index.html","f15e78e33a31da90a48c63d721c2249a"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/movies/index.html","588a0a6f090952f4318d8cb73b3d6b73"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/slides/index.html","2c33acc10a59ddadc98def34435b7878"],["C:/Users/CHRISOMEN/documents/blogs/chriswsy/public/tags/index.html","92f6ed051fece3a0f2d654d5c90753ea"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







