import { useState } from 'react'
import { publications } from '../data/publications.js'
import './Publications.css'

const categories = ['all', 'presentation', 'education', 'event', 'creative', 'product']
const catLabels = {
  all: 'Tout',
  presentation: 'Présentation',
  education: 'Éducation',
  event: 'Événement',
  creative: 'Créatif',
  product: 'Produit'
}

export default function Publications() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? publications : publications.filter(p => p.category === active)

  return (
    <div className="pub-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Galerie</div>
          <h1 className="section-title">Nos <span>Publications</span></h1>
          <p className="section-desc">
            Découvrez nos actualités, projets éducatifs, événements et créations visuelles.
          </p>
        </div>
      </div>

      <div className="container pub-page-content">
        <div className="pub-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pub-filter-btn ${active === cat ? 'active' : ''}`}
            >
              {catLabels[cat]}
            </button>
          ))}
        </div>

        <div className="pub-full-grid">
          {filtered.map((pub, i) => (
            <div
              key={pub.id}
              className="pub-full-card card"
              onClick={() => setLightbox(pub)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="pub-full-img-wrap">
                <img src={pub.image} alt={pub.title} className="pub-full-img" loading="lazy" />
                <div className="pub-full-overlay">
                  <div className="pub-zoom-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pub-full-body">
                <div className="badge pub-cat-badge">{catLabels[pub.category]}</div>
                <h3 className="pub-full-title">{pub.title}</h3>
                <p className="pub-full-desc">{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="lightbox-img" />
            <div className="lightbox-info">
              <div className="badge">{catLabels[lightbox.category]}</div>
              <h2>{lightbox.title}</h2>
              <p>{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
