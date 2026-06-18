"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Rocket, Sparkles } from "lucide-react";
import Animate from "./Animate";

const interests = [
  "Early Access",
  "Become a Seller / Engineer",
  "Partnership",
  "Investment Opportunity",
];

const FORM_NAME = "interest";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Early Access",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...form }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-started" className="bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate variant="scale">
          <div className="section-bg-dark rounded-3xl px-6 sm:px-10 py-14 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: App coming soon */}
              <div className="text-center lg:text-left">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl overflow-hidden bg-white flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-2xl shadow-orange-500/30"
                >
                  <Image src="/auc.png" alt="AUC Store app icon" width={80} height={80} className="object-contain w-full h-full" />
                </motion.div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
                  <Rocket className="w-3.5 h-3.5" />
                  Launching Soon
                </div>

                <h2 className="section-heading text-white mb-4">
                  Our App Goes{" "}
                  <span className="gradient-text">Live Soon</span>
                </h2>
                <p className="text-white/55 text-lg max-w-md mx-auto lg:mx-0 mb-6">
                  AUC Store is almost here. Fill the form to register your interest, become an early
                  partner, or explore an investment opportunity in India&apos;s unified marketplace.
                </p>

                <ul className="space-y-2 text-left max-w-sm mx-auto lg:mx-0">
                  {["Be first to get early access", "Priority onboarding for sellers & engineers", "Partnership & investment enquiries welcome"].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Interest / investment form */}
              <div className="glass-dark rounded-2xl p-6 sm:p-7 border border-white/10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">Thank you!</h3>
                    <p className="text-white/55 text-sm">
                      Your interest has been registered. We&apos;ll reach out as soon as AUC Store launches.
                    </p>
                  </div>
                ) : (
                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    <p className="hidden">
                      <label>
                        Do not fill this out: <input name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      <h3 className="text-white font-bold">Register Your Interest</h3>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">I&apos;m interested in</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                      >
                        {interests.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a1428] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Message (optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit more..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs text-center">{error}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2 btn-primary px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Interest
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}