import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =========================
          Navigation
      ========================== */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 pt-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-6 py-4 backdrop-blur-xl shadow-lg">

            <a
              href="#"
              className="text-xl font-bold tracking-tight"
            >
              Zachary
              <span className="text-blue-400">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm">

              <a
                href="#about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>

            </div>

            <a
              href="#contact"
              className="hidden sm:block rounded-full bg-blue-500 px-5 py-2 text-sm font-medium hover:bg-blue-600 transition"
            >
              Let's Talk
            </a>

          </div>
        </div>
      </nav>


      {/* =========================
          Hero
      ========================== */}
      <section className="relative min-h-screen overflow-hidden flex items-center px-6 pt-24">

        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.15),transparent_35%)]" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />

        </div>


        <div className="max-w-7xl mx-auto w-full">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Hero Left */}
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


            {/* Profile */}
            <div className="flex justify-center md:justify-end">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                <Image
                  src="/images/profile.jpg"
                  alt="Zachary Maynard - GIS & Web Developer"
                  width={420}
                  height={420}
                  priority
                  className="relative rounded-full object-cover border-4 border-slate-800 shadow-2xl ring-1 ring-blue-400/30"
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

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

                <h3 className="font-semibold">
                  2D Mapping
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Interactive web maps and spatial applications.
                </p>

              </div>


              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

                <h3 className="font-semibold">
                  3D Visualization
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Immersive geospatial experiences with Cesium.
                </p>

              </div>


              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

                <h3 className="font-semibold">
                  Spatial Data
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Working with spatial databases and GIS data.
                </p>

              </div>


              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/50 transition">

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
        className="py-28 px-6 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold">
              Projects that turn
              <span className="text-blue-400"> spatial data </span>
              into experiences.
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              A selection of mapping, visualization and
              geospatial applications built with modern
              web technologies.
            </p>

          </div>


          <div className="grid lg:grid-cols-3 gap-8 mt-14">


            {/* Project 01 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/70 hover:border-blue-400/50 transition duration-500">

              <div className="relative overflow-hidden">

                <Image
                  src="/images/map-project.jpg"
                  alt="Interactive Map Application"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">

                  <span className="px-3 py-1 rounded-full bg-blue-500/90 text-xs font-medium">
                    01
                  </span>

                </div>

              </div>


              <div className="p-7">

                <p className="text-sm text-blue-400">
                  WEB MAPPING
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Interactive Map Application
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  An interactive web mapping application for
                  exploring geographic information, locations
                  and spatial features.
                </p>


                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    Mapbox
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    GeoJSON
                  </span>

                </div>


                <div className="flex gap-3 mt-7">

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition text-sm font-medium"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>


            {/* Project 02 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/70 hover:border-blue-400/50 transition duration-500">

              <div className="relative overflow-hidden">

                <Image
                  src="/images/cesium-project.jpg"
                  alt="3D Cesium Geospatial Viewer"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">

                  <span className="px-3 py-1 rounded-full bg-blue-500/90 text-xs font-medium">
                    02
                  </span>

                </div>

              </div>


              <div className="p-7">

                <p className="text-sm text-blue-400">
                  3D GIS
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  3D Geospatial Viewer
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  A 3D geospatial visualization application
                  for exploring terrain, buildings and spatial
                  information in an immersive environment.
                </p>


                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    Cesium
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    JavaScript
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    3D GIS
                  </span>

                </div>


                <div className="flex gap-3 mt-7">

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition text-sm font-medium"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>


            {/* Project 03 */}
            <article className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/70 hover:border-blue-400/50 transition duration-500">

              <div className="relative overflow-hidden">

                <Image
                  src="/images/dashboard-project.jpg"
                  alt="GIS Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">

                  <span className="px-3 py-1 rounded-full bg-blue-500/90 text-xs font-medium">
                    03
                  </span>

                </div>

              </div>


              <div className="p-7">

                <p className="text-sm text-blue-400">
                  GIS DASHBOARD
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  GIS Dashboard
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  An interactive dashboard for exploring
                  spatial information, analyzing geographic
                  data and visualizing important metrics.
                </p>


                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    OpenLayers
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    PostGIS
                  </span>

                </div>


                <div className="flex gap-3 mt-7">

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition text-sm font-medium"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          Skills - Step 4
      ========================== */}
      <section
        id="skills"
        className="relative py-28 px-6 border-t border-white/10 overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />


        <div className="relative max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Technology
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold">
              Tools I use to build
              <span className="text-blue-400"> geospatial systems.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              A combination of modern web technologies,
              mapping libraries and spatial data tools for
              building interactive GIS applications.
            </p>

          </div>


          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">


            {/* =========================
                Frontend
            ========================== */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/50 hover:bg-white/[0.05] transition duration-500">

              <div className="flex items-center justify-between">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                  {"</>"}
                </div>

                <span className="text-xs text-gray-600">
                  01
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Frontend & Web
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Modern interfaces and web applications.
              </p>


              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 group-hover:border-blue-400/30 transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* =========================
                Geospatial
            ========================== */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/50 hover:bg-white/[0.05] transition duration-500">

              <div className="flex items-center justify-between">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                  ◈
                </div>

                <span className="text-xs text-gray-600">
                  02
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Geospatial
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                2D mapping and 3D geospatial visualization.
              </p>


              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  "Mapbox",
                  "Cesium",
                  "OpenLayers",
                  "GeoJSON",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 group-hover:border-blue-400/30 transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* =========================
                Backend & Data
            ========================== */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/50 hover:bg-white/[0.05] transition duration-500">

              <div className="flex items-center justify-between">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                  DB
                </div>

                <span className="text-xs text-gray-600">
                  03
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Backend & Data
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                APIs, databases and spatial data infrastructure.
              </p>


              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  "PostGIS",
                  "GeoServer",
                  "Express",
                  "MongoDB",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 group-hover:border-blue-400/30 transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* =========================
                Tools
            ========================== */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-400/50 hover:bg-white/[0.05] transition duration-500">

              <div className="flex items-center justify-between">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                  ⚡
                </div>

                <span className="text-xs text-gray-600">
                  04
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Tools & Workflow
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Development tools and project workflow.
              </p>


              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "REST APIs",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 group-hover:border-blue-400/30 transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* Main Technologies */}
          <div className="mt-20">

            <p className="text-sm text-gray-500 uppercase tracking-[0.25em]">
              Core Technologies
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              {[
                "React",
                "Next.js",
                "Mapbox",
                "Cesium",
                "OpenLayers",
                "PostGIS",
                "GeoServer",
                "TypeScript",
              ].map((skill) => (

                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400/50 transition"
                >
                  {skill}
                </span>

              ))}

            </div>

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
            build something
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