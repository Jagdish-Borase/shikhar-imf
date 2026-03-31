import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useReveal } from "../hooks/useReveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  insuranceType?: string;
  message?: string;
}

const insuranceTypes = [
  "Life Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Travel Insurance",
  "Term Insurance",
  "Investment Plans",
  "Other",
];

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useReveal();

  useEffect(() => {
    document.title = "Contact Us – Shikhar IMF";
  }, []);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.insuranceType) e.insuranceType = "Please select insurance type";
    if (!form.message.trim()) e.message = "Message is required";
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
      await actor.submitContactForm({
        ...form,
        timestamp: BigInt(Date.now()),
      });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        insuranceType: "",
        message: "",
      });
      toast.success("Message sent! Our team will reach you within 24 hours.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
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
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Have questions or need a quote? Our team of expert advisors is ready
            to help you find the right insurance plan.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="reveal space-y-5">
              <h2 className="font-display font-bold text-2xl text-navy mb-6">
                Get in Touch
              </h2>
              {[
                {
                  Icon: MapPin,
                  label: "Visit Us",
                  text: "Financial District, Kathmandu, Nepal",
                },
                { Icon: Phone, label: "Call Us", text: "+977-1-XXXXXXX" },
                { Icon: Mail, label: "Email Us", text: "info@shikharimf.com" },
                {
                  Icon: Clock,
                  label: "Working Hours",
                  text: "Sun–Fri: 9AM–6PM | Sat: 10AM–2PM",
                },
              ].map(({ Icon, label, text }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{label}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-8 bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-white/75 text-sm mb-4">
                  Call our helpline for instant assistance
                </p>
                <a
                  href="tel:+9771XXXXXXX"
                  className="block btn-green text-center text-sm py-2.5"
                >
                  📞 Call Now: +977-1-XXXXXXX
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="reveal reveal-delay-2 lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-card border border-border p-8">
                <h2 className="font-display font-bold text-navy text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                {success && (
                  <div
                    className="bg-green/10 border border-green/30 rounded-xl p-4 mb-5 flex items-center gap-3"
                    data-ocid="contact.success_state"
                  >
                    <CheckCircle size={20} className="text-green" />
                    <p className="text-green font-medium text-sm">
                      Your message has been sent! We'll contact you shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        data-ocid="contact.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.name ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.name && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="c-email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        data-ocid="contact.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.email ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.email && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="c-phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+977 98XXXXXXXX"
                        data-ocid="contact.input"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all ${
                          errors.phone ? "border-destructive" : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.phone && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="c-type"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Insurance Type *
                      </label>
                      <select
                        id="c-type"
                        value={form.insuranceType}
                        onChange={(e) =>
                          handleChange("insuranceType", e.target.value)
                        }
                        data-ocid="contact.select"
                        className={`w-full px-4 py-3 border rounded-xl text-sm bg-background transition-all ${
                          errors.insuranceType
                            ? "border-destructive"
                            : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      >
                        <option value="">Select insurance type</option>
                        {insuranceTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.insuranceType && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.insuranceType}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="c-message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="c-message"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell us about your insurance needs or ask us anything..."
                        rows={4}
                        data-ocid="contact.textarea"
                        className={`w-full px-4 py-3 border rounded-xl text-sm transition-all resize-none ${
                          errors.message
                            ? "border-destructive"
                            : "border-border"
                        } focus:border-navy focus:ring-2 focus:ring-navy/10`}
                      />
                      {errors.message && (
                        <p
                          className="text-destructive text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
                        data-ocid="contact.submit_button"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />{" "}
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-8">
            <h2 className="section-heading">Find Us on the Map</h2>
            <p className="section-subheading">
              Visit our office in the heart of Kathmandu, Nepal
            </p>
          </div>
          <div
            className="reveal rounded-2xl overflow-hidden shadow-xl border border-border"
            style={{ height: "400px" }}
          >
            <iframe
              title="Shikhar IMF Location – Kathmandu, Nepal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625952073!2d85.2911637!3d27.7089413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb96f67fcbf72e398!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
