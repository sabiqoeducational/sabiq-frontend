"use client";

import Map, { Source, Layer, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Feature, FeatureCollection, LineString } from "geojson";
import worldData from "./countries.geo.json";
const geoData = worldData as FeatureCollection;

const locations = [
  { lat: 24.7136, lng: 46.6753 },
  { lat: 30.0444, lng: 31.2357 },
  { lat: 25.2048, lng: 55.2708 },
  { lat: 29.3759, lng: 47.9774 },
  { lat: 31.9454, lng: 35.9284 },
  { lat: 25.2854, lng: 51.531 },
];

const pointsGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: locations.map((p, i) => ({
    type: "Feature",
    id: String(i),
    properties: {},
    geometry: {
      type: "Point",
      coordinates: [p.lng, p.lat],
    },
  })),
};
export default function WorldMap() {
  return (
    <div className="w-full h-[600px]">
      <Map
        initialViewState={{
          longitude: 20,
          latitude: 20,
          zoom: 0.5,
        }}
        minZoom={0.5}
        maxZoom={5}
        dragRotate={false}
        pitchWithRotate={false}
        mapStyle={{
          version: 8,
          sources: {},
          layers: [
            {
              id: "background",
              type: "background",
              paint: {
                "background-color": "#F6F7FB",
              },
            },
          ],
        }}
      >
        <Source id="world" type="geojson" data={geoData}>
          <Layer
            id="countries-fill"
            type="fill"
            paint={{
              "fill-color": [
                "match",
                ["get", "name"],

                "Egypt",
                "#A0AACE",

                "#A0AACE",
              ],
              "fill-opacity": 1,
            }}
          />

          <Layer
            id="countries-border"
            type="line"
            paint={{
              "line-color": "#F6F7FB",
              "line-width": 0.4,
              "line-opacity": 0.5,
            }}
          />
        </Source>
        <Source id="locations" type="geojson" data={pointsGeoJSON}>
          <Layer
            id="location-points"
            type="circle"
            paint={{
              "circle-radius": 4,
              "circle-color": "#3B82F6",
              "circle-stroke-width": 0.3,
              "circle-stroke-color": "#fff",
            }}
          />
        </Source>
        <Source id="grid" type="geojson" data={gridGeoJSON}>
          <Layer
            id="grid-lines"
            type="line"
            paint={{
              "line-color": "#F6F7FB",
              "line-width": 0.5,
              "line-opacity": 0.4,
            }}
          />
        </Source>
        {locations.map((loc, i) => (
          <Marker
            key={i}
            longitude={loc.lng}
            latitude={loc.lat}
            anchor="center"
          >
            <PulseMarker />
          </Marker>
        ))}
      </Map>
    </div>
  );
}
function PulseMarker() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-blue-400 opacity-75 animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 " />
    </div>
  );
}
const STEP = 40;
const verticalLines: Feature<LineString>[] = Array.from(
  { length: Math.floor(360 / STEP) },
  (_, i) => {
    const lng = -180 + i * STEP;

    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [lng, -85],
          [lng, 85],
        ],
      },
    };
  },
);
const horizontalLines: Feature<LineString>[] = Array.from(
  { length: Math.floor(180 / STEP) },
  (_, i) => {
    const lat = -90 + i * STEP;

    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-180, lat],
          [180, lat],
        ],
      },
    };
  },
);
const gridGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [...verticalLines, ...horizontalLines],
};
