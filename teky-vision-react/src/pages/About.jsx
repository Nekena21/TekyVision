import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Qui sommes-nous</div>
          <h1 className="section-title">À propos de <span>Teky Vision</span></h1>
          <p className="section-desc">
            Une startup malagasy passionnée par l'électronique et la robotique,
            déterminée à façonner le futur technologique de Madagascar.
          </p>
        </div>
      </div>

      <div className="container about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Notre histoire</h2>
            <p>
              Teky Vision est née de la conviction que Madagascar peut et doit participer
              activement à la révolution technologique mondiale. Fondée par des jeunes ingénieurs
              et innovateurs malagasy, notre entreprise s'est donnée pour mission de concevoir
              et produire des solutions électroniques et robotiques de qualité, adaptées aux
              réalités et besoins locaux.
            </p>
            <p>
              Nous croyons fermement que la technologie doit être accessible à tous, et c'est
              pourquoi nous investissons également dans la formation et l'éducation, avec des
              programmes adaptés aux jeunes malagasy.
            </p>
          </div>
          <div className="about-values">
            {[
              { title: 'Innovation', desc: 'Nous cherchons constamment des solutions nouvelles et créatives aux défis technologiques.', icon: '💡' },
              { title: 'Qualité', desc: 'Chaque produit est conçu avec rigueur pour garantir fiabilité et durabilité.', icon: '⭐' },
              { title: 'Accessibilité', desc: 'Nos solutions sont conçues pour être abordables et adaptées au contexte malagasy.', icon: '🤝' },
              { title: 'Éducation', desc: 'Nous formons la prochaine génération d\'ingénieurs et innovateurs malagasy.', icon: '📚' }
            ].map(v => (
              <div key={v.title} className="value-card card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta">
          <h2>Rejoignez l'aventure</h2>
          <p>Que vous soyez client, partenaire ou simplement curieux, nous serions ravis d'échanger avec vous.</p>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
            <Link to="/team" className="btn btn-outline">Notre équipe</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
