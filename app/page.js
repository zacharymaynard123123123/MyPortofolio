import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =========================
          Navigation
      ========================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h2 className="text-lg font-bold tracking-tight">
            Zachary Maynard
            <span className="text-blue-400">.</span>
          </h2>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* =========================
          Hero
      ========================== */}
      <section className="min-h-screen flex items-center px-6 pt-24">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-5">
                GIS & Web Developer
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Building interactive
                <span className="block text-blue-400">
                  geospatial experiences.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                I build modern web applications using React,
                Next.js, Mapbox, Cesium, OpenLayers and other
                geospatial technologies.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-white/5 transition font-medium"
                >
                  Contact Me
                </a>

              </div>

            </div>


            {/* Right - Profile */}
            <div className="flex justify-center md:justify-end">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                <Image
                  src="/images/profile.jpg"
                  alt="Zachary Maynard - GIS & Web Developer"
                  width={420}
                  height={420}
                  priority
                  className="relative rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          About
      ========================== */}
      <section
        id="about"
        className="py-24 px-6 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            GIS meets modern web development.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-10">

            <p className="text-gray-400 text-lg leading-relaxed">
              I am interested in building interactive mapping
              applications and geospatial web experiences.
              My interests include web mapping, 3D visualization,
              spatial data and modern frontend development.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold">
                  2D Mapping
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Interactive web maps and spatial applications.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold">
                  3D Visualization
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Immersive geospatial experiences with Cesium.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold">
                  Spatial Data
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Working with spatial databases and GIS data.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold">
                  Web Development
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Modern frontend applications with React and Next.js.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          Projects
      ========================== */}
      <section
        id="projects"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Projects
          </h2>


          <div className="grid md:grid-cols-3 gap-8 mt-12">


            {/* Project 1 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

              <Image
                src="/images/map-project.jpg"
                alt="Interactive Map Application"
                width={800}
                height={500}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <p className="text-sm text-blue-400">
                  01
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Interactive Map Application
                </h3>

                <p className="mt-4 text-gray-400">
                  A web mapping application built with React
                  and Mapbox.
                </p>

                <p className="mt-5 text-sm text-gray-500">
                  React • Mapbox • GeoJSON
                </p>

              </div>

            </article>


            {/* Project 2 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

              <Image
                src="/images/cesium-project.jpg"
                alt="3D Cesium geospatial viewer"
                width={800}
                height={500}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <p className="text-sm text-blue-400">
                  02
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  3D Geospatial Viewer
                </h3>

                <p className="mt-4 text-gray-400">
                  A 3D visualization application using Cesium.
                </p>

                <p className="mt-5 text-sm text-gray-500">
                  Cesium • JavaScript • 3D GIS
                </p>

              </div>

            </article>


            {/* Project 3 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

              <Image
                src="/images/dashboard-project.jpg"
                alt="GIS dashboard"
                width={800}
                height={500}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <p className="text-sm text-blue-400">
                  03
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  GIS Dashboard
                </h3>

                <p className="mt-4 text-gray-400">
                  An interactive GIS dashboard for exploring
                  spatial information.
                </p>

                <p className="mt-5 text-sm text-gray-500">
                  React • OpenLayers • PostGIS
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          Skills
      ========================== */}
      <section
        id="skills"
        className="py-24 px-6 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Technology
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Skills
          </h2>


          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Mapbox",
              "Cesium",
              "OpenLayers",
              "PostGIS",
              "GeoServer",
              "Git",
              "GitHub",
            ].map((skill) => (

              <span
                key={skill}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          Contact
      ========================== */}
      <section
        id="contact"
        className="py-32 px-6"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold">
            Build something
            <span className="block text-blue-400">
              interesting.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Interested in geospatial applications,
            web development and interesting mapping projects?
            Connect.
          </p>

          <a
            href="mailto:your@email.com"
            className="inline-block mt-8 px-7 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
          >
            your@email.com
          </a>

        </div>

      </section>


      {/* =========================
          Footer
      ========================== */}
      <footer className="border-t border-white/10 py-8 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 Zachary Maynard
          </p>

          <p>
            GIS & Web Developer
          </p>

        </div>

      </footer>

    </main>
  );
}