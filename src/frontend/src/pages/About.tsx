import { ArrowRight, Award, Eye, Target, Users } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../App";
import { useReveal } from "../hooks/useReveal";

interface AboutProps {
  navigate: (page: Page) => void;
}

export default function About({ navigate }: AboutProps) {
  useReveal();

  useEffect(() => {
    document.title = "About Us – Shikhar IMF";
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
            Our Story
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            About Shikhar IMF
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            For over 15 years, we've been Nepal's most trusted insurance
            distribution company, guiding families and businesses toward
            financial security.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="/assets/generated/about-team.dim_900x500.jpg"
                alt="Shikhar IMF Team"
                className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96"
              />
            </div>
            <div className="reveal">
              <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
                Who We Are
              </p>
              <h2 className="font-display font-bold text-3xl text-navy mb-5">
                Building Trust Through Comprehensive Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Shikhar IMF (Insurance Marketing Firm) was founded with a
                singular vision — to make quality insurance accessible to every
                Nepali household. We believe financial protection is not a
                luxury but a necessity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From humble beginnings in Kathmandu, we have grown into a
                nationwide network of certified advisors serving over 50,000
                clients. Our motto, <em>"Ummidon Ki Udaan"</em> (Flight of
                Aspirations), reflects our commitment to helping families rise
                above uncertainties.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Award className="text-green mx-auto mb-2" size={24} />
                  <p className="text-navy font-semibold text-sm">
                    IRDA Registered
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Users className="text-green mx-auto mb-2" size={24} />
                  <p className="text-navy font-semibold text-sm">
                    200+ Advisors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { target: 50000, label: "Happy Clients", suffix: "+" },
              { target: 100, label: "Insurance Products", suffix: "+" },
              { target: 15, label: "Years Experience", suffix: "+" },
              { target: 99, label: "Claim Settlement %", suffix: "%" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-white">
                  {s.target.toLocaleString()}
                  {s.suffix}
                </div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision cards */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="section-heading">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal bg-card rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-5">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-navy text-2xl mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every Nepali family with affordable, comprehensive
                insurance solutions — making financial security accessible to
                all, regardless of income or background. We strive to simplify
                insurance and make it a household necessity.
              </p>
            </div>
            <div className="reveal reveal-delay-2 bg-card rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-green flex items-center justify-center mb-5">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-navy text-2xl mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Nepal's #1 insurance distribution platform — a name
                synonymous with trust, transparency, and exceptional service. We
                envision a Nepal where every family is protected, every business
                is secure, and every aspiration can truly take flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤝",
                title: "Trust & Integrity",
                desc: "We operate with complete transparency. No hidden clauses, no misleading claims — just honest advice.",
              },
              {
                icon: "💡",
                title: "Expert Knowledge",
                desc: "Our certified advisors undergo rigorous training to give you the most accurate insurance guidance.",
              },
              {
                icon: "❤️",
                title: "Customer First",
                desc: "Every decision we make is centered around what's best for our clients and their families.",
              },
              {
                icon: "⚡",
                title: "Swift Service",
                desc: "From policy issuance to claim settlement, we ensure fast, hassle-free processes at every step.",
              },
              {
                icon: "🌏",
                title: "Wide Reach",
                desc: "With 200+ advisors across Nepal, we're always close to you when you need us most.",
              },
              {
                icon: "🎯",
                title: "Result Oriented",
                desc: "99% claim settlement ratio speaks louder than words. We deliver on our promises.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-card rounded-2xl p-6 shadow-card text-center`}
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Join the Shikhar IMF Family
          </h2>
          <p className="text-white/75 mb-7">
            Become an advisor or get insured today. Take your first step toward
            a secure future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate("advisor")}
              className="btn-green flex items-center gap-2"
              data-ocid="about.primary_button"
            >
              Become an Advisor <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
              data-ocid="about.secondary_button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
