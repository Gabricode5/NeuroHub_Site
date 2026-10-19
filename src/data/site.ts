// Configuration globale du site : navigation, coordonnées, liens externes.
// Le contenu éditorial des sections vit dans data/content.ts.

export interface NavLink {
  href: string;
  label: string;
  hiddenOnMobile?: boolean;
}

export const site = {
  title: 'Collège de la Neurodiversité',
  description: 'Projet d’établissement éducatif et inclusif pour adolescents adapté aux profils neuro-atypiques.',
  logoSrc: '/images/logo.png',
  logoMarkSrc: '/images/logo-mark.png',
  logoIconSrc: '/images/logo-icon.png',

  address: 'Draveil – Juvisy-sur-Orge – Vigneux-sur-Seine, Essonne',
  // N° RNA (répertoire national des associations) : source fiche projet officielle.
  legalLine: 'Collège de la neurodiversité · N° RNA : W912017337',

  contactEmail: 'collegedelaneurodiversite@gmail.com',

  formspreeUrl: 'https://formspree.io/f/PLACEHOLDER',
  // Mettre le PDF dans public/ (ex. public/dossier-presentation.pdf) puis indiquer
  // '/dossier-presentation.pdf' ici. Tant que la valeur vaut '#', le bouton est masqué.
  presentationPdfHref: '#',

  mapEmbedSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=2.408%2C48.671%2C2.435%2C48.685&layer=mapnik',

  nav: [
    { href: '/', label: 'Accueil' },
    { href: '/association', label: 'L’association' },
    { href: '/college', label: 'Le collège' }
  ] satisfies NavLink[],
  navCta: { href: '/soutenir', label: 'Nous soutenir' }
};
