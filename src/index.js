import Test from "test.js";
console.log(Test)
import { data, map,gen} from "./test"
const fn = () => {};


// generator 函数，是一种写法，不是内置函数

function* test() {}

/**
 * 
   "use strict";
   var _test = _interopRequireDefault(require("test.js"));
   function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
   console.log(_test["default"]);
 */

 // babel 只会把 ES2015+ 编译成 commonjs 规范的，也就是 require("xxx") 的形式，
 // 但是这样的话，在浏览器会出现 require is not defined 的问题。需要引入像
 // require.js 的包或者使用webpack这样的打包工具，进行再处理