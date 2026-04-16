import {
  MemoryIcon,
  NativeIcon,
  PortableIcon,
} from "@/components/illustrations";

const INSTALL_URL = "#install"; // TODO: Chrome Web Store URL once published
const GITHUB_URL = "#github";   // TODO: GitHub repo URL

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Demo />
      <Why />
      <FinalCTA />
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
        <a
          href="#top"
          className="font-serif text-[20px] text-ink hover:opacity-80 transition-opacity"
        >
          ask&apos;em
        </a>

        <nav
          aria-label="Primary"
          className="hidden sm:flex items-center gap-7 text-[15px] text-olive"
        >
          <a href="#demo" className="hover:text-ink transition-colors">
            Demo
          </a>
          <a href="#why" className="hover:text-ink transition-colors">
            Why
          </a>
        </nav>

        <a
          href={INSTALL_URL}
          className="inline-flex items-center rounded-lg bg-terracotta px-4 py-2 text-[14px] text-ivory transition-colors hover:bg-coral"
        >
          Install
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-6 pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[44px] md:text-[64px] leading-[1.10] text-ink">
          Every model, <em>natively</em>.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-lg md:text-xl leading-[1.6] text-olive">
          Send the same prompt to multiple AI chat providers at once,
          &mdash; without leaving the official apps,
          and without giving up each provider&apos;s memory, personalization, or native features.
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

        <p className="mt-10 text-sm text-charcoal">
          No API setup &middot; No wrapper UI &middot; No copy-pasting
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
      Icon: PortableIcon,
      title: "Compare without copy-pasting.",
      body:
        "Run the same prompt across multiple providers while the question is still fresh, then compare tone, depth, and reasoning side by side — inside the real Claude, ChatGPT, Gemini, DeepSeek, and Manus, not a relay.",
    },
    {
      Icon: MemoryIcon,
      title: "Keep memory where it belongs.",
      body:
        "Every conversation stays inside each official app, so each provider's long-term memory and personalization keep building their own understanding of you. The longer you use it, the better they know you.",
    },
    {
      Icon: NativeIcon,
      title: "Reduce vendor lock-in.",
      body:
        "Build context across providers instead of betting your future workflow on one account, one model family, or one company policy. If one gets banned, rate-limited, or priced out of reach, you are never stranded.",
    },
  ];

  return (
    <section id="why" className="px-6 py-24 md:py-32 border-t border-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <h2 className="text-[36px] md:text-[52px] leading-[1.20] text-ink">
            A simpler workflow now.
            <br />
            A safer one later.
          </h2>
          <p className="mt-6 text-lg leading-[1.6] text-olive">
            Useful on day one because it removes friction. More valuable over
            time because your context keeps living where it can compound.
          </p>
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
    <section className="bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 font-serif italic text-[17px] text-coral">
          Long-term value
        </p>
        <h2 className="text-[36px] md:text-[52px] leading-[1.20] text-ivory">
          Keep your AI history in the rooms that actually remember you.
        </h2>
        <div className="mt-12">
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
      <div className="mx-auto max-w-6xl flex flex-col gap-5 text-sm text-silver">
        <div className="flex flex-wrap items-center justify-between gap-4">
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
        <p className="text-xs text-stone max-w-xl">
          Independent product. Not affiliated with Anthropic, OpenAI, Google,
          DeepSeek, Manus, or any other provider.
        </p>
      </div>
    </footer>
  );
}
