var map1 = document.querySelector(".map");

function initialize () {
    var centerMap = new google.maps.LatLng(55.782799, 37.5605173);
    var optionMap = {
        zoom: 16,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mymap = new google.maps.Map(map1, optionMap);
    var image = {
         url: "img/map-icecream.png",
         anchor: new google.maps.Point(51, 190)
    };

    var markPos = new google.maps.LatLng(55.782799, 37.5605173);
    var marker = new google.maps.Marker({
        position: markPos,
        icon: image,
        map: mymap
      });
    }
    google.maps.event.addDomListener(window, "load", initialize);
    map1.classList.add("map-google");