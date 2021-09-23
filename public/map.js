mapboxgl.accessToken ="pk.eyJ1Ijoia2praGJoamtsa2kiLCJhIjoiY2t0d2hpZG9xMGp4ODJzcGplY21jZm44diJ9.PeHJO7Dytg94M76YAn0efw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [80.270186, 13.0836939],
});


async function getAllStores(){
  const res=await fetch('/api/v1/stores');
  const data=await res.json();
  const stores=data.data.map((store)=>{
    const cor=store.location.coordinates;
    const storeID=store.storeID;
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [cor[0], cor[1]],
      },
      properties: {
        storeId: storeID,
        icon: "shop",
      },
    };
  });
  addStoreIcon(stores);
  console.log(stores);
}

// Add Icon of the store given
function addStoreIcon(stores) {
  map.on("load", () => {
    map.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: stores,
      },
    });
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "point", // reference the data source
      layout: {
        "icon-image": "{icon}-15", // reference the image
        "icon-size": 1.5,
        "text-field": "{storeId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}

getAllStores();
