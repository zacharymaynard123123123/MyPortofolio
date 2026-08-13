"use client";

import { useEffect, useRef, useState } from "react";

export default function MapDemo() {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const fromLonLatRef = useRef(null);

  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let map;

    async function initializeMap() {
      if (!mapElement.current) {
        return;
      }

      // OpenLayers imports
      const Map = (await import("ol/Map")).default;
      const View = (await import("ol/View")).default;
      const TileLayer = (await import("ol/layer/Tile")).default;
      const OSM = (await import("ol/source/OSM")).default;
      const { fromLonLat } = await import("ol/proj");

      // Save projection function for reset button
      fromLonLatRef.current = fromLonLat;

      // Create the map
      map = new Map({
        target: mapElement.current,

        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],

        view: new View({
          // Yangon
          center: fromLonLat([96.1561, 16.8409]),

          // Initial zoom
          zoom: 6,

          // Minimum zoom
          minZoom: 2,

          // Maximum zoom
          maxZoom: 19,
        }),
      });

      mapRef.current = map;

      setMapLoaded(true);
    }

    initializeMap();

    // Cleanup
    return () => {
      if (map) {
        map.setTarget(null);
      }

      mapRef.current = null;
    };
  }, []);

  // ==================================================
  // ZOOM IN
  // ==================================================

  function zoomIn() {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const view = map.getView();

    const currentZoom = view.getZoom() || 6;

    view.animate({
      zoom: Math.min(currentZoom + 1, 19),
      duration: 300,
    });
  }

  // ==================================================
  // ZOOM OUT
  // ==================================================

  function zoomOut() {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const view = map.getView();

    const currentZoom = view.getZoom() || 6;

    view.animate({
      zoom: Math.max(currentZoom - 1, 2),
      duration: 300,
    });
  }

  // ==================================================
  // RESET MAP
  // ==================================================

  function resetMap() {
    const map = mapRef.current;
    const fromLonLat = fromLonLatRef.current;

    if (!map || !fromLonLat) {
      return;
    }

    map.getView().animate({
      center: fromLonLat([96.1561, 16.8409]),
      zoom: 6,
      duration: 500,
    });
  }

  // ==================================================
  // GO TO MYANMAR
  // ==================================================

  function goToMyanmar() {
    const map = mapRef.current;
    const fromLonLat = fromLonLatRef.current;

    if (!map || !fromLonLat) {
      return;
    }

    map.getView().animate({
      center: fromLonLat([96.1951, 16.8661]),
      zoom: 7,
      duration: 700,
    });
  }

  // ==================================================
  // GO TO YANGON
  // ==================================================

  function goToYangon() {
    const map = mapRef.current;
    const fromLonLat = fromLonLatRef.current;

    if (!map || !fromLonLat) {
      return;
    }

    map.getView().animate({
      center: fromLonLat([96.1561, 16.8409]),
      zoom: 11,
      duration: 700,
    });
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

      {/* ==================================================
          MAP CONTAINER
      ================================================== */}

      <div
        ref={mapElement}
        className="h-[500px] w-full"
      />


      {/* ==================================================
          LOADING SCREEN
      ================================================== */}

      {!mapLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">

          <div className="rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />

              <span className="text-sm text-slate-300">
                Loading OpenLayers...
              </span>

            </div>

          </div>

        </div>
      )}


      {/* ==================================================
          MAP CONTROLS
      ================================================== */}

      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">

        {/* Zoom in */}

        <button
          type="button"
          onClick={zoomIn}
          aria-label="Zoom in"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/85 text-2xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"
        >
          +
        </button>


        {/* Zoom out */}

        <button
          type="button"
          onClick={zoomOut}
          aria-label="Zoom out"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/85 text-2xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"
        >
          −
        </button>


        {/* Reset */}

        <button
          type="button"
          onClick={resetMap}
          aria-label="Reset map"
          className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/85 text-sm font-bold text-white shadow-lg backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"
        >
          ↻
        </button>

      </div>


      {/* ==================================================
          LOCATION BUTTONS
      ================================================== */}

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">

        <button
          type="button"
          onClick={goToMyanmar}
          className="rounded-xl border border-white/10 bg-slate-950/85 px-4 py-2 text-xs font-semibold text-slate-300 shadow-lg backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Myanmar
        </button>


        <button
          type="button"
          onClick={goToYangon}
          className="rounded-xl border border-white/10 bg-slate-950/85 px-4 py-2 text-xs font-semibold text-slate-300 shadow-lg backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Yangon
        </button>

      </div>


      {/* ==================================================
          MAP INFORMATION
      ================================================== */}

      <div className="absolute bottom-4 left-4 z-10 rounded-2xl border border-white/10 bg-slate-950/85 px-5 py-4 shadow-lg backdrop-blur-xl">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          OpenLayers
        </p>

        <p className="mt-1 text-sm text-slate-300">
          Interactive Web GIS
        </p>

      </div>

    </div>
  );
}