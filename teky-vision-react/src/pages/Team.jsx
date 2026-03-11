import { Link } from 'react-router-dom'
import { team } from '../data/team.js'
import './Team.css'

export default function Team() {
  return (
    <div className="team-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Les innovateurs</div>
          <h1 className="section-title">Notre <span>équipe</span></h1>
          <p className="section-desc">
            Rencontrez les personnes passionnées qui conçoivent et fabriquent
            nos solutions électroniques et robotiques au quotidien.
          </p>
        </div>
      </div>

      <div className="container team-content">
        <div className="team-full-grid">
          {team.map((member, i) => (
            <Link
              to={`/team/${member.slug}`}
              key={member.id}
              className="member-full-card card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="member-full-img-wrap">
                <img src={member.avatar} alt={member.name} className="member-full-img" />
                <div className="member-full-overlay">
                  <span className="view-profile">Voir le profil →</span>
                </div>
              </div>
              <div className="member-full-body">
                <div className="badge member-full-role">{member.role}</div>
                <h2 className="member-full-name">{member.name}</h2>
                <p className="member-full-bio">{member.bio}</p>
                <div className="member-full-skills">
                  {member.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="team-join-card">
          <div className="team-join-content">
            <h2>Rejoindre l'équipe</h2>
            <p>Vous êtes passionné par la technologie, l'électronique ou la robotique ? Nous cherchons des talents pour rejoindre l'aventure Teky Vision.</p>
            <a
              href="https://wa.me/261343793363?text=Je%20souhaite%20rejoindre%20l'équipe%20Teky%20Vision"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Postuler sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
