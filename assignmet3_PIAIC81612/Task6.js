var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for(var i=0;i<3;i++){
    console.log(i);
    document.writeln("<br>"+(i+1)+""+o[1+i]+"Choice is "+aCities[i]);
    console.log(i);
}