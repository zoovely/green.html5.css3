var map = new Map();
map.getKakakoMap();

var forecast = new Forecast();
var cityList = ["seoul","incheon","busan","gwangju","jeju","jeonju"];

$(function() {
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i])+"℃");
    });
    //서버에 여러번 들어가서 (ajax 실행) 하나씩 처리하는건 너무 비효율적임
    //원래는 한번에 데이터를 불러와서 처리하는 것이 좋음
    $(".location").on({
        "click" : function() {
            var q = $(this).children(".q").attr("id");
            var redirectURL = "pages/weather_location.html?q=" + q;
            location.href = redirectURL;
        }
    })
})