"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "protectRouteMiddleware", {
  enumerable: true,
  get: function get() {
    return _protectRouteMiddleware.protectRouteMiddleware;
  }
});
exports.routes = void 0;

var _getMyPhotosRoute = require("./getMyPhotosRoute");

var _getSharedWithMePhotosRoute = require("./getSharedWithMePhotosRoute");

var _uploadPhotoRoute = require("./uploadPhotoRoute");

var _getPhotoRoute = require("./getPhotoRoute");

var _shareWithEmailRoute = require("./shareWithEmailRoute");

var _protectRouteMiddleware = require("./protectRouteMiddleware");

var routes = [_getMyPhotosRoute.getMyPhotosRoute, _getSharedWithMePhotosRoute.getSharedWithMePhotosRoute, _uploadPhotoRoute.uploadPhotoRoute, _getPhotoRoute.getPhotoRoute, _shareWithEmailRoute.shareWithEmailRoute];
exports.routes = routes;