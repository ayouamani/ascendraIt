"use client";

import { useEffect, useState } from "react";

const services = [
  {
    icon: "⌁",
    kicker: "Stratégie",
    title: "Conseil & Systèmes d'information",
    text: "Cadrage, architecture, optimisation des processus et accompagnement dans vos choix technologiques.",
    points: ["Conseil SI", "Architecture de solutions", "Accompagnement technique"]
  },
  {
    icon: "</>",
    kicker: "Build",
    title: "Développement web & logiciel",
    text: "Conception et réalisation d'applications web, mobiles, API et outils métier adaptés à vos usages.",
    points: ["Applications métier", "Sites & plateformes web", "API & intégrations"]
  },
  {
    icon: "◉",
    kicker: "Run",
    title: "Support IT & Helpdesk N1",
    text: "Prise en charge des demandes utilisateurs, qualification des incidents et assistance technique et fonctionnelle.",
    points: ["Support N1", "Assistance utilisateurs", "Qualification & suivi"]
  },
  {
    icon: "↻",
    kicker: "Maintain",
    title: "TMA & Maintenance applicative",
    text: "Maintenance corrective, évolutive et préventive pour garder vos applications fiables, disponibles et pérennes.",
    points: ["Correction d'anomalies", "Évolutions", "Suivi de production"]
  },
  {
    icon: "◇",
    kicker: "Integrate",
    title: "Intégration de solutions",
    text: "Connexion de vos applications, services et outils afin de créer un système d'information cohérent et efficace.",
    points: ["Intégration applicative", "Interfaces & flux", "Mise en œuvre"]
  },
  {
    icon: "✓",
    kicker: "Improve",
    title: "Audit & Qualité",
    text: "Analyse de l'existant, identification des risques et recommandations concrètes pour améliorer vos solutions.",
    points: ["Audit technique", "Revue de qualité", "Recommandations"]
  },
  {
    icon: "▦",
    kicker: "Lead",
    title: "Pilotage de projets IT",
    text: "Coordination, suivi des actions, gestion des priorités et communication entre équipes métier et techniques.",
    points: ["Suivi de projet", "Coordination", "Reporting"]
  },
  {
    icon: "◎",
    kicker: "Enable",
    title: "Formation & accompagnement",
    text: "Accompagnement non professionnel sur les outils et solutions informatiques pour faciliter leur adoption.",
    points: ["Prise en main d'outils", "Accompagnement utilisateurs", "Documentation"]
  }
];

const steps = [
  ["01", "Échange", "Nous clarifions votre besoin, vos contraintes et vos priorités."],
  ["02", "Proposition", "Nous définissons une approche claire, un périmètre et un mode d'intervention."],
  ["03", "Exécution", "Nous avançons par étapes courtes avec visibilité sur l'avancement."],
  ["04", "Suivi", "Nous assurons la continuité, l'amélioration et l'accompagnement après livraison."]
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@ascendra-it.fr";

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    setSending(true);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      form.reset();
      setStatus("Votre demande a bien été envoyée. Ascendra IT reviendra vers vous rapidement.");
    } catch {
      setStatus(`L'envoi automatique n'est pas encore configuré. Vous pouvez écrire à ${email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <div className="topline">
        <div className="container topline-inner">
          <span><i></i> Disponible pour de nouvelles collaborations</span>
          <span className="topline-right">France • À distance</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav">
          <a href="#accueil" className="brand" aria-label="Ascendra IT">
            <span className="logo-mark">A</span>
            <span className="brand-text">Ascendra <b>IT</b></span>
          </a>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={() => setMenu(false)}>Services</a>
            <a href="#methode" onClick={() => setMenu(false)}>Méthode</a>
            <a href="#apropos" onClick={() => setMenu(false)}>À propos</a>
            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-small">Parler de votre projet</a>
            <button className="menu-btn" aria-label="Menu" onClick={() => setMenu(!menu)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid-bg"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>

        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="badge">Conseil • Développement • Support • TMA</div>
            <h1>
              Votre partenaire IT pour <span>construire, maintenir et faire évoluer</span> vos solutions.
            </h1>
            <p>
              Ascendra IT accompagne les entreprises avec une approche agile, pragmatique et orientée résultats :
              du conseil à la mise en œuvre, jusqu'au support quotidien.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn">Échanger sur votre besoin <span>→</span></a>
              <a href="#services" className="btn btn-ghost">Voir nos services</a>
            </div>

            <div className="hero-proof">
              <div><strong>8</strong><span>familles de services</span></div>
              <div><strong>360°</strong><span>du conseil au support</span></div>
              <div><strong>100%</strong><span>adapté à votre contexte</span></div>
            </div>
          </div>

          <div className="visual-wrap">
            <div className="visual-card">
              <div className="visual-top">
                <div className="dots"><span></span><span></span><span></span></div>
                <small>ASCENDRA / DIGITAL OPERATIONS</small>
              </div>

              <div className="visual-body">
                <div className="code-line"><span className="line-no">01</span><span className="code-green">const</span> mission = <span className="code-blue">"performance"</span>;</div>
                <div className="code-line"><span className="line-no">02</span><span className="code-green">const</span> approach = <span className="code-blue">"agile"</span>;</div>
                <div className="code-line"><span className="line-no">03</span><span className="code-green">const</span> support = <span className="code-blue">"reliable"</span>;</div>

                <div className="dashboard">
                  <div className="dash-head">
                    <span>Service cockpit</span>
                    <span className="live"><i></i> ONLINE</span>
                  </div>
                  <div className="dash-grid">
                    <div><b>DEV</b><small>Applications & API</small></div>
                    <div><b>TMA</b><small>Maintenance</small></div>
                    <div><b>N1</b><small>Support utilisateurs</small></div>
                    <div><b>SI</b><small>Conseil & pilotage</small></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-1">
              <span>✓</span>
              <div><b>Support réactif</b><small>Suivi & résolution</small></div>
            </div>

            <div className="floating-card floating-2">
              <span>↗</span>
              <div><b>Solutions évolutives</b><small>Pensées pour durer</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <div className="container strip-content">
          <span>Développement</span><i></i>
          <span>Support</span><i></i>
          <span>TMA</span><i></i>
          <span>Audit</span><i></i>
          <span>Conseil SI</span><i></i>
          <span>Pilotage</span>
        </div>
      </section>

      <section className="section light" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Nos expertises</span>
              <h2>Des prestations IT conçues pour répondre à vos enjeux opérationnels.</h2>
            </div>
            <p>
              Vous pouvez faire appel à Ascendra IT pour une mission ponctuelle, un besoin récurrent
              ou un accompagnement de bout en bout.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, index) => (
              <article className="service-card" key={s.title}>
                <div className="service-top">
                  <span className="service-icon">{s.icon}</span>
                  <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="kicker">{s.kicker}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="methode">
        <div className="container">
          <div className="section-heading dark-heading">
            <div>
              <span className="eyebrow">Notre méthode</span>
              <h2>Simple, lisible et orientée résultats.</h2>
            </div>
            <p>
              Un cadre clair pour avancer rapidement, garder de la visibilité et adapter la mission lorsque vos besoins évoluent.
            </p>
          </div>

          <div className="process-grid">
            {steps.map(([n, title, text]) => (
              <article className="process-card" key={n}>
                <span className="process-num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="apropos">
        <div className="container about-layout">
          <div className="about-panel">
            <span className="eyebrow">Ascendra IT</span>
            <h2>La technologie doit simplifier votre activité, pas la compliquer.</h2>
            <p>
              Notre objectif est de proposer des prestations lisibles, adaptées à votre organisation et réellement utiles au quotidien.
            </p>
            <div className="values">
              <div><span>01</span><b>Clarté</b><p>Des échanges simples et des priorités comprises.</p></div>
              <div><span>02</span><b>Fiabilité</b><p>Un suivi rigoureux des sujets confiés.</p></div>
              <div><span>03</span><b>Adaptabilité</b><p>Une intervention ajustée à votre rythme.</p></div>
            </div>
          </div>

          <div className="about-side">
            <div className="mini-panel">
              <small>MODES D'INTERVENTION</small>
              <h3>Des formats flexibles</h3>
              <div className="mode-list">
                <span>Mission ponctuelle</span>
                <span>Renfort d'équipe</span>
                <span>Support récurrent</span>
                <span>Accompagnement projet</span>
              </div>
            </div>
            <div className="mini-panel accent-panel">
              <small>UN BESOIN ?</small>
              <h3>Parlons de votre contexte.</h3>
              <a href="#contact">Nous contacter →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Vous avez un projet ou un besoin de support ?</h2>
            <p>
              Décrivez-nous votre besoin. Nous vous recontactons pour comprendre votre contexte et vous proposer l'approche la plus adaptée.
            </p>

            <div className="contact-cards">
              <a href={`mailto:${email}`} className="contact-card">
                <span>✉</span>
                <div><small>E-mail</small><b>{email}</b></div>
              </a>
              {phone ? (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="contact-card">
                  <span>☎</span>
                  <div><small>Téléphone</small><b>{phone}</b></div>
                </a>
              ) : (
                <div className="contact-card muted-card">
                  <span>☎</span>
                  <div><small>Téléphone</small><b>Bientôt disponible</b></div>
                </div>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-head">
              <h3>Parlez-nous de votre besoin</h3>
              <p>Quelques informations suffisent pour commencer.</p>
            </div>

            <div className="two-cols">
              <label>
                Nom *
                <input name="name" type="text" placeholder="Votre nom" required />
              </label>
              <label>
                Entreprise
                <input name="company" type="text" placeholder="Nom de votre société" />
              </label>
            </div>

            <div className="two-cols">
              <label>
                E-mail *
                <input name="email" type="email" placeholder="vous@entreprise.fr" required />
              </label>
              <label>
                Téléphone
                <input name="phone" type="tel" placeholder="+33 ..." />
              </label>
            </div>

            <label>
              Type de besoin
              <select name="service" defaultValue="">
                <option value="" disabled>Sélectionnez une prestation</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
                <option>Autre demande</option>
              </select>
            </label>

            <label>
              Votre message *
              <textarea name="message" rows="6" placeholder="Décrivez brièvement votre besoin, votre contexte et vos délais..." required />
            </label>

            <input className="hp" name="website" type="text" tabIndex="-1" autoComplete="off" />
            <button type="submit" className="btn submit" disabled={sending}>
              {sending ? "Envoi en cours..." : "Envoyer ma demande"} <span>→</span>
            </button>

            {status && <p className="status">{status}</p>}
            <small className="privacy">Vos informations servent uniquement à répondre à votre demande.</small>
          </form>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Ascendra IT</span>
            <h2>Faisons avancer vos projets numériques.</h2>
          </div>
          <a href="#contact" className="btn">Démarrer une conversation <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <a href="#accueil" className="brand footer-brand">
              <span className="logo-mark">A</span>
              <span className="brand-text">Ascendra <b>IT</b></span>
            </a>
            <p className="footer-desc">
              Conseil, développement, support, TMA, audit, intégration et pilotage de projets IT.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <a href="#services">Services</a>
            <a href="#methode">Méthode</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href={`mailto:${email}`}>{email}</a>
            {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
            <span>France • À distance</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ascendra IT. Tous droits réservés.</span>
          <span>Site pensé pour le web, Android et iOS.</span>
        </div>
      </footer>
    </main>
  );
}
