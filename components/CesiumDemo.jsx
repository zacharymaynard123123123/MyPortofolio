"use client";

import { useEffect, useRef, useState } from "react";

import {
  Viewer,
  Cartesian3,
  Color,
  createWorldTerrainAsync,
  Ion,
  Math as CesiumMath,
  VerticalOrigin,
  HeightReference,
} from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";


// ==================================================
// LOCATIONS
// ==================================================

const locations = {
  yangon: {
    name: "Yangon",
    longitude: 96.1735,
    latitude: 16.8409,
    height: 15000,
  },

  singapore: {
    name: "Singapore",
    longitude: 103.8198,
    latitude: 1.3521,
    height: 15000,
  },

  tokyo: {
    name: "Tokyo",
    longitude: 139.6917,
    latitude: 35.6895,
    height: 15000,
  },

  london: {
    name: "London",
    longitude: -0.1276,
    latitude: 51.5072,
    height: 15000,
  },
};


// ==================================================
// COMPONENT
// ==================================================

export default function CesiumDemo() {

  const cesiumContainer = useRef(null);
  const viewerRef = useRef(null);

  const [viewerReady, setViewerReady] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState("Yangon");


  // ==================================================
  // INITIALIZE CESIUM
  // ==================================================

  useEffect(() => {

    if (!cesiumContainer.current) {
      return;
    }

    if (viewerRef.current) {
      return;
    }


    const initializeCesium = async () => {

      try {

        // ------------------------------------------------
        // OPTIONAL CESIUM ION TOKEN
        // ------------------------------------------------

        const token =
          process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;

        if (token) {
          Ion.defaultAccessToken = token;
        }


        // ------------------------------------------------
        // CREATE TERRAIN
        // ------------------------------------------------

        let terrainProvider = undefined;

        if (token) {

          terrainProvider =
            await createWorldTerrainAsync();

        }


        // ------------------------------------------------
        // CREATE VIEWER
        // ------------------------------------------------

        const viewer = new Viewer(
          cesiumContainer.current,
          {

            terrainProvider,

            animation: false,

            timeline: false,

            baseLayerPicker: true,

            geocoder: true,

            homeButton: true,

            sceneModePicker: true,

            navigationHelpButton: true,

            fullscreenButton: true,

            infoBox: true,

            selectionIndicator: true,

          }
        );


        viewerRef.current = viewer;


        // ------------------------------------------------
        // REMOVE DEFAULT CREDIT AREA
        // ------------------------------------------------

        viewer.cesiumWidget.creditContainer.style.display =
          "none";


        // ------------------------------------------------
        // INITIAL CAMERA
        // ------------------------------------------------

        viewer.camera.flyTo({

          destination: Cartesian3.fromDegrees(
            locations.yangon.longitude,
            locations.yangon.latitude,
            2500000
          ),

          orientation: {

            heading: CesiumMath.toRadians(0),

            pitch: CesiumMath.toRadians(-70),

            roll: 0,

          },

          duration: 2,

        });


        // ------------------------------------------------
        // ADD CITY MARKERS
        // ------------------------------------------------

        Object.values(locations).forEach(
          (location) => {

            viewer.entities.add({

              name: location.name,

              position:
                Cartesian3.fromDegrees(
                  location.longitude,
                  location.latitude,
                  location.height
                ),

              point: {

                pixelSize: 12,

                color: Color.CYAN,

                outlineColor: Color.WHITE,

                outlineWidth: 3,

                heightReference:
                  HeightReference.NONE,

              },

              label: {

                text: location.name,

                font: "16px sans-serif",

                fillColor: Color.WHITE,

                outlineColor: Color.BLACK,

                outlineWidth: 4,

                style: 0,

                verticalOrigin:
                  VerticalOrigin.BOTTOM,

                pixelOffset:
                  new Cartesian3(0, -15, 0),

                showBackground: true,

                backgroundColor:
                  Color.fromAlpha(
                    Color.BLACK,
                    0.65
                  ),

                backgroundPadding:
                  new Cartesian3(8, 5, 0),

              },

              description: `
                <div style="
                  padding: 10px;
                  font-family: Arial, sans-serif;
                ">
                  <h2 style="
                    margin: 0 0 8px 0;
                  ">
                    ${location.name}
                  </h2>

                  <p style="
                    margin: 4px 0;
                  ">
                    Longitude:
                    ${location.longitude}
                  </p>

                  <p style="
                    margin: 4px 0;
                  ">
                    Latitude:
                    ${location.latitude}
                  </p>

                  <p style="
                    margin: 8px 0 0 0;
                  ">
                    Cesium 3D GIS demonstration
                  </p>
                </div>
              `,

            });

          }
        );


        // ------------------------------------------------
        // READY
        // ------------------------------------------------

        setViewerReady(true);


      } catch (error) {

        console.error(
          "Cesium initialization error:",
          error
        );

      }

    };


    initializeCesium();


    // ==================================================
    // CLEANUP
    // ==================================================

    return () => {

      if (viewerRef.current) {

        viewerRef.current.destroy();

        viewerRef.current = null;

      }

    };

  }, []);


  // ==================================================
  // FLY TO LOCATION
  // ==================================================

  const flyToLocation = (location) => {

    if (!viewerRef.current) {
      return;
    }


    viewerRef.current.camera.flyTo({

      destination:
        Cartesian3.fromDegrees(
          location.longitude,
          location.latitude,
          location.height * 10
        ),

      orientation: {

        heading:
          CesiumMath.toRadians(0),

        pitch:
          CesiumMath.toRadians(-55),

        roll: 0,

      },

      duration: 2,

    });


    setSelectedLocation(
      location.name
    );

  };


  // ==================================================
  // VIEW EARTH
  // ==================================================

  const viewEarth = () => {

    if (!viewerRef.current) {
      return;
    }


    viewerRef.current.camera.flyTo({

      destination:
        Cartesian3.fromDegrees(
          80,
          20,
          18000000
        ),

      orientation: {

        heading:
          CesiumMath.toRadians(0),

        pitch:
          CesiumMath.toRadians(-90),

        roll: 0,

      },

      duration: 2,

    });


    setSelectedLocation(
      "Earth"
    );

  };


  // ==================================================
  // RETURN
  // ==================================================

  return (

    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">


      {/* ============================================
          HEADER
      ============================================= */}

      <div className="border-b border-white/10 bg-slate-900/90 p-6 md:p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">

                🌍

              </div>


              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">

                  Featured 3D GIS Project

                </p>


                <h3 className="mt-1 text-2xl font-bold md:text-3xl">

                  Interactive Cesium Globe

                </h3>

              </div>

            </div>


            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">

              A 3D geospatial visualization built with Cesium.
              Explore the Earth, navigate between cities,
              rotate the globe, zoom through the atmosphere,
              and inspect geographic locations.

            </p>

          </div>


          {/* STATUS */}

          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">

              3D Interactive

            </span>

          </div>

        </div>

      </div>


      {/* ============================================
          CESIUM VIEWER
      ============================================= */}

      <div className="relative">


        <div
          ref={cesiumContainer}
          className="h-[500px] w-full md:h-[650px]"
        />


        {/* LOADING */}

        {!viewerReady && (

          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

              <p className="mt-4 text-sm text-slate-400">

                Loading 3D globe...

              </p>

            </div>

          </div>

        )}


        {/* LOCATION */}

        <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md">

          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">

            Selected Location

          </p>


          <p className="mt-1 text-sm font-semibold text-white">

            {selectedLocation}

          </p>

        </div>

      </div>


      {/* ============================================
          CONTROLS
      ============================================= */}

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
                  flyToLocation(
                    locations.yangon
                  )
                }
                className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >

                Yangon

              </button>


              <button
                onClick={() =>
                  flyToLocation(
                    locations.singapore
                  )
                }
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >

                Singapore

              </button>


              <button
                onClick={() =>
                  flyToLocation(
                    locations.tokyo
                  )
                }
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >

                Tokyo

              </button>


              <button
                onClick={() =>
                  flyToLocation(
                    locations.london
                  )
                }
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >

                London

              </button>


              <button
                onClick={viewEarth}
                className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >

                View Earth

              </button>

            </div>

          </div>


          {/* FEATURES */}

          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">

              3D GIS Features

            </p>


            <div className="flex flex-wrap gap-2">

              {[
                "Cesium",
                "3D Globe",
                "Camera Controls",
                "3D Markers",
                "Terrain",
                "Geospatial Data",
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


      {/* ============================================
          TECHNOLOGIES
      ============================================= */}

      <div className="border-t border-white/10 px-6 py-5">

        <div className="flex flex-wrap items-center gap-2">

          <span className="mr-2 text-xs uppercase tracking-wider text-slate-500">

            Built with

          </span>


          {[
            "React",
            "Next.js",
            "Cesium",
            "JavaScript",
            "3D GIS",
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