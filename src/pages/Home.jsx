import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { team } from '../data/team.js'
import { publications } from '../data/publications.js'
import techImg from '../assets/images/tech.jpg'
import './Home.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Home() {
  const [featRef, featInView] = useInView()
  const [missionRef, missionInView] = useInView()
  const [teamRef, teamInView] = useInView()
  const [pubRef, pubInView] = useInView()

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shape" />
        <div className="container hero-inner">
          <div className="hero-content animate-fade-up">
            <div className="badge hero-badge">
              <span className="badge-dot" />
              Innovation Malagasy · Électronique & Robotique
            </div>
            <h1 className="hero-title">
              La Robotique et l'Intelligence Artificielle<br/>
              <span>au coeur du progrès</span><br/>
              
            </h1>
            <p className="hero-desc">
              Teky Vision crée des systèmes électroniques et robotiques sur-mesure
              pour l'industrie, la recherche et l'éducation à Madagascar.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Découvrir nos produits
              </Link>
              <Link to="/team" className="btn btn-outline btn-lg">
                Notre équipe
              </Link>
            </div>
            <div className="hero-stats">
              <StatCard number="3" label="Experts" />
              <StatCard number="4+" label="Produits" />
              <StatCard number="6+" label="Publications" />
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={techImg} alt="Teky Vision Technology" className="hero-img" />
              <div className="hero-img-overlay" />
              <div className="hero-badge-float badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/><path d="M3 21v-8l2 2 4.293-4.293 1.414 1.414L6.414 16.9 8 18.414V21z"/></svg>
                Made in Madagascar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" ref={featRef}>
        <div className="container">
          <div className="section-label">Ce que nous faisons</div>
          <h2 className="section-title">Nos expertises <span>clés</span></h2>
          <div className="features-grid">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M9 6h6M9 10h6M9 14h4"/></svg>,
                title: 'Conception',
                desc: 'Cartes électroniques personnalisées, capteurs intelligents et intégration mécanique-électronique complète.',
                color: '#FFD400'
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 2v2M12 22v-2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M22 12h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
                title: 'Prototypage',
                desc: 'Développement rapide de prototypes fonctionnels pour validation et tests en conditions réelles.',
                color: '#34C759'
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
                title: 'Production',
                desc: 'Fabrication unitaire ou en série avec contrôle qualité rigoureux adapté à vos besoins spécifiques.',
                color: '#0A84FF'
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Formation',
                desc: 'Programmes éducatifs en robotique pour jeunes et professionnels, adaptés au contexte malagasy.',
                color: '#FF453A'
              }
            ].map((f, i) => (
              <div
                key={f.title}
                className="feature-card card"
                style={{
                  opacity: featInView ? 1 : 0,
                  transform: featInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.12}s`
                }}
              >
                <div className="feature-icon" style={{ color: f.color, background: `${f.color}18` }}>
                  {f.icon}
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission" ref={missionRef}>
        <div className="container mission-inner">
          <div
            className="mission-content"
            style={{
              opacity: missionInView ? 1 : 0,
              transform: missionInView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease'
            }}
          >
            <div className="section-label">Notre raison d'être</div>
            <h2 className="section-title">Notre <span>objectif</span></h2>
            <p className="section-desc">
              Teky Vision a pour objectif de concevoir et produire des matériels électroniques
              et robotiques fiables, modulaires et accessibles, afin d'accélérer l'innovation
              industrielle et la recherche appliquée à Madagascar.
            </p>
            <ul className="mission-list">
              {[
                'Prototyper rapidement des solutions fonctionnelles',
                'Assurer la qualité et la reproductibilité en production',
                'Accompagnement technique complet (conception → intégration)',
                'Démocratiser la technologie pour la jeunesse malagasy'
              ].map((item, i) => (
                <li key={i} className="mission-item">
                  <span className="mission-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/team" className="btn btn-primary">
              Rencontrer l'équipe
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div
            className="mission-visual"
            style={{
              opacity: missionInView ? 1 : 0,
              transform: missionInView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease 0.2s'
            }}
          >
            <div className="mission-card-stack">
              {[
                { num: '01', label: 'Concevoir' },
                { num: '02', label: 'Prototyper' },
                { num: '03', label: 'Produire' }
              ].map((step, i) => (
                <div key={i} className="process-step" style={{ '--i': i }}>
                  <div className="process-num">{step.num}</div>
                  <div className="process-label">{step.label}</div>
                  {i < 2 && <div className="process-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="team-section" ref={teamRef}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">Les talents derrière Teky Vision</div>
              <h2 className="section-title">Notre <span>équipe</span></h2>
            </div>
            <Link to="/team" className="btn btn-outline">Voir toute l'équipe</Link>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <Link
                to={`/team/${member.slug}`}
                key={member.id}
                className="member-card card"
                style={{
                  opacity: teamInView ? 1 : 0,
                  transform: teamInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.15}s`
                }}
              >
                <div className="member-avatar-wrap">
                  <img src={member.avatar} alt={member.name} className="member-avatar" />
                  <div className="member-avatar-glow" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <div className="badge member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.slice(0, 2).map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS TEASER */}
      <section className="pub-section" ref={pubRef}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">Nos créations & actualités</div>
              <h2 className="section-title">Publications <span>récentes</span></h2>
            </div>
            <Link to="/publications" className="btn btn-outline">Voir tout</Link>
          </div>
          <div className="pub-grid">
            {publications.slice(0, 3).map((pub, i) => (
              <div
                key={pub.id}
                className="pub-card card"
                style={{
                  opacity: pubInView ? 1 : 0,
                  transform: pubInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.6s ease ${i * 0.12}s`
                }}
              >
                <div className="pub-img-wrap">
                  <img src={pub.image} alt={pub.title} className="pub-img" loading="lazy" />
                  <div className="pub-overlay">
                    <span className="badge">{pub.category}</span>
                  </div>
                </div>
                <div className="pub-body">
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-desc">{pub.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="badge">Contactez-nous</div>
              <h2>Prêt à démarrer <span>votre projet</span> ?</h2>
              <p>Que vous ayez un projet en tête ou une question, notre équipe est là pour vous accompagner.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Démarrer un projet
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="https://wa.me/261343793363" target="_blank" rel="noopener" className="btn btn-dark btn-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="cta-circle c1" />
              <div className="cta-circle c2" />
              <div className="cta-circle c3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
