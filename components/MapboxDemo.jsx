"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const YANGON = [96.1735, 16.8409];
const SINGAPORE = [103.8198, 1.3521];
const TOKYO = [139.6917, 35.6895];

const styles = {
  streets: "streets-v12",
  satellite: "satellite-streets-v12",
  light: "light-v11",
  dark: "dark-v11",
};

export default function MapboxDemo() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [mapStyle, setMapStyle] = useState(styles.dark);
  const [coordinates, setCoordinates] = useState({
    lng: YANGON[0],
    lat: YANGON[1],
  });
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
      console.error(
        "NEXT_PUBLIC_MAPBOX_TOKEN is missing from .env.local"
      );
      return;
    }

    if (!mapContainer.current || mapRef.current) {
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${mapStyle}`,
      center: YANGON,
      zoom: 10,
      pitch: 35,
      bearing: -10,
      antialias: true,
    });

    mapRef.current = map;

    map.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    map.addControl(
      new mapboxgl.FullscreenControl(),
      "top-right"
    );

    map.addControl(
      new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: "metric",
      }),
      "bottom-right"
    );

    map.on("mousemove", (event) => {
      setCoordinates({
        lng: event.lngLat.lng,
        lat: event.lngLat.lat,
      });
    });

    map.on("load", () => {
      setMapLoaded(true);

      markerRef.current = new mapboxgl.Marker({
        color: "#22d3ee",
      })
        .setLngLat(YANGON)
        .setPopup(
          new mapboxgl.Popup({
            offset: 25,
          }).setHTML(`
            <div style="
              font-family: Arial, sans-serif;
              padding: 6px;
              color: #111827;
            ">
              <strong style="font-size: 16px;">
                Yangon
              </strong>

              <div style="
                margin-top: 4px;
                font-size: 13px;
              ">
                Interactive GIS Portfolio Demo
              </div>
            </div>
          `)
        )
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) {
      return;
    }

    mapRef.current.setStyle(
      `mapbox://styles/mapbox/${mapStyle}`
    );

    mapRef.current.once("style.load", () => {
      if (markerRef.current) {
        markerRef.current.remove();
      }

      markerRef.current = new mapboxgl.Marker({
        color: "#22d3ee",
      })
        .setLngLat(YANGON)
        .setPopup(
          new mapboxgl.Popup({
            offset: 25,
          }).setHTML(`
            <div style="
              font-family: Arial, sans-serif;
              padding: 6px;
              color: #111827;
            ">
              <strong style="font-size: 16px;">
                Yangon
              </strong>

              <div style="
                margin-top: 4px;
                font-size: 13px;
              ">
                Interactive GIS Portfolio Demo
              </div>
            </div>
          `)
        )
        .addTo(mapRef.current);
    });
  }, [mapStyle, mapLoaded]);

  const flyToLocation = (
    longitude,
    latitude,
    zoom = 11,
    pitch = 45,
    bearing = 0
  ) => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.flyTo({
      center: [longitude, latitude],
      zoom,
      pitch,
      bearing,
      duration: 2000,
      essential: true,
    });
  };

  const goToYangon = () => {
    flyToLocation(
      YANGON[0],
      YANGON[1],
      11,
      45,
      -20
    );
  };

  const goToSingapore = () => {
    flyToLocation(
      SINGAPORE[0],
      SINGAPORE[1],
      11,
      45,
      20
    );
  };

  const goToTokyo = () => {
    flyToLocation(
      TOKYO[0],
      TOKYO[1],
      11,
      45,
      30
    );
  };

  const resetMap = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.flyTo({
      center: YANGON,
      zoom: 10,
      pitch: 35,
      bearing: -10,
      duration: 1800,
      essential: true,
    });
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">

      {/* PROJECT HEADER */}
      <div className="border-b border-white/10 bg-slate-900/90 p-6 md:p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                🗺️
              </span>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Featured GIS Project
                </p>

                <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                  Interactive Mapbox Application
                </h3>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
              A live interactive mapping demonstration built with
              Mapbox GL JS and React. Explore different map styles,
              navigate between cities, inspect coordinates, and
              interact with the map.
            </p>

          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              Interactive
            </span>

          </div>

        </div>

      </div>


      {/* MAP */}
      <div className="relative">

        <div
          ref={mapContainer}
          className="h-[450px] w-full md:h-[550px]"
        />

        {/* COORDINATES */}
        <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md">

          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Cursor Coordinates
          </p>

          <p className="mt-1 font-mono text-xs text-cyan-400 md:text-sm">
            {coordinates.lng.toFixed(5)}
            {" , "}
            {coordinates.lat.toFixed(5)}
          </p>

        </div>


        {/* LOADING */}
        {!mapLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

              <p className="mt-4 text-sm text-slate-400">
                Loading interactive map...
              </p>

            </div>

          </div>
        )}

      </div>


      {/* MAP CONTROLS */}
      <div className="border-t border-white/10 bg-slate-900/90 p-5 md:p-6">

        <div className="flex flex-col gap-5">

          {/* LOCATION BUTTONS */}
          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Explore Locations
            </p>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={goToYangon}
                className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Yangon
              </button>

              <button
                onClick={goToSingapore}
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Singapore
              </button>

              <button
                onClick={goToTokyo}
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


          {/* MAP STYLE */}
          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Map Style
            </p>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={() => setMapStyle(styles.dark)}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  mapStyle === styles.dark
                    ? "bg-cyan-400 font-semibold text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Dark
              </button>

              <button
                onClick={() => setMapStyle(styles.streets)}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  mapStyle === styles.streets
                    ? "bg-cyan-400 font-semibold text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Streets
              </button>

              <button
                onClick={() => setMapStyle(styles.satellite)}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  mapStyle === styles.satellite
                    ? "bg-cyan-400 font-semibold text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Satellite
              </button>

              <button
                onClick={() => setMapStyle(styles.light)}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  mapStyle === styles.light
                    ? "bg-cyan-400 font-semibold text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Light
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* TECHNOLOGIES */}
      <div className="border-t border-white/10 px-6 py-5">

        <div className="flex flex-wrap items-center gap-2">

          <span className="mr-2 text-xs uppercase tracking-wider text-slate-500">
            Built with
          </span>

          {[
            "React",
            "Next.js",
            "Mapbox GL JS",
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