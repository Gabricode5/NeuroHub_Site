// Couleurs d'accent (palette du logo), en alternance sur les cartes. `bar` = filet ou fond
// décoratif (hors contraste texte) ; `text` = version assombrie pour les numéros et
// pictogrammes, ≥4.5:1 sur blanc.
// `pastel` = fond clair des vignettes (texte encre ≥ 10:1) ; le 2e est saumon (« Respect des
// individualités », retour du 05/11/2026).
// `fill` / `onFill` = carte pleine couleur et couleur de son texte (≥ 4.5:1 vérifié ; le rose
// est à peine assombri, le rose vif d'origine ne portant ni noir ni blanc lisible).
export const accents = [
  { bar: '#00B6FF', text: '#006D99', fill: '#00B6FF', onFill: '#313232', pastel: '#C9EEFF' },
  { bar: '#FF005D', text: '#CC004A', fill: '#E6005A', onFill: '#FFFFFF', pastel: '#FFC9B9' },
  { bar: '#7C3AED', text: '#6D28D9', fill: '#7C3AED', onFill: '#FFFFFF', pastel: '#E3D6FD' },
  { bar: '#00C9B7', text: '#00756B', fill: '#00C9B7', onFill: '#313232', pastel: '#C2F2EC' },
  { bar: '#FF8A3D', text: '#B34700', fill: '#FF8A3D', onFill: '#313232', pastel: '#FFDCC4' },
  { bar: '#8DC63F', text: '#4D7A12', fill: '#8DC63F', onFill: '#313232', pastel: '#DDF0C5' }
];
export const accent = (i: number) => accents[i % accents.length];
