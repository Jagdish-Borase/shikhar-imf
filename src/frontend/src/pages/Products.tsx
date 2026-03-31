import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../App";
import { useReveal } from "../hooks/useReveal";

interface ProductsProps {
  navigate: (page: Page) => void;
}

const products = [
  {
    id: "life",
    title: "Life Insurance",
    desc: "Secure your family's financial future with comprehensive life coverage. Our life insurance plans offer substantial sum assured to replace lost income and help your family maintain their lifestyle.",
    img: "/assets/generated/product-life.dim_600x400.jpg",
    icon: "🛡️",
    features: [
      "Sum assured up to ₹5 Crore",
      "Flexible premium payment",
      "Tax benefits under Section 80C",
      "Bonus additions every year",
    ],
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: "health",
    title: "Health Insurance",
    desc: "Comprehensive health coverage for you and your entire family. Get cashless treatment at 10,000+ network hospitals across Nepal and India.",
    img: "/assets/generated/product-health.dim_600x400.jpg",
    icon: "🏥",
    features: [
      "Cashless at 10,000+ hospitals",
      "Pre & post hospitalization",
      "No claim bonus up to 100%",
      "Day care procedures covered",
    ],
    color: "from-green-50 to-teal-50",
  },
  {
    id: "motor",
    title: "Motor Insurance",
    desc: "Comprehensive and third-party motor insurance plans for all types of vehicles. Drive worry-free with our 24/7 roadside assistance and quick claim settlement.",
    img: "/assets/generated/product-motor.dim_600x400.jpg",
    icon: "🚗",
    features: [
      "Own damage & third-party",
      "24/7 roadside assistance",
      "Zero depreciation add-on",
      "Cashless garage network",
    ],
    color: "from-orange-50 to-amber-50",
  },
  {
    id: "travel",
    title: "Travel Insurance",
    desc: "Travel domestically or internationally with complete peace of mind. Our travel insurance covers medical emergencies, trip cancellations, flight delays, and lost baggage.",
    img: "/assets/generated/product-travel.dim_600x400.jpg",
    icon: "✈️",
    features: [
      "Medical emergency abroad",
      "Trip cancellation cover",
      "Lost baggage protection",
      "Emergency evacuation",
    ],
    color: "from-sky-50 to-blue-50",
  },
  {
    id: "term",
    title: "Term Insurance",
    desc: "Pure protection plan offering maximum coverage at the most affordable premiums. Ensure your family's financial security in case of an unfortunate event.",
    img: "/assets/generated/product-term.dim_600x400.jpg",
    icon: "📋",
    features: [
      "Coverage up to age 85",
      "Critical illness add-on",
      "Return of premium option",
      "Accidental death benefit",
    ],
    color: "from-purple-50 to-pink-50",
  },
  {
    id: "investment",
    title: "Investment Plans",
    desc: "Grow your wealth while staying protected. Our ULIP and endowment plans offer dual benefit of investment growth and life insurance coverage.",
    img: "/assets/generated/product-investment.dim_600x400.jpg",
    icon: "📈",
    features: [
      "Market-linked returns",
      "Guaranteed maturity benefit",
      "Flexible fund switching",
      "Tax-free maturity proceeds",
    ],
    color: "from-yellow-50 to-orange-50",
  },
];

export default function Products({ navigate }: ProductsProps) {
  useReveal();

  useEffect(() => {
    document.title = "Insurance Products – Shikhar IMF";
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
            Our Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            All Insurance Products
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of insurance products. We partner
            with top-rated insurers to bring you the best coverage at
            competitive prices.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="reveal bg-card rounded-2xl overflow-hidden shadow-card border border-border"
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div
                    className={`p-8 flex flex-col justify-center bg-gradient-to-br ${product.color} ${i % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <div className="text-3xl mb-3">{product.icon}</div>
                    <h2 className="font-display font-bold text-navy text-2xl mb-3">
                      {product.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                      {product.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle
                            size={15}
                            className="text-green shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => navigate("contact")}
                      className="btn-green self-start flex items-center gap-2"
                      data-ocid="products.primary_button"
                    >
                      Get Quote <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-navy mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our expert advisors will analyze your needs and recommend the
            perfect coverage.
          </p>
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="btn-primary"
            data-ocid="products.primary_button"
          >
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
  );
}
