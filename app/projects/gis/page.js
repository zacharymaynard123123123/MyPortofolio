"use client";

import Link from "next/link";
import Image from "next/image";

export default function GISProject() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}

          <Link
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            Zachary
            <span className="text-cyan-400">
              .
            </span>
          </Link>


          {/* BACK BUTTON */}

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


            {/* HERO TEXT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Project 03 • GIS
              </p>


              <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">

                Modern

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Geospatial GIS
                </span>

              </h1>


              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">

                A modern geospatial web application concept
                designed to visualize geographic information,
                spatial features and GIS data through an
                interactive web interface.

              </p>


              {/* TECHNOLOGIES */}

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "GIS",
                  "React",
                  "Next.js",
                  "JavaScript",
                  "GeoJSON",
                  "Web Mapping",
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
                  href="#overview"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Project
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


            {/* HERO IMAGE */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <Image
                src="/projects/gis.jpg"
                alt="GIS project"
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
          OVERVIEW
      ================================================== */}

      <section
        id="overview"
        className="border-y border-white/5 bg-slate-900/40 px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">


          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project Overview
            </p>


            <h2 className="mt-4 text-4xl font-bold">
              Geographic information on the web
            </h2>


            <p className="mt-6 text-lg leading-8 text-slate-400">

              Geographic Information Systems allow
              spatial information to be collected,
              managed, analyzed and visualized.

              This project focuses on bringing those
              concepts into a modern web application.

            </p>

          </div>


          {/* INFORMATION CARDS */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">


            {/* CARD 1 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                🗺️
              </div>


              <h3 className="mt-5 text-xl font-bold">
                Spatial Data
              </h3>


              <p className="mt-3 leading-7 text-slate-400">

                Geographic data can be represented
                using points, lines, polygons and
                other spatial features.

              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                📊
              </div>


              <h3 className="mt-5 text-xl font-bold">
                Data Visualization
              </h3>


              <p className="mt-3 leading-7 text-slate-400">

                Spatial information can be transformed
                into interactive visualizations that
                help users understand geographic data.

              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="text-3xl">
                🌐
              </div>


              <h3 className="mt-5 text-xl font-bold">
                Web GIS
              </h3>


              <p className="mt-3 leading-7 text-slate-400">

                Modern web technologies make it possible
                to deliver GIS applications directly
                through a browser.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GIS WORKFLOW
      ================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">


          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            GIS Workflow
          </p>


          <h2 className="mt-4 text-4xl font-bold">
            From geographic data to web visualization
          </h2>


          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">

            A typical web GIS application can connect
            geographic data with frontend visualization
            and interactive user interfaces.

          </p>


          {/* WORKFLOW */}

          <div className="mt-12 grid gap-5 md:grid-cols-4">


            {/* STEP 1 */}

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <span className="text-sm font-bold text-cyan-400">
                01
              </span>


              <h3 className="mt-5 text-xl font-bold">
                Data
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-400">

                Collect and prepare geographic
                information.

              </p>

            </div>


            {/* STEP 2 */}

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <span className="text-sm font-bold text-cyan-400">
                02
              </span>


              <h3 className="mt-5 text-xl font-bold">
                Processing
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-400">

                Transform and organize spatial
                information.

              </p>

            </div>


            {/* STEP 3 */}

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <span className="text-sm font-bold text-cyan-400">
                03
              </span>


              <h3 className="mt-5 text-xl font-bold">
                Visualization
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-400">

                Display geographic information
                on an interactive map.

              </p>

            </div>


            {/* STEP 4 */}

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <span className="text-sm font-bold text-cyan-400">
                04
              </span>


              <h3 className="mt-5 text-xl font-bold">
                Interaction
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-400">

                Allow users to explore and interact
                with spatial information.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GIS CAPABILITIES
      ================================================== */}

      <section className="border-y border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-12 lg:grid-cols-2">


            {/* LEFT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Capabilities
              </p>


              <h2 className="mt-4 text-4xl font-bold">

                What this project demonstrates

              </h2>


              <p className="mt-5 leading-8 text-slate-400">

                The application demonstrates the
                relationship between GIS concepts,
                geographic data and modern frontend
                development.

              </p>

            </div>


            {/* RIGHT */}

            <div className="space-y-4">


              {[
                "Geographic data visualization",
                "Interactive web maps",
                "GeoJSON concepts",
                "Spatial feature representation",
                "Map navigation",
                "Geographic markers",
                "Responsive web interface",
                "Modern React architecture",
              ].map((feature, index) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-400">

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
          TECHNOLOGY STACK
      ================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">


          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technology Stack
          </p>


          <h2 className="mt-4 text-4xl font-bold">
            Built for modern Web GIS
          </h2>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {/* REACT */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                ⚛️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                React
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Component-based architecture for
                interactive web applications.

              </p>

            </div>


            {/* NEXT */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                ▲
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Next.js
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Modern framework for building
                production React applications.

              </p>

            </div>


            {/* GIS */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-bold">
                GIS
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Geographic information and spatial
                data visualization.

              </p>

            </div>


            {/* GEOJSON */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                {"{}"}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                GeoJSON
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                A common format for representing
                geographic features on the web.

              </p>

            </div>


            {/* JAVASCRIPT */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                JS
              </div>

              <h3 className="mt-5 text-xl font-bold">
                JavaScript
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Application logic and interactive
                geospatial functionality.

              </p>

            </div>


            {/* WEB GIS */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="text-3xl">
                🛰️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Web GIS
              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Geographic information delivered
                through modern web applications.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJECT DETAILS
      ================================================== */}

      <section className="border-t border-white/5 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-8 md:grid-cols-2">


            {/* CHALLENGE */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Challenge
              </p>


              <h3 className="mt-4 text-2xl font-bold">
                Making spatial information accessible
              </h3>


              <p className="mt-5 leading-8 text-slate-400">

                One of the important challenges in Web GIS
                is presenting geographic information in a
                way that is easy to understand and interact
                with.

              </p>

            </div>


            {/* SOLUTION */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Approach
              </p>


              <h3 className="mt-4 text-2xl font-bold">
                Combining GIS and modern frontend development
              </h3>


              <p className="mt-5 leading-8 text-slate-400">

                The application combines spatial concepts
                with modern React-based interfaces to create
                a responsive and interactive geospatial
                experience.

              </p>

            </div>

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

            Explore my interactive mapping projects.

          </h2>


          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">

            See how I use OpenLayers and Cesium
            to create interactive geographic
            applications.

          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">


            <Link
              href="/projects/openlayers"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              OpenLayers →
            </Link>


            <Link
              href="/projects/cesium"
              className="rounded-full border border-cyan-400/30 px-7 py-3.5 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Cesium →
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">


          <p className="text-sm text-slate-500">

            © {new Date().getFullYear()} Zachary Maynard

          </p>


          <div className="flex gap-5">

            <Link
              href="/"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Home
            </Link>


            <Link
              href="/projects/openlayers"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              OpenLayers
            </Link>


            <Link
              href="/projects/cesium"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Cesium
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}