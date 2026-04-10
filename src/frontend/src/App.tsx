export type Page = "home" | "products" | "about" | "advisor" | "contact";

import {
  Code2,
  Download,
  ExternalLink,
  FileCode,
  Github,
  Globe,
  Image,
  Shield,
  Type,
} from "lucide-react";

// All site images are referenced here so the build pipeline keeps them
const SITE_IMAGES = [
  "/assets/generated/hero-life.dim_1920x800.jpg",
  "/assets/generated/hero-health.dim_1920x800.jpg",
  "/assets/generated/hero-motor.dim_1920x800.jpg",
  "/assets/generated/hero-business.dim_1920x800.jpg",
  "/assets/generated/product-life.dim_600x400.jpg",
  "/assets/generated/product-health.dim_600x400.jpg",
  "/assets/generated/product-motor.dim_600x400.jpg",
  "/assets/generated/product-home.dim_600x400.jpg",
  "/assets/generated/product-travel-new.dim_600x400.jpg",
  "/assets/generated/product-business.dim_600x400.jpg",
  "/assets/generated/about-intro-clean.dim_1200x700.jpg",
  "/assets/generated/product-term.dim_600x400.jpg",
  "/assets/generated/product-travel.dim_600x400.jpg",
  "/assets/generated/product-investment.dim_600x400.jpg",
  "/assets/generated/about-team.dim_900x500.jpg",
  "/assets/generated/become-advisor.dim_800x500.jpg",
  "/assets/generated/hero-banner.dim_1400x700.jpg",
  "/assets/generated/logo-bajaj-general-transparent.dim_300x150.png",
  "/assets/generated/logo-godigit-transparent.dim_300x150.png",
  "/assets/generated/logo-icici-lombard-transparent.dim_300x150.png",
  "/assets/generated/logo-tata-aig-transparent.dim_300x150.png",
  "/assets/generated/logo-hdfc-ergo-transparent.dim_300x150.png",
  "/assets/generated/logo-united-india-transparent.dim_300x150.png",
  "/assets/generated/logo-care-health-transparent.dim_300x150.png",
  "/assets/generated/logo-star-health-transparent.dim_300x150.png",
  "/assets/generated/logo-aditya-birla-transparent.dim_300x150.png",
  "/assets/generated/logo-manipal-cigna-transparent.dim_300x150.png",
  "/assets/generated/logo-icici-prudential-transparent.dim_300x150.png",
  "/assets/generated/logo-hdfc-life-transparent.dim_300x150.png",
  "/assets/generated/logo-bajaj-life-transparent.dim_300x150.png",
  "/assets/generated/logo-lic-transparent.dim_300x150.png",
  "/assets/generated/logo-sbi-life-transparent.dim_300x150.png",
  "/assets/generated/logo-max-life-transparent.dim_300x150.png",
];

const pages = [
  {
    name: "Home",
    desc: "Hero slider with 3 insurance themes, product cards, why choose us, testimonials & CTA",
    url: "/site/index.html",
    icon: "\uD83C\uDFE0",
    color: "#1B3A7A",
  },
  {
    name: "About Us",
    desc: "Company story, core values, leadership team with profile bios, and support pillars",
    url: "/site/about.html",
    icon: "\uD83D\uDC65",
    color: "#27AE60",
  },
  {
    name: "Services",
    desc: "16 insurance products in 4 tabbed categories: Personal, Vehicle, Property & Business",
    url: "/site/services.html",
    icon: "\uD83D\uDEE1\uFE0F",
    color: "#E8A320",
  },
  {
    name: "Contact Us",
    desc: "Contact form with jQuery validation, Google Maps embed for Pune office & FAQ accordion",
    url: "/site/contact.html",
    icon: "\uD83D\uDCDE",
    color: "#16a085",
  },
  {
    name: "Become an Advisor",
    desc: "Benefits, eligibility, support sections & advisor application form with file uploads",
    url: "/site/advisor.html",
    icon: "\uD83E\uDD1D",
    color: "#8e44ad",
  },
  {
    name: "Login",
    desc: "Member login page with email/mobile + password, social login options and validation",
    url: "/site/login.html",
    icon: "\uD83D\uDD10",
    color: "#1B3A7A",
  },
  {
    name: "Register",
    desc: "New account registration with full form validation and password strength indicator",
    url: "/site/register.html",
    icon: "\uD83D\uDC64",
    color: "#27AE60",
  },
  {
    name: "Get Quote",
    desc: "Free insurance quote form with 6 product types, comparison info, and advisor benefits",
    url: "/site/quote.html",
    icon: "\uD83D\uDCCB",
    color: "#E8A320",
  },
  {
    name: "Our Partners",
    desc: "All 16 insurance company partners (General, Health & Life) with detailed products",
    url: "/site/insurers.html",
    icon: "\uD83E\uDD1D",
    color: "#27AE60",
  },
];

const assets = [
  {
    icon: <FileCode size={18} />,
    label: "9 HTML Pages",
    sub: "Pure static HTML5",
  },
  {
    icon: <Code2 size={18} />,
    label: "1 CSS File",
    sub: "style.css (1,500+ lines)",
  },
  { icon: <Code2 size={18} />, label: "1 JS File", sub: "jQuery 3.7 powered" },
  {
    icon: <Image size={18} />,
    label: "11 AI Images",
    sub: "Hero + product banners",
  },
  { icon: <Type size={18} />, label: "Google Fonts", sub: "Poppins (CDN)" },
  {
    icon: <Shield size={18} />,
    label: "Font Awesome 6",
    sub: "1,000+ icons (CDN)",
  },
];

function PageCard({ page }: { page: (typeof pages)[0] }) {
  return (
    <a
      href={page.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = page.color;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      }}
      style={{
        display: "block",
        background: "white",
        borderRadius: 14,
        padding: "22px 24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        border: "2px solid transparent",
        transition: "all 0.25s ease",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: `${page.color}18`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              flexShrink: 0,
            }}
          >
            {page.icon}
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "#0D1B3E",
                marginBottom: 4,
              }}
            >
              {page.name}
            </div>
            <div
              style={{ fontSize: "0.82rem", color: "#6c757d", lineHeight: 1.5 }}
            >
              {page.desc}
            </div>
          </div>
        </div>
        <ExternalLink
          size={16}
          color={page.color}
          style={{ flexShrink: 0, marginTop: 2 }}
        />
      </div>
      <div
        style={{
          marginTop: 16,
          padding: "8px 14px",
          background: `${page.color}12`,
          borderRadius: 8,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: "0.8rem",
          fontWeight: 600,
          color: page.color,
        }}
      >
        <Globe size={13} /> Open Live Page
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#f8f9fb",
        minHeight: "100vh",
      }}
    >
      {/* Hidden image preloads to prevent build pruning */}
      <div style={{ display: "none" }} aria-hidden="true">
        {SITE_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>

      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #0D1B3E 0%, #1B3A7A 100%)",
          padding: "40px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(39,174,96,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(232,163,32,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <img
            src="https://asb.shikharimf.com/assets/logo.png"
            alt="Shikhar IMF"
            style={{ height: 52, marginBottom: 16, filter: "brightness(10)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <h1
            style={{
              color: "white",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Shikhar IMF
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            Pure Static Website &mdash; HTML &bull; CSS &bull; jQuery &bull;
            Fully Responsive
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "rgba(39,174,96,0.2)",
                border: "1px solid rgba(39,174,96,0.4)",
                color: "#2ecc71",
                padding: "4px 14px",
                borderRadius: 20,
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              ✓ IRDAI Approved IMF
            </span>
            <span
              style={{
                background: "rgba(232,163,32,0.2)",
                border: "1px solid rgba(232,163,32,0.4)",
                color: "#E8A320",
                padding: "4px 14px",
                borderRadius: 20,
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              ✓ Pune, Maharashtra
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                padding: "4px 14px",
                borderRadius: 20,
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              ✓ 15 Pages Ready
            </span>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
        {/* Live Pages */}
        <section style={{ marginBottom: 50 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <Globe size={22} color="#1B3A7A" />
            <h2
              style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#0D1B3E",
              }}
            >
              Live Pages
            </h2>
            <span
              style={{
                background: "#EEF2FF",
                color: "#1B3A7A",
                padding: "3px 12px",
                borderRadius: 20,
                fontSize: "0.78rem",
                fontWeight: 600,
              }}
            >
              Click to open each page
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 18,
            }}
          >
            {pages.map((page) => (
              <PageCard key={page.name} page={page} />
            ))}
          </div>
        </section>

        {/* Download Source Code */}
        <section style={{ marginBottom: 50 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <Download size={22} color="#27AE60" />
            <h2
              style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#0D1B3E",
              }}
            >
              Download Source Code
            </h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div
              style={{
                background: "white",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "2px solid #e9ecef",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <Github size={26} color="#0D1B3E" />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#0D1B3E",
                  }}
                >
                  Export via GitHub
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#6c757d",
                  marginBottom: 20,
                  lineHeight: 1.7,
                }}
              >
                Export the full project to GitHub, then download the ZIP with
                all source files.
              </p>
              <ol
                style={{
                  fontSize: "0.88rem",
                  color: "#333",
                  paddingLeft: 18,
                  lineHeight: 2.2,
                  margin: 0,
                }}
              >
                <li>
                  Click <strong>"Export to GitHub"</strong> in Caffeine project
                  settings
                </li>
                <li>Connect your GitHub account and name the repository</li>
                <li>
                  On GitHub, click <strong>Code &rarr; Download ZIP</strong>
                </li>
                <li>
                  Extract and navigate to{" "}
                  <code
                    style={{
                      background: "#f0f4ff",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    src/frontend/public/site/
                  </code>
                </li>
                <li>
                  Open{" "}
                  <code
                    style={{
                      background: "#f0f4ff",
                      padding: "2px 6px",
                      borderRadius: 4,
                    }}
                  >
                    index.html
                  </code>{" "}
                  in any browser
                </li>
              </ol>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "2px solid #e9ecef",
              }}
            >
              <h3
                style={{
                  margin: "0 0 20px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0D1B3E",
                }}
              >
                What's Included
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {assets.map((a) => (
                  <div
                    key={a.label}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "10px 12px",
                      background: "#f8f9fb",
                      borderRadius: 8,
                    }}
                  >
                    <span style={{ color: "#1B3A7A", marginTop: 2 }}>
                      {a.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "#0D1B3E",
                        }}
                      >
                        {a.label}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6c757d" }}>
                        {a.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "14px 16px",
                  background: "#e8f8f0",
                  borderRadius: 8,
                  border: "1px solid #27AE60",
                  fontSize: "0.83rem",
                  color: "#155724",
                  lineHeight: 1.6,
                }}
              >
                <strong>Works offline:</strong> Open <code>index.html</code>{" "}
                directly in any browser &mdash; no server needed.
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            textAlign: "center",
            padding: "30px 20px",
            borderTop: "1px solid #dee2e6",
            color: "#6c757d",
            fontSize: "0.85rem",
            lineHeight: 1.8,
          }}
        >
          <strong style={{ color: "#1B3A7A" }}>Shikhar IMF Pvt. Ltd.</strong>{" "}
          &bull; IRDAI Approved Insurance Marketing Firm &bull; Pune,
          Maharashtra
          <br />
          Office No-1311/12, Boulevard Towers, 13th Floor, Sadhu Vaswani Chowk,
          Camp, Pune 411001
          <br />
          <a href="tel:+919356633524" style={{ color: "#1B3A7A" }}>
            +91 9356633524
          </a>{" "}
          &bull;
          <a
            href="mailto:info@shikharimf.in"
            style={{ color: "#1B3A7A", marginLeft: 6 }}
          >
            info@shikharimf.in
          </a>
        </div>
      </main>
    </div>
  );
}
