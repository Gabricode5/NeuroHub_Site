# Collège de la Neurodiversité

Site vitrine statique Astro + TypeScript + Tailwind CSS, conçu en priorité pour l’accessibilité.

## Lancer le projet

```bash
npm install
npm run dev
```

Pour la vérification de types et la production : `npm run build`.

## Architecture

La page est un assemblage ordonné de sections. Le contenu, les styles et les effets sont
séparés du markup ; rien n'est écrit en dur dans un composant.

```
src/
  data/
    site.ts            # config globale : nav, contact, coordonnées, liens externes
    content.ts          # source unique de tout le contenu (textes + chiffres), typé
  styles/
    tokens.css          # design system : couleurs, rayons, ombres, polices (var CSS)
    global.css           # reset + base typographique + .wrap + rythme de section
  layouts/
    Base.astro          # <html>, <head>, meta/SEO, imports globaux — rien d'autre
  components/
    ui/                  # briques pures et réutilisables, sans contenu métier
      Button.astro  Card.astro  Eyebrow.astro  StatCounter.astro  DataTable.astro
    layout/
      Header.astro  Footer.astro  Section.astro  A11yWidget.astro
    fx/                  # effets isolés, jamais mélangés au contenu
      ScrollFX.astro (apparition au scroll, ombre du header, compteurs)
      InfinityAmbient.astro (mouvement continu du ∞ du hero)
    sections/             # 1 section de page = 1 fichier, dans l'ordre d'apparition
      Hero, Neurodiversite, Besoin, Projet, Porteurs, LieuSite,
      Modele, Impact, Retroplanning, Soutenir
  pages/
    index.astro          # assemblage pur : imports + ordre des sections, rien d'autre
```

### Où modifier quoi

- **Un texte ou un chiffre** → `src/data/content.ts` (regroupé par section, typé).
- **La navigation, l'e-mail de contact, l'adresse, les liens Formspree/PDF** → `src/data/site.ts`.
- **Une couleur, un rayon, une ombre** → `src/styles/tokens.css` (variables CSS `--color-*`,
  `--radius-*`, `--shadow-*`), reprises par `tailwind.config.mjs` pour les classes utilitaires
  (`bg-navy`, `text-orange`, etc.). Aucun composant ne contient de couleur en dur.
- **L'ordre des sections** → `src/pages/index.astro` : la liste des imports et leur ordre
  dans `<Base>` reflète exactement l'ordre visuel de la page.
- **Une section précise** → son fichier dans `src/components/sections/`.
- **Un effet (apparition au scroll, compteurs, mouvement du ∞)** → `src/components/fx/`.

## Éléments à remplacer avant publication

- **Logo** : remplacer `public/assets/logo-placeholder.svg` en conservant le même chemin, ou modifier `logoSrc` dans `src/data/site.ts`.
- **Photos des porteurs** : les bandeaux colorés générés dans `src/components/sections/Porteurs.astro` sont des placeholders accessibles. Remplacer le `div` par une image optimisée et un texte alternatif descriptif.
- **Formulaire** : remplacer `formspreeUrl` dans `src/data/site.ts` par l’URL Formspree du compte de l’association. Modifier `contactEmail` (même fichier) pour l’adresse du footer.
- **Dossier PDF** : remplacer `presentationPdfHref` dans `src/data/site.ts`.

## Déploiement

Le build produit un site statique dans `dist/` : il peut être déployé sur Netlify, Vercel ou GitHub Pages. Commande de build : `npm run build` ; dossier de publication : `dist`.

## Accessibilité

Le site inclut une structure sémantique, un lien d’évitement, des focus visibles, une navigation clavier, des contrastes renforcés, des animations désactivées sous `prefers-reduced-motion`, et un panneau persistant (localStorage) pour contraste, taille de texte, police lisible et mode concentration. Tester le rendu après intégration des vrais contenus avec Lighthouse et les outils de votre navigateur.

### Checklist contraste (à revérifier après tout changement de couleur ou de contenu)

Règle systémique du projet : **toute classe qui définit un fond (`bg-*`) doit être accompagnée d'une couleur de texte explicite** (héritée volontairement ou redéfinie) — ne jamais laisser un texte hériter une couleur claire au-dessus d'un fond qui vient d'être éclairci (et inversement). C'est ce qui avait cassé la ligne « Participation des familles » du tableau budgétaire (fond clair sur un bloc `text-white`, sans redéfinir la couleur du texte) — corrigé via la classe `.row-highlight` (`background:var(--color-cream)` + `color:var(--color-navy)`, [global.css](src/styles/global.css)), appliquée par [DataTable.astro](src/components/ui/DataTable.astro) via `tone="highlight"` sur la ligne concernée.

Paires vérifiées (ratio WCAG — seuil AA : 4.5:1 texte normal, 3:1 dès 24px ou 19px gras) :

| Texte | Fond | Ratio | Usage |
|---|---|---|---|
| `#FFFFFF` | `#12303F` (navy) | ~13.8:1 | Titres et texte sur blocs sombres |
| `#E8963C` (`orange-light`) | `#12303F` (navy plein) | ~5.8:1 | Eyebrows sur sections `tone="dark"` |
| `#A2540A` (`orange`) | `#FFFFFF` / `#F4F7F7` (mist) | ~5.1–5.5:1 | Eyebrows et chiffres-clés sur fond clair |
| `#1F7A7A` (teal) | `#FFFFFF` / `#F4F7F7` | ~4.7–5.1:1 | Sous-titres, dates de la frise |
| `#12303F` | `#FBFAF7` (`.row-highlight`) | ~15:1 | Ligne mise en avant du tableau budgétaire, sur bloc marine |
| `#12303F` | `#FFFFFF` | ~15.7:1 | Corps de texte par défaut |

⚠️ Point de vigilance identifié : un fond semi-transparent (`bg-white/10` et plus) posé sur `bg-navy` éclaircit le fond effectif et peut faire chuter le contraste d'un texte clair sous 4.5:1 (cas réel rencontré sur l'encart « Notre intention » du hero, ramené à `bg-white/5` pour rester conforme). Vérifier avec un outil de contraste dès qu'une opacité est ajoutée sur un fond sombre contenant du texte.

Audité avec [axe-core](https://github.com/dequelabs/axe-core) (0 violation WCAG 2.1 A/AA) et Lighthouse (Accessibilité 100/100, Performance 100/100 sur le build de production — `npm run build && npm run preview`).

## Mouvement (sobre, jamais gadget)

Le script [fx/ScrollFX.astro](src/components/fx/ScrollFX.astro) gère les animations, toutes désactivées sous `prefers-reduced-motion: reduce` (aucune classe animée n'est même ajoutée : le contenu reste visible et les compteurs affichent directement leur valeur finale, y compris sans JavaScript).

- **Apparition au scroll** : tout `<section>` et le `<footer>` reçoivent automatiquement un fondu + léger décalage vertical. Pour qu'une grille de cartes apparaisse en cascade, ajouter la classe `reveal-grid` sur son conteneur (délai de 60 ms entre chaque enfant).
- **Compteurs animés** : ajouter `data-count="80"` sur un `<span>` dont le texte initial est déjà la valeur finale (`80`) — le script la ramène à 0 puis la fait remonter au passage dans le viewport ; voir [StatCounter.astro](src/components/ui/StatCounter.astro) (props `count`/`countRange`) et [DataTable.astro](src/components/ui/DataTable.astro) (cellules `{ prefix, count, suffix }`).
- **Ombres et rayons** : un seul système, réutilisé partout — `.card` (rayon `--radius-md`, `--shadow-soft`) pour les blocs de contenu, `rounded-lg` pour les contrôles (boutons, champs de formulaire).

### Mouvement continu (ambient) — le ∞ du hero

Un halo parcourt en boucle lente (12 s) le tracé du symbole ∞ dans le hero (`.hero-infinity`, CSS `offset-path`), et l'ensemble suit un léger effet de parallaxe au scroll. C'est le seul mouvement autonome et continu du site — volontairement unique, focal, jamais dans une zone de texte à lire, jamais en boucle rapide (< 6 s), jamais de clignotement ni de pulsation sur un CTA.

Trois garde-fous cumulatifs, tous vérifiés fonctionnellement (le script n'anime rien s'il n'y a pas lieu, il ne se contente pas de le masquer) :
1. `prefers-reduced-motion: reduce` → coupe tout en CSS pur, dès le premier rendu.
2. Toggle **« Réduire les animations »** dans le widget d'accessibilité, persisté en localStorage. Par défaut ON, sauf si le système est déjà en mouvement réduit au premier chargement (alors OFF par défaut, l'infini reste figé).
3. Pause automatique dès que le hero sort du viewport (`IntersectionObserver`), pour ne consommer aucune ressource hors écran.

Implémenté dans [fx/InfinityAmbient.astro](src/components/fx/InfinityAmbient.astro) (pause/parallaxe, mounté globalement dans [layouts/Base.astro](src/layouts/Base.astro)) et [layout/A11yWidget.astro](src/components/layout/A11yWidget.astro) (toggle + défaut selon `prefers-reduced-motion`) ; seules les propriétés `transform`/`offset-distance` sont animées (compositor uniquement, aucun retour de mise en page).
