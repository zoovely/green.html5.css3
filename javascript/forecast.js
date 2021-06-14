var date = ["21/03/22", "21/03/23", "21/03/24", "21/03/25"];
var degree = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

function showDegree() {
    document.write("온도: ")
    for(var i=0; i<degree.length; i++) {
        document.write(degree[i]+"도 ");
    }
}
function showRain() {
    document.write("<br>강수량: ")
    for(var i=0; i<rain.length; i++) {
        document.write(rain[i]+"mm ");
    }
}
function showDust() {
    document.write("<br>미세먼지 농도: ")
    for(var i=0; i<dust.length; i++) {
        document.write(dust[i]+"㎍/m ");
    }
}
function showAvgDegree() {
    var sum = 0;
    for(var i=0; i<degree.length; i++) {
        sum += degree[i];
    }
    document.write("<br>평균 온도: "+sum/degree.length+"도<br>");
}
function showAvgRain() {
    var sum = 0;
    for(var i=0; i<rain.length; i++) {
        sum += rain[i];
    }
    document.write("평균 강수량: "+sum/rain.length+"mm<br>");
}
function showAvgDust() {
    var sum = 0;
    for(var i=0; i<dust.length; i++) {
        sum += dust[i];
    }
    document.write("평균 미세먼지 농도: "+sum/dust.length+"㎍/m<br>");
}