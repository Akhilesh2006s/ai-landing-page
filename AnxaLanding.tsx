import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import AnxaLogo from "./Anxa-assist.png";
import HeroBg from "./Bg.png";
import SecondSectionBg from "./second section.png";

/* ── Simulation flow icons ── */
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.8-3.5 6L12 22l-3.5-7C6.3 13.8 5 11.5 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);
const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const IconGitBranch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CHAT_MESSAGES = [
  { role: "user", text: "Analyze this quarter's pipeline and propose the next set of actions." },
  { role: "ai", text: "Connecting to CRM, billing, and data warehouse sources…" },
  { role: "ai", text: "Scanned 18,240 records across 4 systems." },
  { role: "ai", text: "Identified 3 at‑risk regions and 5 high‑leverage plays." },
  { role: "ai", text: "Queued coordinated campaigns and approvals across Sales, RevOps, and Finance ✓" },
];

const FLOW_STEPS = [
  { label: "User Prompt", Icon: IconChat },
  { label: "AI Understanding", Icon: IconBrain },
  { label: "Data Agent Analysis", Icon: IconDatabase },
  { label: "AI Decision", Icon: IconGitBranch },
  { label: "Automation Execution", Icon: IconZap },
];

/* ── Data ── */
const VALUE_STRIP = [
  "Cross-System Execution",
  "Live Business Context",
  "Policy & Guardrails",
  "Approvals & Controls",
  "Measurable Outcomes",
];


/* ── Component ── */
const AnxaLanding: React.FC = () => {
  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Simulation state */
  const [activeStep, setActiveStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [chatVisible, setChatVisible] = useState<number[]>([]);

  const isDone = (s: number) => activeStep >= s;
  const isActive = (s: number) => activeStep === s;

  const runPipeline = useCallback(() => {
    if (running) return;
    setRunning(true);
    setActiveStep(-1);
    setChatVisible([]);
    [0, 1, 2, 3, 4].forEach((step, i) => {
      setTimeout(() => {
        setActiveStep(step);
        setChatVisible((prev) => [...prev, step]);
      }, (i + 1) * 900);
    });
    setTimeout(() => setRunning(false), 5 * 900 + 600);
  }, [running]);

  useEffect(() => {
    const id = setTimeout(runPipeline, 800);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="nav hero-nav">
          <div className="nav-inner">
            <div className="nav-brand">
              <img src={AnxaLogo} alt="ANXA" className="nav-logo" />
              <span className="nav-wordmark">ANXA</span>
            </div>
            <div className="nav-right">
              <span className="nav-badge">Coming Soon</span>
              <a href="#early-access" className="nav-cta">Request Early Access</a>
            </div>
          </div>
        </div>
        <div className="hero-inner">
          <div className="hero-left reveal">
            <span className="hero-chip">Coming Soon</span>
            <h1 className="hero-title">
              ANXA is the Agentic
              <br />
              Platform for the
              <br />
              Enterprise
            </h1>
            <p className="hero-body">
              Intelligence that operates inside real business environments
              with the right context, controls, and accountability.
            </p>
            <div className="hero-ctas">
              <a href="#early-access" className="btn btn--primary">Request Early Access</a>
              <a href="#contact" className="btn btn--ghost">Talk to Us</a>
            </div>
          </div>

          {/* Right — image + simulation overlay */}
          <div className="hero-right reveal delay-1">
            <div className="hero-scene">
              <img src={HeroBg} alt="" className="hero-scene-img" />

              {/* Glassmorphism simulation overlay */}
              <div className="sim-overlay">
                <div className="sim-card">
                  <div className="sim-topbar">
                    <div className="sim-topbar-left">
                      <img src={AnxaLogo} alt="" className="sim-logo" />
                      <span className="sim-title">Agentic Execution</span>
                    </div>
                    <button
                      className={"sim-run" + (running ? " sim-run--active" : "")}
                      onClick={runPipeline}
                      disabled={running}
                    >
                      {running ? "Running…" : "▶ Run Scenario"}
                    </button>
                  </div>

                  <div className="sim-body">
                    {/* Chat trace */}
                    <div className="sim-chat">
                      <div className="sim-chat-head">
                        <span className="sim-dot" />
                        <span>Live Execution Trace</span>
                      </div>
                      <div className="sim-chat-msgs">
                        {chatVisible.length === 0 && !running && (
                          <div className="sim-empty">Click <strong>Run Scenario</strong> to start</div>
                        )}
                        {CHAT_MESSAGES.map((msg, i) =>
                          chatVisible.includes(i) ? (
                            <div key={i} className={`sim-msg sim-msg--${msg.role}`}>
                              <span className="sim-msg-role">{msg.role === "user" ? "Leader" : "ANXA"}</span>
                              <span className="sim-msg-text">{msg.text}</span>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>

                    {/* Flow */}
                    <div className="sim-flow">
                      {FLOW_STEPS.map((step, i) => (
                        <React.Fragment key={i}>
                          <div className={`sim-node${isDone(i) ? " sim-done" : ""}${isActive(i) ? " sim-active" : ""}`}>
                            <span className="sim-node-icon"><step.Icon /></span>
                            <span className="sim-node-label">{step.label}</span>
                          </div>
                          {i < FLOW_STEPS.length - 1 && (
                            <div className={`sim-conn${isDone(i) ? " sim-conn-done" : ""}`} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-bar reveal delay-2">
          <div className="value-bar-inner">
            {VALUE_STRIP.map((item, i) => (
              <span key={i} className="value-tag">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 – Challenge with visual flow ── */}
      <section className="sect sect--cream sect--challenge">
        <div className="sect-challenge-inner">
          <div className="sect-challenge-left">
            <div className="reveal">
              <span className="sect-label">The Challenge</span>
              <h2 className="sect-title">Enterprise AI has a last-mile problem</h2>
            </div>
            <div className="prose reveal delay-1">
              <p>AI has made enormous progress in reasoning, generation, and interaction.</p>
              <p>But inside the enterprise, value is not created by answers alone.</p>
              <p>It is created when intelligence can operate inside real workflows, understand live business context, respect permissions and policy, trigger the right actions, involve humans when needed, and improve measurable outcomes over time.</p>
              <p className="prose-strong">That is where most AI initiatives break down.</p>
              <p>They remain trapped in copilots, prototypes, and isolated experiments, helpful at the surface but disconnected from the systems and controls that real execution requires.</p>
            </div>
          </div>
          <div className="sect-challenge-right reveal delay-1">
            <div className="challenge-scene">
              <img src={SecondSectionBg} alt="" className="challenge-bg" />
              <div className="challenge-flow">
                <div className="challenge-pill">AI</div>
                <div className="challenge-connector" />
                <div className="challenge-pill challenge-pill--main">Context</div>
                <div className="challenge-connector" />
                <div className="challenge-pill">Decision</div>
                <div className="challenge-connector" />
                <div className="challenge-pill">Outcome</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION – Shift & Platform side-by-side ── */}
      <section className="sect sect--white sect--split">
        <div className="sect-split-inner">
          <article className="split-card reveal">
            <span className="sect-label">The Shift</span>
            <h2 className="sect-title">From AI assistance to AI execution</h2>
            <div className="prose">
              <p>Most AI tools help users think, write, summarize, and search.</p>
              <p>ANXA is built for something more important: <strong>execution</strong>.</p>
              <p>It gives enterprises a platform to orchestrate processes, trigger actions, enforce policy, manage approvals, and measure business results across systems.</p>
              <p className="prose-emphasis">Not just answering questions.<br />Not just generating recommendations.<br />But helping intelligence operate inside the business itself.</p>
            </div>
          </article>

          <article className="split-card reveal delay-1">
            <span className="sect-label">The Platform</span>
            <h2 className="sect-title">What ANXA is</h2>
            <div className="prose">
              <p>ANXA is the agentic platform for enterprises that want to put AI into action safely and at scale.</p>
              <p>It provides the layer where AI agents can work with real business context, interact across systems, follow operational guardrails, and drive end-to-end workflows with accountability.</p>
              <p>With ANXA, organizations can move beyond siloed AI use cases and begin deploying governed, cross-system execution that is aligned to how the business actually runs.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" id="early-access">
        <div className="site-footer-inner">
          <div className="footer-panel reveal">
            <img src={HeroBg} alt="" className="footer-panel-img" />
            <div className="footer-panel-overlay" />
            <div className="footer-panel-content">
              <p className="footer-kicker">Get started today.</p>
              <h2 className="footer-heading">See how ANXA turns AI into governed execution.</h2>
              <div className="footer-ctas">
                <a href="#early-access" className="btn btn--primary-light">Request Early Access</a>
                <a href="#contact" className="btn btn--outline-light btn--outline-dark">Talk to Us</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={AnxaLogo} alt="ANXA" className="footer-logo" />
            <p className="footer-copy">&copy; 2026 ANXA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnxaLanding;
