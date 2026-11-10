
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

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Services & Pricing</div>
            <h2>Professional solutions. Transparent starting prices.</h2>
            <p>
              Choose a package that fits your business goals.
              Every project can be customised to your requirements.
            </p>
          </div>

          <div className="grid">
            <article className="card">
              <div className="eyebrow">Starter Package</div>
              <h3>Business Website</h3>
              <p>Starting from</p>
              <h2>₦150,000</h2>
              <p>
                A professional online presence for small businesses
                and startups.
              </p>
              <div>
                <span className="tag">Responsive design</span>
                <span className="tag">Up to 5 pages</span>
                <span className="tag">Contact form</span>
                <span className="tag">Basic SEO setup</span>
              </div>
              <a
                className="button button-primary"
                style={{ marginTop: 24 }}
                href="https://wa.me/2347056606129?text=Hello%20WebFix%20NG%2C%20I%20am%20interested%20in%20the%20Business%20Website%20package%20starting%20at%20NGN150000."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Get a Quote
              </a>
            </article>

            <article className="card">
              <div className="eyebrow">Growth Package</div>
              <h3>Professional Website</h3>
              <p>Starting from</p>
              <h2>₦250,000</h2>
              <p>
                An enhanced website for growing businesses
                that need more features.
              </p>
              <div>
                <span className="tag">Custom design</span>
                <span className="tag">Up to 10 pages</span>
                <span className="tag">Advanced forms</span>
                <span className="tag">SEO setup</span>
              </div>
              <a
                className="button button-primary"
                style={{ marginTop: 24 }}
                href="https://wa.me/2347056606129?text=Hello%20WebFix%20NG%2C%20I%20am%20interested%20in%20the%20Professional%20Website%20package%20starting%20at%20NGN250000."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Get a Quote
              </a>
            </article>

            <article className="card">
              <div className="eyebrow">Commerce Package</div>
              <h3>E-commerce Website</h3>
              <p>Starting from</p>
              <h2>₦350,000</h2>
              <p>
                An online store for selling products and
                managing customer orders.
              </p>
              <div>
                <span className="tag">Product catalogue</span>
                <span className="tag">Shopping cart</span>
                <span className="tag">Checkout integration</span>
                <span className="tag">Order management</span>
              </div>
              <a
                className="button button-primary"
                style={{ marginTop: 24 }}
                href="https://wa.me/2347056606129?text=Hello%20WebFix%20NG%2C%20I%20am%20interested%20in%20the%20E-commerce%20Website%20package%20starting%20at%20NGN350000."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Get a Quote
              </a>
            </article>

            <article className="card">
              <div className="eyebrow">Custom Package</div>
              <h3>Web Applications</h3>
              <p>Starting from</p>
              <h2>₦500,000</h2>
              <p>
                Tailored web applications built around
                your business processes.
              </p>
              <div>
                <span className="tag">Custom functionality</span>
                <span className="tag">Database integration</span>
                <span className="tag">User authentication</span>
                <span className="tag">Admin dashboard</span>
              </div>
              <a
                className="button button-primary"
                style={{ marginTop: 24 }}
                href="https://wa.me/2347056606129?text=Hello%20WebFix%20NG%2C%20I%20would%20like%20a%20quotation%20for%20a%20custom%20web%20application%20starting%20at%20NGN500000."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Get a Quote
              </a>
            </article>
          </div>

          <p style={{ color: "var(--muted)", marginTop: 25, fontSize: 13 }}>
            All prices are starting estimates. Final quotations depend
            on project scope, features, integrations and requirements.
          </p>
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

      <section className="section" id="process">
        <div className="container">
          <div className="eyebrow">How We Work</div>

          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              fontFamily: "Space Grotesk, sans-serif",
              margin: "15px 0",
            }}
          >
            From Idea to Launch
          </h2>

          <p style={{ maxWidth: "650px", lineHeight: 1.8, color: "#aab8c5" }}>
            We follow a clear and professional process to turn your ideas into
            reliable digital solutions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We discuss your business, goals, and project requirements.",
              },
              {
                number: "02",
                title: "Planning & Quotation",
                description:
                  "We agree on the features, project cost, and timeline.",
              },
              {
                number: "03",
                title: "Design & Development",
                description:
                  "We design and build your solution while keeping you updated.",
              },
              {
                number: "04",
                title: "Testing & Delivery",
                description:
                  "We test the finished project, launch it, and hand it over.",
              },
            ].map((step) => (
              <div
                key={step.number}
                style={{
                  padding: "25px",
                  border: "1px solid rgba(45, 212, 191, 0.2)",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  style={{
                    color: "#2dd4bf",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ margin: "14px 0 10px", fontSize: "20px" }}>
                  {step.title}
                </h3>
                <p style={{ lineHeight: 1.7, color: "#aab8c5" }}>
                  {step.description}
                </p>
              </div>
            ))}
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
