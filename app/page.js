import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav>
        <h2>Zachary Maynard-Senior Developer</h2>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="about">
  <div>
    {/* Profile Photo */}
    <Image
      src="/images/profile.jpg"
      alt="Zachary Maynard - GIS & Web Developer"
      width={400}
      height={400}
      className="rounded-full object-cover"
    />

    {/* About Me */}
    <div>
      <p>About Me</p>

        <h2>GIS meets modern web development.</h2>

            <p>
             I’m a GIS & Web Developer passionate about building
              interactive 2D and 3D geospatial applications that
            turn complex spatial data into useful web experiences.
           </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <p>About Me</p>

        <h2>GIS meets modern web development.</h2>

        <p>
          I am interested in building interactive mapping
          applications and geospatial web experiences.
          My interests include web mapping, 3D visualization,
          spatial data and modern frontend development.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <p>Selected Work</p>

        <h2>Projects</h2>

        <div>
          <article>
            <p>01</p>

            <h3>Interactive Map Application</h3>

            <Image
              src="/images/map-project.jpg"
              alt="Interactive Map Application"
              width={800}
              height={500}
            />

            <p>
              A web mapping application built with React
              and Mapbox.
            </p>
          </article>

          <article>
            <p>02</p>

            <h3>3D Geospatial Viewer</h3>

            <Image
              src="/images/cesium-project.jpg"
              alt="3D Cesium geospatial viewer"
              width={800}
               height={500}
            />

            <p>
              A 3D visualization application using Cesium.
            </p>
          </article>

          <article>
            <p>03</p>

            <h3>GIS Dashboard</h3>

            <Image
              src="/images/dashboard-project.jpg"
              alt="GIS dashboard"
              width={800}
              height={500}
            />

            <p>
              An interactive GIS dashboard for exploring
              spatial information.
            </p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <p>Technology</p>

        <h2>Skills</h2>

        <div>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Mapbox</span>
          <span>Cesium</span>
          <span>OpenLayers</span>
          <span>PostGIS</span>
          <span>GeoServer</span>
          <span>Git</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p>Get In Touch</p>

        <h2>build something interesting.</h2>

        <p>
          interested in geospatial applications,
          web development and interesting mapping projects.
        </p>

        <a href="mailto:your@email.com">
          your@email.com
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Zachary Maynard</p>
      </footer>
    </main>
  );
}