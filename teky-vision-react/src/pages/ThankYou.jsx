import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 72px)',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        <div style={{
          width: '80px', height: '80px',
          background: 'var(--yellow-dim)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2rem'
        }}>✅</div>
        <div className="badge" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Message envoyé</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Merci pour votre <span style={{ color: 'var(--yellow)' }}>message !</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais,
          généralement sous 24 heures.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
          <Link to="/products" className="btn btn-outline">Voir nos produits</Link>
        </div>
      </div>
    </div>
  )
}
