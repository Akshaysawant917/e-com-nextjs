"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus({ ok: true, msg: "Thanks! We received your message." });
      e.target.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left: Contact details + map */}
        <section className="p-8 md:p-10 bg-gradient-to-br from-rose-50 via-white to-rose-50">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Say hello 👋</h1>
          <p className="text-sm text-gray-600 mb-6">Have a custom order, wholesale enquiry, or just want to chat about yarn? We’d love to hear from you.</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-rose-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-gray-600">hello@crochetcozy.example</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-rose-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m7 13l3 3-3 3M21 10v6a2 2 0 01-2 2h-3l-4-4v-4a2 2 0 012-2h5"/></svg>
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-rose-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2"/></svg>
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="text-sm text-gray-600">Bengaluru, India (pickup by appointment)</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-2">Follow us</h2>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="text-sm underline">Instagram</a>
              <a href="#" aria-label="Facebook" className="text-sm underline">Facebook</a>
              <a href="#" aria-label="WhatsApp" className="text-sm underline">WhatsApp</a>
            </div>
          </div>

          <div className="mt-6 hidden md:block">
            {/* lightweight map placeholder - replace iframe src with real map if available */}
            <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Map placeholder</div>
          </div>
        </section>

        {/* Right: Contact form */}
        <section className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg border-gray-200 shadow-sm p-3" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg border-gray-200 shadow-sm p-3" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" required rows="5" className="w-full rounded-lg border-gray-200 shadow-sm p-3" placeholder="Tell us about your order or question..."></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" disabled={loading} className="inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold shadow-sm bg-rose-500 text-white hover:opacity-95">
                {loading ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.msg}</p>
              )}
            </div>

            <p className="text-xs text-gray-400">We typically reply within 24–48 hours.</p>
          </form>
        </section>
      </div>
    </main>
  );
}
