var color_name = ["Red", "Green", "Blue", "white"];
document.writeln(color_name + "<br>");

//A
var input_color = prompt("Which color you want to add at the begining of the array");
color_name.unshift(input_color);//begining of the array
document.writeln(color_name + "<br>");


//B
var input_color = prompt("Which color you want to add at the End of the array");
color_name.push(input_color);//End of the array
document.writeln(color_name + "<br>");


//C
for (var i = 0; i < 2; i++) {
    var input_color = prompt("Add two more color at the begining of the array.");
    color_name.unshift(input_color);//begining of the array
    
}
document.writeln(color_name + "<br>");

//D
color_name.shift();//Delete the first Element
document.writeln(color_name + "<br>");

//E
color_name.pop();//Delete the last Element
document.writeln(color_name + "<br>");

//F
var input_color = prompt("Enter the Color which you wnat ot Insert At the Specific Index");
var input_index = prompt("Enter the index");
color_name.splice(input_index,0,input_color);
document.writeln(color_name + "<br>");

//G
var input_color = prompt("Enter the index which you want to Delete.");
var input_index = prompt("How many Colors you want to delete.");
color_name.splice(input_index,input_color);
document.writeln(color_name + "<br>");

