var date = ["21/03/22", "21/03/23", "21/03/24", "21/03/25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

function Forecast(arr) {
    this.foreCastArr = arr;
    this.division;

    switch(arr) {
        case temp : this.division = "temp";
        break;
        case rain : this.division = "rain";
        break;
        case dust : this.division = "dust";
        break;
    }
}

Forecast.prototype.show = function() {
    var str = "";
    for(var i=0; i<this.foreCastArr.length; i++) {
        str += this.foreCastArr[i]+this.unit()+" ";
    }
    return str;
}
Forecast.prototype.showAvg = function() {
    var sum = 0;
    var str = "";
    for(var i=0; i<this.foreCastArr.length; i++) {
        sum += this.foreCastArr[i];
    }
    str = (sum/4)+this.unit();
    return str;
}
Forecast.prototype.unit = function() {
    switch(this.division) {
        case "temp" : return "℃";
        break;
        case "rain" : return "mm";
        break;
        case "dust" : return "㎍/m";
        break;
    }
}
Forecast.prototype.innerHTML = function() {
    var showId = "show_" + this.division;
    var showAvgId = "show_" + this.division + "_avg";
    document.getElementById(showId).innerHTML = this.show();
    document.getElementById(showAvgId).innerHTML = this.showAvg();
}

var temp = new Forecast(temp);
var rain = new Forecast(rain);
var dust = new Forecast(dust);

temp.innerHTML();
rain.innerHTML();
dust.innerHTML();