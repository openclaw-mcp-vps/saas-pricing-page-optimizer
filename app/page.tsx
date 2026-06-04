export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          A/B Testing for Pricing Pages
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Guessing.<br />
          <span className="text-[#58a6ff]">Optimize Your Pricing Page.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PriceLab lets SaaS founders and growth marketers run real A/B tests on pricing structures, button colors, and copy — then shows you exactly what converts.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Optimizing — $15/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Embed in minutes. Cancel anytime.</p>
      </section>

      {/* Pricing Card */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to grow conversions</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B experiments",
              "Embeddable JS widget (1 line)",
              "Real-time conversion analytics",
              "Button color & copy testing",
              "Pricing structure variants",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How do I add PriceLab to my pricing page?",
              a: "After signing up, you get a one-line JavaScript snippet. Paste it into your pricing page's HTML and your experiments go live instantly — no framework required."
            },
            {
              q: "What exactly can I A/B test?",
              a: "You can test pricing amounts, plan names, button colors, CTA copy, feature list ordering, and entire pricing tier structures. Create variants in the dashboard and PriceLab handles the split traffic automatically."
            },
            {
              q: "How is conversion tracked?",
              a: "PriceLab tracks clicks on your checkout buttons and fires a conversion event when a user completes a purchase. You see real-time win rates per variant in your analytics dashboard."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        © {new Date().getFullYear()} PriceLab. All rights reserved.
      </footer>
    </main>
  );
}
