import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none text-neutral-700 space-y-8">
          <section>
            <p className="text-lg">
              La protection de vos données personnelles est une priorité pour Espace Agenda. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
              vos informations personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Données collectées</h2>
            <p>
              Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remplissez le formulaire de contact</li>
              <li>Demandez une démonstration ou un devis</li>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Utilisez nos services</li>
            </ul>
            <p className="mt-4">
              Les données collectées peuvent inclure :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations professionnelles (nom de cabinet, spécialité)</li>
              <li>Données de navigation (cookies, adresse IP)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Utilisation des données</h2>
            <p>
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes de contact et d'information</li>
              <li>Vous fournir nos services et les améliorer</li>
              <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
              <li>Assurer le support client</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Améliorer notre site web et nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Votre consentement</strong> : pour l'envoi de communications marketing</li>
              <li><strong>L'exécution d'un contrat</strong> : pour la fourniture de nos services</li>
              <li><strong>Notre intérêt légitime</strong> : pour l'amélioration de nos services</li>
              <li><strong>Une obligation légale</strong> : pour la conformité aux réglementations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Partage des données</h2>
            <p>
              Nous ne vendons ni ne louons vos données personnelles à des tiers. 
              Vos données peuvent être partagées avec :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nos prestataires de services</strong> : qui nous aident à exploiter notre site et à fournir nos services (hébergement, emailing, paiement)</li>
              <li><strong>Les autorités</strong> : si la loi l'exige ou pour protéger nos droits</li>
            </ul>
            <p className="mt-4">
              Tous nos prestataires sont tenus de respecter la confidentialité et la sécurité de vos données 
              conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour 
              lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données de contact</strong> : 3 ans à compter du dernier contact</li>
              <li><strong>Données clients</strong> : durée du contrat + 5 ans (obligations légales)</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, 
              la divulgation, l'altération ou la destruction :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement des données sensibles (SSL/TLS)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières</li>
              <li>Surveillance et mise à jour de nos systèmes de sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : supprimer vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> : à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à : <strong>contact@espaceagenda.fr</strong>
            </p>
            <p>
              Vous avez également le droit de déposer une plainte auprès de la CNIL (Commission Nationale 
              de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont 
              de petits fichiers texte stockés sur votre appareil.
            </p>
            <p className="mt-4">
              <strong>Types de cookies utilisés :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques</strong> : pour comprendre comment vous utilisez notre site</li>
              <li><strong>Cookies de préférences</strong> : pour mémoriser vos choix</li>
            </ul>
            <p className="mt-4">
              Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur cette page. 
              Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos 
              données personnelles :
            </p>
            <p className="mt-4">
              <strong>Email :</strong> contact@espaceagenda.fr<br />
              <strong>Téléphone :</strong> 01 23 45 67 89<br />
              <strong>Courrier :</strong> Espace Agenda, 123 Avenue de la République, 75011 Paris, France
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
            Dernière mise à jour : Janvier 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;