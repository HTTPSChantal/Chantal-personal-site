import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import {
  PROJECTS,
  ProjectCategory,
  ProjectItem,
  QUICK_FACTS,
} from './data/portfolioData';

const EMAIL_ADDRESS = 'chantalthiennga@gmail.com';
const FILTER_OPTIONS: Array<'All' | ProjectCategory> = [
  'All',
  'Health-Tech & UX',
  'Product Explorations',
];

function CoverMotif({ motif }: { motif: ProjectItem['coverMotif'] }) {
  if (motif === 'accessibility') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="h-14 w-14 text-[#2a2233]/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="40" cy="24" r="9" />
        <path d="M18 40h44M40 33v28M28 61l12-16 12 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className="h-14 w-14 text-[#2a2233]/20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M22 46v-12M31 54V26M40 60V20M49 50V30M58 44V36"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderNote, setSenderNote] = useState('');
  const [notePrepared, setNotePrepared] = useState(false);

  const visibleProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleNoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      senderName.trim() ? `Hello from ${senderName.trim()}` : 'Connecting via your portfolio'
    );
    const body = encodeURIComponent(senderNote.trim());
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    setNotePrepared(true);
    window.setTimeout(() => setNotePrepared(false), 3000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fbf7f4] text-[#2a2233]">
      {/* Atmospheric pastel background glows */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-[#b9a6ff] opacity-45 blur-[96px]" />
        <div className="absolute top-[38%] -left-40 h-[400px] w-[400px] rounded-full bg-[#ffb8cf] opacity-35 blur-[96px]" />
        <div className="absolute -bottom-28 right-[12%] h-[360px] w-[360px] rounded-full bg-[#ffd6b8] opacity-40 blur-[96px]" />
      </div>

      <Navbar />

      <main id="top" className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
        {/* Hero Section */}
        <header className="pt-20 pb-20 md:pt-28 md:pb-24">
          <p className="text-sm font-medium text-[#685e74]">Toronto, Ontario</p>

          <h1
            className="mt-5 max-w-4xl font-serif text-5xl font-normal tracking-[-0.03em] leading-[1.03] text-[#2a2233] sm:text-6xl md:text-[5.25rem]"
            style={{ textWrap: 'balance' }}
          >
            Hello,{' '}
            <em className="bg-gradient-to-r from-[#7050e6] to-[#e0589a] bg-clip-text italic text-transparent">
              World!
            </em>
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-[#2a2233] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7050e6]"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#2a2233] px-7 py-3.5 text-sm font-medium text-[#2a2233] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a2233]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7050e6]"
            >
              Let&apos;s connect
            </a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 border-t border-[#eadfe6] py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div>
              <h2
                className="font-serif text-3xl font-normal tracking-[-0.02em] leading-tight text-[#2a2233] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                About Me
              </h2>

              <div className="mt-7 space-y-4 text-base leading-relaxed text-[#4b4256]">
                <p>
                  I&apos;m Chantal, a Business student studying Healthcare Management at Humber
                  Lakeshore in Toronto, growing into health-tech product and UX design.
                </p>
                <p>
                  I&apos;ve built at 6+ hackathons, which taught me how to work under pressure,
                  communicate well while working alongside different teammates, and turn ambiguous
                  challenges into working prototypes quickly.
                </p>
                <p>
                  I bring together product strategy, wireframing in Figma, and front-end code in
                  HTML and CSS (but I am still learning the tech stack). Grounded in systems
                  thinking and human psychology, I like trying to build digital tools that are
                  intuitive, humane, and practical for both patients and clinicians.
                </p>
              </div>
            </div>

            <aside
              aria-label="Quick facts"
              className="rounded-3xl border border-[#eadfe6] bg-white/80 p-7"
            >
              <dl className="divide-y divide-[#eadfe6]">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-xs font-medium tracking-wider text-[#685e74] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-serif text-lg text-[#2a2233]">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="scroll-mt-20 border-t border-[#eadfe6] py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#7050e6] uppercase">
                Selected work
              </p>
              <h2
                className="mt-3 max-w-xl font-serif text-3xl font-normal tracking-[-0.02em] leading-tight text-[#2a2233] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Things I&apos;ve designed, built, and explored.
              </h2>
            </div>

            <div
              role="group"
              aria-label="Filter projects by category"
              className="inline-flex flex-wrap gap-1.5 rounded-xl border border-[#eadfe6] bg-white/75 p-1"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeFilter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveFilter(option)}
                    className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#7050e6] ${
                      isActive
                        ? 'bg-[#2a2233] text-white'
                        : 'text-[#685e74] hover:text-[#2a2233]'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-[26px] border border-[#eadfe6] bg-white/85 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#50328c]/10"
              >
                <div
                  className={`relative flex h-44 items-end justify-between bg-gradient-to-br ${project.coverGradient} p-6`}
                >
                  <span className="font-serif text-3xl italic text-[#2a2233]/90">
                    {project.title}
                  </span>
                  <div className="self-start">
                    <CoverMotif motif={project.coverMotif} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-[#685e74]">
                    {project.meta.join(' · ')}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#2a2233]">{project.title}</h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4b4256]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#eadfe6] pt-4">
                    <span className="text-xs font-medium text-[#685e74]">{project.status}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7050e6] transition-colors hover:text-[#2a2233] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7050e6] rounded-sm"
                    >
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 border-t border-[#eadfe6] py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#7050e6] uppercase">
                Contact
              </p>
              <h2
                className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] leading-tight text-[#2a2233] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Feel free to reach out
              </h2>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2a2233] px-6 py-3 text-sm font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#3f334d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7050e6]"
                >
                  <Mail className="h-4 w-4" />
                  Email Chantal
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2a2233] px-5 py-3 text-sm font-medium text-[#2a2233] transition-colors hover:bg-[#2a2233]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7050e6]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-[#7050e6]" />
                      Copied {EMAIL_ADDRESS}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>

            <form
              onSubmit={handleNoteSubmit}
              className="rounded-3xl border border-[#eadfe6] bg-white/85 p-6 md:p-7"
            >
              <h3 className="font-serif text-xl text-[#2a2233]">Send a quick note</h3>
              <p className="mt-1 text-xs text-[#685e74]">
                Opens your email client pre-addressed to {EMAIL_ADDRESS}.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#685e74]"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="mt-1.5 w-full rounded-xl border border-[#eadfe6] bg-[#fbf7f4] px-3.5 py-2.5 text-sm text-[#2a2233] placeholder:text-[#685e74]/65 focus:border-[#7050e6] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#685e74]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={senderNote}
                    onChange={(e) => setSenderNote(e.target.value)}
                    placeholder="Hi Chantal — would love to connect about..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-[#eadfe6] bg-[#fbf7f4] px-3.5 py-2.5 text-sm text-[#2a2233] placeholder:text-[#685e74]/65 focus:border-[#7050e6] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7050e6] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5e3fd1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7050e6]"
                >
                  <Send className="h-4 w-4" />
                  {notePrepared ? 'Opening email draft...' : 'Open in email app'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#eadfe6]/80 py-8 text-center text-xs text-[#685e74]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 sm:flex-row md:px-8">
          <p>Chantal Nguyen · Toronto, Ontario</p>
          <p>Health-tech product, UX &amp; systems thinking</p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
