"use client";

import { useState, FormEvent } from "react";

const projectOptions = [
  "De Joya - New Capital",
  "De Joya 3 - New Capital",
  "Ezdan - New Cairo",
  "De Joya New Zayed",
  "Pukka - North Coast",
  "Azure - North Coast",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Journey to{" "}
              <span className="text-gold">Premium Living</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              Register your interest today and be the first to receive exclusive
              updates, pricing, and early-bird offers on our latest developments.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Call Us</p>
                  <p className="text-white font-medium text-sm">+20 100 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <p className="text-white font-medium text-sm">info@tajmisr.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Head Office</p>
                  <p className="text-white font-medium text-sm">5th Settlement, New Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal-right">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-muted text-sm">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    Register Your Interest
                  </h3>
                  <p className="text-text-muted text-sm mb-8">
                    Fill in your details and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder=" "
                        className="peer"
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder=" "
                        className="peer"
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        className="peer"
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>

                    {/* Project of Interest */}
                    <div className="form-group">
                      <select id="project" required defaultValue="">
                        <option value="" disabled hidden></option>
                        {projectOptions.map((proj) => (
                          <option key={proj} value={proj}>
                            {proj}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="project">Project of Interest</label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full btn-gold py-4 rounded-xl text-sm font-semibold tracking-wider uppercase mt-2"
                    >
                      Submit Inquiry
                    </button>

                    <p className="text-text-muted text-xs text-center mt-4">
                      By submitting, you agree to our privacy policy and consent
                      to being contacted by Taj Misr Developments.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
