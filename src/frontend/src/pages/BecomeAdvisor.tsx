import {
  Award,
  CheckCircle,
  DollarSign,
  Loader2,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useReveal } from "../hooks/useReveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  experience?: string;
}

const benefits = [
  {
    icon: <DollarSign size={24} />,
    title: "High Earning Potential",
    desc: "Earn attractive commissions on every policy you sell, with no upper limit on your income.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Career Growth",
    desc: "Rise from advisor to regional manager with our structured career progression program.",
  },
  {
    icon: <Users size={24} />,
    title: "Large Network",
    desc: "Join 200+ advisors across Nepal. Leverage our brand, tools, and client database.",
  },
  {
    icon: <Award size={24} />,
    title: "Recognition & Rewards",
    desc: "Top performers earn international trips, luxury gifts, and prestigious awards annually.",
  },
];

export default function BecomeAdvisor() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useReveal();

  useEffect(() => {
    document.title = "Become an Advisor – Shikhar IMF";
  }, []);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.location.trim()) e.location = "Location is required";
    if (!form.experience) e.experience = "Please select experience";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !actor) return;
    setSubmitting(true);
    try {
      await actor.submitAdvisorApplication({
        ...form,
        timestamp: BigInt(Date.now()),
      });
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", location: "", experience: "" });
      toast.success(
        "Application submitted! We will contact you within 24 hours.",
      );
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green font-semibold text-sm uppercase tracking-wider mb-2">
            Career Opportunity
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Become an Advisor
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Join our growing network of certified insurance advisors. Build a
            rewarding career while helping families secure their future.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="section-heading">
              Why Become a Shikhar IMF Advisor?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-delay-${i + 1} bg-card rounded-2xl p-6 text-center shadow-card`}
              >
                <div className="w-14 h-14 rounded-2xl bg-navy/10 text-navy flex items-center justify-center mx-auto mb-4">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Image section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image side */}
            <div className="reveal">
              <img
                src="/assets/generated/become-advisor.dim_800x500.jpg"
                alt="Become an Advisor"
                className="rounded-2xl shadow-xl w-full object-cover h-72 md:h-96"
              />
              <div className="mt-8 space-y-3">
                {[
                  "No prior experience required — we train you",
                  "Flexible working hours — work at your own pace",
                  "Dedicated support from regional managers",
                  "Access to online tools and sales dashboard",
                  "Monthly performance bonuses and incentives",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-green mt-0.5 shrink-0"
                    />
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="reveal reveal-delay-2">
              <div className="bg-card rounded-2xl shadow-card border border-border p-8">
                <h2 className="font-display font-bold text-navy text-2xl mb-2">
                  Apply Now
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and our team will reach out within 24
                  hours.
                </p>

                {success && (
                  <div
                    className="bg-green/10 border border-green/30 rounded-xl p-4 mb-5 flex items-center gap-3"
                    data-ocid="advisor.success_state"
                  >
                    <CheckCircle size={20} className="text-green" />
                    <p className="text-green font-medium text-sm">
                      Application submitted successfully! We'll contact you
                      soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="a-name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="a-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        data-ocid="advisor.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.name ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.name && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="advisor.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="a-email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="a-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        data-ocid="advisor.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.email ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.email && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="advisor.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="a-phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="a-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+977 98XXXXXXXX"
                        data-ocid="advisor.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.phone ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.phone && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="advisor.error_state"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="a-location"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Location / City *
                      </label>
                      <input
                        id="a-location"
                        type="text"
                        value={form.location}
                        onChange={(e) =>
                          handleChange("location", e.target.value)
                        }
                        placeholder="Kathmandu, Pokhara..."
                        data-ocid="advisor.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.location
                            ? "border-destructive"
                            : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.location && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="advisor.error_state"
                        >
                          {errors.location}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="a-exp"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Insurance Experience *
                      </label>
                      <select
                        id="a-exp"
                        value={form.experience}
                        onChange={(e) =>
                          handleChange("experience", e.target.value)
                        }
                        data-ocid="advisor.select"
                        className={`w-full px-4 py-3 border rounded-xl text-sm bg-background transition-all ${
                          errors.experience
                            ? "border-destructive"
                            : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      >
                        <option value="">Select your experience</option>
                        <option value="none">No experience (fresher)</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      {errors.experience && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="advisor.error_state"
                        >
                          {errors.experience}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-green flex items-center justify-center gap-2 py-3.5"
                      data-ocid="advisor.submit_button"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />{" "}
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
