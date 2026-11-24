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
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>Webmestre <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
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
    hkFeat1: "<strong>Personalização</strong> — Versos das cartas, tabuleiros e opções de contagem.",
    hkFeat2: "<strong>Pontuação clara</strong> — Pontos sob as cartas, com marcadores quando uma carta conta várias vezes.",
    hkFeat3: "<strong>Progresso</strong> — Estatísticas, histórico, medalhas e troféus.",
    hkFeat4: "<strong>Suporte integrado com assistência por IA</strong> — Reporte um bug, sugira uma melhoria ou faça uma pergunta. É necessária ligação à Internet para enviar a mensagem.",
    hkFeat5: "<strong>Offline</strong> — Jogue o núcleo do jogo sem Internet.",
    hkFeat6: "<strong>Multilingue</strong> — Interface em seis idiomas: inglês, francês, português, espanhol, chinês e japonês.",
    hkHowTitle: "Como jogar",
    hkHowBody:
      "<p>O objetivo é obter o máximo de pontos em <strong>3 rounds</strong>.</p>" +
      "<h3>Como funciona um round</h3>" +
      "<p>Cada round usa <strong>21 cartas</strong>: 20 para construir as mãos e a 21.ª como <strong>carta de corte</strong>.</p>" +
      "<p>Você cria:</p>" +
      "<ul><li><strong>4 mãos abertas</strong></li><li><strong>1 cribble</strong> (mão fechada)</li></ul>" +
      "<p>As cartas <strong>5, 10, 15 e 20</strong> vão sempre para o cribble. Depois coloque as restantes para formar as melhores combinações. Quando as 20 cartas estão colocadas, o corte é revelado e começa a contagem.</p>" +
      "<h3>Fim de partida</h3>" +
      "<p>No modo solo, o objetivo é atingir <strong>121 pontos</strong> em 3 rounds. Contra um adversário, vence o melhor total; em caso de empate, é empate.</p>" +
      "<p><strong>Dica:</strong> construa várias combinações com as mesmas cartas — quinze, pares e sequências podem acumular.</p>",
    hkScoreTitle: "Como contar os pontos",
    hkScoreBody:
      "<p>Os pontos seguem as regras oficiais do HK Crib Go:</p>" +
      "<ul>" +
      "<li><strong>Quinze</strong> — Qualquer combinação que some exatamente 15: <strong>2 pontos</strong>.</li>" +
      "<li><strong>Pares e cartas iguais</strong> — 2 cartas = 2 pts · 3 cartas = 6 pts · 4 cartas = 12 pts.</li>" +
      "<li><strong>Sequência</strong> — Cartas consecutivas (ex. 3-4-5 = 3 pts, 7-8-9-10 = 4 pts).</li>" +
      "<li><strong>Cor (flush)</strong> — 4 cartas do mesmo naipe: 4 pts; com o corte do mesmo naipe: 6 pts.</li>" +
      "<li><strong>Nobs</strong> — Valete do mesmo naipe do corte: 1 pt.</li>" +
      "<li><strong>Corte valete</strong> — Se a carta de corte for um valete: 2 pts (uma vez por round).</li>" +
      "</ul>" +
      "<h3>Após a contagem</h3>" +
      "<p>Cada carta que pontuou fica no lugar: um tom do tema a destaca e um <strong>marcador</strong> indica quantas vezes contou. O corte é tratado da mesma forma se pontuar. Tom e marcadores regulam-se em Menu → Contagem.</p>",
    hkOptionsTitle: "Opções: versos das cartas e tabuleiros",
    hkOptionsBody:
      "<p>Personalize a aparência no menu da aplicação.</p>" +
      "<h3>Versos das cartas</h3>" +
      "<ul class=\"option-chips\"><li>Vermelho clássico</li><li>Azul</li><li>Mistério</li></ul>" +
      "<h3>Tabuleiros</h3>" +
      "<ul class=\"option-chips\"><li>Carvalho claro</li><li>Cedro avermelhado</li><li>Argila terracotta</li></ul>" +
      "<h3>Ambientes</h3>" +
      "<ul class=\"option-chips\"><li>Clássico</li><li>Areia Quente</li><li>Noite Cyber</li></ul>" +
      "<p>Também pode ajustar animações e a apresentação da contagem (tom e marcadores).</p>",
    hkPageKicker: "Cribbage de Hong Kong • Jogo Android",
    hkPageTagline: "Sem Wi-Fi? É a sua vez.",
    hkPageLead:
      "No metro, na tenda ou em pleno voo, comece uma partida rápida de cribbage de Hong Kong. Um adversário de IA está sempre pronto a jogar. O jogo funciona totalmente offline e a interface está disponível em seis idiomas.",
    havenPageKicker: "Gestão de interrupções • Aplicação Android",
    havenPageTagline: "Fique com o essencial. O resto pode esperar.",
    havenPageLead:
      "No trabalho, na estrada ou enquanto dorme, escolha que chamadas e notificações o podem interromper. Ative o modo que lhe convém ou deixe o Haven fazê-lo conforme o seu horário.",
    havenFeat1: "<strong>Modos personalizáveis</strong> — Regras para o dia, condução, sono, trabalho, etc.",
    havenFeat2: "<strong>Escolha Manual / Auto</strong> — Você define o modo no início ou o Haven segue o horário de automação.",
    havenFeat3: "<strong>Horário automático</strong> — Programe intervalos ao longo da semana.",
    havenFeat4: "<strong>Histórico</strong> — Veja as interrupções evitadas e o que foi filtrado.",
    havenFeat5: "<strong>Segurança em primeiro lugar</strong> — Mantém alertas essenciais e acesso de emergência.",
    havenFeat6: "<strong>Contactos de emergência</strong> — Permita uma segunda chamada rápida a pessoas escolhidas.",
    hkCapPartie: "Partida em curso",
    hkCapPointage: "Pontuação de uma mão",
    hkCapSupport: "Centro de suporte",
    hkCapMenu: "Fim de round / definições",
    hkCapPartieAlt: "Partida contra a IA",
    havenCapHero: "Haven — refúgio digital",
    havenCapAccueil: "Início e modos",
    havenCapHistorique: "Histórico de interrupções",
    havenCapHoraire: "Horário automático",
    hkWhoTitle: "Quem somos?",
    hkWhoBody: "<p><strong>HK Crib Go</strong> é um jogo Android de cribbage. Esta política descreve o tratamento de informações quando usa a aplicação.</p>",
    hkDataTitle: "O HK Crib Go recolhe dados pessoais?",
    hkDataBody: "<p>O HK Crib Go não recolhe diretamente informações pessoais identificáveis. Pontuações e preferências são guardadas <strong>localmente no dispositivo</strong>. Nenhum dado pessoal é vendido.</p>",
    hkLocalTitle: "Que informações são guardadas no dispositivo?",
    hkLocalBody: "<p>A aplicação pode guardar pontuações, recordes, medalhas, estatísticas e preferências. Estes dados ficam no dispositivo e podem ser apagados ao limpar os dados da app ou ao desinstalar.</p>",
    hkAnalyticsTitle: "Estatísticas de utilização anónimas",
    hkAnalyticsBody: "<p>O HK Crib Go pode usar <strong>Google Analytics (GA4)</strong> para estatísticas anónimas (aberturas, partidas, etc.) para melhorar a experiência.</p>",
    hkShareTitle: "Partilha com terceiros",
    hkShareBody: "<p>O HK Crib Go <strong>não vende</strong> dados pessoais. A única partilha eventual é com o Google Analytics (estatísticas anónimas).</p>",
    hkDeleteTitle: "Como eliminar os seus dados",
    hkDeleteBody: "<p>Definições Android → Aplicações → HK Crib Go → Limpar armazenamento / dados, ou desinstalar.</p>",
    hkChildrenTitle: "Crianças",
    hkChildrenBody: "<p>O HK Crib Go destina-se ao público em geral e não foi concebido especificamente para crianças com menos de 13 anos.</p>",
    hkContactTitle: "Contacto",
    hkContactBody: '<p>Questões de privacidade: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "Quem somos?",
    hvWhoBody: "<p><strong>Haven</strong> é uma aplicação Android da Weidler Studio que ajuda a reduzir interrupções do telemóvel segundo os modos que escolhe.</p>",
    hvPurposeTitle: "Porque é que o Haven precisa de permissões Android?",
    hvPurposeBody: "<p>O Haven deve <strong>filtrar interrupções no dispositivo</strong> (chamadas e notificações). A filtragem ocorre <strong>no seu telemóvel</strong>, conforme as suas definições.</p>",
    hvPermsTitle: "Para que servem as permissões pedidas?",
    hvPermsBody:
      "<p>Conforme as funções ativas, o Haven pode pedir:</p><ul><li><strong>Acesso às notificações</strong> — detetar e filtrar notificações segundo as suas regras;</li><li><strong>Filtragem de chamadas</strong> — tratar chamadas recebidas segundo o modo ativo;</li><li><strong>Contactos</strong> — aplicar prioridades às pessoas que escolhe;</li><li><strong>Acesso de utilização</strong> — gatilhos ligados às apps usadas (ex. condução);</li><li><strong>Bluetooth</strong> — gatilhos opcionais de veículo / dispositivo;</li><li><strong>Notificações / serviço em primeiro plano / arranque</strong> — manter a proteção quando o Haven está ativo.</li></ul><p>Pode revogar estes acessos nas definições Android; algumas funções deixarão de funcionar.</p>",
    hvLocalTitle: "Que informações são guardadas no dispositivo?",
    hvLocalBody: "<p>Regras, modos, horários e preferências são guardados <strong>localmente</strong>. O Haven não foi concebido para vender contactos nem o conteúdo das notificações.</p>",
    hvShareTitle: "Partilha com terceiros",
    hvShareBody: "<p>O Haven <strong>não vende</strong> dados pessoais. Contactos, chamadas e notificações ficam orientados para filtragem local.</p>",
    hvDeleteTitle: "Como eliminar os seus dados",
    hvDeleteBody: "<p>Definições Android → Aplicações → Haven → Limpar armazenamento / dados, ou desinstalar. Revogue também os acessos especiais se deixar de usar a app.</p>",
    hvChildrenTitle: "Crianças",
    hvChildrenBody: "<p>O Haven destina-se a adultos que gerem interrupções e não foi concebido para crianças com menos de 13 anos.</p>",
    hvContactTitle: "Contacto",
    hvContactBody: '<p>Questões de privacidade: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
  });

  STRINGS.es = Object.assign({}, STRINGS.en, {
    navHome: "Inicio",
    navContact: "Contacto",
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>Webmaster <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
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
    hkFeat1: "<strong>Personalización</strong> — Dorsos de cartas, tableros y opciones de conteo.",
    hkFeat2: "<strong>Puntuación clara</strong> — Puntos bajo las cartas, con marcas cuando una carta cuenta varias veces.",
    hkFeat3: "<strong>Progreso</strong> — Estadísticas, historial, medallas y trofeos.",
    hkFeat4: "<strong>Soporte integrado con asistencia por IA</strong> — Informa un error, propone una mejora o haz una pregunta. Se necesita conexión a Internet para enviar el mensaje.",
    hkFeat5: "<strong>Sin conexión</strong> — Juega el núcleo del juego sin Internet.",
    hkFeat6: "<strong>Multilingüe</strong> — Interfaz en seis idiomas: inglés, francés, portugués, español, chino y japonés.",
    hkHowTitle: "Cómo jugar",
    hkHowBody:
      "<p>El objetivo es obtener el máximo de puntos en <strong>3 rondas</strong>.</p>" +
      "<h3>Cómo funciona una ronda</h3>" +
      "<p>Cada ronda usa <strong>21 cartas</strong>: 20 para construir las manos y la 21.ª como <strong>carta de corte</strong>.</p>" +
      "<p>Creas:</p>" +
      "<ul><li><strong>4 manos abiertas</strong></li><li><strong>1 cribble</strong> (mano cerrada)</li></ul>" +
      "<p>Las cartas <strong>5, 10, 15 y 20</strong> siempre van al cribble. Luego coloca el resto para formar las mejores combinaciones. Cuando las 20 cartas están colocadas, se revela el corte y empieza el conteo.</p>" +
      "<h3>Fin de partida</h3>" +
      "<p>En modo solo, el objetivo es alcanzar <strong>121 puntos</strong> en 3 rondas. Contra un rival, gana el mejor total; en caso de empate, hay empate.</p>" +
      "<p><strong>Consejo:</strong> construye varias combinaciones con las mismas cartas — quinces, pares y secuencias pueden acumularse.</p>",
    hkScoreTitle: "Cómo contar los puntos",
    hkScoreBody:
      "<p>Los puntos siguen las reglas oficiales de HK Crib Go:</p>" +
      "<ul>" +
      "<li><strong>Quince</strong> — Cualquier combinación que sume exactamente 15: <strong>2 puntos</strong>.</li>" +
      "<li><strong>Pares y cartas iguales</strong> — 2 cartas = 2 pts · 3 cartas = 6 pts · 4 cartas = 12 pts.</li>" +
      "<li><strong>Secuencia</strong> — Cartas consecutivas (ej. 3-4-5 = 3 pts, 7-8-9-10 = 4 pts).</li>" +
      "<li><strong>Color (flush)</strong> — 4 cartas del mismo palo: 4 pts; con el corte del mismo palo: 6 pts.</li>" +
      "<li><strong>Nobs</strong> — Jota del mismo palo que el corte: 1 pt.</li>" +
      "<li><strong>Corte jota</strong> — Si la carta de corte es una jota: 2 pts (una vez por ronda).</li>" +
      "</ul>" +
      "<h3>Después del conteo</h3>" +
      "<p>Cada carta que puntuó permanece en su sitio: un tinte del tema la destaca y una <strong>pastilla</strong> indica cuántas veces contó. El corte se trata igual si puntúa. Tinte y pastillas se ajustan en Menú → Conteo.</p>",
    hkOptionsTitle: "Opciones: dorsos y tableros",
    hkOptionsBody:
      "<p>Personaliza la apariencia desde el menú de la app.</p>" +
      "<h3>Dorsos de cartas</h3>" +
      "<ul class=\"option-chips\"><li>Rojo clásico</li><li>Azul</li><li>Misterio</li></ul>" +
      "<h3>Tableros</h3>" +
      "<ul class=\"option-chips\"><li>Roble claro</li><li>Cedro rojizo</li><li>Arcilla terracotta</li></ul>" +
      "<h3>Ambientes</h3>" +
      "<ul class=\"option-chips\"><li>Clásico</li><li>Arena Cálida</li><li>Noche Cyber</li></ul>" +
      "<p>También puedes ajustar animaciones y la visualización del conteo (tinte y pastillas).</p>",
    hkPageKicker: "Cribbage de Hong Kong • Juego Android",
    hkPageTagline: "¿Sin Wi-Fi? Te toca.",
    hkPageLead:
      "En el metro, bajo la tienda o en pleno vuelo, inicia una partida rápida de cribbage de Hong Kong. Un rival de IA siempre está listo para jugar. El juego funciona totalmente sin conexión y su interfaz está disponible en seis idiomas.",
    havenPageKicker: "Gestión de interrupciones • Aplicación Android",
    havenPageTagline: "Quédate con lo esencial. El resto puede esperar.",
    havenPageLead:
      "En el trabajo, en la carretera o mientras duermes, elige qué llamadas y notificaciones pueden interrumpirte. Activa el modo que te convenga o deja que Haven lo haga según tu horario.",
    havenFeat1: "<strong>Modos personalizables</strong> — Reglas para el día, la conducción, el sueño, el trabajo, etc.",
    havenFeat2: "<strong>Elección Manual / Auto</strong> — Tú eliges el modo en inicio o Haven sigue tu horario de automatización.",
    havenFeat3: "<strong>Horario automático</strong> — Programa franjas a lo largo de la semana.",
    havenFeat4: "<strong>Historial</strong> — Ve las interrupciones evitadas y lo filtrado.",
    havenFeat5: "<strong>Seguridad primero</strong> — Conserva alertas esenciales y el acceso de emergencia.",
    havenFeat6: "<strong>Contactos de emergencia</strong> — Permite una segunda llamada rápida a personas elegidas.",
    hkCapPartie: "Partida en curso",
    hkCapPointage: "Puntuación de una mano",
    hkCapSupport: "Centro de soporte",
    hkCapMenu: "Fin de ronda / ajustes",
    hkCapPartieAlt: "Partida contra la IA",
    havenCapHero: "Haven — refugio digital",
    havenCapAccueil: "Inicio y modos",
    havenCapHistorique: "Historial de interrupciones",
    havenCapHoraire: "Horario automático",
    hkWhoTitle: "¿Quiénes somos?",
    hkWhoBody: "<p><strong>HK Crib Go</strong> es un juego Android de tipo cribbage. Esta política describe el tratamiento de la información cuando usas la aplicación.</p>",
    hkDataTitle: "¿HK Crib Go recoge datos personales?",
    hkDataBody: "<p>HK Crib Go no recoge directamente información personal identificable. Puntuaciones y preferencias se guardan <strong>localmente en tu dispositivo</strong>. No se venden datos personales.</p>",
    hkLocalTitle: "¿Qué información se guarda en el dispositivo?",
    hkLocalBody: "<p>La app puede guardar puntuaciones, récords, medallas, estadísticas y preferencias. Esos datos permanecen en el dispositivo y pueden borrarse al limpiar datos o desinstalar.</p>",
    hkAnalyticsTitle: "Estadísticas de uso anónimas",
    hkAnalyticsBody: "<p>HK Crib Go puede usar <strong>Google Analytics (GA4)</strong> para estadísticas anónimas (aperturas, partidas, etc.) y mejorar la experiencia.</p>",
    hkShareTitle: "Compartir con terceros",
    hkShareBody: "<p>HK Crib Go <strong>no vende</strong> datos personales. El único intercambio posible es con Google Analytics (estadísticas anónimas).</p>",
    hkDeleteTitle: "Cómo eliminar tus datos",
    hkDeleteBody: "<p>Ajustes de Android → Aplicaciones → HK Crib Go → Borrar almacenamiento / datos, o desinstalar.</p>",
    hkChildrenTitle: "Niños",
    hkChildrenBody: "<p>HK Crib Go está dirigido al público general y no está diseñado específicamente para menores de 13 años.</p>",
    hkContactTitle: "Contacto",
    hkContactBody: '<p>Preguntas de privacidad: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "¿Quiénes somos?",
    hvWhoBody: "<p><strong>Haven</strong> es una aplicación Android de Weidler Studio que ayuda a reducir las interrupciones del teléfono según los modos que eliges.</p>",
    hvPurposeTitle: "¿Por qué Haven necesita permisos de Android?",
    hvPurposeBody: "<p>Haven debe <strong>filtrar interrupciones en el dispositivo</strong> (llamadas y notificaciones). El filtrado ocurre <strong>en tu teléfono</strong>, según tus ajustes.</p>",
    hvPermsTitle: "¿Para qué sirven los permisos solicitados?",
    hvPermsBody:
      "<p>Según las funciones activas, Haven puede pedir:</p><ul><li><strong>Acceso a notificaciones</strong> — detectar y filtrar notificaciones según tus reglas;</li><li><strong>Filtrado de llamadas</strong> — tratar llamadas entrantes según el modo activo;</li><li><strong>Contactos</strong> — aplicar prioridades a las personas que eliges;</li><li><strong>Acceso de uso</strong> — desencadenantes ligados a las apps usadas (p. ej. conducción);</li><li><strong>Bluetooth</strong> — desencadenantes opcionales de vehículo / dispositivo;</li><li><strong>Notificaciones / servicio en primer plano / inicio</strong> — mantener la protección cuando Haven está activo.</li></ul><p>Puedes revocar estos accesos en los ajustes de Android; algunas funciones dejarán de funcionar.</p>",
    hvLocalTitle: "¿Qué información se guarda en el dispositivo?",
    hvLocalBody: "<p>Reglas, modos, horarios y preferencias se guardan <strong>localmente</strong>. Haven no está diseñada para vender contactos ni el contenido de las notificaciones.</p>",
    hvShareTitle: "Compartir con terceros",
    hvShareBody: "<p>Haven <strong>no vende</strong> datos personales. Contactos, llamadas y notificaciones se orientan al filtrado local.</p>",
    hvDeleteTitle: "Cómo eliminar tus datos",
    hvDeleteBody: "<p>Ajustes de Android → Aplicaciones → Haven → Borrar almacenamiento / datos, o desinstalar. Revoca también los accesos especiales si dejas de usar la app.</p>",
    hvChildrenTitle: "Niños",
    hvChildrenBody: "<p>Haven está dirigida a adultos que gestionan interrupciones y no está diseñada para menores de 13 años.</p>",
    hvContactTitle: "Contacto",
    hvContactBody: '<p>Preguntas de privacidad: <a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
  });

  STRINGS.zh = Object.assign({}, STRINGS.en, {
    navHome: "首页",
    navContact: "联系",
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>网站管理员 <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
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
    hkFeat1: "<strong>个性化</strong> — 牌背、计分板与计分选项。",
    hkFeat2: "<strong>直观计分</strong> — 点数显示在牌下，一牌多次计分时有标记。",
    hkFeat3: "<strong>进度</strong> — 统计、历史、奖牌与奖杯。",
    hkFeat4: "<strong>内置支持（含 AI 协助）</strong> — 报告错误、提出改进建议或提问。发送消息需要互联网连接。",
    hkFeat5: "<strong>离线</strong> — 核心玩法无需联网。",
    hkFeat6: "<strong>多语言</strong> — 界面支持六种语言：英语、法语、葡萄牙语、西班牙语、中文与日语。",
    hkHowTitle: "怎么玩",
    hkHowBody:
      "<p>目标是在 <strong>3 回合</strong>内尽可能多得分。</p>" +
      "<h3>一回合怎么进行</h3>" +
      "<p>每回合使用 <strong>21 张牌</strong>：20 张用来组手牌，第 21 张是<strong>切牌</strong>。</p>" +
      "<p>你需要组成：</p>" +
      "<ul><li><strong>4 个明牌手</strong></li><li><strong>1 个 cribble</strong>（暗牌手）</li></ul>" +
      "<p><strong>5、10、15、20</strong> 号牌始终放入 cribble。再摆放其余牌以形成最佳组合。20 张牌放完后揭开切牌并开始计分。</p>" +
      "<h3>终局</h3>" +
      "<p>单人模式目标是在 3 回合内达到 <strong>121 分</strong>。对战时总分更高者获胜；平分则平局。</p>" +
      "<p><strong>提示：</strong>尽量用同一批牌凑出多种组合——十五、对子与顺子可以叠加。</p>",
    hkScoreTitle: "如何计分",
    hkScoreBody:
      "<p>计分遵循 HK Crib Go 官方规则：</p>" +
      "<ul>" +
      "<li><strong>十五</strong> — 任意合计恰好为 15 的组合：<strong>2 分</strong>。</li>" +
      "<li><strong>对子与相同牌</strong> — 2 张 = 2 分 · 3 张 = 6 分 · 4 张 = 12 分。</li>" +
      "<li><strong>顺子</strong> — 连续牌（如 3-4-5 = 3 分，7-8-9-10 = 4 分）。</li>" +
      "<li><strong>同花</strong> — 4 张同花色：4 分；切牌同花则 6 分。</li>" +
      "<li><strong>Nobs</strong> — 与切牌同花色的 J：1 分。</li>" +
      "<li><strong>切牌为 J</strong> — 若切牌是 J：2 分（每回合一次）。</li>" +
      "</ul>" +
      "<h3>计分之后</h3>" +
      "<p>得分的牌留在原位：主题色调会高亮，并有<strong>角标</strong>显示计分次数。切牌若得分同样处理。可在 菜单 → 计分 中开关色调与角标。</p>",
    hkOptionsTitle: "选项：牌背与计分板",
    hkOptionsBody:
      "<p>可在应用菜单中自定义外观。</p>" +
      "<h3>牌背</h3>" +
      "<ul class=\"option-chips\"><li>经典红</li><li>蓝色</li><li>神秘</li></ul>" +
      "<h3>计分板</h3>" +
      "<ul class=\"option-chips\"><li>浅橡木</li><li>暖雪松</li><li>陶土色</li></ul>" +
      "<h3>氛围</h3>" +
      "<ul class=\"option-chips\"><li>经典</li><li>暖沙</li><li>赛博夜</li></ul>" +
      "<p>还可调整动画与计分显示（色调与角标）。</p>",
    hkPageKicker: "香港克里比奇 • Android 游戏",
    hkPageTagline: "没有 Wi-Fi？该你出牌了。",
    hkPageLead:
      "在地铁、帐篷里或飞行途中，随时开一局快速的香港克里比奇。AI 对手随时待命。游戏完全离线可用，界面支持六种语言。",
    havenPageKicker: "干扰管理 • Android 应用",
    havenPageTagline: "留下重要的。其余可以等。",
    havenPageLead:
      "工作时、路上或睡觉时，选择哪些来电和通知可以打断你。开启适合你的模式，或让 Haven 按你的日程自动切换。",
    havenFeat1: "<strong>可自定义模式</strong> — 适用于白天、驾驶、睡眠、工作等。",
    havenFeat2: "<strong>手动 / 自动</strong> — 在首页选择模式，或让 Haven 按自动化日程执行。",
    havenFeat3: "<strong>自动日程</strong> — 按周设置时间段。",
    havenFeat4: "<strong>历史</strong> — 查看已避免的打扰与过滤内容。",
    havenFeat5: "<strong>安全优先</strong> — 保留必要提醒与紧急联络。",
    havenFeat6: "<strong>紧急联系人</strong> — 可为选定联系人允许快速二次呼叫。",
    hkCapPartie: "对局进行中",
    hkCapPointage: "一手计分",
    hkCapSupport: "支持中心",
    hkCapMenu: "回合结束 / 设置",
    hkCapPartieAlt: "对战 AI",
    havenCapHero: "Haven — 数字避风港",
    havenCapAccueil: "首页与模式",
    havenCapHistorique: "打扰历史",
    havenCapHoraire: "自动日程",
    hkWhoTitle: "我们是谁？",
    hkWhoBody: "<p><strong>HK Crib Go</strong> 是一款 Android 克里比奇类游戏。本政策说明您使用应用时信息如何处理。</p>",
    hkDataTitle: "HK Crib Go 会收集个人数据吗？",
    hkDataBody: "<p>HK Crib Go 不会直接收集可识别个人身份的信息。分数与偏好保存在<strong>设备本地</strong>。不会出售个人数据。</p>",
    hkLocalTitle: "设备上保存哪些信息？",
    hkLocalBody: "<p>应用可能保存分数、纪录、奖牌、对局统计与偏好。这些数据留在设备上，可通过清除应用数据或卸载删除。</p>",
    hkAnalyticsTitle: "匿名使用统计",
    hkAnalyticsBody: "<p>HK Crib Go 可能使用 <strong>Google Analytics (GA4)</strong> 收集匿名使用统计（打开次数、对局等）以改进体验。</p>",
    hkShareTitle: "与第三方共享",
    hkShareBody: "<p>HK Crib Go <strong>不出售</strong>个人数据。可能的唯一第三方交换是 Google Analytics（匿名统计）。</p>",
    hkDeleteTitle: "如何删除您的数据",
    hkDeleteBody: "<p>Android 设置 → 应用 → HK Crib Go → 清除存储 / 数据，或卸载应用。</p>",
    hkChildrenTitle: "儿童",
    hkChildrenBody: "<p>HK Crib Go 面向普通用户，并非专为 13 岁以下儿童设计。</p>",
    hkContactTitle: "联系",
    hkContactBody: '<p>隐私相关问题：<a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "我们是谁？",
    hvWhoBody: "<p><strong>Haven</strong> 是 Weidler Studio 的 Android 应用，可根据您选择的模式帮助减少手机打扰。</p>",
    hvPurposeTitle: "为什么 Haven 需要 Android 权限？",
    hvPurposeBody: "<p>Haven 必须在设备上<strong>过滤打扰</strong>（来电与通知）。过滤在<strong>您的手机本地</strong>进行，依据您的设置。</p>",
    hvPermsTitle: "所请求权限的用途是什么？",
    hvPermsBody:
      "<p>根据启用的功能，Haven 可能请求：</p><ul><li><strong>通知访问</strong> — 按规则检测并过滤通知；</li><li><strong>来电过滤</strong> — 按当前模式处理来电；</li><li><strong>通讯录</strong> — 对您选择的联系人应用优先级；</li><li><strong>使用情况访问</strong> — 与所用应用相关的触发（如驾驶）；</li><li><strong>蓝牙</strong> — 可选的车辆 / 设备触发；</li><li><strong>通知 / 前台服务 / 开机启动</strong> — 在 Haven 开启时保持保护。</li></ul><p>可在 Android 设置中撤销这些权限；部分功能将停止工作。</p>",
    hvLocalTitle: "设备上保存哪些信息？",
    hvLocalBody: "<p>规则、模式、日程与偏好保存在<strong>本地</strong>。Haven 不会出售通讯录或通知内容。</p>",
    hvShareTitle: "与第三方共享",
    hvShareBody: "<p>Haven <strong>不出售</strong>个人数据。联系人、来电与通知面向本地过滤。</p>",
    hvDeleteTitle: "如何删除您的数据",
    hvDeleteBody: "<p>Android 设置 → 应用 → Haven → 清除存储 / 数据，或卸载。若不再使用，请一并撤销特殊权限。</p>",
    hvChildrenTitle: "儿童",
    hvChildrenBody: "<p>Haven 面向管理手机打扰的成人用户，并非为 13 岁以下儿童设计。</p>",
    hvContactTitle: "联系",
    hvContactBody: '<p>隐私相关问题：<a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
  });

  STRINGS.ja = Object.assign({}, STRINGS.en, {
    navHome: "ホーム",
    navContact: "お問い合わせ",
    footer:
      "<p>© Weidler Studio 2026</p>" +
      '<p>ウェブマスター <a href="https://artisanfm.ca" target="_blank" rel="noopener">Artisan FM</a></p>',
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
    hkFeat1: "<strong>カスタマイズ</strong> — カード裏面、ボード、スコア表示の設定。",
    hkFeat2: "<strong>わかりやすい得点</strong> — カード下に点数。複数回カウント時はバッジ表示。",
    hkFeat3: "<strong>進捗</strong> — 統計、履歴、メダル、トロフィー。",
    hkFeat4: "<strong>AI アシスト付きサポート機能</strong> — バグ報告、改善提案、質問ができます。メッセージ送信にはインターネット接続が必要です。",
    hkFeat5: "<strong>オフライン</strong> — コアプレイはネット不要。",
    hkFeat6: "<strong>多言語</strong> — UI は英語・フランス語・ポルトガル語・スペイン語・中国語・日本語の6言語。",
    hkHowTitle: "遊び方",
    hkHowBody:
      "<p><strong>3ラウンド</strong>でできるだけ多くの得点を目指します。</p>" +
      "<h3>ラウンドの流れ</h3>" +
      "<p>各ラウンドは<strong>21枚</strong>：20枚で手を作り、21枚目が<strong>カットカード</strong>です。</p>" +
      "<p>作成するもの：</p>" +
      "<ul><li><strong>オープンハンド4つ</strong></li><li><strong>cribble 1つ</strong>（クローズド）</li></ul>" +
      "<p><strong>5・10・15・20</strong> は常に cribble へ。残りのカードで最良の組み合わせを作ります。20枚を置いたらカットを公開して得点計算です。</p>" +
      "<h3>終了</h3>" +
      "<p>ソロでは3ラウンドで<strong>121点</strong>を目指します。対戦では合計が高い方が勝ち。同点は引き分けです。</p>" +
      "<p><strong>ヒント：</strong>同じカードで複数の組み合わせを狙いましょう。15、ペア、ランは重なります。</p>",
    hkScoreTitle: "得点の数え方",
    hkScoreBody:
      "<p>得点は HK Crib Go の公式ルールに従います：</p>" +
      "<ul>" +
      "<li><strong>15</strong> — 合計がちょうど15になる組み合わせ：<strong>2点</strong>。</li>" +
      "<li><strong>ペア／同一札</strong> — 2枚=2点 · 3枚=6点 · 4枚=12点。</li>" +
      "<li><strong>ラン</strong> — 連続札（例：3-4-5=3点、7-8-9-10=4点）。</li>" +
      "<li><strong>フラッシュ</strong> — 同スート4枚：4点。カットも同スートなら6点。</li>" +
      "<li><strong>ノブス</strong> — カットと同スートの J：1点。</li>" +
      "<li><strong>カットが J</strong> — カットが J のとき：2点（ラウンドに1回）。</li>" +
      "</ul>" +
      "<h3>計算のあと</h3>" +
      "<p>得点したカードはそのまま。テーマ色で強調され、<strong>バッジ</strong>が回数を示します。カットも得点すれば同様です。色とバッジは メニュー → 得点 で切替え。</p>",
    hkOptionsTitle: "オプション：裏面とボード",
    hkOptionsBody:
      "<p>アプリのメニューから見た目を変更できます。</p>" +
      "<h3>カード裏面</h3>" +
      "<ul class=\"option-chips\"><li>クラシック赤</li><li>ブルー</li><li>ミステリー</li></ul>" +
      "<h3>ボード</h3>" +
      "<ul class=\"option-chips\"><li>明るいオーク</li><li>暖かいシダー</li><li>テラコッタ</li></ul>" +
      "<h3>雰囲気</h3>" +
      "<ul class=\"option-chips\"><li>クラシック</li><li>ウォームサンド</li><li>サイバーナイト</li></ul>" +
      "<p>アニメーションや得点表示（色・バッジ）も調整できます。</p>",
    hkPageKicker: "香港クリベッジ • Android ゲーム",
    hkPageTagline: "Wi-Fi がなくても、あなたの番です。",
    hkPageLead:
      "地下鉄でも、テントの中でも、飛行中でも、香港クリベッジの短時間対局をすぐ始められます。AI の相手はいつでも準備OK。完全オフラインで遊べ、UI は6言語に対応しています。",
    havenPageKicker: "割り込み管理 • Android アプリ",
    havenPageTagline: "大切なものは残して。あとは後で。",
    havenPageLead:
      "仕事中、運転中、睡眠中でも、どの着信や通知に割り込ませるかを選べます。合うモードをオンにするか、スケジュールに合わせて Haven に任せられます。",
    havenFeat1: "<strong>カスタムモード</strong> — 昼・運転・睡眠・仕事などに合わせたルール。",
    havenFeat2: "<strong>手動 / 自動</strong> — ホームでモードを選ぶか、自動化スケジュールに任せる。",
    havenFeat3: "<strong>自動スケジュール</strong> — 週単位で時間帯を設定。",
    havenFeat4: "<strong>履歴</strong> — 避けた割り込みとフィルタ内容を確認。",
    havenFeat5: "<strong>安全優先</strong> — 重要な通知と緊急アクセスを維持。",
    havenFeat6: "<strong>緊急連絡先</strong> — 選んだ相手への素早い再コールを許可可能。",
    hkCapPartie: "対局中",
    hkCapPointage: "ハンドの得点",
    hkCapSupport: "サポートセンター",
    hkCapMenu: "ラウンド終了 / 設定",
    hkCapPartieAlt: "AI との対局",
    havenCapHero: "Haven — デジタルの避難所",
    havenCapAccueil: "ホームとモード",
    havenCapHistorique: "割り込み履歴",
    havenCapHoraire: "自動スケジュール",
    hkWhoTitle: "私たちは誰ですか？",
    hkWhoBody: "<p><strong>HK Crib Go</strong> は Android のクリベッジ系ゲームです。本ポリシーはアプリ利用時の情報の扱いを説明します。</p>",
    hkDataTitle: "HK Crib Go は個人データを収集しますか？",
    hkDataBody: "<p>HK Crib Go は直接の個人識別情報を収集しません。スコアや設定は<strong>端末にローカル保存</strong>されます。個人データの販売はありません。</p>",
    hkLocalTitle: "端末には何が保存されますか？",
    hkLocalBody: "<p>スコア、記録、メダル、統計、設定などを保存できます。データは端末に残り、アプリデータの削除またはアンインストールで消去できます。</p>",
    hkAnalyticsTitle: "匿名の利用統計",
    hkAnalyticsBody: "<p>体験向上のため、<strong>Google Analytics (GA4)</strong> で匿名の利用統計（起動、対局など）を使う場合があります。</p>",
    hkShareTitle: "第三者との共有",
    hkShareBody: "<p>HK Crib Go は個人データを<strong>販売しません</strong>。あり得る第三者連携は Google Analytics（匿名統計）のみです。</p>",
    hkDeleteTitle: "データの削除方法",
    hkDeleteBody: "<p>Android 設定 → アプリ → HK Crib Go → ストレージ / データを消去、またはアンインストール。</p>",
    hkChildrenTitle: "子どもについて",
    hkChildrenBody: "<p>HK Crib Go は一般向けであり、13歳未満の子ども専用には設計されていません。</p>",
    hkContactTitle: "お問い合わせ",
    hkContactBody: '<p>プライバシーに関するお問い合わせ：<a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
    hvWhoTitle: "私たちは誰ですか？",
    hvWhoBody: "<p><strong>Haven</strong> は Weidler Studio の Android アプリで、選んだモードに応じて端末の割り込みを減らします。</p>",
    hvPurposeTitle: "なぜ Haven に Android 権限が必要ですか？",
    hvPurposeBody: "<p>Haven は端末上で着信や通知などの<strong>割り込みをフィルタ</strong>する必要があります。フィルタは<strong>あなたの端末上</strong>で、設定に従って行われます。</p>",
    hvPermsTitle: "要求される権限の用途は？",
    hvPermsBody:
      "<p>有効な機能に応じて Haven は次を求めることがあります：</p><ul><li><strong>通知へのアクセス</strong> — ルールに従って通知を検出・フィルタ；</li><li><strong>着信スクリーニング</strong> — モードに応じて着信を処理；</li><li><strong>連絡先</strong> — 選んだ相手に優先ルールを適用；</li><li><strong>使用状況アクセス</strong> — 利用アプリに基づくトリガー（例：運転）；</li><li><strong>Bluetooth</strong> — 車両 / 端末の任意トリガー；</li><li><strong>通知 / フォアグラウンドサービス / 起動時</strong> — Haven 作動中の保護を維持。</li></ul><p>Android 設定で取り消せます。一部機能は停止します。</p>",
    hvLocalTitle: "端末には何が保存されますか？",
    hvLocalBody: "<p>ルール、モード、スケジュール、設定は<strong>ローカル</strong>に保存されます。連絡先や通知内容の販売を目的としません。</p>",
    hvShareTitle: "第三者との共有",
    hvShareBody: "<p>Haven は個人データを<strong>販売しません</strong>。連絡先・着信・通知はローカルフィルタ向けです。</p>",
    hvDeleteTitle: "データの削除方法",
    hvDeleteBody: "<p>Android 設定 → アプリ → Haven → ストレージ / データを消去、またはアンインストール。利用をやめる場合は特別権限も取り消してください。</p>",
    hvChildrenTitle: "子どもについて",
    hvChildrenBody: "<p>Haven は割り込みを管理する成人向けであり、13歳未満の子ども向けには設計されていません。</p>",
    hvContactTitle: "お問い合わせ",
    hvContactBody: '<p>プライバシーに関するお問い合わせ：<a href="mailto:contact@weidlerstudio.com">contact@weidlerstudio.com</a></p>',
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
