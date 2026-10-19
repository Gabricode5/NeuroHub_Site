# Roadmap — Site web Collège de la Neurodiversité

_Objectif du projet : disposer d'un site crédible qui appuie les rendez-vous de financement (mairie de Draveil, Région IDF, ARS, fondations, mécènes)._

---

## Principe directeur

Le design et la technique du site sont **terminés et vérifiés** (accessibilité 100, mobile réglé, identité alignée sur le flyer). Le projet n'est plus bloqué par le code : il est bloqué par **le contenu que l'association doit fournir** et par **deux décisions de périmètre**.

La règle qui structure toute la suite : **ne jamais montrer une section vide à un financeur.** Une page « à compléter » ne se lit pas comme « en cours », elle se lit comme « pas prêt » — et elle décrédibilise tout le reste. Chaque étape ci-dessous sert cet impératif.

Deux responsables tout au long de la roadmap :

- **[ASSO]** — décisions et contenu qui appartiennent à l'association (présidente). Le développeur ne peut pas les produire à sa place sans fabriquer du texte générique.
- **[DEV]** — travail technique. La plupart est fait ; ce qui reste est court et souvent conditionné à une décision [ASSO].

---

## Phase 0 — Acquis (fait ✓)

Rappel de ce qui est terminé et n'est plus à retoucher :

- Architecture Astro propre, contenu centralisé dans `content.ts` (site statique HTML/CSS/JS, hébergeable gratuitement).
- Identité visuelle alignée sur le flyer officiel : bleu `#439ECB` / `#2773B2`, vert lime confiné aux CTA soutien, logo arc-en-ciel.
- Mises en page variées (fin de l'effet « template »), typographie Fraunces (titres) + Atkinson Hyperlegible (corps).
- Fond blanc dominant, rythme vertical homogène (140px).
- Accessibilité : axe-core 0 violation sur les 8 pages × 2 largeurs ; Lighthouse A11y 100.
- Mobile corrigé et prouvé : menu burger compact, tableaux scrollables accessibles, footer non masqué, Lighthouse Perf mobile 96–100 sur build de production.

**Conclusion : côté design/technique, il ne reste rien de significatif.**

---

## Phase 1 — Débloquer la V1 (chemin critique)

_C'est le seul obstacle réel entre le site et un premier RDV. Tout part de la décision de périmètre._

### 1.1 — Décision de périmètre [ASSO] — **prioritaire, bloque tout le reste**

Pour chacune des 21 sections aujourd'hui vides (voir liste en annexe), trancher :

- **soit** l'association fournit le contenu réel (texte écrit par elle),
- **soit** la page/section est **retirée de la navigation V1** et réactivée plus tard.

> Recommandation : pour les RDV imminents, **masquer** ce qui n'est pas prêt. Mieux vaut 4 pages pleines et carrées que 8 dont 3 trouées. C'est réversible en quelques lignes.

### 1.2 — Décision « dons en ligne » [ASSO]

Le flyer prévoit un système de dons (don unique/mensuel/IFI, déduction 66 %). Décider s'il est **dans la V1 ou reporté** en Phase 4. Un module de don en ligne (type HelloAsso) est un chantier à part, avec des implications légales — il n'est pas nécessaire pour un premier RDV où l'on demande surtout un accord de principe.

### 1.3 — Contenu minimum vital [ASSO]

Fournir les textes des sections qui **restent** en V1 après la décision 1.1 (voir annexe : liste page par page). C'est le vrai livrable qui débloque la mise en ligne.

### 1.4 — Application du périmètre [DEV] — _dépend de 1.1_ — ~30 min

Retirer de la nav les pages non prêtes (les pages restent dans le code, juste masquées) **ou** intégrer le contenu fourni. Vérifier qu'aucune section « à compléter » n'est plus atteignable depuis la nav.

---

## Phase 2 — Mise en ligne V1

_Dépend de la Phase 1. Une fois le périmètre calé, c'est rapide._

### 2.1 — Brancher le formulaire de contact [DEV] — ~1 h

Configurer le service de formulaire (Formspree/Web3Forms déjà prévu) avec l'e-mail réel de l'association (`collegedelaneurodiversite@gmail.com`). Tester un envoi réel.

### 2.2 — Déposer le dossier de présentation PDF [DEV/ASSO] — quelques min

L'association fournit le PDF de présentation ; le déposer dans `public/` et réactiver le lien de téléchargement (`presentationPdfHref`, aujourd'hui désactivé). C'est un élément clé : un financeur veut télécharger un dossier.

### 2.3 — Déploiement [DEV] — ~demi-journée

Déployer le build statique (Netlify / Vercel / GitHub Pages : gratuit, sans serveur à maintenir). Configurer le nom de domaine. Vérifier le site en ligne réel (pas le serveur de dev). Re-lancer axe-core + Lighthouse sur l'URL de production.

**À l'issue de la Phase 2 : le site est en ligne et présentable en RDV.**

---

## Phase 3 — Compléter le contenu (post-V1)

_Au fil de l'eau, quand l'association fournit la matière. Réactiver progressivement les pages masquées en Phase 1._

- [ASSO] Rédiger les sections reportées : Notre mission, Nos valeurs, Notre vision (Association) ; projets réalisés, bénéficiaires, partenaires, appels à projet (Nos projets) ; toute la page Entreprises et fondations ; etc.
- [DEV] Intégrer chaque contenu reçu dans `content.ts`, réactiver la page dans la nav, vérifier le rendu.
- Règle : une page ne réapparaît dans la nav **que lorsqu'elle est complète.**

---

## Phase 4 — Fonctionnalités avancées

_Chantiers à part entière, à lancer seulement si le besoin est confirmé._

- **Module de dons en ligne** [ASSO + DEV] — intégration HelloAsso ou équivalent (don unique/mensuel/IFI, reçus fiscaux, mention déduction 66 %). Implications légales et techniques : à cadrer avec l'association. Plusieurs jours.
- **Documents téléchargeables** [ASSO] — comptes et rapports d'activité annuels (page Association). L'association doit produire les PDF.
- **Formulaire de suggestions** [DEV] — sur « Nos actions », un formulaire dédié plutôt que le lien vers le contact générique.
- **Besoins bénévoles/mécénat actualisés** [ASSO + DEV] — mécanisme pour tenir à jour les besoins selon les projets en cours.

---

## Phase 5 — Finitions cosmétiques (optionnel)

_Aucun impact sur la crédibilité. À faire en dernier, ou jamais._

- Soulignement du hero : remplacer le trait ondulé « fait main » par un trait net ou un segment géométrique repris du logo.
- Arbitrage du bouton « Nous soutenir » en lime vif dans le header (le garder comme accent d'appel à l'action, ou le passer en bleu).

---

## Maintenance (à noter pour plus tard)

Site rarement modifié = un seul point de vigilance : la **chaîne de build**. Noter dans le README la version de Node utilisée, pour que `npm run build` reste reproductible dans 1–2 ans. Pour toute modification de contenu future : éditer `content.ts`, rebuild, redéployer. Aucun serveur à maintenir.

---

## Séquencement conseillé

1. **[ASSO]** Trancher le périmètre V1 (1.1) + la question dons (1.2) — _rien ne démarre sans ça._
2. **En parallèle** : [ASSO] rassemble le contenu vital (1.3) pendant que [DEV] prépare le masquage et le déploiement.
3. **[DEV]** Appliquer le périmètre (1.4), brancher formulaire + PDF (2.1, 2.2), déployer (2.3).
4. → **Site en ligne, prêt pour les RDV.**
5. Ensuite : compléter le contenu au fil de l'eau (Phase 3), fonctionnalités avancées si besoin (Phase 4), cosmétique en dernier (Phase 5).

Le chemin critique n'est pas technique : il passe par **les décisions et le contenu de l'association**. Le travail de développement restant se compte en heures, pas en semaines — une fois le périmètre tranché.

---

## Annexe — Sections à trancher (issues de l'audit d'arborescence)

**Placeholders à remplir ou masquer :**

- **Accueil** : section « Vision » dédiée, bloc « Dons », « Nous rejoindre »
- **L'association** : Notre vision, Notre mission, Nos valeurs, Partenaires _(Qui sommes-nous, Membres/CA, Bénévoles sont prêts)_
- **Nos actions** : Activités/initiatives en soutien ; formulaire de suggestions réel
- **Le collège-lycée** : Objectifs et finalités _(le reste est prêt)_
- **Nos projets** : projets réalisés, bénéficiaires, partenaires, appels à projet _(Avantages territoire prêt)_
- **Agir et nous soutenir** : Dons financiers (module), Taxe apprentissage _(Dons en nature prêt)_
- **Entreprises et fondations** : les 7 sous-sections _(page entièrement à écrire)_

**Éléments fonctionnels manquants :** système de dons, documents téléchargeables, formulaire de suggestions.

**Correction de nommage mineure [DEV, ~1 ligne] :** menu « Le collège » → « Le collège-lycée » (le titre officiel se perd dans la nav).
