/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./backend/server/controllers/auth.controller.js":
/*!*******************************************************!*\
  !*** ./backend/server/controllers/auth.controller.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backend/server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* implementing authentication controller this will provide JWT \r\nand express-jwt functionality to protect user API endpoints */\n\n\n\n\n/* const jwt = require('jsonwebtoken');\r\nconst expressJwt =  require('express-jwt'); */\n\n/*  Our API endpoint user controller \r\nfunction  auth controller function. \r\nWe implement user auth using JSON Web Tokens*/\n//API endpoint to sign in a user\n\nconst login = async (req, res) => {\n  try {\n    //POST request receive the email and password\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status(401).json({\n      error: \"user not found\"\n    }); //verifying the password received in req.body from the client\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(401).send({\n        error: \"email and password don't match.\"\n      });\n    } // generate a signed jwt using a secret key and the user's _id value\n\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret); // set the token to a cookie in the response object\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(401).json({\n      error: \"Could not login\"\n    });\n  }\n}; //API endpoint to signout a user\n\n/* when Express app gets a GET request '/auth/signout',\r\n it execute the signout controller function */\n\n\nconst logout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(200).json({\n    message: \"you are logged out.\"\n  });\n};\n/* -------- Protecting user routes. we will use express-jwt. \r\nTo protect the read, update, and delete routes,  the server will need to check\r\nthat requestion client is an authenticated and authorized user */\n// -- requiring sign-in method. This method will check for authentication\n\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret,\n  userProperty: 'auth'\n});\n/*  authorizing signed in users method. \r\nThis method will check authenticated user the controller function is allowed to proceed. */\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(403).json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  login,\n  logout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(login, \"login\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(logout, \"logout\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/controllers/auth.controller.js?");

/***/ }),

/***/ "./backend/server/controllers/user.controller.js":
/*!*******************************************************!*\
  !*** ./backend/server/controllers/user.controller.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backend/server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/dbErrorHandler */ \"./backend/server/helper/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* definition of the controller methods to be executed \r\nwhen a route request is received by the server */\n //lodash library when updating an exixting user with change value\n\n\n\n/* Our API endpoint user controller function. */\n// ----------- Creating a new user\n\n/* our function to create a new user. when the Express app gets a \r\nPOST request at '/api/users', it calls the create function */\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default(req.body);\n\n  try {\n    /* save the user. using await to return a Promise*/\n    await user.save();\n    return res.status(200).json({\n      message: \"User successfully created!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helper_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n}; // ----------- Listing all users\n//the list controller function to find all the users from our database\n\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.find().select('name email updated created'); //return users as JSON objects\n\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve user\"\n    });\n  }\n}; // ----------- Loading a user by id to read, updte or delete\n\n/* our userbyID controller function to fetch and load the user into the Express request\r\nThis function uses the value in userId to query the database by _id */\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);\n    if (!user) return res.status(400).json({\n      error: \"User not found\"\n    }); //if user found\n\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve user\"\n    });\n  }\n}; // ----------- Reading a single data\n\n/* On a GET request at /api/users/:userId, Express app will execute the userByID function \r\nto load user by the userId value followed by the read controller function */\n\n\nconst read = (req, res) => {\n  // removing sensitive information\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n}; // ----------- Updating a single user data\n\n/*  On a PUT request at /api/users/:userId loads user with \r\nthe :userId before executing update controller function */\n\n\nconst update = async (req, res) => {\n  try {\n    //retrieves user details\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body); // current date to reflect the last updated timestamp\n\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helper_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n}; // ----------- Deleting a single user data\n\n/* this remove function retrieves the user from req.profile and use \r\nthe remove() query to delete the user from the database. */\n\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helper_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/controllers/user.controller.js?");

/***/ }),

/***/ "./backend/server/devBundle.js":
/*!*************************************!*\
  !*** ./backend/server/devBundle.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* compiling the React code using Webpack configurations while in dev mode */\n\n\n\n\n //setting up the compile method\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env.NODE_ENV === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/devBundle.js?");

/***/ }),

/***/ "./backend/server/express.js":
/*!***********************************!*\
  !*** ./backend/server/express.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./backend/server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./backend/server/routes/auth.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _frontend_components_CoreRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../frontend/components/CoreRouter */ \"./frontend/components/CoreRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _frontend_components_Theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../frontend/components/Theme */ \"./frontend/components/Theme.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./devBundle */ \"./backend/server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*------------ configuring express ----------------*/\n\n\n\n\n\n\n // import config from '../../config/config'\n//importing our template\n\n //import { Template } from 'webpack';\n//importing routes\n\n\n // import { UnauthorizedError } from 'express-jwt/lib';\n\n/* modules for server side rendering */\n\n\n\n //a stateless router, will take the request url to match\n\n //module to generate the CSS styles for the frontend component\n\n\n\n/* End modules for server side rendering */\n//for devmode only. Comment out in production\n\n // const expressJwt =  require('express-jwt');\n//serving static file with express\n\nconst CURRENT_WORKING_DIR = process.cwd(); //express app\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); //for devmode only. Comment out in production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_16__.default.compile(app); //parse body params\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()()); //secure apps\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()()); //enable Crossing Origin Resource Sharing CORS\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()()); //serving static file with express\n\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist'))); //mounting our routes to be accessed from the client-side\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__.default);\n/* sending the template in the reponse to a GET requests for the'/' route */\n\napp.get('/', (req, res) => {\n  /* generating css markup using material-ui ServerStyleSheets and renderToString */\n  //creating a ServerStyleSheets instance\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ServerStyleSheets(); //This context object contains the results of the render\n\n  const context = {}; //calling renderToString to return HTML string of react view\n\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n    theme: _frontend_components_Theme__WEBPACK_IMPORTED_MODULE_15__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_frontend_components_CoreRouter__WEBPACK_IMPORTED_MODULE_12__.default, null))))); //check if there was a redirect rendered\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  } //if there was no redirect, then we get the css string\n\n\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_7__.default)({\n    markup: markup,\n    css: css\n  }));\n}); // Catch unauthorized errors\n\n/* express-jwt throws an error named UnauthorizedError when a token cannot be validated for some reason */\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \":\" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \":\" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/express.js?");

/***/ }),

/***/ "./backend/server/helper/dbErrorHandler.js":
/*!*************************************************!*\
  !*** ./backend/server/helper/dbErrorHandler.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* implementing a helper method. this method will parse and return the \r\nerror message associated with a specific validation error. */\n\n/* method to parse the unique constraint related error object\r\ngetting a unique error field name */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1')); //getting the 1st character of the field name\n\n    output = fieldName.chartAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n}; //get the error message from error object\n\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    //pick one case and displaying error message\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\helper\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\helper\\\\dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\helper\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/helper/dbErrorHandler.js?");

/***/ }),

/***/ "./backend/server/models/user.model.js":
/*!*********************************************!*\
  !*** ./backend/server/models/user.model.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* implementing user model. we will use mongoose  to define the Schema */\n// import { model, Schema, VirtualType } from \"mongoose\"\n\n //function schema object\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\n/* generate a new mongoose schema\r\nour user schema definition object */\n\nconst userSchema = new Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'This email already exists',\n    match: [/.+\\@.+\\..+/, 'Email address not valid'],\n    required: 'Email required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password required\"\n  },\n  salt: String,\n  updated: {\n    type: Date,\n    default: Date.now()\n  },\n  created: {\n    type: Date,\n    default: Date.now()\n  }\n}); // handling password string as a virtual field\n\n/* when a password is received on user creation or update,\r\nit is encrypted into a new hash value. */\n\nuserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n}); //password field validation\n\nuserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 8) {\n    this.invalidate('password', 'Password must be at least 8 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'The password required');\n  }\n}, null);\n/* encryption logic and salt generation logic. \r\nwe will use this userSchema \r\nmethod to encrypt the user-provided pw string */\n\nuserSchema.methods = {\n  //verify sign-in attempts by matching the user-provided pw\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  //this method is used to generate an encrypted hash\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  //this method generates a unique random salt value\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Schema, \"Schema\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(userSchema, \"userSchema\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/models/user.model.js?");

/***/ }),

/***/ "./backend/server/routes/auth.routes.js":
/*!**********************************************!*\
  !*** ./backend/server/routes/auth.routes.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller.js */ \"./backend/server/controllers/auth.controller.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* implementing authentication with JWT \r\n'/auth/signin' : POST request to authenticate the user with their email and password\r\n'/auth/signout': GET request to clear the cookie containing a JWT that was set on the response object after sign-in\r\n\r\n*/\n\n\n\n\nconst expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/login').post(_controllers_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__.default.login);\nrouter.route('/auth/logout').get(_controllers_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__.default.logout);\nexpressJwt({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_2__.default.jwtSecret,\n  algorithms: ['sha1', 'RS256', 'HS256']\n});\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/routes/auth.routes.js?");

/***/ }),

/***/ "./backend/server/routes/user.routes.js":
/*!**********************************************!*\
  !*** ./backend/server/routes/user.routes.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./backend/server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./backend/server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* our user routes definition. when the server receives at each of these,\r\nthe corresponding controller functions are invoked  */\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); //the api endpoint to create a new user and list all the users\n\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.create);\n/* The api endpoint to read a single user data.The route to read a user's information \r\nonly need authentication verification. update and delete routes check for both\r\nauthentication and authorization */\n\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.remove); // .get(userCtrl.read)\n// .put(userCtrl.update)\n// .delete(userCtrl.remove)\n//path containing the :userId parameter\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.userByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\backend\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./backend/server/routes/user.routes.js?");

/***/ }),

/***/ "./backend/server/server.js":
/*!**********************************!*\
  !*** ./backend/server/server.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./backend/server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n/* configuring the server */\n// DB connection URL\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.MONGODB_URI, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__.default.MONGODB_URI}`);\n}); //server implementation\n\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.PORT, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %$.', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.PORT);\n});\n\n//# sourceURL=webpack://mern-crud/./backend/server/server.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* this is for server-side configuration-related \r\nvariables that will be used in our application */\nconst secret = '3#=vla6j$52gwrq1r$$bk1e0*s$*24kkq_=8n54+dt5119+i8z';\nconst config = {\n  env: \"development\" || 0,\n  PORT: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || secret,\n  //secret code to be used to sign JWT\n  MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mern-projects'\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(secret, \"secret\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\config\\\\config.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./config/config.js?");

/***/ }),

/***/ "./frontend/client/api-fetching/api-auth.js":
/*!**************************************************!*\
  !*** ./frontend/client/api-fetching/api-auth.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* This provide methods to fetch sigin-in and sigin-out API endpoint */\n\n/* the signin method will take user sign-in data from the view component \r\n   then uses fetch to make a POST request to verify user with the backend */\nconst login = async user => {\n  try {\n    let response = await fetch('/auth/login/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    }); //return response from server as a promise \n    //which may provide the JWT if sign-in was successful\n\n    return await response.json;\n  } catch (err) {\n    console.log(err);\n  }\n};\n/* the signout method will use fetch to make a GET request\r\n   to the signout API endpoint on the sever  */\n\n\nconst logout = async () => {\n  try {\n    let response = await fetch('/auth/logout/', {\n      method: 'GET'\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(login, \"login\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-auth.js\");\n  reactHotLoader.register(logout, \"logout\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/client/api-fetching/api-auth.js?");

/***/ }),

/***/ "./frontend/client/api-fetching/api-user.js":
/*!**************************************************!*\
  !*** ./frontend/client/api-fetching/api-user.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"read\": () => (/* binding */ read),\n/* harmony export */   \"update\": () => (/* binding */ update),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* these methods provide functionalities to fetch API endpoints */\n// import { Component } from \"react\"\n\n/*---the create method take user data from \r\n    view component, then fetch to make POST call at the\r\n    create API route '/api/users' */\nconst create = async user => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n/* ---the list method. this method uses fetch to make a GET request \r\n      to  all the users in the DB */\n\n\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n/* ---read method uses fetch to make a GET request to retrive a single user profile */\n\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        'Accept': 'application/json',\n        'Content-type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t //the JWT is attached to GET fetch call in the Authorization\n\n      }\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n/* \r\n---the update method take changed data from the view Component, then fetch \r\n   to make a PUT request to update existing data in the backend */\n\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'PUT',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t\n      },\n      body: JSON.stringify(user)\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n/* ---the deleted method will allow the view component to delete \r\n  a specific data from the database and use fetch to make a DELETE request */\n\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch('/api/users/', +params.userId, {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer' + credentials.t\n      }\n    }); //return response from server as a promise\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-user.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-user.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-user.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\api-fetching\\\\api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/client/api-fetching/api-user.js?");

/***/ }),

/***/ "./frontend/client/helpers/auth-helpers.js":
/*!*************************************************!*\
  !*** ./frontend/client/helpers/auth-helpers.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_fetching_api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-fetching/api-auth.js */ \"./frontend/client/api-fetching/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*\r\nthis helper will help to manage auth state \r\nthe way of storing, retrieving and deleting JWT credentials on the client-side */\n\nconst auth = {\n  /* Retrieving credentials. this method retrieves the stored \r\n  credentials to check if the current user is signed in. */\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  /* the Saving credentials. the authenticate method \r\n  takes JWT credentials and a callback function. \r\n  It stores credentials in sessionStorage after ensuring window is defined */\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  // deleting credentials. the clearJWT method will clear the stored JWT credentials from sessionStorage\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt'); //initialize the signout functionality\n\n    cb(); //optionally calling the signout API\n\n    (0,_api_fetching_api_auth_js__WEBPACK_IMPORTED_MODULE_0__.logout)().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\helpers\\\\auth-helpers.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\client\\\\helpers\\\\auth-helpers.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/client/helpers/auth-helpers.js?");

/***/ }),

/***/ "./frontend/components/CoreRouter.js":
/*!*******************************************!*\
  !*** ./frontend/components/CoreRouter.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./frontend/components/Home.js\");\n/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Users */ \"./frontend/components/Users.js\");\n/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup */ \"./frontend/components/Signup.js\");\n/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signin */ \"./frontend/components/Signin.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile */ \"./frontend/components/Profile.js\");\n/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditProfile */ \"./frontend/components/EditProfile.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ \"./frontend/components/Header.js\");\n/* harmony import */ var _HelloPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HelloPage */ \"./frontend/components/HelloPage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* our CoreRouter component will keep all of the \r\n   custom views and help render our custom react component */\n\n\n\n\n\n\n\n\n\n\n/* hint: the Switch component in react route,  renders a route exclusively. \r\n   A request at '/' also matches a route at 'about' */\n\nconst CoreRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/users\",\n    component: _Users__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signup\",\n    component: _Signup__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signin\",\n    component: _Signin__WEBPACK_IMPORTED_MODULE_5__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/edit/:userId\",\n    component: _EditProfile__WEBPACK_IMPORTED_MODULE_7__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/:userId\",\n    component: _Profile__WEBPACK_IMPORTED_MODULE_6__.default\n  })));\n};\n\nconst _default = CoreRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CoreRouter, \"CoreRouter\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\CoreRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\CoreRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/CoreRouter.js?");

/***/ }),

/***/ "./frontend/components/EditProfile.js":
/*!********************************************!*\
  !*** ./frontend/components/EditProfile.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditProfile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../client/helpers/auth-helpers */ \"./frontend/client/helpers/auth-helpers.js\");\n/* harmony import */ var _client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/api-fetching/api-user.js */ \"./frontend/client/api-fetching/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* edit profile component. This component authorized user to edit their own profile */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import { CssBaseline, TextField } from '@material-ui/core';\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    marginTop: theme.spacing(3),\n    paddingBottom: theme.spacing(2)\n  },\n  paper: {\n    marginTop: theme.spacing(8),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  form: {\n    width: '100%',\n    // Fix IE 11 issue.\n    marginTop: theme.spacing(3)\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.protectedTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  submit: {\n    margin: theme.spacing(3, 0, 2)\n  }\n})); //our copyright function\n\nfunction Copyright() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright ©', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    color: \"inherit\",\n    href: \"/\"\n  }, \"Oficy Inc.\"), '', new Date().getFullYear(), '.');\n}\n/* our edit profile function. \r\n */\n\n\nfunction EditProfile({\n  match\n}) {\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: '',\n    redirectToProfile: false\n  });\n  const jwt = _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_14__.default.isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_15__.read)({\n      //gather credentials from auth.isAuthenticated\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          name: data.name,\n          email: data.email\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort;\n    };\n  }, [match.params.userId]);\n  /*  The component will call the update fetch method with the userId,\r\n  JWT and updated user data */\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_15__.update)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, user).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  }; //redirect user to the updated Profile\n\n\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: '/user/' + values.userId\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.paper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), {\n    className: classes.avatar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LockOpenOutlined, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n    component: \"h1\",\n    variant: \"h5\",\n    className: classes.title\n  }, \"Edit your Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: classes.form\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    autoComplete: \"fname\",\n    name: \"fullName\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"name\",\n    className: classes.textField,\n    label: \"Full Name\",\n    value: values.name,\n    onChange: handleChange('name'),\n    autoFocus: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {\n    autoComplete: \"email\",\n    name: \"email\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    className: classes.textField,\n    label: \"Email Address\",\n    value: values.email,\n    onChange: handleChange('email'),\n    autoFocus: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default()), {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Save\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, {\n    mt: 5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Copyright, null)));\n}\n\n__signature__(EditProfile, \"useStyles{classes}\\nuseState{[values, setValues]({\\r\\n        name: '', \\r\\n        password: '',\\r\\n        email: '',\\r\\n        open: false,\\r\\n        error: '',\\r\\n        redirectToProfile: false\\r\\n    })}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\EditProfile.js\");\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/EditProfile.js?");

/***/ }),

/***/ "./frontend/components/Header.js":
/*!***************************************!*\
  !*** ./frontend/components/Header.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../client/helpers/auth-helpers */ \"./frontend/client/helpers/auth-helpers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* Our menu component will function as  a navigation bar at the frontend app */\n\n\n\n\n\n\n\n\n\n\n //higher-order component\n// import { withRouter } from 'react-router';\n\nconst history = (0,history__WEBPACK_IMPORTED_MODULE_9__.createMemoryHistory)();\n/* highlight the link that matches the \r\ncurrent location path by changing the color */\n\nconst isActive = (history, path) => {\n  // let history = useHistory()\n  if (history.location.pathname == path) return {\n    color: '#ffff'\n  };else return {\n    color: '#ffff'\n  };\n};\n/* We'll use the HOC withRouter from React Router \r\nto get access to the history object properties */\n\n\nconst Header = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {\n  position: \"fixed\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n  edge: \"start\",\n  color: \"inherit\",\n  \"aria-label\": \"menu\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n  variant: \"h6\",\n  noWrap: true\n}, \"TechStack\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n  to: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n  \"aria-label\": \"Home\",\n  style: isActive(history, \"/\")\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n  to: \"/users\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n  style: isActive(history, \"/users\")\n}, \"Users\")), !_client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n  color: \"inherit\",\n  style: isActive(history, \"/signup\")\n}, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n  color: \"inherit\",\n  style: isActive(history, \"/signin\")\n}, \"Login\"))), _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n  to: \"/user/\" + _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated().user._id\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n  color: \"inherit\",\n  style: isActive(history, \"/user/\" + _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated().user._id)\n}, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n  color: \"inherit\",\n  onClick: () => {\n    _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_10__.default.clearJWT(() => history.push('/'));\n  }\n}, \"Logout\")))));\nconst _default = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(history, \"history\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Header.js\");\n  reactHotLoader.register(isActive, \"isActive\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Header.js\");\n  reactHotLoader.register(Header, \"Header\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Header.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Header.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Header.js?");

/***/ }),

/***/ "./frontend/components/HelloPage.js":
/*!******************************************!*\
  !*** ./frontend/components/HelloPage.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// our hellopage component\n\n //our fucntional HelloPage component\n\nconst HelloPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello Everyone!\"));\n};\n\nconst _default = (0,react_hot_loader__WEBPACK_IMPORTED_MODULE_1__.hot)(module)(HelloPage);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(HelloPage, \"HelloPage\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\HelloPage.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\HelloPage.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/HelloPage.js?");

/***/ }),

/***/ "./frontend/components/Home.js":
/*!*************************************!*\
  !*** ./frontend/components/Home.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_assets_images_showcase4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../client/assets/images/showcase4.jpg */ \"./frontend/client/assets/images/showcase4.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* this compoment will containt our home page view. */\n\n\n\n\n\n\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 750,\n    margin: 'auto',\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 500\n  }\n})); // our functional component defintion\n\nfunction Home() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default()), {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"h3\",\n    className: classes.title\n  }, \"Welcome to your Tech Stack community\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default()), {\n    className: classes.media,\n    image: _client_assets_images_showcase4_jpg__WEBPACK_IMPORTED_MODULE_6__.default,\n    title: \"Home Image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"body1\",\n    component: \"p\",\n    className: classes.credit,\n    color: \"textSecondary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"body1\",\n    component: \"p\"\n  }, \"Discuss and share your Tech stack experience.\")));\n}\n\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Home.js?");

/***/ }),

/***/ "./frontend/components/Profile.js":
/*!****************************************!*\
  !*** ./frontend/components/Profile.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/helpers/auth-helpers */ \"./frontend/client/helpers/auth-helpers.js\");\n/* harmony import */ var _client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../client/api-fetching/api-user.js */ \"./frontend/client/api-fetching/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* This component will display a single user inforation in the view \r\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: 'auto',\n    padding: theme.spacing(3),\n    marginTop: theme.spacing(3)\n  }),\n  paper: {\n    marginTop: theme.spacing(8),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  }\n})); //our copyright function\n\nfunction Copyright() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright ©', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    color: \"inherit\",\n    href: \"/\"\n  }, \"Oficy Inc.\"), '', new Date().getFullYear(), '.');\n} //our profile function\n\n\nfunction Profile({\n  match\n}) {\n  const classes = useStyles(); // initialize state an empty user and set redirectToSignin to false\n\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [redirectToSignin, setRedirectToSignin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //fetch user information by using useEffect hook\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal; //get jwt from sessionstorage with isauthenicated method\n\n    const jwt = _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_15__.default.isAuthenticated(); //calling read method\n\n    (0,_client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_16__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setUser(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    }; //reruns when user value updated\n  }, [match.params.userId]); //if the current user is not authenticated, redirect\n\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: \"/signin\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {\n    variant: \"h5\",\n    className: classes.title\n  }, \"User Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default()), {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default()), {\n    className: classes.avatar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default()), {\n    primary: user.name,\n    secondary: user.email\n  }), \" \", _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_15__.default.isAuthenticated().user && _client_helpers_auth_helpers__WEBPACK_IMPORTED_MODULE_15__.default.isAuthenticated().user._id == user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/Components/edit/\" + user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteUser, {\n    userId: user._id\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default()), {\n    primary: \"Joined:\" + new Date(user.created).toDateString()\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, {\n    mt: 5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Copyright, null)));\n}\n\n__signature__(Profile, \"useStyles{classes}\\nuseState{[user, setUser]({})}\\nuseState{[redirectToSignin, setRedirectToSignin](false)}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Profile.js\");\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Profile.js?");

/***/ }),

/***/ "./frontend/components/Signin.js":
/*!***************************************!*\
  !*** ./frontend/components/Signin.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"@material-ui/icons/LockOutlined\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client_api_fetching_api_auth_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/api-fetching/api-auth.js */ \"./frontend/client/api-fetching/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* this component will render at the /signin path */\n\n\n\n\n\n\n\n\n\n\n\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(theme => ({\n  paper: {\n    marginTop: theme.spacing(8),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  form: {\n    width: '100%',\n    // Fix IE 11 issue.\n    marginTop: theme.spacing(3)\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: theme.spacing(3, 0, 2)\n  }\n})); //our copyright function\n\nfunction Copyright() {\n  return /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright ©', /*#__PURE__*/React.createElement(Link, {\n    color: \"inherit\",\n    href: \"/\"\n  }, \"Oficy Inc.\"), '', new Date().getFullYear(), '.');\n} //our component definition\n\n\nfunction Signin(props) {\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: '',\n    password: '',\n    error: '',\n    redirectToReferrer: false\n  }); //this function takes the input value from the state and calls the \n  // create fetch method to signup the user with the backend\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_client_api_fetching_api_auth_js__WEBPACK_IMPORTED_MODULE_11__.login)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        auth.authenticate(data, () => {\n          setValues({ ...values,\n            error: '',\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  }; //this function takes the new value in the input and sets it as the state\n\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n  const {\n    redirectToReferrer\n  } = values;\n\n  if (redirectToReferrer) {\n    return /*#__PURE__*/React.createElement(Redirect, {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/React.createElement(Container, {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/React.createElement((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/React.createElement(\"div\", {\n    className: classes.paper\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {\n    className: classes.avatar\n  }, /*#__PURE__*/React.createElement((_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default()), null)), /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign in\"), /*#__PURE__*/React.createElement(\"form\", {\n    className: classes.form\n  }, /*#__PURE__*/React.createElement(Grid, {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n    autoComplete: \"email\",\n    name: \"email\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    className: classes.textField,\n    label: \"Email Address\",\n    value: values.email,\n    onChange: handleChange('email'),\n    autoFocus: true\n  })), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n    autoComplete: \"current-password\",\n    name: \"password\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    type: \"password\",\n    id: \"password\",\n    className: classes.textField,\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    autoFocus: true\n  })), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default()), {\n    control: /*#__PURE__*/React.createElement((_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default()), {\n      value: \"remember\",\n      color: \"primary\"\n    }),\n    label: \"Remember me on this device\"\n  })), values.error && /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default()), {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/React.createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Sign In\"), /*#__PURE__*/React.createElement(Grid, {\n    container: true\n  }, /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: true\n  }, /*#__PURE__*/React.createElement(Link, {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Forgot password?\")), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: true\n  }, /*#__PURE__*/React.createElement(Link, {\n    to: \"/signup\",\n    variant: \"body2\"\n  }, \"Don't have an account? Sign Up\"))))), /*#__PURE__*/React.createElement(Box, {\n    mt: 5\n  }, /*#__PURE__*/React.createElement(Copyright, null)));\n}\n\n__signature__(Signin, \"useStyles{classes}\\nuseState{[values, setValues]({\\r\\n        email:'',\\r\\n        password:'',\\r\\n        error: '',\\r\\n        redirectToReferrer: false\\r\\n    })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signin.js\");\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Signin.js?");

/***/ }),

/***/ "./frontend/components/Signup.js":
/*!***************************************!*\
  !*** ./frontend/components/Signup.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../client/api-fetching/api-user.js */ \"./frontend/client/api-fetching/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.makeStyles)(theme => ({\n  paper: {\n    marginTop: theme.spacing(8),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  form: {\n    width: '100%',\n    // Fix IE 11 issue.\n    marginTop: theme.spacing(3)\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: theme.spacing(3, 0, 2)\n  }\n})); //our copyright function\n\nfunction Copyright() {\n  return /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright ©', /*#__PURE__*/React.createElement(Link, {\n    color: \"inherit\",\n    href: \"/\"\n  }, \"Oficy Inc.\"), '', new Date().getFullYear(), '.');\n} //our component definition\n\n\nfunction Signup() {\n  const classes = useStyles(); //initializing the state using the useState hook\n\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: ''\n  });\n  /* defining our handler functions to be called */\n  //this function takes the new value in the input and sets it as the state\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  }; //this function takes the input value from the state and calls the \n  // create fetch method to signup the user with the backend\n\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_16__.create)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          error: '',\n          open: true\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/React.createElement(Container, {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/React.createElement((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/React.createElement(\"div\", {\n    className: classes.paper\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {\n    className: classes.avatar\n  }, /*#__PURE__*/React.createElement(LockOpenOutlined, null)), /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    component: \"h1\",\n    variant: \"h5\",\n    className: classes.title\n  }, \"Sign up\"), /*#__PURE__*/React.createElement(\"form\", {\n    className: classes.form\n  }, /*#__PURE__*/React.createElement(Grid, {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/React.createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n    autoComplete: \"fname\",\n    name: \"fullName\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"name\",\n    className: classes.textField,\n    label: \"Full Name\",\n    value: values.name,\n    onChange: handleChange('name'),\n    autoFocus: true\n  })), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n    autoComplete: \"email\",\n    name: \"email\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    className: classes.textField,\n    label: \"Email Address\",\n    value: values.email,\n    onChange: handleChange('email'),\n    autoFocus: true\n  })), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n    autoComplete: \"current-password\",\n    name: \"password\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    type: \"password\",\n    id: \"password\",\n    className: classes.textField,\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    autoFocus: true\n  })), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/React.createElement((_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default()), {\n    control: /*#__PURE__*/React.createElement((_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default()), {\n      value: \"agree\",\n      color: \"primary\"\n    }),\n    label: \" I agree with Oficy Inc.'s terms of service and privacy policy\"\n  })), /*#__PURE__*/React.createElement(\"br\", null), values.error && /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default()), {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/React.createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Sign Up\"), /*#__PURE__*/React.createElement(Grid, {\n    container: true,\n    justify: \"flex-end\"\n  }, /*#__PURE__*/React.createElement(Grid, {\n    item: true\n  }, \"Already have an account?\", /*#__PURE__*/React.createElement(Link, {\n    to: \"/signin\",\n    variant: \"body2\"\n  }, \"Login\")))), /*#__PURE__*/React.createElement((_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default()), {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/React.createElement((_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default()), null, \"New Account\"), /*#__PURE__*/React.createElement((_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default()), null, /*#__PURE__*/React.createElement((_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default()), null, \"New account successfully created.\")), /*#__PURE__*/React.createElement((_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default()), null, /*#__PURE__*/React.createElement(Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\"))))), /*#__PURE__*/React.createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n    mt: 5\n  }, /*#__PURE__*/React.createElement(Copyright, null)));\n}\n\n__signature__(Signup, \"useStyles{classes}\\nuseState{[values, setValues]({\\r\\n        name: '',\\r\\n        password: '',\\r\\n        email: '',\\r\\n        open: false,\\r\\n        error: ''\\r\\n    })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signup.js\");\n  reactHotLoader.register(Copyright, \"Copyright\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Signup.js?");

/***/ }),

/***/ "./frontend/components/Theme.js":
/*!**************************************!*\
  !*** ./frontend/components/Theme.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* customizing the material-ui theme, and then \r\nexport it , so that it will be used in  App component */\n\n // creating our theme function component\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: '#334ac0',\n      dark: '#4764ca',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#93cefc',\n      main: '#ff4e53',\n      dark: '#c60055',\n      contrastText: '#000'\n    },\n    openTitle: '#4775fa',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.pink[400],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Theme.js?");

/***/ }),

/***/ "./frontend/components/Users.js":
/*!**************************************!*\
  !*** ./frontend/components/Users.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../client/api-fetching/api-user.js */ \"./frontend/client/api-fetching/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/* this component will display the names of all users fetched from the db \r\n   and we will use the built-in React Hook useState to add state to our function */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Style declaration to define css styles(CSS-in-JS) for the component.\r\n    makeStyles is a custom React hook API */\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(1),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n})); //we define and export a function component \n\nfunction Users() {\n  const classes = useStyles();\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); //calling the list method\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    //using abortcontroller web API to associate a signal with the fetch call\n    //abortcontroller allows us to abort DOM requests\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_client_api_fetching_api_user_js__WEBPACK_IMPORTED_MODULE_14__.list)(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    }); // using the cleanup function to abort the fetch call when the component unmounts\n\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/React.createElement((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default()), {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/React.createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n    variant: \"h3\",\n    className: classes.title\n  }, \"All Users\"), /*#__PURE__*/React.createElement((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default()), {\n    dense: true\n  }, users.map((item, i) => {\n    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {\n      to: \"/user/\" + item._id,\n      key: i\n    }, /*#__PURE__*/React.createElement((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n      button: true\n    }, /*#__PURE__*/React.createElement((_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/React.createElement((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), null, /*#__PURE__*/React.createElement((_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/React.createElement((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {\n      primary: item.name\n    }), /*#__PURE__*/React.createElement((_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/React.createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), null, /*#__PURE__*/React.createElement((_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default()), null)))));\n  })));\n}\n\n__signature__(Users, \"useStyles{classes}\\nuseState{[users, setUsers]([])}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\frontend\\\\components\\\\Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./frontend/components/Users.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n    <html lang=\"en\">\n     <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\">\n\n       <title>MERN TechStack</title>\n       <!--Load the default Roboto font-->\n       <link  rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"/>\n\n       <!--Font Icons-->\n       <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"/>\n     </head>\n     <body>\n      <div id=\"root\">${markup}</div>\n      <style id=\"jss-server-side\">${css}</stile>\n      <script src=\"/dist/bundle.js\"></script>\n     </body>\n    </html>`;\n};\n\n/* This is a root template file which will render the HTML with React components.\r\nThis template will be rendered in the browser when the server receives a request\r\nto the URL, and the div element with ID \"root\" will contains our React component.\r\nWe added the markup and the css that we generated on the server\r\n*/\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// client-side webpack configuration for our dev\n//requiring  objects\nconst path = __webpack_require__(/*! path */ \"path\"); // const HtmlWebpackPlugin = require('html-webpack-plugin');\n\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd(); // let's create the config object\n\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'frontend/client/index.js')],\n  output: {\n    filename: 'bundle.js',\n    path: path.join(CURRENT_WORKING_DIR, '/'),\n    publicPath: '/' // Webpack dev middleware, if enabled, handles requests for this URL prefix\n\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  },\n  devServer: {\n    historyApiFallback: true,\n    contentBase: './',\n    hot: true\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Paul Bit\\\\PycharmProjects\\\\MongoExpressReactNode Projects\\\\mern-crud\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-crud/./webpack.config.client.js?");

/***/ }),

/***/ "./frontend/client/assets/images/showcase4.jpg":
/*!*****************************************************!*\
  !*** ./frontend/client/assets/images/showcase4.jpg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0fafd01a3196e75c1cfc7b0dd362afe5.jpg\");\n\n//# sourceURL=webpack://mern-crud/./frontend/client/assets/images/showcase4.jpg?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/AppBar");;

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Avatar");;

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Box");;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Button");;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Card");;

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CardActions");;

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CardContent");;

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CardMedia");;

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Checkbox");;

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Dialog");;

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/DialogActions");;

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/DialogContent");;

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/DialogContentText");;

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/DialogTitle");;

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Divider");;

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/FormControlLabel");;

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Icon");;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/IconButton");;

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/List");;

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItem");;

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItemAvatar");;

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItemSecondaryAction");;

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItemText");;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Paper");;

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/TextField");;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Toolbar");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ArrowForward");;

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Edit");;

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Home");;

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/LockOutlined");;

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");;

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Person");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("history");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/extend");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./backend/server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;