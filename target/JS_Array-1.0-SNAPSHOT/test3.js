/**
 * Project name(项目名称)：JS_Array
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/5
 * Time(创建时间)： 21:55
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// Array 对象中的属性
// 属性	        描述
// constructor	返回创建数组对象的原型函数
// length	设置或返回数组中元素的个数
// prototype	通过该属性您可以向对象中添加属性和方法

var cars = new Array("Saab", "Volvo", "BMW");
Array.prototype.name = null;
cars.name = "JavaScript";
document.write(cars.constructor + "<br>");      // 输出：function Array() { [native code] }
document.write(cars.length + "<br>");           // 输出：3
document.write(cars.name + "<br>");             // 输出：JavaScript