const test = 555;
const a = 555;
export { a };
export default test;

// ES6 的函数并不会被转化
const data = new Set();

/**
 * 
   "use strict";
   Object.defineProperty(exports, "__esModule", {
     value: true
   });
   exports["default"] = exports.a = void 0;
   var test = 555;
   var a = 555;
   exports.a = a;
   var _default = test;
   exports["default"] = _default;
   var data = new Set();

  *
  */

// 上面是babel编译后的代码
// 为了区分commonjs exports 和 ES6 export，所以给 exports 对象增加 __esModule 这个属性，作为标志区别。
// 并且增加 default 属性，其他属性就一次挂载在 exports 对象上。
