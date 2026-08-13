"use client";

import Link from "next/link";
import Image from "next/image";

export default function OpenLayersProject() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVIGATION */}

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


      {/* HERO */}

      <section className="px-6 pb-16 pt-36">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* TEXT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Project 01 • Web GIS
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
                Interactive
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  OpenLayers GIS
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                An interactive web mapping application built with
                OpenLayers, React and Next.js. The application
                demonstrates modern web GIS functionality,
                geographic visualization and interactive map controls.
              </p>

              {/* TECHNOLOGIES */}

              <div className="mt-8 flex flex-wrap gap-2">

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
                  View Demo
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


            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <Image
                src="/projects/openlayers.jpg"
                alt="OpenLayers GIS project"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT INFORMATION */}

      <section className="border-y border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-3">

            {/* CARD */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                🗺️
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Interactive Map
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Users can interact with the map,
                navigate around the geographic area,
                zoom and inspect map features.
              </p>

            </div>


            {/* CARD */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                📍
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Geographic Features
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Geographic locations can be represented
                using markers, vector features and
                interactive map elements.
              </p>

            </div>


            {/* CARD */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                ⚡
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Modern Web GIS
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Combines modern frontend development
                with geographic information systems
                and interactive mapping.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DEMO */}

      <section
        id="demo"
        className="px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Live Application
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Interactive Map
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore the interactive OpenLayers map below.
          </p>


          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

            <iframe
              src="/"
              title="OpenLayers GIS Demo"
              className="h-[650px] w-full border-0"
            />

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="border-t border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Features
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                What this project demonstrates
              </h2>

            </div>


            <div className="space-y-5">

              {[
                "Interactive web mapping",
                "OpenStreetMap integration",
                "Map navigation",
                "Geographic markers",
                "Vector features",
                "Responsive interface",
                "React component architecture",
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


      {/* CTA */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-10 text-center md:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Next Project
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Explore my 3D GIS project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Take a look at the Cesium 3D globe
            and explore the next geospatial project.
          </p>

          <Link
            href="/projects/cesium"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Cesium Project →
          </Link>

        </div>

      </section>


      {/* FOOTER */}

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