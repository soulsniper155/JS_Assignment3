var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.writeln("Before Duplication of an Array: "+arr1);
var rem = [...new Set(arr1)];
document.writeln("<br>"+"After Distinct it :"+rem);

