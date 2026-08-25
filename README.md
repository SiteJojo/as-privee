# as-privee
Site professionnel — accompagnement social

Site statique (HTML/CSS/JS, sans build) pour Joëlle Millon, assistante sociale privée, hébergé gratuitement sur GitHub Pages : **https://sitejojo.github.io/as-privee/**

## Notes de projet

- Chaîne YouTube : **S.O.S PAPIERS** — https://www.youtube.com/@s.o.spapiers732 (5 vidéos d'information gratuite, autofinancées par Joëlle pour aider les gens sans contrepartie). Spécialité phare : le dossier MDPH (adulte et enfant). Ton pédagogique, rassurant, pragmatique ; valeurs : secret professionnel, neutralité, écoute bienveillante.
- Structure : site multi-pages en HTML/CSS/JS pur (pas de framework, pas d'étape de build) pour rester simple à héberger sur GitHub Pages et fiable sur du matériel ancien.
- Depuis la connexion de l'app GitHub, Claude gère directement le dépôt : chaque demande de modification est poussée immédiatement sur `main`, et GitHub Pages republie automatiquement en quelques minutes.

## Pages du site

- `index.html` — Accueil
- `a-propos.html` — Qui suis-je
- `prestations.html` — Prestations & tarifs
- `ressources.html` — Ressources gratuites (chaîne S.O.S PAPIERS)
- `contact.html` — Formulaire de contact (avec protection anti-spam : captcha simple + champ piège)
- `mentions-legales.html` — Mentions légales & confidentialité

Le style commun est dans `assets/css/style.css`, le script (menu mobile + captcha) dans `assets/js/main.js`, le favicon (mascotte super-héroïne "AS") dans `assets/img/favicon.svg`.

## Comment activer le formulaire de contact (Formspree, gratuit)

GitHub Pages ne peut pas envoyer d'e-mails tout seul (c'est un hébergement « statique »). Le formulaire de contact utilise donc un service gratuit, Formspree, qui reçoit le message et vous le transfère par e-mail.

1. Allez sur https://formspree.io et créez un compte gratuit avec votre adresse e-mail.
2. Créez un nouveau formulaire (« New Form »).
3. Formspree vous donne une adresse du type `https://formspree.io/f/abcd1234`.
4. Dans le fichier `contact.html`, remplacez `VOTRE_ID_FORMSPREE` par `abcd1234` (juste cette partie, dans la ligne qui commence par `<form ... action=...`).
5. Formspree vous enverra un e-mail de confirmation à valider la première fois qu'un message est envoyé.

## Tout ce qu'il reste à compléter

- [ ] Mode de paiement actuel, en attendant le paiement en ligne (chèque, virement, espèces...)
- [ ] Identifiant Formspree pour activer le formulaire de contact (voir ci-dessus)
- [ ] Une photo de vous pour la page « Qui suis-je » (facultatif, mais rassurant pour les visiteurs)

## Déjà complété

- [x] Nom, tarifs (150 €/h), téléphone, statut légal (micro-entreprise), SIRET et adresse (mentions légales)
- [x] Ville/région volontairement absente du contenu public (choix de la cliente, pour des raisons de confidentialité)
- [x] Style et contenu des vidéos YouTube (résumé des 5 épisodes)
- [x] Favicon personnalisé (mascotte super-héroïne "AS")
- [x] Protection anti-spam du formulaire de contact (captcha + champ piège, ajoutée automatiquement)
- [x] Connexion GitHub en écriture opérationnelle — Claude peut pousser directement les modifications
