/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/math-expression-evaluator/dist/es/functions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/functions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));exports.createMathFunctions=function(t){return{isDegree:!0,acos:function(n){return t.math.isDegree?180/Math.PI*Math.acos(n):Math.acos(n)},add:function(t,n){return t+n},asin:function(n){return t.math.isDegree?180/Math.PI*Math.asin(n):Math.asin(n)},atan:function(n){return t.math.isDegree?180/Math.PI*Math.atan(n):Math.atan(n)},acosh:function(t){return Math.log(t+Math.sqrt(t*t-1))},asinh:function(t){return Math.log(t+Math.sqrt(t*t+1))},atanh:function(t){return Math.log((1+t)/(1-t))},C:function(n,r){var a=1,o=n-r,e=r;e<o&&(e=o,o=r);for(var u=e+1;u<=n;u++)a*=u;var i=t.math.fact(o);return\"NaN\"===i?\"NaN\":a/i},changeSign:function(t){return-t},cos:function(n){return t.math.isDegree&&(n=t.math.toRadian(n)),Math.cos(n)},cosh:function(t){return(Math.pow(Math.E,t)+Math.pow(Math.E,-1*t))/2},div:function(t,n){return t/n},fact:function(t){if(t%1!=0)return\"NaN\";for(var n=1,r=2;r<=t;r++)n*=r;return n},inverse:function(t){return 1/t},log:function(t){return Math.log(t)/Math.log(10)},mod:function(t,n){return t%n},mul:function(t,n){return t*n},P:function(t,n){for(var r=1,a=Math.floor(t)-Math.floor(n)+1;a<=Math.floor(t);a++)r*=a;return r},Pi:function(n,r,a){for(var o=1,e=n;e<=r;e++)o*=Number(t.postfixEval(a,{n:e}));return o},pow10x:function(t){for(var n=1;t--;)n*=10;return n},sigma:function(n,r,a){for(var o=0,e=n;e<=r;e++)o+=Number(t.postfixEval(a,{n:e}));return o},sin:function(n){return t.math.isDegree&&(n=t.math.toRadian(n)),Math.sin(n)},sinh:function(t){return(Math.pow(Math.E,t)-Math.pow(Math.E,-1*t))/2},sub:function(t,n){return t-n},tan:function(n){return t.math.isDegree&&(n=t.math.toRadian(n)),Math.tan(n)},tanh:function(n){return t.math.sinh(n)/t.math.cosh(n)},toRadian:function(t){return t*Math.PI/180},and:function(t,n){return t&n}}};\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/functions.js?");

/***/ }),

/***/ "./node_modules/math-expression-evaluator/dist/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var t=__webpack_require__(/*! ./lexer */ \"./node_modules/math-expression-evaluator/dist/es/lexer.js\"),e=__webpack_require__(/*! ./token */ \"./node_modules/math-expression-evaluator/dist/es/token.js\"),i=__webpack_require__(/*! ./postfix */ \"./node_modules/math-expression-evaluator/dist/es/postfix.js\"),o=__webpack_require__(/*! ./postfix_evaluator */ \"./node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js\"),s=__webpack_require__(/*! ./functions */ \"./node_modules/math-expression-evaluator/dist/es/functions.js\"),r=function(){function r(){this.toPostfix=i.toPostfix,this.addToken=t.addToken,this.lex=t.lex,this.postfixEval=o.postfixEval,this.math=s.createMathFunctions(this),this.tokens=e.createTokens(this)}return r.prototype.eval=function(t,e,i){return this.postfixEval(this.toPostfix(this.lex(t,e)),i)},r}();r.TOKEN_TYPES=e.tokenTypes,r.tokenTypes=e.tokenTypes,module.exports=r;\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/index.js?");

/***/ }),

/***/ "./node_modules/math-expression-evaluator/dist/es/lexer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/lexer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));var e=__webpack_require__(/*! ./token */ \"./node_modules/math-expression-evaluator/dist/es/token.js\");function t(e,t){for(var n=0;n<e.length;n++)e[n]+=t;return e}var n={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0,14:!0},r={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},s={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},h={},o={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},p={1:!0},u=[[],[\"1\",\"2\",\"3\",\"7\",\"8\",\"9\",\"4\",\"5\",\"6\",\"+\",\"-\",\"*\",\"/\",\"(\",\")\",\"^\",\"!\",\"P\",\"C\",\"e\",\"0\",\".\",\",\",\"n\",\" \",\"&\"],[\"pi\",\"ln\",\"Pi\"],[\"sin\",\"cos\",\"tan\",\"Del\",\"int\",\"Mod\",\"log\",\"pow\"],[\"asin\",\"acos\",\"atan\",\"cosh\",\"root\",\"tanh\",\"sinh\"],[\"acosh\",\"atanh\",\"asinh\",\"Sigma\"]];function a(e,t,n,r){for(var s=0;s<r;s++)if(e[n+s]!==t[s])return!1;return!0}function i(e,t){for(var n=0;n<t.length;n++)if(t[n].token===e)return n;return-1}exports.addToken=function(t){for(var n=0;n<t.length;n++){var r=t[n].token.length,s=-1;t[n].type===e.tokenTypes.FUNCTION_WITH_N_ARGS&&void 0===t[n].numberOfArguments&&(t[n].numberOfArguments=2),u[r]=u[r]||[];for(var h=0;h<u[r].length;h++)if(t[n].token===u[r][h]){s=i(u[r][h],this.tokens);break}-1===s?(this.tokens.push(t[n]),t[n].precedence=e.preced[t[n].type],u.length<=t[n].token.length&&(u[t[n].token.length]=[]),u[t[n].token.length].push(t[n].token)):(this.tokens[s]=t[n],t[n].precedence=e.preced[t[n].type])}},exports.lex=function(e,l){var f,c={value:this.math.changeSign,type:0,precedence:4,show:\"-\"},g={value:\")\",show:\")\",type:5,precedence:0},d={value:\"(\",type:4,precedence:0,show:\"(\"},v=[d],w=[],y=e,m=n,k=0,b=h,O=\"\";void 0!==l&&this.addToken(l);var x=function(e,t){for(var n,r,s,h=[],o=t.length,p=0;p<o;p++)if(!(p<o-1&&\" \"===t[p]&&\" \"===t[p+1])){for(n=\"\",r=t.length-p>u.length-2?u.length-1:t.length-p;r>0;r--)if(void 0!==u[r])for(s=0;s<u[r].length;s++)a(t,u[r][s],p,r)&&(n=u[r][s],s=u[r].length,r=0);if(p+=n.length-1,\"\"===n)throw new Error(\"Can't understand after \"+t.slice(p));h.push(e.tokens[i(n,e.tokens)])}return h}(this,y);for(f=0;f<x.length;f++){var A=x[f];if(14!==A.type){var E,T=A.token,_=A.type,C=A.value,S=A.precedence,D=A.show,N=v[v.length-1];for(E=w.length;E--&&0===w[E];)if(-1!==[0,2,3,4,5,9,10,11,12,13].indexOf(_)){if(!0!==m[_])throw new Error(T+\" is not allowed after \"+O);v.push(g),m=r,b=o,w.pop()}if(!0!==m[_])throw new Error(T+\" is not allowed after \"+O);!0===b[_]&&(_=2,C=this.math.mul,D=\"&times;\",S=3,f-=1);var P={value:C,type:_,precedence:S,show:D,numberOfArguments:A.numberOfArguments};if(0===_)m=n,b=h,t(w,2),v.push(P),4!==x[f+1].type&&(v.push(d),w.push(2));else if(1===_)1===N.type?(N.value+=C,t(w,1)):v.push(P),m=r,b=s;else if(2===_)m=n,b=h,t(w,2),v.push(P);else if(3===_)v.push(P),m=r,b=o;else if(4===_)t(w,1),k++,m=n,b=h,v.push(P);else if(5===_){if(!k)throw new Error(\"Closing parenthesis are more than opening one, wait What!!!\");k--,m=r,b=o,v.push(P),t(w,1)}else if(6===_){if(N.hasDec)throw new Error(\"Two decimals are not allowed in one number\");1!==N.type&&(N={show:\"0\",value:0,type:1,precedence:0},v.push(N)),m=p,t(w,1),b=h,N.value+=C,N.hasDec=!0}else 7===_&&(m=r,b=o,t(w,1),v.push(P));8===_?(m=n,b=h,t(w,A.numberOfArguments+2),v.push(P),4!==x[f+1].type&&(v.push(d),w.push(A.numberOfArguments+2))):9===_?(9===N.type?N.value===this.math.add?(N.value=C,N.show=D,t(w,1)):N.value===this.math.sub&&\"-\"===D&&(N.value=this.math.add,N.show=\"+\",t(w,1)):5!==N.type&&7!==N.type&&1!==N.type&&3!==N.type&&13!==N.type?\"-\"===T&&(m=n,b=h,t(w,2).push(2),v.push(c),v.push(d)):(v.push(P),t(w,2)),m=n,b=h):10===_?(m=n,b=h,t(w,2),v.push(P)):11===_?(m=n,b=h,v.push(P)):12===_?(m=n,b=h,t(w,6),v.push(P),4!==x[f+1].type&&(v.push(d),w.push(6))):13===_&&(m=r,b=o,v.push(P)),t(w,-1),O=T}else if(f>0&&f<x.length-1&&1===x[f+1].type&&(1===x[f-1].type||6===x[f-1].type))throw new Error(\"Unexpected Space\")}for(E=w.length;E--;)v.push(g);if(!0!==m[5])throw new Error(\"complete the expression\");for(;k--;)v.push(g);return v.push(g),v};\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/lexer.js?");

/***/ }),

/***/ "./node_modules/math-expression-evaluator/dist/es/postfix.js":
/*!*******************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/postfix.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0})),exports.toPostfix=function(e){for(var p,t,u,l=[],o=-1,r=-1,s=[{value:\"(\",type:4,precedence:0,show:\"(\"}],a=1;a<e.length;a++)if(1===e[a].type||3===e[a].type||13===e[a].type)1===e[a].type&&(e[a].value=Number(e[a].value)),l.push(e[a]);else if(4===e[a].type)s.push(e[a]);else if(5===e[a].type)for(;4!==(null==(h=t=s.pop())?void 0:h.type);){var h;t&&l.push(t)}else if(11===e[a].type){for(;4!==(null==(v=t=s.pop())?void 0:v.type);){var v;t&&l.push(t)}s.push(t)}else{r=(p=e[a]).precedence,o=(u=s[s.length-1]).precedence;var n=\"Math.pow\"==u.value&&\"Math.pow\"==p.value;if(r>o)s.push(p);else{for(;o>=r&&!n||n&&r<o;)t=s.pop(),u=s[s.length-1],t&&l.push(t),o=u.precedence,n=\"Math.pow\"==p.value&&\"Math.pow\"==u.value;s.push(p)}}return l};\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/postfix.js?");

/***/ }),

/***/ "./node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0})),exports.postfixEval=function(e,a){(a=a||{}).PI=Math.PI,a.E=Math.E;for(var p,u,r,l=[],s=void 0!==a.n,t=0;t<e.length;t++)if(1===e[t].type)l.push({value:e[t].value,type:1});else if(3===e[t].type)l.push({value:a[e[t].value],type:1});else if(0===e[t].type){var v=l[l.length-1];Array.isArray(v)?v.push(e[t]):v.value=e[t].value(v.value)}else if(7===e[t].type){var y=l[l.length-1];Array.isArray(y)?y.push(e[t]):y.value=e[t].value(y.value)}else if(8===e[t].type){for(var h=[],i=0;i<e[t].numberOfArguments;i++){var o=l.pop();o&&h.push(o.value)}l.push({type:1,value:e[t].value.apply(e[t],h.reverse())})}else if(10===e[t].type)p=l.pop(),u=l.pop(),Array.isArray(u)?((u=u.concat(p)).push(e[t]),l.push(u)):Array.isArray(p)?(p.unshift(u),p.push(e[t]),l.push(p)):l.push({type:1,value:e[t].value(u.value,p.value)});else if(2===e[t].type||9===e[t].type)p=l.pop(),u=l.pop(),Array.isArray(u)?((u=u.concat(p)).push(e[t]),l.push(u)):Array.isArray(p)?(p.unshift(u),p.push(e[t]),l.push(p)):l.push({type:1,value:e[t].value(u.value,p.value)});else if(12===e[t].type){p=l.pop();var n=void 0;n=!Array.isArray(p)&&p?[p]:p||[],u=l.pop(),r=l.pop(),l.push({type:1,value:e[t].value(r.value,u.value,n)})}else 13===e[t].type&&(s?l.push({value:a[e[t].value],type:3}):l.push([e[t]]));if(l.length>1)throw new Error(\"Uncaught Syntax error\");return parseFloat(l[0].value.toFixed(15))};\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js?");

/***/ }),

/***/ "./node_modules/math-expression-evaluator/dist/es/token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/dist/es/token.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},e.apply(this,arguments)}Object.defineProperty(exports, \"__esModule\", ({value:!0}));var t,o={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0,14:-1};exports.tokenTypes=void 0,(t=exports.tokenTypes||(exports.tokenTypes={}))[t.FUNCTION_WITH_ONE_ARG=0]=\"FUNCTION_WITH_ONE_ARG\",t[t.NUMBER=1]=\"NUMBER\",t[t.BINARY_OPERATOR_HIGH_PRECENDENCE=2]=\"BINARY_OPERATOR_HIGH_PRECENDENCE\",t[t.CONSTANT=3]=\"CONSTANT\",t[t.OPENING_PARENTHESIS=4]=\"OPENING_PARENTHESIS\",t[t.CLOSING_PARENTHESIS=5]=\"CLOSING_PARENTHESIS\",t[t.DECIMAL=6]=\"DECIMAL\",t[t.POSTFIX_FUNCTION_WITH_ONE_ARG=7]=\"POSTFIX_FUNCTION_WITH_ONE_ARG\",t[t.FUNCTION_WITH_N_ARGS=8]=\"FUNCTION_WITH_N_ARGS\",t[t.BINARY_OPERATOR_LOW_PRECENDENCE=9]=\"BINARY_OPERATOR_LOW_PRECENDENCE\",t[t.BINARY_OPERATOR_PERMUTATION=10]=\"BINARY_OPERATOR_PERMUTATION\",t[t.COMMA=11]=\"COMMA\",t[t.EVALUATED_FUNCTION=12]=\"EVALUATED_FUNCTION\",t[t.EVALUATED_FUNCTION_PARAMETER=13]=\"EVALUATED_FUNCTION_PARAMETER\",t[t.SPACE=14]=\"SPACE\",exports.createTokens=function(t){return[{token:\"sin\",show:\"sin\",type:0,value:t.math.sin},{token:\"cos\",show:\"cos\",type:0,value:t.math.cos},{token:\"tan\",show:\"tan\",type:0,value:t.math.tan},{token:\"pi\",show:\"&pi;\",type:3,value:\"PI\"},{token:\"(\",show:\"(\",type:4,value:\"(\"},{token:\")\",show:\")\",type:5,value:\")\"},{token:\"P\",show:\"P\",type:10,value:t.math.P},{token:\"C\",show:\"C\",type:10,value:t.math.C},{token:\" \",show:\" \",type:14,value:\" \".anchor},{token:\"asin\",show:\"asin\",type:0,value:t.math.asin},{token:\"acos\",show:\"acos\",type:0,value:t.math.acos},{token:\"atan\",show:\"atan\",type:0,value:t.math.atan},{token:\"7\",show:\"7\",type:1,value:\"7\"},{token:\"8\",show:\"8\",type:1,value:\"8\"},{token:\"9\",show:\"9\",type:1,value:\"9\"},{token:\"int\",show:\"Int\",type:0,value:Math.floor},{token:\"cosh\",show:\"cosh\",type:0,value:t.math.cosh},{token:\"acosh\",show:\"acosh\",type:0,value:t.math.acosh},{token:\"ln\",show:\" ln\",type:0,value:Math.log},{token:\"^\",show:\"^\",type:10,value:Math.pow},{token:\"root\",show:\"root\",type:0,value:Math.sqrt},{token:\"4\",show:\"4\",type:1,value:\"4\"},{token:\"5\",show:\"5\",type:1,value:\"5\"},{token:\"6\",show:\"6\",type:1,value:\"6\"},{token:\"/\",show:\"&divide;\",type:2,value:t.math.div},{token:\"!\",show:\"!\",type:7,value:t.math.fact},{token:\"tanh\",show:\"tanh\",type:0,value:t.math.tanh},{token:\"atanh\",show:\"atanh\",type:0,value:t.math.atanh},{token:\"Mod\",show:\" Mod \",type:2,value:t.math.mod},{token:\"1\",show:\"1\",type:1,value:\"1\"},{token:\"2\",show:\"2\",type:1,value:\"2\"},{token:\"3\",show:\"3\",type:1,value:\"3\"},{token:\"*\",show:\"&times;\",type:2,value:t.math.mul},{token:\"sinh\",show:\"sinh\",type:0,value:t.math.sinh},{token:\"asinh\",show:\"asinh\",type:0,value:t.math.asinh},{token:\"e\",show:\"e\",type:3,value:\"E\"},{token:\"log\",show:\" log\",type:0,value:t.math.log},{token:\"0\",show:\"0\",type:1,value:\"0\"},{token:\".\",show:\".\",type:6,value:\".\"},{token:\"+\",show:\"+\",type:9,value:t.math.add},{token:\"-\",show:\"-\",type:9,value:t.math.sub},{token:\",\",show:\",\",type:11,value:\",\"},{token:\"Sigma\",show:\"&Sigma;\",type:12,value:t.math.sigma},{token:\"n\",show:\"n\",type:13,value:\"n\"},{token:\"Pi\",show:\"&Pi;\",type:12,value:t.math.Pi},{token:\"pow\",show:\"pow\",type:8,value:Math.pow,numberOfArguments:2},{token:\"&\",show:\"&\",type:9,value:t.math.and}].map((function(t){return e({},t,{precedence:o[t.type]})}))},exports.preced=o;\n\n\n//# sourceURL=webpack://advance-calculator2/./node_modules/math-expression-evaluator/dist/es/token.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var math_expression_evaluator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math-expression-evaluator */ \"./node_modules/math-expression-evaluator/dist/es/index.js\");\n/* harmony import */ var math_expression_evaluator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math_expression_evaluator__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// my display\r\nconst solutionBox = document.querySelector(\".solution > p\");\r\nconst resultBox = document.querySelector(\".result > p\");\r\n// the buttons that is going to be pressed\r\nconst numberButtons = document.querySelectorAll(\".numpad-buttons\");\r\nconst operatorButtons = document.querySelectorAll(\".operator-buttons\");\r\nconst display = [];\r\nconst parser = [];\r\nconst complexMapper = [];\r\nconst numberPattern = /[0-9\\.]/;\r\nconst operatorPattern = /[+\\-*\\/]/;\r\nlet numberHolder = \"\";\r\nlet index = display.length;\r\nconst mexp = new (math_expression_evaluator__WEBPACK_IMPORTED_MODULE_0___default())();\r\n\r\nnumberButtons.forEach((btn) => {\r\n  btn.addEventListener(\"click\", (e) => {\r\n    if (e.target.dataset.content == \"+/-\") {\r\n      changeSign();\r\n    } else {\r\n      getNumber(e);\r\n    }\r\n    showDisplay();\r\n  });\r\n});\r\n\r\noperatorButtons.forEach((btn) => {\r\n  btn.addEventListener(\"click\", (e) => {\r\n    if (e.target.dataset.content.match(operatorPattern)) {\r\n      getBasicOperator(e);\r\n      numberHolder = \"\";\r\n      index = display.length;\r\n    } else {\r\n      mapComplexOperator(e);\r\n    }\r\n    showDisplay();\r\n  });\r\n});\r\n\r\nconst mapComplexOperator = (e) => {\r\n  let btnData = e.target.dataset.content;\r\n\r\n  switch (btnData) {\r\n    case \"clear\":\r\n      clearNumber();\r\n      break;\r\n    case \"allclear\":\r\n      clearAllNumber();\r\n      break;\r\n    case \"answer\":\r\n      useAnswer();\r\n      break;\r\n    default:\r\n      equals();\r\n      break;\r\n  }\r\n};\r\n\r\nconst clearNumber = () => {\r\n  if(display.length == 0) return\r\n  let currentState = display.length - 1;\r\n  if (\r\n    display[currentState].match(numberPattern) &&\r\n    display[currentState].length > 1\r\n  ) {\r\n    display[currentState] = display[currentState].slice(0, display[currentState].length - 1);\r\n    parser[currentState] = parser[currentState].slice(0,parser[currentState].length - 1);\r\n    index = currentState;\r\n    numberHolder = display[currentState];\r\n  } else {\r\n    display.pop();\r\n    parser.pop();\r\n    currentState = display.length - 1;\r\n    if(display.length != 0 && display[currentState].match(numberPattern)) {\r\n      index = currentState;\r\n      numberHolder = display[currentState];\r\n    } else {\r\n      index = display.length;\r\n      numberHolder = \"\";\r\n    }\r\n  }\r\n};\r\n\r\nconst clearAllNumber = () => {\r\n  display.splice(0);\r\n  parser.splice(0);\r\n  numberHolder = \"\";\r\n  index = display.length;\r\n  resultBox.textContent = \"\";\r\n};\r\n\r\nconst useAnswer = () => {\r\n  equals();\r\n  display.splice(0);\r\n  parser.splice(0);\r\n  let result = resultBox.textContent;\r\n  display.push(result);\r\n  parser.push(result);\r\n  numberHolder = display[0];\r\n  index = 0;\r\n};\r\n\r\nconst equals = () => {\r\n  if (display.length == 0) return;\r\n  try {\r\n    let finalAnswer = mexp.eval(parser.join(\"\"));\r\n    resultBox.textContent = finalAnswer;\r\n  } catch {\r\n    resultBox.textContent = \"Syntax error\";\r\n  }\r\n};\r\n\r\nconst getBasicOperator = (e) => {\r\n  let btnData = e.target.dataset.content;\r\n  display.push(e.target.textContent);\r\n  parser.push(btnData);\r\n};\r\n\r\nconst getNumber = (e) => {\r\n  let btnData = e.target.dataset.content;\r\n  numberHolder += btnData;\r\n  display[index] = numberHolder;\r\n  parser[index] = numberHolder;\r\n};\r\n\r\nconst showDisplay = () => {\r\n  const finalDisplay = display.join(\" \");\r\n  solutionBox.textContent = finalDisplay;\r\n};\r\n\r\nconst changeSign = () => {\r\n  if (numberHolder.length !== 0) {\r\n    if (numberHolder[0] == \"-\") {\r\n      numberHolder = numberHolder.slice(1);\r\n    } else {\r\n      numberHolder = \"-\" + numberHolder;\r\n    }\r\n  } else {\r\n    numberHolder = \"-\";\r\n  }\r\n\r\n  display[index] = numberHolder;\r\n  parser[index] = numberHolder;\r\n};\r\n\n\n//# sourceURL=webpack://advance-calculator2/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;