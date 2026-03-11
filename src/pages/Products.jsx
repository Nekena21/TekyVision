import { products } from '../data/products.js'
import './Products.css'

const categoryLabels = {
  book: 'Livre',
  hardware: 'Matériel',
  service: 'Service'
}

const categoryColors = {
  book: '#FFD400',
  hardware: '#0A84FF',
  service: '#34C759'
}

export default function Products() {
  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Catalogue</div>
          <h1 className="section-title">Nos <span>Produits</span> & Services</h1>
          <p className="section-desc">
            De nos livres éducatifs à nos modules électroniques, découvrez
            l'ensemble de nos produits et services sur-mesure.
          </p>
        </div>
      </div>

      <div className="container products-content">
        <div className="products-grid">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="product-card card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="product-header">
                <div
                  className="badge"
                  style={{
                    background: `${categoryColors[product.category]}18`,
                    color: categoryColors[product.category],
                    borderColor: `${categoryColors[product.category]}40`
                  }}
                >
                  {categoryLabels[product.category]}
                </div>
                <div className="badge product-status-badge">{product.badge}</div>
              </div>
              <div className="product-icon">
                {product.category === 'book' && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                )}
                {product.category === 'hardware' && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/>
                  </svg>
                )}
                {product.category === 'service' && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )}
              </div>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-desc">{product.description}</p>
              {product.format && (
                <div className="product-detail">
                  <span>Format :</span> {product.format}
                </div>
              )}
              <a
                href={product.ctaLink}
                target="_blank"
                rel="noopener"
                className="btn btn-primary product-cta"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                {product.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
