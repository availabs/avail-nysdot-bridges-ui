import { useRef, useEffect, useState } from "react";

import mapboxgl, { Map } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import mapbox_token from "config/mapbox_token";

mapboxgl.accessToken = mapbox_token;

const map_initial_state = {
  lng: -73.823969,
  lat: 42.686155,
  zoom: 9,
};

function addWaterbodiesLayerToMap(map: Map) {
  map.addSource("usgs-nhd-waterbodies", {
    type: "vector",
    url: "http://localhost:3370/data/3a8fc0b57e64406d8cd755837c255b75_s1_v1_20230807t134714.json",
  });

  map.addLayer({
    id: "usgs-nhd-waterbodies",
    type: "fill",
    source: "usgs-nhd-waterbodies",
    "source-layer": "s1_v1",
    paint: {
      "fill-color": "#3939FF",
      "fill-opacity": 1,
    },
  });
}

function addFlowlinesLayerToMap(map: Map) {
  map.addSource("usgs-nhd-flowlines", {
    type: "vector",
    url: "http://localhost:3370/data/3a8fc0b57e64406d8cd755837c255b75_s2_v2_20230807t135823.json",
  });

  map.addLayer({
    id: "usgs-nhd-flowlines",
    type: "line",
    source: "usgs-nhd-flowlines",
    "source-layer": "s2_v2",
    paint: {
      "line-color": "#cfe8fc",
      "line-width": 1,
      "line-opacity": 1,
    },
  });
}

function addBridgesLayerToMap(map: Map) {
  map.addSource("nysdot-bridges", {
    type: "vector",
    url: "http://localhost:3370/data/3a8fc0b57e64406d8cd755837c255b75_s3_v5_20230808t014133.json",
  });

  map.addLayer({
    id: "nysdot-bridges",
    type: "circle",
    source: "nysdot-bridges",
    "source-layer": "s3_v5",
    paint: {
      "circle-radius": {
        base: 1,
        stops: [
          [12, 2],
          [22, 60],
        ],
      },
      "circle-color": "yellow",
    },
  });
}

// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
export default function MapboxCell() {
  const mapContainer = useRef(null);
  const map: { current: Map | null } = useRef(null);
  const [map_is_ready, setMapIsReady] = useState(false);
  const [added_layers, setAddedLayers] = useState(false);

  useEffect(() => {
    if (map.current) {
      return;
    }

    console.log("CREATE MAP");
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [map_initial_state.lng, map_initial_state.lat],
      zoom: map_initial_state.zoom,
    }) as Map;

    map.current.on("load", () => {
      setMapIsReady(true);
    });
  });

  useEffect(() => {
    if (!map_is_ready) {
      return;
    }

    if (added_layers) {
      return;
    }

    addWaterbodiesLayerToMap(map.current!);
    addFlowlinesLayerToMap(map.current!);
    addBridgesLayerToMap(map.current!);

    setAddedLayers(true);
  }, [map_is_ready, added_layers]);

  return (
    <div
      style={{ height: "100%" }}
      ref={mapContainer}
      className="map-container"
    />
  );
}
