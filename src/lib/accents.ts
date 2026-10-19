// Couleurs d'accent (palette du logo), en alternance sur les cartes. `bar` = filet ou fond
// décoratif (hors contraste texte) ; `text` = version assombrie pour les numéros et
// pictogrammes, ≥4.5:1 sur blanc.
export const accents = [
  { bar: '#00B6FF', text: '#006D99' },
  { bar: '#FF005D', text: '#CC004A' },
  { bar: '#7C3AED', text: '#6D28D9' },
  { bar: '#00C9B7', text: '#00756B' },
  { bar: '#FF8A3D', text: '#B34700' },
  { bar: '#8DC63F', text: '#4D7A12' }
];
export const accent = (i: number) => accents[i % accents.length];
