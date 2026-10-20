import React, { useState } from 'react'
import { ArrowUpRight, ArrowRight, Workflow, Bot, FileText, PlugZap, CheckCircle2, Menu, X, Sparkles, ShieldCheck, Mail, Layers3, MoveRight } from 'lucide-react'

const services = [
  { icon: Workflow, title: 'Workflow Automation', text: 'Explore smarter ways to reduce repetitive work and connect everyday business processes.' },
  { icon: Bot, title: 'AI Assistants & Agents', text: 'Prototype assistants that help teams navigate information, tools, and multi-step tasks.' },
  { icon: FileText, title: 'Document Intelligence', text: 'Experiment with extracting, organizing, and understanding information from documents.' },
  { icon: PlugZap, title: 'Software Integration', text: 'Design practical integrations between applications, APIs, and AI-powered workflows.' },
]
const cases = [
  { id: '01', title: 'Knowledge workflows', text: 'Turn scattered reference materials into clearer, more accessible information.' },
  { id: '02', title: 'Operations support', text: 'Identify repetitive internal tasks and explore automation opportunities.' },
  { id: '03', title: 'Document processing', text: 'Structure unorganized content into useful, reviewable outputs.' },
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <div className="site-shell">
    <header className="topbar"><div className="container nav-inner">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">V</span><span>VEYTRIX<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>Services</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#use-cases" onClick={closeMenu}>Use cases</a><a href="#about" onClick={closeMenu}>About</a>
        <a className="mobile-contact" href="mailto:veytrix@veytrix.shop" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="nav-contact" href="mailto:veytrix@veytrix.shop">Let's talk <ArrowUpRight size={16}/></a>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </div></header>
    <main>
      <section className="hero container" id="home">
        <div className="hero-glow" aria-hidden="true"/>
        <div className="hero-copy"><div className="eyebrow"><span className="status-pulse"/> EXPLORING THE NEXT WAVE OF AUTOMATION</div>
          <h1>Make work <span className="gradient-text">flow smarter.</span></h1>
          <p>Veytrix is an independent AI automation studio exploring intelligent workflows, practical AI assistants, and seamless software integrations.</p>
          <div className="hero-actions"><a className="button button-primary" href="#services">Explore solutions <ArrowRight size={18}/></a><a className="button button-secondary" href="mailto:veytrix@veytrix.shop?subject=Hello%20Veytrix">Get in touch <ArrowUpRight size={17}/></a></div>
          <div className="hero-foot"><ShieldCheck size={17}/> Practical ideas. Human oversight. Thoughtful automation.</div>
        </div>
        <div className="hero-visual" aria-label="Illustration of an AI workflow">
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          <div className="workflow-card"><div className="workflow-card-head"><span className="mini-label"><Sparkles size={14}/> WORKFLOW CONCEPT</span><span className="live-pill">EXAMPLE</span></div>
            <div className="workflow-node"><span className="node-icon purple"><FileText size={19}/></span><div><strong>Input</strong><small>Documents & data</small></div><CheckCircle2 size={17} className="node-check"/></div>
            <div className="connector-line"/>
            <div className="workflow-node active-node"><span className="node-icon blue"><Bot size={19}/></span><div><strong>AI processing</strong><small>Understand · Organize · Assist</small></div><span className="activity-bars"><i/><i/><i/></span></div>
            <div className="connector-line"/>
            <div className="workflow-node"><span className="node-icon green"><Layers3 size={19}/></span><div><strong>Useful output</strong><small>Structured, reviewable results</small></div><CheckCircle2 size={17} className="node-check"/></div>
          </div>
          <div className="floating-tag"><span className="floating-star">✦</span> Design → Automate → Improve</div>
        </div>
      </section>
      <section className="section services-section" id="services"><div className="container"><div className="section-top"><div><div className="section-label">01 / WHAT WE EXPLORE</div><h2>Technology with <span className="gradient-text">purpose.</span></h2></div><p>Focused on practical applications of AI—not complexity for its own sake.</p></div>
        <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><span className="service-icon"><s.icon size={25} strokeWidth={1.7}/></span><span className="card-number">0{i+1}</span></div><h3>{s.title}</h3><p>{s.text}</p><span className="service-arrow"><ArrowUpRight size={18}/></span></article>)}</div>
      </div></section>
      <section className="section approach-section" id="approach"><div className="container approach-grid"><div><div className="section-label">02 / OUR APPROACH</div><h2>Start simple.<br/><span className="gradient-text">Build intelligently.</span></h2><p className="muted body-large">Great automation begins with understanding the actual problem. We explore a thoughtful, human-centered path from idea to useful workflow.</p><a className="text-link" href="mailto:veytrix@veytrix.shop?subject=Discuss%20an%20AI%20workflow">Discuss an idea <MoveRight size={19}/></a></div><div className="steps">{[{n:'01',title:'Understand',text:'Identify the repetitive task, context, and expected outcome.'},{n:'02',title:'Design',text:'Map the workflow and choose the right tools and checkpoints.'},{n:'03',title:'Prototype',text:'Test a focused solution before considering broader adoption.'},{n:'04',title:'Improve',text:'Review results, limitations, and opportunities to refine.'}].map(s=><div className="step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div></div></section>
      <section className="section use-section" id="use-cases"><div className="container"><div className="section-label">03 / POSSIBILITIES</div><h2>Ideas worth <span className="gradient-text">exploring.</span></h2><p className="muted body-large narrow">Example areas where thoughtful automation can make a difference.</p><div className="case-grid">{cases.map(c=><article className="case-card" key={c.id}><span className="case-id">{c.id} / USE CASE</span><h3>{c.title}</h3><p>{c.text}</p><ArrowUpRight size={20}/></article>)}</div></div></section>
      <section className="section about-section" id="about"><div className="container about-grid"><div><div className="section-label">04 / ABOUT VEYTRIX</div><h2>Curiosity meets <span className="gradient-text">execution.</span></h2></div><div><p>Veytrix is an independent technology initiative focused on exploring AI automation and software-driven productivity. Our interest is in building understandable, useful systems that support people—not replacing judgment with hype.</p><p className="muted">We believe the best AI workflows are transparent, measurable, and designed with human review in mind.</p></div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-box"><div className="section-label">LET'S CONNECT</div><h2>Have a workflow<br/>worth rethinking?</h2><p>We're always interested in thoughtful conversations about AI, automation, and software.</p><a className="button button-light" href="mailto:veytrix@veytrix.shop?subject=Let's%20connect%20with%20Veytrix"><Mail size={18}/> veytrix@veytrix.shop <ArrowUpRight size={18}/></a></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">V</span><span>VEYTRIX<span className="brand-dot">.</span></span></a><span>Independent AI Automation Studio</span><span>© {new Date().getFullYear()} Veytrix. All rights reserved.</span></div></footer>
  </div>
}
export default App
