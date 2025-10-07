import React from 'react';

// Personal landing page component for Nicholas Prichard
// Built with Tailwind CSS utility classes. Default export is a single React component.

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-200 to-white text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-green-800 font-bold shadow-lg">NP</div>
          <div>
            <h1 className="text-lg font-semibold">Nicholas Prichard</h1>
            <p className="text-sm text-green-900/80">Regional Ops • Writer • Creator</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="https://x.com/nicktophobia1" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-white/40 rounded-lg">X</a>
          <a href="https://youtube.com/@nicktophobia5?si=Kq2GLA8wIbH_t-Sa" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-white/40 rounded-lg">YouTube</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/30 rounded-full px-4 py-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-800 animate-pulse" />
              <span className="text-sm font-medium">Writer • Regional Ops Leader • Growth Creator</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">I turn complex operations and raw ideas into clear stories that grow audiences & revenue.</h2>

            <p className="text-lg text-gray-700 max-w-xl">Former mechanic turned regional operations leader and full-time writer. I help brands scale via sharp copy, ghostwriting, and cross-platform content that converts readers into loyal customers.</p>

            <div className="flex items-center gap-4">
              <a href="#contact" className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-95">Book a call</a>
              <a href="#projects" className="inline-block text-sm px-4 py-2 rounded-lg bg-white/60">See my work</a>
            </div>

            <div className="mt-4 text-sm text-gray-600">Platforms: <a href="https://x.com/nicktophobia1" target="_blank" rel="noreferrer" className="underline">X</a> • <a href="https://youtube.com/@nicktophobia5?si=Kq2GLA8wIbH_t-Sa" target="_blank" rel="noreferrer" className="underline">YouTube</a></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 shadow-lg">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-600 to-white p-6">
              <h3 className="text-xl font-bold text-white/95">Hook: Convert service-first experience into stories that sell.</h3>
              <p className="mt-4 text-sm text-white/90">I write crisp, actionable copy and ghostwrite long-form content for leaders in operations, automotive, and creator spaces. My content focuses on outcomes: leads, calls, and measurable platform growth.</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-semibold text-white">Services</div>
                  <div className="text-xs text-white/90">Copywriting • Ghostwriting • Content Strategy</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-semibold text-white">Outcomes</div>
                  <div className="text-xs text-white/90">Leads • Engagement • Retention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">About</h3>
              <p className="text-gray-700">I began my career as a mechanic—hands-on, deadline-driven, and obsessed with reliability. Over the years I translated that discipline into operational leadership, rebuilding underperforming markets and leading multi-unit teams to measurable results. Simultaneously I taught myself storytelling, design, and growth marketing, and turned a side hustle into a full creative practice.</p>

              <p className="text-gray-700">Today I split my time between regional operations at scale and creating content that expands reach. I specialize in translating technical experience into accessible narratives and result-driven copy that fuels lead generation and audience growth.</p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">Operations</div>
                  <div className="text-xs text-gray-700">Multi-unit & P&L</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">Compliance</div>
                  <div className="text-xs text-gray-700">Audits & Standards</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">Content</div>
                  <div className="text-xs text-gray-700">Ghostwriting & Copy</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold">Creative</div>
                  <div className="text-xs text-gray-700">Design & Editing</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-sm font-medium text-green-900">Timeline</div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li><span className="font-semibold">2016–2025</span> — Freelance Social Media & Content</li>
                <li><span className="font-semibold">2018–2024</span> — Diesel & Automotive Tech Roles</li>
                <li><span className="font-semibold">2023–2025</span> — CEO & Founder, Unify eSports</li>
                <li><span className="font-semibold">2024–Present</span> — Truck Care General Manager, Goodyear</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-bold mb-6">Projects & Selected Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl p-6 shadow hover:scale-[1.01] transition">
              <h4 className="font-semibold">Goodyear — Market Stabilization Case Study</h4>
              <p className="mt-2 text-sm text-gray-700">Rebuilt foundations across 4-store cluster: drove $300K YoY revenue growth, improved compliance to 98%, increased operational efficiency by 20%.</p>
              <a className="mt-3 inline-block text-sm text-green-900 font-semibold">Read more →</a>
            </article>

            <article className="bg-white rounded-xl p-6 shadow hover:scale-[1.01] transition">
              <h4 className="font-semibold">Unify eSports — Brand Launch</h4>
              <p className="mt-2 text-sm text-gray-700">Built a creator-first community and content program, led onboarding, design, partnerships, and cross-platform publishing for audience growth.</p>
              <a className="mt-3 inline-block text-sm text-green-900 font-semibold">Read more →</a>
            </article>

            <article className="bg-white rounded-xl p-6 shadow hover:scale-[1.01] transition">
              <h4 className="font-semibold">Freelance — Cross-Platform Campaigns</h4>
              <p className="mt-2 text-sm text-gray-700">Result-driven content strategies for creators and small businesses, focusing on schedule optimization, creative hooks, and conversion.</p>
              <a className="mt-3 inline-block text-sm text-green-900 font-semibold">Read more →</a>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12">
          <div className="bg-white rounded-2xl p-8 shadow max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold">Work with me</h3>
            <p className="text-sm text-gray-700 mt-2">I take on select clients for copywriting, ghostwriting, and content strategy. Book a free consult to see if we’re a fit.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <form className="space-y-4">
                <input className="w-full rounded-lg border px-4 py-3" placeholder="Your name" />
                <input className="w-full rounded-lg border px-4 py-3" placeholder="Email" />
                <input className="w-full rounded-lg border px-4 py-3" placeholder="Company / Role (optional)" />
                <textarea className="w-full rounded-lg border px-4 py-3 h-28" placeholder="Brief project description" />
                <div className="flex items-center gap-3">
                  <button type="button" className="bg-green-900 text-white px-5 py-2 rounded-lg font-semibold">Book consult</button>
                  <a href="mailto:nprichardtech@gmail.com" className="inline-block text-sm text-green-900">Or email me</a>
                </div>
              </form>

              <div className="p-4">
                <div className="text-sm font-medium text-green-900">Availability</div>
                <p className="text-sm text-gray-700 mt-2">Open for select freelance projects and regional operations leadership roles. Response time typically within 48 hours.</p>

                <div className="mt-4">
                  <div className="text-sm font-medium text-green-900">Contact</div>
                  <div className="text-sm text-gray-700 mt-2">nprichardtech@gmail.com<br/>563-459-9385</div>

                  <div className="mt-4 flex items-center gap-3">
                    <a href="https://x.com/nicktophobia1" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-green-50 rounded">X</a>
                    <a href="https://youtube.com/@nicktophobia5?si=Kq2GLA8wIbH_t-Sa" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-green-50 rounded">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-700">© {new Date().getFullYear()} Nicholas Prichard — Copywriting, Ghostwriting & Operations. Crafted for leads & conversions.</div>
      </footer>
    </div>
  );
}
