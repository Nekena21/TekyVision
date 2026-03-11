import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1200))
    console.log('Form data:', data)
    navigate('/thank-you')
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Échangeons</div>
          <h1 className="section-title">Nous <span>contacter</span></h1>
          <p className="section-desc">
            Une question, un projet ou simplement envie d'échanger ?
            Nous sommes disponibles et répondons rapidement.
          </p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Parlons de votre projet</h2>
            <p>Que vous souhaitiez commander un produit, nous poser une question ou collaborer, notre équipe est à votre écoute.</p>

            <div className="contact-methods">
              <a href="mailto:tekyvision@gmail.com" className="contact-method">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">tekyvision@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/261343793363" target="_blank" rel="noopener" className="contact-method">
                <div className="contact-method-icon whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">WhatsApp</div>
                  <div className="contact-method-value">+261 34 379 3363</div>
                </div>
              </a>
              <a href="https://www.facebook.com/TekyVision" target="_blank" rel="noopener" className="contact-method">
                <div className="contact-method-icon facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">Facebook</div>
                  <div className="contact-method-value">Teky Vision</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap card">
            <h2>Envoyez un message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    className={errors.name ? 'error' : ''}
                    {...register('name', { required: 'Le nom est requis' })}
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className={errors.email ? 'error' : ''}
                    {...register('email', {
                      required: 'L\'email est requis',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
                    })}
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="De quoi s'agit-il ?"
                  className={errors.subject ? 'error' : ''}
                  {...register('subject', { required: 'Le sujet est requis' })}
                />
                {errors.subject && <span className="form-error">{errors.subject.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre question..."
                  className={errors.message ? 'error' : ''}
                  {...register('message', { required: 'Le message est requis', minLength: { value: 20, message: 'Au moins 20 caractères' } })}
                />
                {errors.message && <span className="form-error">{errors.message.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
