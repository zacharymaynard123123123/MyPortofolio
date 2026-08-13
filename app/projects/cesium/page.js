"use client";

import Link from "next/link";
import Image from "next/image";

export default function CesiumProject() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            Zachary
            <span className="text-cyan-400">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            ← Back to Portfolio
          </Link>

        </div>

      </nav>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="px-6 pb-16 pt-36">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* TEXT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Project 02 • 3D GIS
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">

                Interactive

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Cesium Globe
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">

                A modern 3D geospatial visualization
                application built with Cesium and React.
                The project demonstrates interactive
                globe visualization, camera controls,
                geographic entities and 3D GIS concepts.

              </p>


              {/* TECHNOLOGIES */}

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "Cesium",
                  "React",
                  "Next.js",
                  "JavaScript",
                  "3D GIS",
                  "Geospatial",
                ].map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                  >
                    {technology}
                  </span>

                ))}

              </div>


              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#demo"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View 3D Demo
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View GitHub
                </a>

              </div>

            </div>


            {/* PROJECT IMAGE */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <Image
                src="/projects/cesium.jpg"
                alt="Cesium 3D GIS project"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJECT OVERVIEW
      ================================================== */}

      <section className="border-y border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-3">


            {/* CARD 1 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                🌍
              </div>

              <h2 className="mt-5 text-xl font-bold">
                3D Globe
              </h2>

              <p className="mt-3 leading-7 text-slate-400">

                Visualize geographic information
                on an interactive 3D globe with
                smooth camera navigation.

              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                📍
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Geographic Entities
              </h2>

              <p className="mt-3 leading-7 text-slate-400">

                Add geographic locations,
                markers and other spatial
                entities to the 3D environment.

              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                🚀
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Web 3D Visualization
              </h2>

              <p className="mt-3 leading-7 text-slate-400">

                Combine modern frontend development
                with advanced 3D geospatial visualization.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          LIVE DEMO
      ================================================== */}

      <section
        id="demo"
        className="px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Live Application
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Cesium 3D Globe
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">

            Explore the interactive 3D globe
            and geographic visualization.

          </p>


          {/* DEMO */}

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

            <iframe
              src="/"
              title="Cesium 3D GIS Demo"
              className="h-[650px] w-full border-0"
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURES
      ================================================== */}

      <section className="border-t border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2">


            {/* LEFT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Features
              </p>

              <h2 className="mt-4 text-4xl font-bold">

                3D GIS capabilities

              </h2>

              <p className="mt-5 leading-8 text-slate-400">

                This project demonstrates how modern
                web technologies can be combined with
                3D geographic visualization.

              </p>

            </div>


            {/* RIGHT */}

            <div className="space-y-5">

              {[
                "Interactive 3D Earth",
                "Camera navigation",
                "Zoom and rotation",
                "Geographic markers",
                "Spatial visualization",
                "3D GIS concepts",
                "React integration",
                "Modern Next.js application",
              ].map((feature, index) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-400">

                    {index + 1}

                  </span>

                  <span className="text-slate-300">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          DEVELOPMENT STACK
      ================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technology Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built with modern technologies
          </h2>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "Cesium",
                description:
                  "3D globe and geospatial visualization engine.",
              },
              {
                name: "React",
                description:
                  "Component-based frontend application architecture.",
              },
              {
                name: "Next.js",
                description:
                  "Modern React framework for production applications.",
              },
              {
                name: "JavaScript",
                description:
                  "Application logic and interactive functionality.",
              },
              {
                name: "3D GIS",
                description:
                  "Three-dimensional geographic visualization.",
              },
              {
                name: "Geospatial",
                description:
                  "Geographic data and spatial information.",
              },
            ].map((technology) => (

              <div
                key={technology.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
              >

                <h3 className="text-xl font-bold">
                  {technology.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {technology.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-10 text-center md:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Explore More
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">

            Want to see the OpenLayers project?

          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">

            Explore another project focused on
            interactive 2D web mapping and GIS.

          </p>

          <Link
            href="/projects/openlayers"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View OpenLayers Project →
          </Link>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Zachary Maynard
          </p>

          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Back Home
          </Link>

        </div>

      </footer>

    </main>
  );
}