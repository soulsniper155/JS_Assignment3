var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Search by user input");
var isAvai = false;
for (var i=0;i<A.length;i++){
    if(input==A[i]){
        document.writeln("Cookie is <b>available</b> at index "+1+" in our bakery");
        isAvai = true;
    }
}
if(!isAvai){
document.writeln("We are sorry. Pastry is<b> not available</b> in our bakery");
}