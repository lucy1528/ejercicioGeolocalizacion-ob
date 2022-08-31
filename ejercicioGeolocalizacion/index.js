let markers=[], map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 20.212,
        lng: -87.466,
      },
      map,
      title: "Tulum",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -51.796253,
        lng: -59.523613,
      },
      map,
      title: "Islas Malvinas",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.858333,
        lng: 2.294444,
      },
      map,
      title: "Torre Eiffel",
    })
  );
}