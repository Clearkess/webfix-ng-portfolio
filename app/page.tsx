
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Database,
  Globe,
  Layers,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to establish your brand and turn visitors into customers.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description:
      "Custom web applications with practical features, intuitive interfaces and scalable architecture.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Digital marketplaces and online stores with product management, checkout and order workflows.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Seamless experiences across mobile phones, tablets and desktop devices.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Reliable APIs, databases, authentication and server-side application development.",
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description:
      "Practical technology solutions that help businesses work smarter and grow online.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "PHP",
  "Laravel",
  "Node.js",
  "Python",
  "Firebase",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            WebFix <span>NG.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-primary">
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="eyebrow">
            Software Development & Digital Solutions
          </div>

          <h1>
            We build digital
            <br />
            experiences that
            <br />
            <span>move businesses forward.</span>
          </h1>

          <p>
            WebFix NG transforms ideas into modern websites,
            powerful web applications and digital products
            built to solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore Our Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button button-outline">
              Start a Project
            </a>
          </div>

          <div style={{ marginTop: 55 }}>
            <span className="eyebrow">Our focus</span>
            <p style={{ marginTop: 10 }}>
              Innovation · Quality · Practical Solutions · Growth
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">What We Do</div>
            <h2>Technology that works for your business.</h2>
            <p>
              From your first website to a complete digital
              platform, we provide development solutions
              built around your goals.
            </p>
          </div>

          <div className="grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="card" key={service.title}>
                  <Icon
                    size={34}
                    color="#21d4bd"
                    strokeWidth={1.7}
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Selected Work</div>
            <h2>Projects built with purpose.</h2>
            <p>
              A look at our work in building digital products
              and practical software solutions.
            </p>
          </div>

          <div className="grid">
            <article className="card project-card">
              <div className="project-visual">
                VAULTRA
              </div>

              <div className="project-content">
                <div className="eyebrow">Featured Project</div>
                <h3>Vaultra — Digital Marketplace</h3>
                <p>
                  A digital marketplace project featuring
                  customer accounts, product and service
                  listings, wallet functionality, payment
                  integration and order management.
                </p>

                <div>
                  <span className="tag">Next.js</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">Paystack</span>
                </div>

                <a
                  href="https://charpsdev.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Project <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-visual">
                WEB SOLUTIONS
              </div>

              <div className="project-content">
                <div className="eyebrow">Development</div>
                <h3>Custom Web Solutions</h3>
                <p>
                  Responsive interfaces and tailored
                  application experiences built around
                  business requirements.
                </p>

                <div>
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                </div>

                <a href="#contact">
                  Discuss a Similar Project <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-box">
            <div className="eyebrow">About WebFix NG</div>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 44px)",
                fontFamily: "Space Grotesk, sans-serif",
                margin: "15px 0",
              }}
            >
              Building with technology.
              Delivering with purpose.
            </h2>

            <p style={{ color: "var(--muted)", maxWidth: 760 }}>
              WebFix NG is a software development brand
              focused on creating useful digital experiences.
              We combine modern frontend technologies,
              backend engineering and thoughtful design
              to turn ideas into working products.
            </p>

            <div style={{ marginTop: 30 }}>
              <h3 style={{ marginBottom: 12 }}>
                Our Technology Stack
              </h3>

              {technologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <p>
                <CheckCircle2
                  size={17}
                  color="#21d4bd"
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                Focused on quality, usability and reliable
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div className="eyebrow">Let's Work Together</div>
            <h2>Have an idea? Let's build it.</h2>
            <p>
              Have a website, application or digital product
              in mind? Let's connect and discuss your project.
            </p>

            
<a
  href="https://wa.me/2347056606129?text=Hello%20WebFix%20NG%2C%20I%20am%20interested%20in%20your%20software%20development%20services.%20Please%20share%20your%20services%20and%20quotation%20process."
  target="_blank"
  rel="noreferrer"
  className="button button-primary"
>
  <MessageCircle size={18} /> Hire WebFix NG{" "}
  <ArrowUpRight size={17} />
</a>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="logo">
            WebFix <span>NG.</span>
          </a>

          <p>
            © {new Date().getFullYear()} WebFix NG.
            All rights reserved.
          </p>

          <a href="https://github.com/Clearkess">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
