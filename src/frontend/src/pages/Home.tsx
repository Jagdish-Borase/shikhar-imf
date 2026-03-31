import {
  ArrowRight,
  CheckCircle,
  Clock,
  HeartHandshake,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../App";
import { useCounter } from "../hooks/useCounter";
import { useReveal } from "../hooks/useReveal";

interface HomeProps {
  navigate: (page: Page) => void;
}

const products = [
  {
    id: "life",
    title: "Life Insurance",
    desc: "Secure your family's financial future with comprehensive life coverage plans tailored to your needs.",
    img: "/assets/generated/product-life.dim_600x400.jpg",
    icon: "🛡️",
  },
  {
    id: "health",
    title: "Health Insurance",
    desc: "Get the best medical coverage for you and your family. Cashless treatment at 10,000+ hospitals.",
    img: "/assets/generated/product-health.dim_600x400.jpg",
    icon: "🏥",
  },
  {
    id: "motor",
    title: "Motor Insurance",
    desc: "Protect your vehicle with comprehensive and third-party motor insurance plans at the best rates.",
    img: "/assets/generated/product-motor.dim_600x400.jpg",
    icon: "🚗",
  },
  {
    id: "travel",
    title: "Travel Insurance",
    desc: "Travel with peace of mind. Covers medical emergencies, trip cancellations, and lost baggage.",
    img: "/assets/generated/product-travel.dim_600x400.jpg",
    icon: "✈️",
  },
  {
    id: "term",
    title: "Term Insurance",
    desc: "Maximum protection at minimum cost. Pure term plans with high sum assured for your loved ones.",
    img: "/assets/generated/product-term.dim_600x400.jpg",
    icon: "📋",
  },
  {
    id: "investment",
    title: "Investment Plans",
    desc: "Grow your wealth with smart investment-linked insurance products. Beat inflation, build legacy.",
    img: "/assets/generated/product-investment.dim_600x400.jpg",
    icon: "📈",
  },
];

const features = [
  {
    icon: <HeartHandshake size={32} />,
    title: "Expert Guidance",
    desc: "Our certified advisors provide personalized recommendations based on your unique life situation.",
  },
  {
    icon: <Shield size={32} />,
    title: "Wide Coverage",
    desc: "Access 50+ insurance products from Nepal's top-rated insurance companies.",
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    desc: "Round-the-clock customer support to answer questions and handle emergencies anytime.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Hassle-free Claims",
    desc: "Our dedicated claims team ensures smooth, fast settlement so you focus on recovery.",
  },
];

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "Business Owner, Kathmandu",
    text: "Shikhar IMF helped me find the perfect health plan for my family. Their advisor understood our needs completely and the entire process was seamless. Excellent service!",
    rating: 5,
    initials: "RS",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    name: "Priya Singh",
    role: "Software Engineer, Lalitpur",
    text: "The advisor was very knowledgeable and guided me through the entire life insurance process seamlessly. I got the best policy at a great premium. Highly satisfied!",
    rating: 5,
    initials: "PS",
    bg: "bg-green-100 text-green-700",
  },
  {
    name: "Amit Patel",
    role: "Doctor, Pokhara",
    text: "Best claim settlement experience I have ever had. The Shikhar IMF team was supportive throughout the entire process. Highly recommended to everyone!",
    rating: 5,
    initials: "AP",
    bg: "bg-purple-100 text-purple-700",
  },
];

function StatItem({
  target,
  label,
  suffix = "",
}: { target: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-3xl md:text-4xl text-white">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white/80 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Home({ navigate }: HomeProps) {
  useReveal();

  useEffect(() => {
    document.title = "Shikhar IMF – Ummidon Ki Udaan | Insurance Solutions";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B4F8A 0%, #0a3d6e 50%, #082f58 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <TrendingUp size={14} />
                <span>Nepal's Trusted Insurance Partner</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Protect What
                <span className="block text-green"> Matters Most</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                Shikhar IMF brings you the best insurance plans from Nepal's top
                insurers. Compare, choose, and secure your future with
                confidence.
                <span className="block mt-2 italic text-white/60 text-base">
                  "Ummidon Ki Udaan" — Flight of Aspirations
                </span>
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate("products")}
                  className="btn-green flex items-center gap-2"
                  data-ocid="hero.primary_button"
                >
                  Explore Plans <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  className="border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                  data-ocid="hero.secondary_button"
                >
                  Get Free Quote
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-10">
                {["IRDA Registered", "15+ Years Exp.", "99% Claim Rate"].map(
                  (b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <CheckCircle size={14} className="text-green" />
                      {b}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Right image */}
            <div className="animate-slide-up hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-green/20 rounded-3xl transform rotate-3" />
                <img
                  src="/assets/generated/hero-banner.dim_1400x700.jpg"
                  alt="Happy family protected by insurance"
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[440px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="wave-bottom">
          <svg
            viewBox="0 0 1200 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z"
              fill="#29B36B"
              opacity="0.3"
            />
            <path
              d="M0,60 C400,20 800,80 1200,55 L1200,80 L0,80 Z"
              fill="#F3F6F9"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem target={50000} label="Happy Clients" suffix="+" />
            <StatItem target={100} label="Insurance Products" suffix="+" />
            <StatItem target={15} label="Years Experience" suffix="+" />
            <StatItem target={99} label="Claim Settlement" suffix="%" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background" id="products-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
              Our Solutions
            </p>
            <h2 className="section-heading">
              Comprehensive Insurance Solutions
            </h2>
            <p className="section-subheading">
              Choose from a wide range of insurance products designed to protect
              you and your loved ones at every stage of life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border`}
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md text-xl">
                    {product.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-navy text-lg mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => navigate("products")}
                      className="btn-outline-navy text-xs py-2 px-4"
                    >
                      Learn More
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate("contact")}
                      className="btn-green text-xs py-2 px-4"
                      data-ocid="products.primary_button"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate("products")}
              className="btn-primary flex items-center gap-2 mx-auto"
              data-ocid="home.primary_button"
            >
              View All Products <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
              Why Us
            </p>
            <h2 className="section-heading">Why Choose Shikhar IMF?</h2>
            <p className="section-subheading">
              We go beyond selling policies — we build lasting partnerships to
              secure your financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 1} bg-card rounded-2xl p-6 text-center shadow-card card-hover`}
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-4 text-navy">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
              Testimonials
            </p>
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              Real stories from real customers who trusted Shikhar IMF to
              protect their families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${i + 1} bg-card rounded-2xl p-6 shadow-card border border-border`}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="stars flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center font-bold text-sm`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #29B36B 0%, #1d9458 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Get a personalized insurance quote in minutes. Our experts are
              ready to help you find the perfect plan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="bg-white text-navy font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-md"
                data-ocid="cta.primary_button"
              >
                Get Free Quote Now
              </button>
              <button
                type="button"
                onClick={() => navigate("advisor")}
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all"
                data-ocid="cta.secondary_button"
              >
                Become an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
