/**
 * Weidler Studio — i18n
 * Langues HK Crib GO : en, fr, pt, es, zh, ja
 * Repli navigateur : français
 */
(function () {
  const ORDER = ["en", "fr", "pt", "es", "zh", "ja"];
  const STORAGE_KEY = "ws_locale";

  function detectLocale() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ORDER.includes(saved)) return saved;
    const langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "fr"];
    for (const raw of langs) {
      const low = String(raw || "").toLowerCase();
      if (low.startsWith("fr")) return "fr";
      if (low.startsWith("en")) return "en";
      if (low.startsWith("pt")) return "pt";
      if (low.startsWith("es")) return "es";
      if (low.startsWith("zh")) return "zh";
      if (low.startsWith("ja")) return "ja";
    }
    return "fr";
  }

  let locale = detectLocale();

  function hkSections(L) {
    return [
      { title: L.hkWhoTitle, body: L.hkWhoBody },
      { title: L.hkDataTitle, body: L.hkDataBody },
      { title: L.hkLocalTitle, body: L.hkLocalBody },
      { title: L.hkAnalyticsTitle, body: L.hkAnalyticsBody },
      { title: L.hkShareTitle, body: L.hkShareBody },
      { title: L.hkDeleteTitle, body: L.hkDeleteBody },
      { title: L.hkChildrenTitle, body: L.hkChildrenBody },
      { title: L.hkContactTitle, body: L.hkContactBody },
    ];
  }

  function havenSections(L) {
    return [
      { title: L.hvWhoTitle, body: L.hvWhoBody },
      { title: L.hvPurposeTitle, body: L.hvPurposeBody },
      { title: L.hvPermsTitle, body: L.hvPermsBody },
      { title: L.hvLocalTitle, body: L.hvLocalBody },
      { title: L.hvShareTitle, body: L.hvShareBody },
      { title: L.hvDeleteTitle, body: L.hvDeleteBody },
      { title: L.hvChildrenTitle, body: L.hvChildrenBody },
      { title: L.hvContactTitle, body: L.hvContactBody },
    ];
  }

  const BASE_FR = {
    brand: "Weidler Studio",
    navHome: "Accueil",
    navHk: "HK Crib Go",
    navHaven: "Haven",
    navContact: "Contact",
    homeTitle: "Nos applications",
    homeLead: "Un jeu de cribbage, un outil pour adapter ton téléphone à ta journée, et d’autres idées en chantier.",
    discover: "Découvrir",
    hkCardTitle: "HK Crib Go",
    hkCardDesc: "Le cribbage Hong Kong, en parties rapides hors ligne sur votre téléphone.",
    havenCardTitle: "Haven",
    havenCardDesc: "Réduisez les interruptions du téléphone selon vos modes et votre horaire.",
    contactTitle: "Contact",
    contactBody: "Une question sur nos applications ou la confidentialité ?",
    contactEmail: "contact@weidlerstudio.com",
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>Webmestre <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
    galleryTitle: "Galerie",
    featuresTitle: "Fonctionnalités et options",
    privacyTitle: "Politique de confidentialité",
    hkPageKicker: "Cribbage Hong Kong • Jeu Android",
    hkPageTitle: "HK Crib Go",
    hkPageTagline: "Pas de Wi-Fi? À vous de jouer.",
    hkPageLead:
      "Dans le métro, sous la tente ou en plein vol, lancez une partie rapide de cribbage Hong Kong. Un adversaire IA est toujours prêt à jouer. Le jeu fonctionne entièrement hors ligne et son interface est offerte en six langues.",
    hkFeat1: "<strong>Personnalisation</strong> — Dos de cartes, plateaux et options de comptage.",
    hkFeat2: "<strong>Pointage intuitif</strong> — Points sous les cartes, avec pastilles quand une carte compte plusieurs fois.",
    hkFeat3: "<strong>Progression</strong> — Statistiques, historique, médailles et trophées.",
    hkFeat4: "<strong>Support intégré avec assistance par IA</strong> — Signalez un bug, proposez une amélioration ou posez une question. Une connexion Internet est nécessaire pour envoyer votre message.",
    hkFeat5: "<strong>Hors ligne</strong> — Jouez sans connexion Internet pour le cœur du jeu.",
    hkFeat6: "<strong>Multilingue</strong> — Interface en six langues : anglais, français, portugais, espagnol, chinois, japonais.",
    hkHowTitle: "Comment jouer",
    hkHowBody:
      "<p>Le but est d’obtenir le plus de points possible en <strong>3 rounds</strong>.</p>" +
      "<h3>Déroulement d’un round</h3>" +
      "<p>Chaque round utilise <strong>21 cartes</strong> : 20 pour construire les mains, et la 21<sup>e</sup> comme <strong>carte de coupe</strong>.</p>" +
      "<p>Vous créez :</p>" +
      "<ul><li><strong>4 mains ouvertes</strong></li><li><strong>1 cribble</strong> (main fermée)</li></ul>" +
      "<p>Les cartes <strong>5, 10, 15 et 20</strong> sont toujours placées dans le cribble. Placez ensuite les autres cartes pour former les meilleures combinaisons. Quand les 20 cartes sont posées, la coupe est révélée et le comptage commence.</p>" +
      "<h3>Fin de partie</h3>" +
      "<p>En solo, l’objectif est d’atteindre <strong>121 points</strong> en 3 rounds. Contre un adversaire, le meilleur total l’emporte ; en cas d’égalité, match nul.</p>" +
      "<p><strong>Conseil :</strong> visez plusieurs combinaisons avec les mêmes cartes — quinze, paires et suite peuvent se cumuler.</p>",
    hkScoreTitle: "Comment compter les points",
    hkScoreBody:
      "<p>Les points suivent les règles officielles de HK Crib Go :</p>" +
      "<ul>" +
      "<li><strong>Quinze</strong> — Toute combinaison totalisant exactement 15 : <strong>2 points</strong>.</li>" +
      "<li><strong>Paires et cartes identiques</strong> — 2 cartes = 2 pts · 3 cartes = 6 pts · 4 cartes = 12 pts.</li>" +
      "<li><strong>Suite</strong> — Cartes qui se suivent (ex. 3-4-5 = 3 pts, 7-8-9-10 = 4 pts).</li>" +
      "<li><strong>Couleur (flush)</strong> — 4 cartes de la même couleur : 4 pts ; avec la coupe de la même couleur : 6 pts.</li>" +
      "<li><strong>Nobs</strong> — Valet de la même couleur que la coupe : 1 pt.</li>" +
      "<li><strong>Coupe valet</strong> — Si la carte de coupe est un valet : 2 pts (une fois par round).</li>" +
      "</ul>" +
      "<h3>Après le comptage</h3>" +
      "<p>Chaque carte qui a marqué reste en place : une teinte selon le thème la met en évidence, et une <strong>pastille</strong> indique combien de fois elle a compté. La coupe est traitée de la même façon si elle marque. Teinte et pastilles se règlent dans Menu → Comptage.</p>",
    hkOptionsTitle: "Options : dos de cartes et plateaux",
    hkOptionsBody:
      "<p>Personnalisez l’apparence depuis le menu de l’application.</p>" +
      "<h3>Dos des cartes</h3>" +
      "<ul class=\"option-chips\"><li>Rouge classique</li><li>Bleu</li><li>Mystère</li></ul>" +
      "<h3>Plateaux</h3>" +
      "<ul class=\"option-chips\"><li>Bois chêne clair</li><li>Bois cèdre rougi</li><li>Argile terracotta</li></ul>" +
      "<h3>Ambiances</h3>" +
      "<ul class=\"option-chips\"><li>Classique</li><li>Sable Chaud</li><li>Nuit Cyber</li></ul>" +
      "<p>Vous pouvez aussi ajuster les animations et l’affichage du comptage (teinte et pastilles) selon vos préférences.</p>",
    havenPageKicker: "Gestion des interruptions • Application Android",
    havenPageTitle: "Haven",
    havenPageTagline: "Gardez l’essentiel. Le reste peut attendre.",
    havenPageLead:
      "Au travail, sur la route ou quand vous dormez, choisissez quels appels et notifications peuvent vous interrompre. Activez le mode qui vous convient ou laissez Haven le faire selon votre horaire.",
    havenFeat1: "<strong>Modes personnalisables</strong> — Règles adaptées au jour, à la conduite, au sommeil, au travail, etc.",
    havenFeat2: "<strong>Choix Manuel / Auto</strong> — Vous pilotez le mode sur l’accueil, ou Haven suit votre horaire d’automatisation.",
    havenFeat3: "<strong>Horaire automatique</strong> — Programmez des plages sur la semaine.",
    havenFeat4: "<strong>Historique</strong> — Voyez les interruptions évitées et ce qui a été filtré.",
    havenFeat5: "<strong>Sécurité prioritaire</strong> — Préservation des alertes essentielles et de l’accès aux urgences.",
    havenFeat6: "<strong>Contacts d’urgence</strong> — Possibilité d’autoriser un second appel rapide pour certains proches.",
    hkCapPartie: "Partie en cours",
    hkCapPointage: "Pointage d’une manche",
    hkCapSupport: "Centre de support",
    hkCapMenu: "Fin d’un round / paramètres",
    hkCapSupportCentre: "Support technique",
    hkCapPartieAlt: "Partie contre l’IA",
    havenCapHero: "Haven — refuge numérique",
    havenCapAccueil: "Accueil et modes",
    havenCapHistorique: "Historique des interruptions",
    havenCapHoraire: "Horaire automatique",
    hkWhoTitle: "Qui sommes-nous ?",
    hkWhoBody: "<p><strong>HK Crib Go</strong> est un jeu Android de type cribbage. Cette politique décrit le traitement des informations lorsque vous utilisez l’application.</p>",
    hkDataTitle: "HK Crib Go collecte-t-il des données personnelles ?",
    hkDataBody: "<p>HK Crib Go ne collecte pas directement d’informations personnelles identifiables. Les scores et préférences sont enregistrés <strong>localement sur votre appareil</strong>. Aucune donnée personnelle n’est vendue.</p>",
    hkLocalTitle: "Quelles informations sont enregistrées sur l’appareil ?",
    hkLocalBody: "<p>L’application peut enregistrer scores, records, médailles, statistiques de jeu et préférences (langue, thème, réglages). Ces données restent sur l’appareil et peuvent être effacées via les données de l’app ou la désinstallation.</p>",
    hkAnalyticsTitle: "Statistiques d’utilisation anonymes",
    hkAnalyticsBody: "<p>HK Crib Go peut utiliser <strong>Google Analytics (GA4)</strong> pour des statistiques anonymes (ouvertures, parties jouées, etc.) afin d’améliorer l’expérience. Aucune identité personnelle n’est volontairement collectée.</p>",
    hkShareTitle: "Partage avec des tiers",
    hkShareBody: "<p>HK Crib Go <strong>ne vend pas</strong> de données personnelles. Le seul échange éventuel concerne Google Analytics (statistiques anonymes).</p>",
    hkDeleteTitle: "Comment supprimer vos données",
    hkDeleteBody: "<p>Paramètres Android → Applications → HK Crib Go → Effacer le stockage / les données, ou désinstaller l’application.</p>",
    hkChildrenTitle: "Enfants",
    hkChildrenBody: "<p>HK Crib Go s’adresse au grand public et n’est pas conçu spécifiquement pour les enfants de moins de 13 ans.</p>",
    hkContactTitle: "Contact",
    hkContactBody: '<p>Questions confidentialité : <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "Qui sommes-nous ?",
    hvWhoBody: "<p><strong>Haven</strong> est une application Android de Weidler Studio qui aide à réduire les interruptions du téléphone selon les modes que vous choisissez (manuel ou horaire automatique).</p>",
    hvPurposeTitle: "Pourquoi Haven a-t-elle besoin d’autorisations Android ?",
    hvPurposeBody: "<p>Contrairement à un simple jeu, Haven doit <strong>filtrer les interruptions sur l’appareil</strong> (appels et notifications) pour que vos modes fonctionnent. Le filtrage se fait <strong>sur votre téléphone</strong>, selon vos réglages.</p>",
    hvPermsTitle: "À quoi servent les autorisations demandées ?",
    hvPermsBody:
      "<p>Selon les fonctions activées, Haven peut demander :</p><ul><li><strong>Accès aux notifications</strong> — pour détecter et filtrer les notifications selon vos règles ;</li><li><strong>Filtrage d’appels (call screening)</strong> — pour traiter les appels entrants selon le mode actif ;</li><li><strong>Contacts</strong> — pour appliquer priorités et règles aux personnes que vous choisissez ;</li><li><strong>Accès d’utilisation</strong> — pour des déclencheurs liés aux applications utilisées (ex. conduite) ;</li><li><strong>Bluetooth</strong> — pour des déclencheurs optionnels véhicule / appareil ;</li><li><strong>Notifications, service au premier plan, démarrage</strong> — pour maintenir la protection lorsque Haven est actif.</li></ul><p>Vous pouvez retirer ces accès dans les réglages Android ; certaines fonctions cesseront alors de fonctionner.</p>",
    hvLocalTitle: "Quelles informations sont enregistrées sur l’appareil ?",
    hvLocalBody: "<p>Règles, modes, horaires et préférences sont stockés <strong>localement</strong>. Haven n’est pas conçue pour vendre vos contacts ni le contenu de vos notifications.</p>",
    hvShareTitle: "Partage avec des tiers",
    hvShareBody: "<p>Haven <strong>ne vend pas</strong> vos données personnelles. Contacts, appels et notifications restent orientés vers un filtrage local. Les services Google Play habituels peuvent s’appliquer pour la distribution et les mises à jour.</p>",
    hvDeleteTitle: "Comment supprimer vos données",
    hvDeleteBody: "<p>Paramètres Android → Applications → Haven → Effacer le stockage / les données, ou désinstaller. Révoquez aussi l’accès aux notifications / filtrage d’appels / accès d’utilisation si vous n’utilisez plus l’app.</p>",
    hvChildrenTitle: "Enfants",
    hvChildrenBody: "<p>Haven s’adresse aux adultes qui gèrent les interruptions du téléphone et n’est pas conçue pour les enfants de moins de 13 ans.</p>",
    hvContactTitle: "Contact",
    hvContactBody: '<p>Questions confidentialité : <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
  };

  const STRINGS = { fr: BASE_FR };

  STRINGS.en = Object.assign({}, BASE_FR, {
    navHome: "Home",
    navContact: "Contact",
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>Webmaster <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
    homeTitle: "Our apps",
    homeLead: "A cribbage game, a tool to shape your phone around your day, and more ideas in the works.",
    discover: "Discover",
    hkCardDesc: "Hong Kong cribbage in fast offline games on your phone.",
    havenCardDesc: "Reduce phone interruptions according to your modes and schedule.",
    contactTitle: "Contact",
    contactBody: "A question about our apps or privacy?",
    galleryTitle: "Gallery",
    featuresTitle: "Features and options",
    privacyTitle: "Privacy policy",
    hkPageKicker: "Hong Kong cribbage • Android game",
    hkPageTagline: "No Wi-Fi? Your move.",
    hkPageLead:
      "On the subway, under the tent or mid-flight, start a quick Hong Kong cribbage game. An AI opponent is always ready to play. The game works fully offline and its interface is available in six languages.",
    hkFeat1: "<strong>Customization</strong> — Card backs, boards and scoring options.",
    hkFeat2: "<strong>Clear scoring</strong> — Points under the cards, with markers when a card counts several times.",
    hkFeat3: "<strong>Progress</strong> — Statistics, history, medals and trophies.",
    hkFeat4: "<strong>Built-in support with AI assistance</strong> — Report a bug, suggest an improvement or ask a question. An Internet connection is required to send your message.",
    hkFeat5: "<strong>Offline</strong> — Play the core game without Internet.",
    hkFeat6: "<strong>Multilingual</strong> — Interface in six languages: English, French, Portuguese, Spanish, Chinese, Japanese.",
    hkHowTitle: "How to play",
    hkHowBody:
      "<p>The goal is to score as many points as possible over <strong>3 rounds</strong>.</p>" +
      "<h3>How a round works</h3>" +
      "<p>Each round uses <strong>21 cards</strong>: 20 to build hands, and the 21st as the <strong>cut card</strong>.</p>" +
      "<p>You create:</p>" +
      "<ul><li><strong>4 open hands</strong></li><li><strong>1 cribble</strong> (closed hand)</li></ul>" +
      "<p>Cards <strong>5, 10, 15 and 20</strong> always go in the cribble. Then place the remaining cards to form the best combinations. When all 20 cards are placed, the cut is revealed and scoring begins.</p>" +
      "<h3>End of game</h3>" +
      "<p>In solo mode, aim for <strong>121 points</strong> in 3 rounds. Against an opponent, the best total wins; a tie is a draw.</p>" +
      "<p><strong>Tip:</strong> build several combinations with the same cards — fifteens, pairs and runs can stack.</p>",
    hkScoreTitle: "How to score",
    hkScoreBody:
      "<p>Points follow official HK Crib Go rules:</p>" +
      "<ul>" +
      "<li><strong>Fifteen</strong> — Any combination totaling exactly 15: <strong>2 points</strong>.</li>" +
      "<li><strong>Pairs and matching cards</strong> — 2 cards = 2 pts · 3 cards = 6 pts · 4 cards = 12 pts.</li>" +
      "<li><strong>Run</strong> — Consecutive cards (e.g. 3-4-5 = 3 pts, 7-8-9-10 = 4 pts).</li>" +
      "<li><strong>Flush</strong> — 4 cards of the same suit: 4 pts; with a matching cut: 6 pts.</li>" +
      "<li><strong>Nobs</strong> — Jack of the same suit as the cut: 1 pt.</li>" +
      "<li><strong>Jack cut</strong> — If the cut card is a jack: 2 pts (once per round).</li>" +
      "</ul>" +
      "<h3>After scoring</h3>" +
      "<p>Each scoring card stays in place: a theme tint highlights it, and a <strong>badge</strong> shows how many times it counted. The cut is treated the same way when it scores. Tint and badges can be toggled in Menu → Scoring.</p>",
    hkOptionsTitle: "Options: card backs and boards",
    hkOptionsBody:
      "<p>Customize the look from the in-app menu.</p>" +
      "<h3>Card backs</h3>" +
      "<ul class=\"option-chips\"><li>Classic red</li><li>Blue</li><li>Mystery</li></ul>" +
      "<h3>Boards</h3>" +
      "<ul class=\"option-chips\"><li>Light oak wood</li><li>Warm cedar wood</li><li>Terracotta clay</li></ul>" +
      "<h3>Themes</h3>" +
      "<ul class=\"option-chips\"><li>Classic</li><li>Warm Sand</li><li>Cyber Night</li></ul>" +
      "<p>You can also adjust animations and scoring display (tint and badges) to your taste.</p>",
    havenPageKicker: "Interruption management • Android app",
    havenPageTagline: "Keep what matters. The rest can wait.",
    havenPageLead:
      "At work, on the road or while you sleep, choose which calls and notifications may interrupt you. Turn on the mode that fits, or let Haven follow your schedule.",
    havenFeat1: "<strong>Customizable modes</strong> — Rules for day, driving, sleep, work, and more.",
    havenFeat2: "<strong>Manual / Auto choice</strong> — You pick the mode on Home, or Haven follows your automation schedule.",
    havenFeat3: "<strong>Automatic schedule</strong> — Program weekly time ranges.",
    havenFeat4: "<strong>History</strong> — See avoided interruptions and what was filtered.",
    havenFeat5: "<strong>Safety first</strong> — Keeps essential alerts and emergency access.",
    havenFeat6: "<strong>Emergency contacts</strong> — Allow a quick second call for selected people.",
    hkCapPartie: "Game in progress",
    hkCapPointage: "Hand scoring",
    hkCapSupport: "Support centre",
    hkCapMenu: "End of round / settings",
    hkCapSupportCentre: "Technical support",
    hkCapPartieAlt: "Game vs AI",
    havenCapHero: "Haven — digital refuge",
    havenCapAccueil: "Home and modes",
    havenCapHistorique: "Interruption history",
    havenCapHoraire: "Automatic schedule",
    hkWhoTitle: "Who are we?",
    hkWhoBody: "<p><strong>HK Crib Go</strong> is an Android cribbage-style game. This policy explains how information is handled when you use the app.</p>",
    hkDataTitle: "Does HK Crib Go collect personal data?",
    hkDataBody: "<p>HK Crib Go does not directly collect personally identifiable information. Scores and preferences are stored <strong>locally on your device</strong>. No personal data is sold.</p>",
    hkLocalTitle: "What is stored on your device?",
    hkLocalBody: "<p>The app may store scores, records, medals, play statistics and preferences. These stay on your device and can be removed by clearing app data or uninstalling.</p>",
    hkAnalyticsTitle: "Anonymous usage statistics",
    hkAnalyticsBody: "<p>HK Crib Go may use <strong>Google Analytics (GA4)</strong> for anonymous usage statistics to improve the experience.</p>",
    hkShareTitle: "Sharing with third parties",
    hkShareBody: "<p>HK Crib Go does <strong>not sell</strong> personal data. The only possible third-party exchange is Google Analytics (anonymous statistics).</p>",
    hkDeleteTitle: "How to delete your data",
    hkDeleteBody: "<p>Android Settings → Apps → HK Crib Go → Clear storage / Clear data, or uninstall.</p>",
    hkChildrenTitle: "Children",
    hkChildrenBody: "<p>HK Crib Go is for a general audience and is not specifically designed for children under 13.</p>",
    hkContactTitle: "Contact",
    hkContactBody: '<p>Privacy questions: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "Who are we?",
    hvWhoBody: "<p><strong>Haven</strong> is an Android app by Weidler Studio that helps reduce phone interruptions according to modes you choose.</p>",
    hvPurposeTitle: "Why does Haven need Android permissions?",
    hvPurposeBody: "<p>Haven must <strong>filter interruptions on the device</strong> (calls and notifications). Filtering happens <strong>on your phone</strong>, according to your settings.</p>",
    hvPermsTitle: "What are the requested permissions for?",
    hvPermsBody:
      "<p>Depending on enabled features, Haven may request:</p><ul><li><strong>Notification access</strong> — detect and filter notifications by your rules;</li><li><strong>Call screening</strong> — handle incoming calls by active mode;</li><li><strong>Contacts</strong> — apply priorities/rules to people you choose;</li><li><strong>Usage access</strong> — app-usage related triggers (e.g. driving);</li><li><strong>Bluetooth</strong> — optional vehicle/device triggers;</li><li><strong>Notifications / foreground service / boot</strong> — keep protection available when Haven is on.</li></ul><p>You can revoke these in Android settings; some features will then stop.</p>",
    hvLocalTitle: "What is stored on your device?",
    hvLocalBody: "<p>Rules, modes, schedules and preferences are stored <strong>locally</strong>. Haven is not designed to sell contacts or notification content.</p>",
    hvShareTitle: "Sharing with third parties",
    hvShareBody: "<p>Haven does <strong>not sell</strong> personal data. Contacts, calls and notifications stay oriented to local filtering.</p>",
    hvDeleteTitle: "How to delete your data",
    hvDeleteBody: "<p>Android Settings → Apps → Haven → Clear storage / Clear data, or uninstall. Also revoke special accesses if you stop using the app.</p>",
    hvChildrenTitle: "Children",
    hvChildrenBody: "<p>Haven is aimed at adults managing interruptions and is not designed for children under 13.</p>",
    hvContactTitle: "Contact",
    hvContactBody: '<p>Privacy questions: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
  });

  STRINGS.pt = Object.assign({}, STRINGS.en, {
    navHome: "Início",
    navContact: "Contacto",
    homeTitle: "As nossas aplicações",
    homeLead: "Um jogo de cribbage, uma ferramenta para adaptar o telemóvel ao teu dia, e outras ideias a caminho.",
    discover: "Descobrir",
    hkCardDesc: "Cribbage de Hong Kong em partidas rápidas offline no telemóvel.",
    havenCardDesc: "Reduza interrupções do telemóvel conforme os seus modos e horário.",
    contactTitle: "Contacto",
    contactBody: "Dúvida sobre as apps ou a privacidade?",
    galleryTitle: "Galeria",
    featuresTitle: "Funcionalidades e opções",
    privacyTitle: "Política de privacidade",
    hkFeat4: "<strong>Suporte integrado com assistência por IA</strong> — Reporte um bug, sugira uma melhoria ou faça uma pergunta. É necessária ligação à Internet para enviar a mensagem.",
    hkPageKicker: "Cribbage de Hong Kong • Jogo Android",
    hkPageTagline: "Sem Wi-Fi? É a sua vez.",
    hkPageLead:
      "No metro, na tenda ou em pleno voo, comece uma partida rápida de cribbage de Hong Kong. Um adversário de IA está sempre pronto a jogar. O jogo funciona totalmente offline e a interface está disponível em seis idiomas.",
    havenPageKicker: "Gestão de interrupções • Aplicação Android",
    havenPageTagline: "Fique com o essencial. O resto pode esperar.",
    havenPageLead:
      "No trabalho, na estrada ou enquanto dorme, escolha que chamadas e notificações o podem interromper. Ative o modo que lhe convém ou deixe o Haven fazê-lo conforme o seu horário.",
  });

  STRINGS.es = Object.assign({}, STRINGS.en, {
    navHome: "Inicio",
    navContact: "Contacto",
    homeTitle: "Nuestras aplicaciones",
    homeLead: "Un juego de cribbage, una herramienta para adaptar tu teléfono a tu día, y más ideas en camino.",
    discover: "Descubrir",
    hkCardDesc: "Cribbage de Hong Kong en partidas rápidas sin conexión en el teléfono.",
    havenCardDesc: "Reduce las interrupciones del teléfono según tus modos y horario.",
    contactTitle: "Contacto",
    contactBody: "¿Una pregunta sobre nuestras apps o la privacidad?",
    galleryTitle: "Galería",
    featuresTitle: "Funciones y opciones",
    privacyTitle: "Política de privacidad",
    hkFeat4: "<strong>Soporte integrado con asistencia por IA</strong> — Informa un error, propone una mejora o haz una pregunta. Se necesita conexión a Internet para enviar el mensaje.",
    hkPageKicker: "Cribbage de Hong Kong • Juego Android",
    hkPageTagline: "¿Sin Wi-Fi? Te toca.",
    hkPageLead:
      "En el metro, bajo la tienda o en pleno vuelo, inicia una partida rápida de cribbage de Hong Kong. Un rival de IA siempre está listo para jugar. El juego funciona totalmente sin conexión y su interfaz está disponible en seis idiomas.",
    havenPageKicker: "Gestión de interrupciones • Aplicación Android",
    havenPageTagline: "Quédate con lo esencial. El resto puede esperar.",
    havenPageLead:
      "En el trabajo, en la carretera o mientras duermes, elige qué llamadas y notificaciones pueden interrumpirte. Activa el modo que te convenga o deja que Haven lo haga según tu horario.",
  });

  STRINGS.zh = Object.assign({}, STRINGS.en, {
    navHome: "首页",
    navContact: "联系",
    homeTitle: "我们的应用",
    homeLead: "一款克里比奇游戏、一款帮你按一天节奏调整手机的工具，以及更多正在筹备的想法。",
    discover: "了解更多",
    hkCardDesc: "香港克里比奇纸牌，手机上快速离线对局。",
    havenCardDesc: "按模式与日程减少手机打扰。",
    contactTitle: "联系",
    contactBody: "关于应用或隐私的问题？",
    galleryTitle: "图库",
    featuresTitle: "功能与选项",
    privacyTitle: "隐私政策",
    hkFeat4: "<strong>内置支持（含 AI 协助）</strong> — 报告错误、提出改进建议或提问。发送消息需要互联网连接。",
    hkPageKicker: "香港克里比奇 • Android 游戏",
    hkPageTagline: "没有 Wi-Fi？该你出牌了。",
    hkPageLead:
      "在地铁、帐篷里或飞行途中，随时开一局快速的香港克里比奇。AI 对手随时待命。游戏完全离线可用，界面支持六种语言。",
    havenPageKicker: "干扰管理 • Android 应用",
    havenPageTagline: "留下重要的。其余可以等。",
    havenPageLead:
      "工作时、路上或睡觉时，选择哪些来电和通知可以打断你。开启适合你的模式，或让 Haven 按你的日程自动切换。",
  });

  STRINGS.ja = Object.assign({}, STRINGS.en, {
    navHome: "ホーム",
    navContact: "お問い合わせ",
    homeTitle: "私たちのアプリ",
    homeLead: "クリベッジのゲーム、一日の流れに合わせてスマホを整えるツール、そして準備中のアイデアも。",
    discover: "詳しく見る",
    hkCardDesc: "香港クリベッジを、端末上で素早くオフライン対戦。",
    havenCardDesc: "モードとスケジュールに応じて端末の中断を減らします。",
    contactTitle: "お問い合わせ",
    contactBody: "アプリやプライバシーについてのご質問は？",
    galleryTitle: "ギャラリー",
    featuresTitle: "機能とオプション",
    privacyTitle: "プライバシーポリシー",
    hkFeat4: "<strong>AI アシスト付きサポート機能</strong> — バグ報告、改善提案、質問ができます。メッセージ送信にはインターネット接続が必要です。",
    hkPageKicker: "香港クリベッジ • Android ゲーム",
    hkPageTagline: "Wi-Fi がなくても、あなたの番です。",
    hkPageLead:
      "地下鉄でも、テントの中でも、飛行中でも、香港クリベッジの短時間対局をすぐ始められます。AI の相手はいつでも準備OK。完全オフラインで遊べ、UI は6言語に対応しています。",
    havenPageKicker: "割り込み管理 • Android アプリ",
    havenPageTagline: "大切なものは残して。あとは後で。",
    havenPageLead:
      "仕事中、運転中、睡眠中でも、どの着信や通知に割り込ませるかを選べます。合うモードをオンにするか、スケジュールに合わせて Haven に任せられます。",
  });

  function t(key) {
    const pack = STRINGS[locale] || STRINGS.fr;
    if (pack[key] != null) return pack[key];
    if (STRINGS.fr[key] != null) return STRINGS.fr[key];
    return STRINGS.en[key] || key;
  }

  function getPrivacySections(app) {
    const pack = STRINGS[locale] || STRINGS.fr;
    const base = Object.assign({}, STRINGS.fr, pack);
    return app === "haven" ? havenSections(base) : hkSections(base);
  }

  function setLocale(code) {
    if (!ORDER.includes(code)) return;
    locale = code;
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code === "zh" ? "zh-Hans" : code;
    window.dispatchEvent(new CustomEvent("ws:locale"));
  }

  window.WS_I18N = {
    ORDER,
    t,
    getLocale: () => locale,
    setLocale,
    getPrivacySections,
  };

  document.documentElement.lang = locale === "zh" ? "zh-Hans" : locale;
})();
