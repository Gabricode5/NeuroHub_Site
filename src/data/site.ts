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
  logoIconSrc: '/images/logo-icon.png',

  // N° RNA (répertoire national des associations) : source fiche projet officielle.
  legalLine: 'Collège de la neurodiversité · N° RNA : W912017337',

  contactEmail: 'collegedelaneurodiversite@gmail.com',

  // Lien HelloAsso du bouton « Adhésion à l'association » (page association), à renseigner.
  // Tant qu'il est vide, le bouton mène à la page Contact.
  adhesionUrl: '',

  nav: [
    { href: '/', label: 'Accueil' },
    { href: '/association', label: 'L’association' },
    { href: '/college', label: 'Le collège-lycée' }
  ] satisfies NavLink[],
  navCta: { href: '/soutenir', label: 'Nous soutenir' },
  // Bouton orange de l'en-tête vers la page Contact (retour du 05/11/2026).
  navContact: { href: '/contact', label: 'Nous contacter' }
};
