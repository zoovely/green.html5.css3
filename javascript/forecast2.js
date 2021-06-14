var date = ["21/03/22", "21/03/23", "21/03/24", "21/03/25"];
var degree = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

function show(arr, name) {
    document.write("<br>"+name+": ")
    for(var i=0; i<arr.length; i++) {
        document.write(arr[i]+" ");
    }
}
function showAvg(arr, name) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    document.write("<br>"+name+": "+sum/arr.length);
}