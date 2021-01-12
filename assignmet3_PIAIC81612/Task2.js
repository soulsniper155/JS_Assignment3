var name_array = ["Michael","John","Tony"];
var score_array = [320,230,480];
var Total_Marks = 500;
var percentage;
for(var i=0; i < name_array.length;i++){
    percentage =Math.floor(((score_array[i]) * 100) / Total_Marks);
    document.writeln("<h3>Score of "+name_array[i] +" is "+score_array[i]+". Percentage: "+percentage+"%<br></h3>");
}




