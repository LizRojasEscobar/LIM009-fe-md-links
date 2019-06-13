"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatusOfLInk = exports.markdownLinkExtractor = void 0;

var _directoryController = require("./directory-controller.js");

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var markdownLinkExtractor = function markdownLinkExtractor(route) {
  var arrayWithlinks = [];
  (0, _directoryController.readFileInside)(route).forEach(function (element) {
    var renderer = new _marked["default"].Renderer();

    renderer.link = function (href, title, text) {
      arrayWithlinks.push({
        href: href,
        text: text,
        file: element.file
      });
    };

    (0, _marked["default"])(element.content, {
      renderer: renderer
    });
  });
  return arrayWithlinks;
}; //  console.log(markdownLinkExtractor('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba'));


exports.markdownLinkExtractor = markdownLinkExtractor;

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
/*
getStatusOfLInk(markdownLinkExtractor("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md"))
.then ((result)=>{
  console.log(result);
})

*/


exports.getStatusOfLInk = getStatusOfLInk;