import {
  MemoryIcon,
  NativeIcon,
  PortableIcon,
} from "@/components/illustrations";

const INSTALL_URL = "#install"; // TODO: Chrome Web Store URL once published
const GITHUB_URL = "#github";   // TODO: GitHub repo URL

const PROVIDERS = ["Claude", "ChatGPT", "Gemini", "DeepSeek", "Manus"];

export default function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <Why />
      <FinalCTA />
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[44px] md:text-[64px] leading-[1.10] text-ink">
          Every model, <em>natively</em>.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-lg md:text-xl leading-[1.6] text-olive">
          One prompt, broadcast to your real Claude, ChatGPT, Gemini, DeepSeek,
          and Manus &mdash; keeping each one&apos;s voice, memory, and features
          fully intact.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={INSTALL_URL}
            className="inline-flex items-center rounded-lg bg-terracotta px-5 py-3 text-[15px] text-ivory transition-colors hover:bg-coral"
          >
            Add to Chrome &mdash; Free
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-lg px-5 py-3 text-[15px] text-charcoal shadow-ring transition-shadow hover:shadow-ring-deep"
          >
            Watch demo ↓
          </a>
        </div>

        <p className="mt-14 text-sm text-stone">
          Works with{" "}
          <span className="text-charcoal">
            {PROVIDERS.join(" · ")}
          </span>
        </p>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="aspect-video w-full rounded-3xl bg-ivory shadow-whisper flex items-center justify-center">
          <p className="font-mono text-sm text-stone">
            Demo video placeholder
          </p>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      Icon: NativeIcon,
      title: "Native, never wrapped.",
      body:
        "Every reply comes from the real Claude, ChatGPT, or Gemini — not from us relaying on their behalf. Artifacts, Canvas, Deep Research, code execution, web search: everything works the way each maker intended.",
    },
    {
      Icon: MemoryIcon,
      title: "Your memory keeps compounding.",
      body:
        "Conversations live inside your own accounts, so each provider's long-term memory and personalization keep learning from you. The longer you use it, the better they know you — a future no third-party aggregator can offer.",
    },
    {
      Icon: PortableIcon,
      title: "No vendor lock-in.",
      body:
        "The same context lives across every provider you care about. If one account gets banned, rate-limited, or priced out of reach, you are never stranded on a single vendor's island.",
    },
  ];

  return (
    <section className="px-6 py-24 md:py-32 border-t border-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[36px] md:text-[52px] leading-[1.20] text-ink">
            What stays native.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl bg-ivory border border-cream p-8 md:p-10"
            >
              <Icon className="w-14 h-14 mb-6" />
              <h3 className="text-[25px] leading-[1.20] text-ink mb-4">
                {title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-olive">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[36px] md:text-[52px] leading-[1.20] text-ivory">
          One prompt. Every model. Native, always.
        </h2>
        <div className="mt-10">
          <a
            href={INSTALL_URL}
            className="inline-flex items-center rounded-lg bg-terracotta px-6 py-3 text-[15px] text-ivory transition-colors hover:bg-coral"
          >
            Add to Chrome &mdash; Free
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-dark-surface px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-silver">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="font-serif text-ivory">ask&apos;em</span>
        </span>
        <nav className="flex gap-6">
          <a href={GITHUB_URL} className="hover:text-ivory transition-colors">
            GitHub
          </a>
          <a href="#privacy" className="hover:text-ivory transition-colors">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
