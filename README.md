# as-privee
Site professionnel — accompagnement social

Site statique (HTML/CSS/JS, sans build) pour Joëlle Millon, assistante sociale privée, hébergé gratuitement sur GitHub Pages.

## Notes de projet

- Chaîne YouTube : **S.O.S PAPIERS** — https://www.youtube.com/@s.o.spapiers732 (5 vidéos d'information gratuite, autofinancées par Joëlle pour aider les gens sans contrepartie). Spécialité phare : le dossier MDPH (adulte et enfant). Ton pédagogique, rassurant, pragmatique ; valeurs : secret professionnel, neutralité, écoute bienveillante.
  - Cet environnement de travail bloque l'accès direct à youtube.com, donc le contenu du site s'appuie sur un résumé des 5 vidéos fourni par Joëlle (via Gemini) plutôt que sur un visionnage direct — à vérifier une fois le site en ligne.
- Structure : site multi-pages en HTML/CSS/JS pur (pas de framework, pas d'étape de build) pour rester simple à héberger sur GitHub Pages et fiable sur du matériel ancien.

## Pages du site

- `index.html` — Accueil
- `a-propos.html` — Qui suis-je
- `prestations.html` — Prestations & tarifs
- `ressources.html` — Ressources gratuites (chaîne S.O.S PAPIERS)
- `contact.html` — Formulaire de contact
- `mentions-legales.html` — Mentions légales & confidentialité

Le style commun est dans `assets/css/style.css`, le menu mobile dans `assets/js/main.js`.

## Comment activer GitHub Pages (une fois)

1. Sur GitHub, ouvrez le dépôt `as-privee`.
2. Allez dans **Settings** (Paramètres) → **Pages** (dans le menu de gauche).
3. Sous « Build and deployment », choisissez **Deploy from a branch**.
4. Sélectionnez la branche `main` et le dossier `/ (root)`, puis **Save**.
5. Après quelques minutes, le site sera visible à une adresse du type `https://sitejojo.github.io/as-privee/`.

## Comment activer le formulaire de contact (Formspree, gratuit)

GitHub Pages ne peut pas envoyer d'e-mails tout seul (c'est un hébergement « statique »). Le formulaire de contact utilise donc un service gratuit, Formspree, qui reçoit le message et vous le transfère par e-mail.

1. Allez sur https://formspree.io et créez un compte gratuit avec votre adresse e-mail.
2. Créez un nouveau formulaire (« New Form »).
3. Formspree vous donne une adresse du type `https://formspree.io/f/abcd1234`.
4. Dans le fichier `contact.html`, remplacez `VOTRE_ID_FORMSPREE` par `abcd1234` (juste cette partie, dans la ligne qui commence par `<form action=...`).
5. Formspree vous enverra un e-mail de confirmation à valider la première fois qu'un message est envoyé.

## Tout ce qu'il reste à compléter

Ces éléments sont volontairement marqués dans le site par un encadré jaune « À compléter » ou entre crochets `[...]`. Donnez-moi les informations et je les mets à jour :

- [ ] Confirmer le nom à afficher (Joëlle Millon ?)
- [ ] Ville / région où vous vous êtes installée (apparaît sur plusieurs pages)
- [ ] Vos tarifs réels (fixes, à l'heure, ou « sur devis »)
- [ ] Numéro de téléphone professionnel à afficher
- [ ] Confirmer l'e-mail public à utiliser (`joelle.millon41@orange.fr` est utilisé par défaut)
- [ ] Statut légal (auto-entrepreneur, profession libérale déclarée...) + numéro SIRET, pour les mentions légales
- [ ] Adresse professionnelle (mentions légales)
- [ ] Mode de paiement actuel, en attendant le paiement en ligne (chèque, virement, espèces...)
- [ ] Identifiant Formspree pour activer le formulaire de contact (voir ci-dessus)
- [ ] Une photo de vous pour la page « Qui suis-je » (facultatif, mais rassurant pour les visiteurs)
- [x] ~~Votre style dans les vidéos YouTube~~ — reçu (résumé des 5 épisodes), intégré sur la page Ressources gratuites et ailleurs sur le site
