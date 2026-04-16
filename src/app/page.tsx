const principles = [
  {
    title: "Official chats stay official",
    body: "Your conversations remain inside Claude, ChatGPT, Gemini, and the apps themselves. ask'em does not replace them with another shell.",
  },
  {
    title: "Memory keeps compounding",
    body: "Long-term context, personalization, and history can keep accumulating where they are most likely to matter later.",
  },
  {
    title: "You keep optionality",
    body: "Build real context across providers so you are not trapped if one account, one policy, or one model line stops fitting your work.",
  },
];

export default function Home() {
  return (
    <main className="v2-page">
      <header className="v2-header">
        <div className="v2-shell v2-nav">
          <a className="v2-wordmark" href="#top">
            ask&apos;em
          </a>
          <nav className="v2-links" aria-label="Primary">
            <a href="#why">Why</a>
            <a href="#demo">Demo</a>
            <a href="#cta">Install</a>
          </nav>
        </div>
      </header>

      <section className="v2-hero" id="top">
        <div className="v2-shell v2-hero-grid">
          <div className="v2-hero-copy">
            <p className="v2-overline">One prompt, every official AI chat</p>
            <h1>Use every major AI chat without leaving the official apps.</h1>
            <p className="v2-lead">
              Compare answers now. Keep memory, personalization, and future
              optionality growing in the products themselves.
            </p>
            <div className="v2-actions">
              <a className="v2-button v2-button-primary" href="#cta">
                Add to Chrome
              </a>
              <a className="v2-button v2-button-secondary" href="#demo">
                Watch Demo
              </a>
            </div>
            <p className="v2-footnote">
              No API setup. No wrapper UI. No copy-pasting between tabs.
            </p>
          </div>

          <div className="v2-product" aria-hidden="true">
            <div className="v2-product-stage">
              <div className="v2-stage-header">
                <span />
                <span />
                <span />
              </div>
              <div className="v2-stage-grid">
                <div className="v2-panel v2-panel-main">
                  <p className="v2-panel-label">ask&apos;em set</p>
                  <div className="v2-panel-row">
                    <span>Claude</span>
                    <strong>ready</strong>
                  </div>
                  <div className="v2-panel-row">
                    <span>ChatGPT</span>
                    <strong>ready</strong>
                  </div>
                  <div className="v2-panel-row">
                    <span>Gemini</span>
                    <strong>ready</strong>
                  </div>
                  <div className="v2-prompt-box">
                    Rewrite this landing page headline three ways.
                  </div>
                </div>
                <div className="v2-panel">
                  <p className="v2-panel-label">Claude</p>
                  <div className="v2-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="v2-panel">
                  <p className="v2-panel-label">ChatGPT</p>
                  <div className="v2-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="v2-panel">
                  <p className="v2-panel-label">Gemini</p>
                  <div className="v2-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-summary">
        <div className="v2-shell v2-summary-grid">
          <p>Compare providers in parallel.</p>
          <p>Keep context inside official chats.</p>
          <p>Reduce vendor lock-in over time.</p>
        </div>
      </section>

      <section className="v2-principles" id="why">
        <div className="v2-shell">
          <div className="v2-section-head">
            <p className="v2-overline">Why it matters</p>
            <h2>A simpler workflow in the short term. A safer one in the long term.</h2>
          </div>
          <div className="v2-card-grid">
            {principles.map((item) => (
              <article className="v2-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-dark" id="demo">
        <div className="v2-shell v2-dark-grid">
          <div className="v2-dark-copy">
            <p className="v2-overline v2-overline-dark">Demo</p>
            <h2>Show the same prompt flowing into multiple native chats.</h2>
            <p>
              This slot is reserved for your product video. It should answer
              the practical question quickly: what happens after I hit send?
            </p>
          </div>
          <div className="v2-video-frame">
            <div className="v2-video-inner">
              <span>Video placeholder</span>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-editorial">
        <div className="v2-shell v2-editorial-grid">
          <div>
            <p className="v2-overline">Long-term value</p>
            <h2>As AI gets more personal, it matters where your conversations live.</h2>
          </div>
          <div className="v2-editorial-copy">
            <p>
              Third-party tools can make access easier. But if memory and
              personalization become more valuable over time, the location of
              your conversation history starts to matter more too.
            </p>
            <p>
              ask&apos;em keeps those conversations in the official products while
              still letting you build real familiarity across more than one
              provider.
            </p>
          </div>
        </div>
      </section>

      <section className="v2-cta" id="cta">
        <div className="v2-shell v2-cta-card">
          <div>
            <p className="v2-overline v2-overline-dark">Start here</p>
            <h2>Keep your options open while your context keeps growing.</h2>
          </div>
          <a className="v2-button v2-button-light" href="#top">
            Add to Chrome
          </a>
        </div>
      </section>

      <footer className="v2-footer">
        <div className="v2-shell v2-footer-row">
          <p>ask&apos;em</p>
          <p>Independent product. Not affiliated with Anthropic, OpenAI, Google, or other providers.</p>
        </div>
      </footer>
    </main>
  );
}
