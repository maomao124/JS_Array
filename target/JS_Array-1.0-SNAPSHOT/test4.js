/**
 * Project name(项目名称)：JS_Array
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/5
 * Time(创建时间)： 21:57
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// Array 对象中的方法
// 方法	描述
// concat()	拼接两个或更多的数组，并返回结果
// copyWithin()	从数组的指定位置拷贝元素到数组的另一个指定位置中
// entries()	返回数组的可迭代对象
// every()	检测数值元素的每个元素是否都符合条件
// fill()	使用一个固定值来填充数组
// filter()	检测数值元素，并返回符合条件所有元素的数组
// find()	返回符合传入函数条件的数组元素
// findIndex()	返回符合传入函数条件的数组元素索引
// forEach()	数组每个元素都执行一次回调函数
// from()	通过给定的对象中创建一个数组
// includes()	判断一个数组是否包含一个指定的值
// indexOf()	搜索数组中的元素，并返回它所在的位置
// isArray()	判断对象是否为数组
// join()	把数组的所有元素放入一个字符串
// keys()	返回数组的可迭代对象，包含原始数组的键（key）
// lastIndexOf()	搜索数组中的元素，并返回它最后出现的位置
// map()	通过指定函数处理数组的每个元素，并返回处理后的数组
// pop()	删除数组的最后一个元素并返回删除的元素
// push()	向数组的末尾添加一个或更多元素，并返回数组的长度
// reduce()	累加（从左到右）数组中的所有元素，并返回结果
// reduceRight()	累加（从右到左）数组中的所有元素，并返回结果
// reverse()	反转数组中元素的顺序
// shift()	删除并返回数组的第一个元素
// slice()	截取数组的一部分，并返回这个新的数组
// some()	检测数组元素中是否有元素符合指定条件
// sort()	对数组的元素进行排序
// splice()	从数组中添加或删除元素
// toString()	把数组转换为字符串，并返回结果
// unshift()	向数组的开头添加一个或多个元素，并返回新数组的长度
// valueOf()	返回数组对象的原始值


var fruits = ["Orange", "Banana", "Apple", "Papaya", "Mango"];
document.write(fruits.entries() + "<br>");              // 返回：[object Array Iterator]
document.write(fruits.includes("Apple") + "<br>");      // 返回：true
document.write(fruits.fill("grape") + "<br>");          // 返回：grape,grape,grape,grape,grape
var fruits = ["Orange", "Banana", "Apple", "Papaya", "Mango"];
document.write(fruits.indexOf("Mango") + "<br>");               // 返回：4
document.write(Array.isArray(fruits) + "<br>");                 // 返回：true
document.write(fruits.join("-") + "<br>");                      // 返回：Orange-Banana-Apple-Papaya-Mango
document.write(fruits.lastIndexOf("Banana") + "<br>");          // 返回：1
document.write(fruits.pop() + "<br>");                          // 返回：Mango
document.write(fruits.push("Watermelon") + "<br>");             // 返回：5
document.write(fruits.unshift("Lemon", "Pineapple") + "<br>");   // 返回：7
document.write(fruits.slice(1, 5) + "<br>");                    // 返回：Pineapple,Orange,Banana,Apple
document.write(fruits.sort() + "<br>");                         // 返回：Apple,Banana,Lemon,Orange,Papaya,Pineapple,Watermelon
document.write(fruits.valueOf() + "<br>");                      // 返回：Apple,Banana,Lemon,Orange,Papaya,Pineapple,Watermelon