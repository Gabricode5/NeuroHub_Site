# Collège de la Neurodiversité

Site vitrine statique de l'association, en Astro + TypeScript + Tailwind CSS, conçu en priorité pour l'accessibilité.

## Lancer le projet

```bash
npm install
npm run dev       # site de développement sur http://localhost:4321
npm run build     # vérification des types + site final dans dist/
npm run preview   # voir le site final en local
```

## Pages

| Adresse | Page | Fichier |
|---|---|---|
| `/` | Accueil | `src/pages/index.astro` (sections dans `src/components/sections/`) |
| `/association` | L'association | `src/pages/association.astro` |
| `/college` | Le collège-lycée | `src/pages/college.astro` |
| `/soutenir` | Nous soutenir | `src/pages/soutenir.astro` |
| `/contact` | Nous contacter | `src/pages/contact.astro` |

Les pages internes utilisent toutes le même gabarit, `src/components/layout/StandardPage.astro`, qui affiche les blocs décrits dans `src/data/content.ts`.

## Où modifier quoi

- **Un texte** → `src/data/content.ts`. Dans les textes, `**gras**` et `*italique*` sont reconnus.
- **Le menu, l'e-mail de contact, le lien HelloAsso d'adhésion** → `src/data/site.ts`.
- **Une couleur** → `src/styles/tokens.css` ; palette des cartes et vignettes → `src/lib/accents.ts`.
- **L'ordre des sections de l'accueil** → `src/pages/index.astro`.
- **L'en-tête, le pied de page, le panneau d'accessibilité (engrenage)** → `src/components/layout/`.

## Images

Toutes les images servies sont dans `public/images/`, en WebP allégé :

- `membres/` : photos de l'équipe (288 × 288, recadrées sur le visage).
- `soutenir-bg*.webp` : photo de fond de l'accueil ; `oip.jpg.webp` : fond de « Pourquoi soutenir l'école ? ».
- `schema-image-college*.webp` : image d'en-tête du collège-lycée.
- `papillon-livre-2.webp`, `papillion.png` : dessins d'Inès Ramdani.

Tout ce qui est dans `public/` est publié avec le site : n'y laisser que les images utilisées.

## À compléter avant la mise en ligne

- **Adhésion** : renseigner `adhesionUrl` (lien HelloAsso) dans `src/data/site.ts`. Tant qu'il est vide, le bouton mène à la page Contact.
- **Dons financiers** (page Nous soutenir) : intégrer le module de dons en ligne et préciser la déductibilité fiscale.

## Formulaire de contact

La page Contact n'utilise aucun serveur : à l'envoi, le formulaire ouvre la messagerie du visiteur avec un e-mail pré-rempli vers l'adresse `contactEmail` de `src/data/site.ts`.

## Déploiement

`npm run build` produit le site statique dans `dist/`, à publier tel quel (Netlify, Vercel, GitHub Pages…).

## Accessibilité

- Structure sémantique, lien d'évitement, focus visibles, navigation clavier.
- Panneau d'accessibilité (engrenage en haut à droite) : contraste renforcé, taille du texte, police adaptée dyslexie, mode concentration, réduction des animations. Réglages mémorisés dans le navigateur.
- Toutes les animations (apparition au scroll, flèche « Découvrir le collège », citations qui défilent) sont coupées sous `prefers-reduced-motion` ou avec le bouton « Réduire les animations ».
- Contrastes vérifiés au ratio WCAG AA (4,5:1) pour chaque couleur de texte sur son fond ; texte justifié sans coupure de mots, aligné à gauche sur mobile et dans les cartes.
