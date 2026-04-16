const benefits = [
  {
    title: "Compare without copy-pasting",
    body: "Run the same prompt across multiple providers while the question is still fresh, then compare tone, depth, and reasoning side by side.",
  },
  {
    title: "Keep memory where it belongs",
    body: "Every conversation stays inside each official app, so Claude, ChatGPT, Gemini, and the rest keep building their own long-term understanding of you.",
  },
  {
    title: "Reduce vendor lock-in",
    body: "Build context across providers instead of betting your future workflow on one account, one model family, or one company policy.",
  },
];

const screenshots = [
  {
    label: "Workspace overview",
    title: "Keep each provider in the same editorial flow",
    note: "Popup-level control for active sets, sync state, and provider selection.",
  },
  {
    label: "Official chats",
    title: "Let each conversation keep compounding naturally",
    note: "Your future screenshots can show the same prompt landed in multiple native interfaces.",
  },
  {
    label: "Future-proof setup",
    title: "Maintain optionality without resetting your context",
    note: "Use this slot for a screenshot that proves the anti-lock-in story at a glance.",
  },
];

const faqs = [
  {
    question: "Why not just use a third-party wrapper?",
    answer:
      "Wrappers can be convenient, but they often become the place where your context lives. ask'em keeps your conversations inside the official apps, where memory, personalization, and account history can continue to compound over time.",
  },
  {
    question: "Does ask'em replace the official chat apps?",
    answer:
      "No. It sits alongside them. The goal is to help you use multiple providers without giving up their native interfaces, workflows, or provider-specific features.",
  },
  {
    question: "Who is this for?",
    answer:
      "People who compare models often, do meaningful work in AI chat interfaces, and do not want long-term context trapped inside a single provider.",
  },
];

export default function Home() {
  return (
    <main className="askem-page">
      <header className="askem-site-header">
        <div className="askem-shell askem-nav">
          <a className="askem-wordmark" href="#top">
            ask&apos;em
          </a>
          <nav className="askem-nav-links" aria-label="Primary">
            <a href="#demo">Demo</a>
            <a href="#benefits">Why it matters</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="askem-button askem-button-primary" href="#cta">
            Add to Chrome
          </a>
        </div>
      </header>

      <section className="askem-hero" id="top">
        <div className="askem-hero-glow askem-hero-glow-left" />
        <div className="askem-hero-glow askem-hero-glow-right" />
        <div className="askem-shell askem-hero-grid">
          <div className="askem-hero-copy askem-reveal">
            <p className="askem-overline">One prompt, every official AI chat</p>
            <h1>Compare answers now. Build context for the long term.</h1>
            <p className="askem-hero-body">
              Send the same prompt to Claude, ChatGPT, Gemini, and more while
              every conversation keeps living inside each provider&apos;s own
              official chat.
            </p>
            <div className="askem-hero-actions">
              <a className="askem-button askem-button-primary" href="#cta">
                Add to Chrome
              </a>
              <a className="askem-button askem-button-secondary" href="#demo">
                Watch Demo
              </a>
            </div>
            <p className="askem-hero-meta">
              No API setup. No wrapper UI. No copy-pasting between tabs.
            </p>
          </div>

          <div className="askem-editorial-collage askem-reveal" aria-hidden="true">
            <div className="askem-collage-card askem-collage-card-main">
              <span className="askem-card-tag">Official chats</span>
              <p className="askem-card-title">Your AI relationships keep their own memory.</p>
              <div className="askem-thread">
                <div className="askem-thread-line">
                  <span className="askem-thread-provider">Claude</span>
                  <span className="askem-thread-copy">Knows your writing tone.</span>
                </div>
                <div className="askem-thread-line">
                  <span className="askem-thread-provider">ChatGPT</span>
                  <span className="askem-thread-copy">Keeps your project context.</span>
                </div>
                <div className="askem-thread-line">
                  <span className="askem-thread-provider">Gemini</span>
                  <span className="askem-thread-copy">Builds its own personalization.</span>
                </div>
              </div>
            </div>
            <div className="askem-collage-card askem-collage-card-note">
              <span className="askem-card-tag">Future-proof</span>
              <p>Train optionality, not dependence.</p>
            </div>
            <div className="askem-orbit askem-orbit-one">Claude</div>
            <div className="askem-orbit askem-orbit-two">ChatGPT</div>
            <div className="askem-orbit askem-orbit-three">Gemini</div>
          </div>
        </div>

        <div className="askem-shell askem-ticker askem-reveal">
          <p>Works with official chats</p>
          <p>Context stays where it compounds</p>
          <p>Reduces vendor lock-in</p>
        </div>
      </section>

      <section className="askem-dark-section" id="demo">
        <div className="askem-shell askem-dark-grid">
          <div className="askem-section-copy askem-reveal">
            <p className="askem-overline askem-overline-dark">See it in motion</p>
            <h2>One workflow stretched across every provider you care about.</h2>
            <p>
              The demo belongs here. It should show a prompt starting in one
              native chat, then rippling across the rest without leaving the
              official surfaces.
            </p>
          </div>
          <div className="askem-demo-frame askem-reveal">
            <div className="askem-demo-stage">
              <span className="askem-demo-label">Demo reel placeholder</span>
              <p>Drop your product video here.</p>
              <p className="askem-demo-sub">
                16:9 works best. Dark UI footage will look especially strong
                against this section.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="askem-benefits" id="benefits">
        <div className="askem-shell">
          <div className="askem-section-header askem-reveal">
            <p className="askem-overline">Why it matters</p>
            <h2>More than side-by-side comparison.</h2>
            <p>
              ask&apos;em is useful on day one because it removes friction. It
              gets more valuable later because it keeps your context alive
              across the official products themselves.
            </p>
          </div>
          <div className="askem-benefit-grid">
            {benefits.map((benefit, index) => (
              <article
                className="askem-benefit-card askem-reveal"
                key={benefit.title}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="askem-benefit-index">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="askem-editorial-band">
        <div className="askem-shell askem-editorial-band-grid">
          <div className="askem-editorial-quote askem-reveal">
            <p className="askem-overline">Long-term value</p>
            <h2>Keep your AI history in the rooms that actually remember you.</h2>
          </div>
          <div className="askem-editorial-body askem-reveal">
            <p>
              Third-party tools can unify access. But the more AI becomes
              personal, the more it matters where your conversations actually
              live. ask&apos;em keeps them inside the official products, so memory
              and personalization do not get outsourced to a fragile middle
              layer.
            </p>
            <p>
              That also means you can keep multiple provider relationships warm
              at once. If one account breaks, changes pricing, or simply stops
              being the best fit, you are not rebuilding yourself from zero.
            </p>
          </div>
        </div>
      </section>

      <section className="askem-screenshots">
        <div className="askem-shell">
          <div className="askem-section-header askem-reveal">
            <p className="askem-overline">Inside the product</p>
            <h2>Slots ready for the assets that will make the case instantly.</h2>
          </div>
          <div className="askem-shot-grid">
            {screenshots.map((shot, index) => (
              <article
                className="askem-shot-card askem-reveal"
                key={shot.title}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="askem-shot-visual">
                  <div className="askem-shot-window">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="askem-shot-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <p className="askem-shot-label">{shot.label}</p>
                <h3>{shot.title}</h3>
                <p>{shot.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="askem-faq" id="faq">
        <div className="askem-shell askem-faq-grid">
          <div className="askem-section-copy askem-reveal">
            <p className="askem-overline">FAQ</p>
            <h2>Short answers for the obvious questions.</h2>
          </div>
          <div className="askem-faq-list">
            {faqs.map((item, index) => (
              <article
                className="askem-faq-item askem-reveal"
                key={item.question}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="askem-cta" id="cta">
        <div className="askem-shell askem-cta-card askem-reveal">
          <div>
            <p className="askem-overline askem-overline-dark">Start here</p>
            <h2>Keep your options open while your AI context keeps growing.</h2>
          </div>
          <div className="askem-cta-actions">
            <a className="askem-button askem-button-light" href="#top">
              Add to Chrome
            </a>
            <a className="askem-button askem-button-dark" href="#demo">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      <footer className="askem-footer">
        <div className="askem-shell askem-footer-row">
          <p>ask&apos;em</p>
          <p>
            Independent product. Not affiliated with Anthropic, OpenAI, Google,
            or other providers.
          </p>
        </div>
      </footer>
    </main>
  );
}
