# Ascendra IT — Site premium + PWA

Projet Next.js prêt pour Vercel.

## Inclus
- Site vitrine premium et responsive
- 8 familles de prestations IT
- Formulaire de contact
- Notification e-mail via Resend
- Accusé de réception automatique pour le prospect
- PWA installable sur Android et iPhone
- Icône Ascendra IT
- SEO de base
- Numéro de téléphone configurable sans modifier le code
- Aucun nom personnel affiché publiquement

## Prestations présentées
- Conseil & systèmes d'information
- Développement web & logiciel
- Support IT & Helpdesk N1
- TMA & maintenance applicative
- Intégration de solutions
- Audit & qualité
- Pilotage de projets IT
- Formation & accompagnement

## Lancement local
1. Installer Node.js 20+
2. Ouvrir un terminal dans ce dossier
3. Exécuter :
   npm install
4. Copier `.env.example` vers `.env.local`
5. Exécuter :
   npm run dev
6. Ouvrir http://localhost:3000

## Déploiement Vercel
1. Mettre ce projet sur GitHub.
2. Dans Vercel : Add New > Project.
3. Importer le dépôt GitHub.
4. Déployer.
5. Dans Settings > Environment Variables, ajouter les variables de `.env.example`.
6. Dans Settings > Domains, connecter `ascendra-it.fr`.

## E-mail professionnel
Le site utilise `contact@ascendra-it.fr` comme exemple.
La boîte mail peut être créée chez Google Workspace, Microsoft 365, OVH, Infomaniak, etc.
Resend est uniquement utilisé pour l'envoi automatique du formulaire.

## Demain : ajouter le téléphone
Dans Vercel > Project > Settings > Environment Variables :
- ajouter `NEXT_PUBLIC_PHONE`
- valeur : le numéro professionnel
- redéployer

Le bouton téléphone apparaîtra automatiquement.

## À prévoir avant ouverture publique
- Mentions légales
- Politique de confidentialité
- Bannière cookies uniquement si des traceurs non essentiels sont ajoutés
- Vérification de l'adresse e-mail et du domaine
- Test du formulaire sur mobile et desktop
