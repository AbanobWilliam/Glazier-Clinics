(function (window, mapster, markers_) {
    var markersObj = $.extend({}, markers_);
    $(document).ready(function () {
        // map options
        var options = mapster.MAP_OPTIONS,
            element = document.getElementById('map-canvas'),
            // map
            map = mapster.create(element, options);

        init();
        //TODO USE SMART FN


        function init() {
            var markersList = markersObj.markers.map(function (elem) {
                elem.content = getContent(elem);
                return elem;
            });
            var length = markersList.length;
            while (length--) {
                map.addMarker(markersList[length]);
            }
        }

        function getContent(marker) {
            return '<div style="overflow:hidden;">' +
                '<h2 style="color:#BCBEC0;font-family:Archivo Black;font-size: 20px;line-height: 28px;">CITY</h2>' +
                '<p style="color: #59595C;font-family:Archivo Narrow;font-size: 20px;line-height: 23px;">' +
                marker.hotel +
                '</p>' +
                '<h2 style="color:#BCBEC0;font-family:Archivo Black;font-size: 20px;line-height: 28px;">DATE</h2>' +
                '<p style="color: #59595C;font-family:Archivo Narrow;font-size: 20px;line-height: 23px;">' +
                marker.date +
                '</p>' +
                '<a href="' +
                marker.link +
                '" style="display:block;text-align:center;background:#00ADEF;color:#fff;font-size:25px;width:100%;text-decoration:none; font-weight:bolder;padding:3px 20px; border-radius:2px;">VIEW CLINIC <i class="fa fa-caret-right"></i></a>' +
                '</div>';
        }

        map.findBy(function (marker) {
            return marker.id === 2;
        });

        map.removeBy(function (marker) {
            return marker.id === 2;
        });
    });

}(window, window.Mapster, markers_));