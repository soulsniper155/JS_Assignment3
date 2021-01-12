var A = [24,53,78,91,12];
document.writeln("Array Items :");
for(var i=0;i<A.length;i++){
    document.write(A[i]+" ");
}
var largest = A[0];
for(var i=0;i<A.length;i++){
    if(A[i] > largest){
        largest = A[i];
    }
}
document.writeln("<br>"+"The Largest number is "+largest);