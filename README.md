# Teky Vision — Site Web React

Site vitrine moderne pour Teky Vision, conçu en React avec une charte graphique jaune sur gris clair.

## Stack technique

- **React 18** + Vite
- **React Router v6** (SPA routing)
- **React Hook Form** (formulaire de contact)
- **CSS Modules** personnalisés (charte jaune/gris)
- **Canvas API** (animation de fond particules)

## Installation & Démarrage

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── assets/         → Images, icônes
├── components/     → Layout (Header, Footer, TechBackground)
├── data/           → team.js, products.js, publications.js
├── pages/          → Home, About, Products, Team, Publications, Contact
├── styles/         → globals.css
└── App.jsx         → Router principal
```

## Pages

- `/` → Accueil (Hero, Features, Mission, Team teaser, Publications teaser, CTA)
- `/about` → À propos
- `/products` → Catalogue produits & services
- `/team` → Équipe complète
- `/team/:slug` → Fiche individuelle
- `/publications` → Galerie avec filtres + lightbox
- `/contact` → Formulaire de contact
- `/thank-you` → Confirmation

## Charte graphique

- **Jaune accent** : `#FFD400`
- **Fond clair** : `#f0f2f5`
- **Texte foncé** : `#1a1d24`
- **Police** : Outfit (body) + Space Mono (accents)

## Déploiement

Compatible Vercel, Netlify, GitHub Pages.
