"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import MapDemo from "@/components/MapDemo";
import CesiumDemo from "@/components/CesiumDemo";


// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    number: "01",
    image: "/projects/openlayers.jpg",
    title: "Interactive OpenLayers GIS",
    category: "WEB MAPPING",
    description:
      "Interactive GIS mapping application using OpenLayers and OpenStreetMap with markers, popups, navigation and geographic visualization.",
    technologies: [
      "React",
      "Next.js",
      "OpenLayers",
      "OpenStreetMap",
    ],
    link: "/projects/openlayers",
  },

  {
    number: "02",
    image: "/projects/cesium.jpg",
    title: "Interactive Cesium Globe",
    category: "3D GIS",
    description:
      "Interactive 3D Earth visualization using Cesium with camera controls, geographic entities, navigation and 3D GIS features.",
    technologies: [
      "Cesium",
      "React",
      "3D GIS",
      "JavaScript",
    ],
    link: "/projects/cesium",
  },

  {
    number: "03",
    image: "/projects/gis.jpg",
    title: "Geospatial Mapping",
    category: "GIS",
    description:
      "Geospatial visualization application designed to display geographic features and spatial information through interactive maps.",
    technologies: [
      "GIS",
      "Web Mapping",
      "JavaScript",
    ],
    link: "/projects/gis",
  },

  {
    number: "04",
    image: "/projects/geospatial.jpg",
    title: "Geospatial Web Application",
    category: "GIS DEVELOPMENT",
    description:
      "Modern web application combining frontend development with geospatial data, interactive maps and spatial visualization.",
    technologies: [
      "React",
      "Next.js",
      "GIS",
    ],
    link: "/projects/gis",
  },

  {
    number: "05",
    image: "/projects/visualization.jpg",
    title: "GIS Data Visualization",
    category: "GEOSPATIAL",
    description:
      "Interactive geographic data visualization concept for presenting spatial information through a modern web interface.",
    technologies: [
      "GIS",
      "Maps",
      "Data Visualization",
    ],
    link: "/projects/gis",
  },

  {
    number: "06",
    image: "/projects/react.jpg",
    title: "Modern React Application",
    category: "FRONTEND",
    description:
      "Responsive web application built with React and Next.js using reusable components and modern interface design.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
    ],
    link: "/projects/gis",
  },
];


// ======================================================
// SKILLS
// ======================================================

const skills = [
  {
    name: "React",
    level: "Advanced",
    percentage: 85,
    description:
      "Building reusable component-based interfaces and interactive applications.",
  },

  {
    name: "Next.js",
    level: "Advanced",
    percentage: 80,
    description:
      "Developing modern React applications with routing, optimization and production deployment.",
  },

  {
    name: "OpenLayers",
    level: "Advanced",
    percentage: 85,
    description:
      "Interactive web mapping, layers, vector features, markers, popups and GIS applications.",
  },

  {
    name: "Cesium",
    level: "Intermediate",
    percentage: 70,
    description:
      "3D globe visualization, camera controls, geographic entities and 3D GIS applications.",
  },

  {
    name: "GIS",
    level: "Advanced",
    percentage: 90,
    description:
      "Geospatial data, cartography, spatial visualization, coordinate systems and web GIS.",
  },

  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 85,
    description:
      "Interactive web applications, APIs, GIS functionality and modern frontend development.",
  },
];


// ======================================================
// TECHNOLOGIES
// ======================================================

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "OpenLayers",
  "Cesium",
  "GIS",
  "OpenStreetMap",
  "GeoJSON",
  "Web Mapping",
  "3D GIS",
];


// ======================================================
// HOME PAGE
// ======================================================

export default function Home() {

  const [mobileMenu, setMobileMenu] = useState(false);


  const closeMenu = () => {
    setMobileMenu(false);
  };


  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">


      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


          {/* LOGO */}

          <Link
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide"
          >

            Zachary
            <span className="text-cyan-400">
              .
            </span>

          </Link>


          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="#home"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>


          {/* CONTACT BUTTON */}

          <Link
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 md:block"
          >

            Let's Talk

          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl md:hidden"
            aria-label="Toggle navigation menu"
          >

            {mobileMenu ? "×" : "☰"}

          </button>

        </div>


        {/* MOBILE NAVIGATION */}

        {mobileMenu && (

          <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">

            <div className="flex flex-col gap-2">

              <Link
                href="#home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="#projects"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Projects
              </Link>

              <Link
                href="#skills"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Skills
              </Link>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Contact
              </Link>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950"
              >
                Let's Talk
              </Link>

            </div>

          </div>

        )}

      </nav>


      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >

        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />


        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

        </div>


        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">


          {/* HERO CONTENT */}

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-xs font-medium text-emerald-300">
                Available for freelance projects
              </span>

            </div>


            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              GIS & Web Developer
            </p>


            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">

              I build{" "}

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                geospatial
              </span>

              <br />

              web experiences.

            </h1>


            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">

              I build modern web applications using
              React, Next.js, OpenLayers, Cesium,
              GIS technologies, and modern geospatial tools.

            </p>


            {/* HERO BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="#projects"
                className="group rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >

                View My Work

                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>

              </Link>


              <Link
                href="#contact"
                className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >

                Contact Me

              </Link>

            </div>


            {/* TECHNOLOGY TAGS */}

            <div className="mt-10 flex flex-wrap gap-2">

              {technologies.slice(0, 6).map(
                (technology) => (

                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                  >

                    {technology}

                  </span>

                )
              )}

            </div>


            {/* STATS */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">

              <div>

                <p className="text-3xl font-bold">
                  6+
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Projects
                </p>

              </div>


              <div>

                <p className="text-3xl font-bold">
                  2
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Map Engines
                </p>

              </div>


              <div>

                <p className="text-3xl font-bold">
                  3D
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  GIS
                </p>

              </div>

            </div>

          </div>


          {/* PROFILE IMAGE */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative rounded-full border border-cyan-400/20 p-3">

                <div className="rounded-full border border-white/10 bg-slate-900 p-3">

                  <Image
                    src="/profile.jpg"
                    alt="Zachary Maynard"
                    width={500}
                    height={500}
                    priority
                    className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80 md:h-96 md:w-96"
                  />

                </div>

              </div>


              {/* BADGE */}

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-xs text-slate-500">
                  Specialization
                </p>

                <p className="mt-1 font-semibold text-cyan-400">
                  Geospatial Development
                </p>

              </div>


              {/* BADGE */}

              <div className="absolute -right-4 top-10 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-xl">

                <p className="text-xs text-slate-500">
                  Focus
                </p>

                <p className="font-semibold">
                  GIS + Web
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ABOUT
      ================================================== */}

      <section
        id="about"
        className="border-t border-white/5 bg-slate-900/40 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">


            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">

                Turning geographic data into experiences.

              </h2>

            </div>


            <div>

              <p className="text-lg leading-8 text-slate-300">

                I am a developer interested in GIS,
                web mapping, geospatial visualization,
                and modern web technologies.

              </p>


              <p className="mt-6 text-lg leading-8 text-slate-400">

                My goal is to combine geographic information
                with modern frontend technologies to create
                applications that are interactive, responsive,
                visually attractive, and useful.

              </p>


              <p className="mt-6 text-lg leading-8 text-slate-400">

                I work with technologies such as React,
                Next.js, OpenLayers, Cesium, JavaScript,
                and other geospatial tools.

              </p>


              <div className="mt-8 flex flex-wrap gap-2">

                {technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >

                      {technology}

                    </span>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section
        id="projects"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">


          {/* HEADER */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                My Work
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Featured Projects
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">

                Selected work focused on GIS,
                interactive mapping, geospatial
                visualization and frontend development.

              </p>

            </div>


            <span className="text-sm text-slate-500">
              06 Projects
            </span>

          </div>


          {/* ==================================================
              PROJECT CARDS
          ================================================== */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >


                {/* IMAGE */}

                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />


                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />


                  {/* NUMBER */}

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-cyan-400 backdrop-blur-md">

                    {project.number}

                  </div>


                  {/* CATEGORY */}

                  <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-slate-300 backdrop-blur-md">

                    {project.category}

                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>


                  <p className="mt-4 leading-7 text-slate-400">

                    {project.description}

                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                        >

                          {technology}

                        </span>

                      )
                    )}

                  </div>


                  {/* REAL PROJECT LINK */}

                  <Link
                    href={project.link}
                    className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >

                    View Project

                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>

                  </Link>

                </div>


                {/* BOTTOM LINE */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              </article>

            ))}

          </div>


          {/* ==================================================
              OPENLAYERS LIVE DEMO
          ================================================== */}

          <div className="mt-24">

            <div className="mb-6">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Live Demo • Project 01
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                OpenLayers Web GIS
              </h3>

              <p className="mt-3 text-slate-400">
                Interactive 2D web mapping demonstration.
              </p>

            </div>


            <MapDemo />


            <div className="mt-5">

              <Link
                href="/projects/openlayers"
                className="inline-flex rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >

                Open Full OpenLayers Project →

              </Link>

            </div>

          </div>


          {/* ==================================================
              CESIUM LIVE DEMO
          ================================================== */}

          <div className="mt-24">

            <div className="mb-6">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Live Demo • Project 02
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Cesium 3D GIS
              </h3>

              <p className="mt-3 text-slate-400">
                Interactive 3D globe visualization.
              </p>

            </div>


            <CesiumDemo />


            <div className="mt-5">

              <Link
                href="/projects/cesium"
                className="inline-flex rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >

                Open Full Cesium Project →

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SKILLS
      ================================================== */}

      <section
        id="skills"
        className="border-y border-white/5 bg-slate-900/40 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">


          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Technical Skills
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">

              Technologies I use to build modern
              web and geospatial applications.

            </p>

          </div>


          {/* SKILL CARDS */}

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {skills.map((skill) => (

              <div
                key={skill.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-bold">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {skill.level}
                    </p>

                  </div>


                  <span className="text-sm font-bold text-cyan-400">
                    {skill.percentage}%
                  </span>

                </div>


                <p className="mt-4 text-sm leading-6 text-slate-400">

                  {skill.description}

                </p>


                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          CONTACT
      ================================================== */}

      <section
        id="contact"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-10 text-center md:p-16">


          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">

            Let's build something amazing.

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Interested in GIS, web mapping,
            geospatial visualization or modern
            web development?

            Let's connect.

          </p>


          {/* CONTACT BUTTONS */}

          <div className="mt-9 flex flex-wrap justify-center gap-4">


            {/* CHANGE THIS EMAIL */}

            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >

              Email Me

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >

              GitHub

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >

              LinkedIn

            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">


          <p>

            © {new Date().getFullYear()} Zachary Maynard.
            All rights reserved.

          </p>


          <div className="flex gap-5">

            <Link
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>


          <p>
            GIS • Web Mapping • Geospatial Development
          </p>

        </div>

      </footer>

    </main>
  );
}