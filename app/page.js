"use client";

import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Interactive Mapbox Application",
      category: "Web Mapping",
      description:
        "A modern interactive web map built with Mapbox, featuring custom layers, markers, navigation, and geospatial visualization.",
      technology: ["React", "Next.js", "Mapbox"],
    },
    {
      title: "3D Cesium Globe",
      category: "3D GIS",
      description:
        "A 3D geospatial visualization using Cesium for displaying terrain, geographic data, camera controls, and interactive mapping.",
      technology: ["Cesium", "React", "3D GIS"],
    },
    {
      title: "OpenLayers Mapping Application",
      category: "GIS",
      description:
        "An interactive GIS application using OpenLayers for map layers, vector features, controls, and geographic data visualization.",
      technology: ["OpenLayers", "JavaScript", "GIS"],
    },
    {
      title: "Geospatial Web Application",
      category: "GIS Development",
      description:
        "A responsive GIS web application combining modern frontend technologies with geospatial data and interactive map functionality.",
      technology: ["React", "GIS", "JavaScript"],
    },
    {
      title: "GIS Data Visualization",
      category: "Geospatial",
      description:
        "A web-based visualization project designed to present geographic information in a clear and interactive way.",
      technology: ["GIS", "Maps", "Geospatial Data"],
    },
    {
      title: "Modern React Application",
      category: "Frontend Development",
      description:
        "A modern responsive web application built with React and Next.js using reusable components and a clean user interface.",
      technology: ["React", "Next.js", "JavaScript"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            className="text-xl font-bold tracking-wide"
          >
            Zachary<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >

        {/* Background decoration */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              GIS & Web Developer
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zachary
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I build modern web applications using React, Next.js, Mapbox,
              Cesium, OpenLayers and other geospatial technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>

            </div>

            {/* Quick technologies */}
            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "React",
                "Next.js",
                "Mapbox",
                "Cesium",
                "OpenLayers",
                "GIS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>


          {/* RIGHT - PROFILE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/20 blur-3xl" />

              {/* Image border */}
              <div className="relative rounded-full border border-cyan-400/30 bg-slate-900 p-3 shadow-2xl shadow-cyan-500/10">

                <Image
                  src="/profile.jpg"
                  alt="Zachary Maynard"
                  width={400}
                  height={400}
                  priority
                  className="h-72 w-72 rounded-full object-cover md:h-96 md:w-96"
                />

              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-xs text-slate-400">
                  Specialization
                </p>

                <p className="mt-1 font-semibold text-cyan-400">
                  Geospatial Development
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 bg-slate-900/40 px-6 py-24"
      >

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Building the future with maps
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            I am a developer interested in GIS, web mapping, geospatial
            visualization, and modern web technologies. I enjoy turning
            geographic data into interactive applications that are useful,
            responsive, and easy to understand.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            My work combines frontend development with geospatial technologies
            such as Mapbox, Cesium, and OpenLayers.
          </p>

        </div>
      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              My Work
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              A selection of projects focused on GIS, web mapping,
              geospatial visualization, and modern frontend development.
            </p>

          </div>


          {/* PROJECT GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (

              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >

                {/* Project number */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-cyan-400">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {project.category}
                  </span>

                </div>


                {/* Icon */}
                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
                  {index === 0 && "🗺️"}
                  {index === 1 && "🌍"}
                  {index === 2 && "📍"}
                  {index === 3 && "🌐"}
                  {index === 4 && "🛰️"}
                  {index === 5 && "⚛️"}
                </div>


                <h3 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">

                  {project.technology.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/5 bg-slate-900/40 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              My Technical Skills
            </h2>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "React",
                description: "Modern component-based frontend development",
              },
              {
                name: "Next.js",
                description: "Full-stack React applications and websites",
              },
              {
                name: "Mapbox",
                description: "Interactive maps and geospatial visualization",
              },
              {
                name: "Cesium",
                description: "3D globe and advanced geospatial visualization",
              },
              {
                name: "OpenLayers",
                description: "Powerful open-source web mapping",
              },
              {
                name: "GIS",
                description: "Geospatial data, mapping, and analysis",
              },
            ].map((skill) => (

              <div
                key={skill.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
              >

                <h3 className="text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {skill.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10 text-center md:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's build something amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Interested in GIS, web mapping, geospatial visualization,
            or modern web development? Let's connect and create something
            useful together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Zachary Maynard. All rights reserved.
          </p>

          <p>
            GIS • Web Mapping • Geospatial Development
          </p>

        </div>

      </footer>

    </main>
  );
}