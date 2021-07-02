function Forecast() {
    this.url = "https://api.openweathermap.org/data/2.5/weather";
    this.url += "?q=" + "gimpo-si";
    this.url += "&appid=" + "cc0550cd016d08a5e18271512cdf4dd1";
    this.url += "&lang" + "kr";
    this.url += "&q=";
}

Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openweatherAPI = this.url;
    $.ajax({
        type: "GET",
        url: openweatherAPI += city,
        dataType: "json",
        async: false, //return 해주기 위해
        success: function(data) {
            dataObj = data;
        },
        error: function(request, status, error) {
            console.log("code: "+request.status);
            console.log("message: "+request.responseText);
            console.log("error: "+error);
        }
    });
    return dataObj;
}

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openweatherAPI = this.url;
    $.ajax({
        type: "GET",
        url: openweatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            temp = Math.floor(data.main.temp);
        },
        error: function(request, status, error) {
            console.log("code: "+request.status);
            console.log("message: "+request.responseText);
            console.log("error: "+error);
        },
        complete: function(data,textStatus){
            
        }
    });
    return dataObj;
}