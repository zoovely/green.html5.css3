function Map() {

}

Map.prototype.getKakaoMap = function() {
    var container = document.getElementById('map');
    var options = {
        center : new kakao.maps.LatLng(37.45237202369475, 126.69966965560953), level: 3
    };
    var map = new kakao.maps.Map(container, options);
}