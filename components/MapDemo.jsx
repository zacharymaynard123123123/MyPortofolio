"use client";

import { useEffect, useRef, useState } from "react";

import Map from "ol/Map";
import View from "ol/View";

import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";

import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";

import { fromLonLat, toLonLat } from "ol/proj";

import {
  Circle as CircleStyle,
  Fill,
  Stroke,
  Style,
} from "ol/style";

import Overlay from "ol/Overlay";

import "ol/ol.css";


// --------------------------------------------------
// LOCATIONS
// --------------------------------------------------

const locations = {
  yangon: {
    name: "Yangon",
    longitude: 96.1735,
    latitude: 16.8409,
    description: "Yangon, Myanmar",
  },

  singapore: {
    name: "Singapore",
    longitude: 103.8198,
    latitude: 1.3521,
    description: "Singapore",
  },

  tokyo: {
    name: "Tokyo",
    longitude: 139.6917,
    latitude: 35.6895,
    description: "Tokyo, Japan",
  },
};


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export default function MapDemo() {

  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  const popupContainer = useRef(null);
  const popupContent = useRef(null);
  const popupCloser = useRef(null);

  const [coordinates, setCoordinates] = useState({
    longitude: 96.1735,
    latitude: 16.8409,
  });

  const [selectedLocation, setSelectedLocation] = useState(
    "Yangon"
  );

  const [mapReady, setMapReady] = useState(false);


  // --------------------------------------------------
  // CREATE MAP
  // --------------------------------------------------

  useEffect(() => {

    if (!mapContainer.current) {
      return;
    }

    if (mapRef.current) {
      return;
    }


    // ------------------------------------------------
    // BASE MAP
    // ------------------------------------------------

    const baseLayer = new TileLayer({
      source: new OSM(),
    });


    // ------------------------------------------------
    // MARKER SOURCE
    // ------------------------------------------------

    const markerSource = new VectorSource();


    // ------------------------------------------------
    // MARKER STYLE
    // ------------------------------------------------

    const markerStyle = new Style({

      image: new CircleStyle({

        radius: 9,

        fill: new Fill({
          color: "#22d3ee",
        }),

        stroke: new Stroke({
          color: "#ffffff",
          width: 3,
        }),

      }),

    });


    // ------------------------------------------------
    // MARKER LAYER
    // ------------------------------------------------

    const markerLayer = new VectorLayer({

      source: markerSource,

      style: markerStyle,

    });


    // ------------------------------------------------
    // ADD CITY MARKERS
    // ------------------------------------------------

    Object.entries(locations).forEach(
      ([key, location]) => {

        const feature = new Feature({

          geometry: new Point(
            fromLonLat([
              location.longitude,
              location.latitude,
            ])
          ),

          name: location.name,

          description:
            location.description,

          locationKey: key,

        });

        markerSource.addFeature(feature);

      }
    );


    // ------------------------------------------------
    // POPUP OVERLAY
    // ------------------------------------------------

    const popupOverlay = new Overlay({

      element: popupContainer.current,

      autoPan: {
        animation: {
          duration: 250,
        },
      },

    });


    // ------------------------------------------------
    // CREATE MAP
    // ------------------------------------------------

    const map = new Map({

      target: mapContainer.current,

      layers: [
        baseLayer,
        markerLayer,
      ],

      overlays: [
        popupOverlay,
      ],

      view: new View({

        center: fromLonLat([
          locations.yangon.longitude,
          locations.yangon.latitude,
        ]),

        zoom: 5,

      }),

    });


    mapRef.current = map;


    // ------------------------------------------------
    // MOUSE MOVE
    // ------------------------------------------------

    map.on("pointermove", (event) => {

      const [longitude, latitude] =
        toLonLat(event.coordinate);

      setCoordinates({

        longitude,
        latitude,

      });

    });


    // ------------------------------------------------
    // CLICK MARKER
    // ------------------------------------------------

    map.on("singleclick", (event) => {

      const feature = map.forEachFeatureAtPixel(
        event.pixel,
        (feature) => feature
      );


      if (!feature) {

        popupOverlay.setPosition(undefined);

        return;

      }


      const name = feature.get("name");

      const description =
        feature.get("description");


      popupContent.current.innerHTML = `
        <div style="
          padding: 4px;
          color: #0f172a;
        ">

          <h3 style="
            margin: 0;
            font-size: 18px;
            font-weight: 700;
          ">
            ${name}
          </h3>

          <p style="
            margin-top: 6px;
            margin-bottom: 0;
            font-size: 13px;
          ">
            ${description}
          </p>

        </div>
      `;


      popupOverlay.setPosition(
        event.coordinate
      );


      setSelectedLocation(name);

    });


    // ------------------------------------------------
    // CURSOR STYLE
    // ------------------------------------------------

    map.on("pointermove", (event) => {

      const hit = map.hasFeatureAtPixel(
        event.pixel
      );

      map.getTargetElement().style.cursor =
        hit ? "pointer" : "";

    });


    setMapReady(true);


    // ------------------------------------------------
    // CLEANUP
    // ------------------------------------------------

    return () => {

      map.setTarget(null);

      mapRef.current = null;

    };

  }, []);


  // --------------------------------------------------
  // FLY TO LOCATION
  // --------------------------------------------------

  const flyTo = (location) => {

    if (!mapRef.current) {
      return;
    }


    const view =
      mapRef.current.getView();


    const center = fromLonLat([
      location.longitude,
      location.latitude,
    ]);


    view.animate({

      center,

      zoom: 10,

      duration: 1800,

    });


    setSelectedLocation(
      location.name
    );

  };


  // --------------------------------------------------
  // RESET MAP
  // --------------------------------------------------

  const resetMap = () => {

    if (!mapRef.current) {
      return;
    }


    mapRef.current
      .getView()
      .animate({

        center: fromLonLat([
          locations.yangon.longitude,
          locations.yangon.latitude,
        ]),

        zoom: 5,

        duration: 1500,

      });


    setSelectedLocation(
      "Yangon"
    );

  };


  // --------------------------------------------------
  // RETURN
  // --------------------------------------------------

  return (

    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">


      {/* -------------------------------------------
          HEADER
      -------------------------------------------- */}

      <div className="border-b border-white/10 bg-slate-900/90 p-6 md:p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


          {/* TITLE */}

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">

                🗺️

              </div>


              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">

                  Featured GIS Project

                </p>


                <h3 className="mt-1 text-2xl font-bold md:text-3xl">

                  Interactive OpenLayers Map

                </h3>

              </div>

            </div>


            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">

              An interactive GIS demonstration built with
              OpenLayers and OpenStreetMap. Explore cities,
              inspect coordinates, click map markers, and
              navigate around the map.

            </p>

          </div>


          {/* STATUS */}

          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">

              Live GIS Demo

            </span>

          </div>

        </div>

      </div>


      {/* -------------------------------------------
          MAP
      -------------------------------------------- */}

      <div className="relative">


        <div
          ref={mapContainer}
          className="h-[450px] w-full md:h-[550px]"
        />


        {/* LOADING */}

        {!mapReady && (

          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

              <p className="mt-4 text-sm text-slate-400">

                Loading interactive map...

              </p>

            </div>

          </div>

        )}


        {/* COORDINATES */}

        <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md">

          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">

            Cursor Coordinates

          </p>


          <p className="mt-1 font-mono text-xs text-cyan-400 md:text-sm">

            {coordinates.longitude.toFixed(5)}

            {" , "}

            {coordinates.latitude.toFixed(5)}

          </p>

        </div>


        {/* SELECTED LOCATION */}

        <div className="absolute right-4 top-4 z-10 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md">

          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">

            Selected Location

          </p>


          <p className="mt-1 text-sm font-semibold text-white">

            {selectedLocation}

          </p>

        </div>


        {/* POPUP */}

        <div
          ref={popupContainer}
          className="absolute z-50 min-w-[180px] -translate-x-1/2 -translate-y-full rounded-xl bg-white p-3 shadow-2xl"
        >

          <button
            ref={popupCloser}
            onClick={() => {}}
            className="absolute right-2 top-1 text-lg text-slate-500 hover:text-slate-900"
          >
            ×
          </button>


          <div
            ref={popupContent}
            className="pr-3"
          />

        </div>

      </div>


      {/* -------------------------------------------
          CONTROLS
      -------------------------------------------- */}

      <div className="border-t border-white/10 bg-slate-900/90 p-5 md:p-6">


        <div className="flex flex-col gap-5">


          {/* LOCATIONS */}

          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">

              Explore Locations

            </p>


            <div className="flex flex-wrap gap-2">


              <button
                onClick={() =>
                  flyTo(locations.yangon)
                }
                className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >

                Yangon

              </button>


              <button
                onClick={() =>
                  flyTo(locations.singapore)
                }
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >

                Singapore

              </button>


              <button
                onClick={() =>
                  flyTo(locations.tokyo)
                }
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >

                Tokyo

              </button>


              <button
                onClick={resetMap}
                className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >

                Reset

              </button>

            </div>

          </div>


          {/* FEATURES */}

          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">

              GIS Features

            </p>


            <div className="flex flex-wrap gap-2">


              {[
                "OpenLayers",
                "OpenStreetMap",
                "Vector Layers",
                "Markers",
                "Popups",
                "Coordinates",
                "Map Navigation",
              ].map((feature) => (

                <span
                  key={feature}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                >

                  {feature}

                </span>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* -------------------------------------------
          TECHNOLOGIES
      -------------------------------------------- */}

      <div className="border-t border-white/10 px-6 py-5">

        <div className="flex flex-wrap items-center gap-2">

          <span className="mr-2 text-xs uppercase tracking-wider text-slate-500">

            Built with

          </span>


          {[
            "React",
            "Next.js",
            "OpenLayers",
            "OpenStreetMap",
            "JavaScript",
            "GIS",
          ].map((technology) => (

            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >

              {technology}

            </span>

          ))}

        </div>

      </div>

    </section>

  );
}