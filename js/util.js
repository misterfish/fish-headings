var toString$ = {}.toString;
function log(){
  return console.log.apply(console, arguments);
}
function warn(){
  var x$, args;
  x$ = args = (function(args$){
    var i$, x$, len$, results$ = [];
    for (i$ = 0, len$ = args$.length; i$ < len$; ++i$) {
      x$ = args$[i$];
      results$.push(x$);
    }
    return results$;
  }(arguments));
  x$.unshift('Warning:');
  return console.warn.apply(console, args);
}
function ierror(){
  var args, err, e, s;
  args = [].slice.call(arguments).join(' ');
  err = "Internal error: " + args;
  if (Error && (e = new Error(args)) && (s = e.stack)) {
    err = [err, s].join(' ');
  }
  return log(err);
}
function isStr(it){
  return toString$.call(it).slice(8, -1) === 'String';
}
function isString(it){
  return toString$.call(it).slice(8, -1) === 'String';
}
function isBool(it){
  return toString$.call(it).slice(8, -1) === 'Boolean';
}
function isBoolean(it){
  return toString$.call(it).slice(8, -1) === 'Boolean';
}
function isObj(it){
  return toString$.call(it).slice(8, -1) === 'Object';
}
function isObject(it){
  return toString$.call(it).slice(8, -1) === 'Object';
}
function isArray(){
  return isArr.apply(this, arguments);
}
function isArr(it){
  return toString$.call(it).slice(8, -1) === 'Array';
}
function isNum(it){
  return isNumber(it);
}
/*
 * Checks the type of the argument, in the same way as is-str, is-arr, etc.
 * Use is-a-number to test strings such as '3.1'.
 *
 * If it's a Number, returns an object with property 'nan' (alias 'is-nan')
 * based on whether it's NaN (not a number).
 * 
 * Returns false otherwise.
 */
function isNumber(it){
  var nan;
  if (toString$.call(it).slice(8, -1) !== 'Number') {
    return false;
  }
  nan = isNaN(it);
  return {
    nan: nan,
    isNan: nan
  };
}
/*
 * Also returns true if the argument is a string representing a number.
 */
function isANum(it){
  return isANumber(it);
}
function isANumber(it){
  if (isStr(it)) {
    it = +it;
    if (isNaN(it)) {
      return false;
    }
  }
  return isNum(it);
}
function isInteger(it){
  return isNum(it) && it === Math.floor(it);
}
function isInt(it){
  return isNum(it) && it === Math.floor(it);
}
function isPositiveInt(it){
  return isInt(it) && it > 0;
}
function isNonNegativeInt(it){
  return isInt(it) && it >= 0;
}
function round(decimals, number){
  var factor, num;
  factor = Math.pow(10, decimals);
  num = Math.round(number * factor) / factor;
  return +num.toFixed(decimals);
}
module.exports = {
  log: log,
  ierror: ierror,
  warn: warn,
  isStr: isStr,
  isString: isString,
  isBool: isBool,
  isBoolean: isBoolean,
  isObj: isObj,
  isObject: isObject,
  isArray: isArray,
  isArr: isArr,
  isNum: isNum,
  isNumber: isNumber,
  isANum: isANum,
  isANumber: isANumber,
  isInteger: isInteger,
  isInt: isInt,
  isPositiveInt: isPositiveInt,
  isNonNegativeInt: isNonNegativeInt,
  round: round
};