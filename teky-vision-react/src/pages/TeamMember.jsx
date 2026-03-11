import { useParams, Link } from 'react-router-dom'
import { team } from '../data/team.js'
import './TeamMember.css'

export default function TeamMember() {
  const { slug } = useParams()
  const member = team.find(m => m.slug === slug)

  if (!member) return (
    <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <h2>Membre non trouvé</h2>
      <Link to="/team" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
        ← Retour à l'équipe
      </Link>
    </div>
  )

  return (
    <div className="member-page">
      <div className="container member-page-inner">
        <Link to="/team" className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Retour à l'équipe
        </Link>

        <div className="member-detail">
          <div className="member-detail-img-wrap">
            <img src={member.avatar} alt={member.name} className="member-detail-img" />
            <div className="member-detail-social">
              <a href={`https://wa.me/261343793363?text=Je%20souhaite%20contacter%20${member.name}`} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
                Contacter sur WhatsApp
              </a>
            </div>
          </div>

          <div className="member-detail-info">
            <div className="badge member-detail-role">{member.role}</div>
            <h1 className="member-detail-name">{member.name}</h1>
            <p className="member-detail-bio">{member.fullBio || member.bio}</p>

            <div className="member-detail-skills-section">
              <div className="section-label">Compétences</div>
              <div className="member-detail-skills">
                {member.skills.map(skill => (
                  <div key={skill} className="skill-pill">
                    <span className="skill-dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
