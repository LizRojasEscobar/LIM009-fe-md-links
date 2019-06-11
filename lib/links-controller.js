"use strict";

var _directoryController = require("./directory-controller.js");

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var markdownLinkExtractor = function markdownLinkExtractor(route) {
  var links = [];
  (0, _directoryController.readFileInside)(route).forEach(function (element) {
    var renderer = new _marked["default"].Renderer();

    renderer.link = function (href, title, text) {
      links.push({
        href: href,
        text: text,
        file: element.file
      });
    };

    (0, _marked["default"])(element.content, {
      renderer: renderer
    });
  });
  return links;
};

var getStatusOfLInk = function getStatusOfLInk(array) {
  var responsePromises = array.map(function (obj) {
    return (0, _nodeFetch["default"])(obj.href).then(function (result) {
      obj.status = result.status;
      obj.ok = result.statusText;
      return obj;
    });
  });
  return Promise.all(responsePromises);
};

getStatusOfLInk(markdownLinkExtractor("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md")).then(function (result) {
  console.log(result);
});