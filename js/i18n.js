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
    homeTitle: "Weidler Studio crée des applications",
    homeLead: "Découvrez nos applications Android conçues pour Google Play.",
    discover: "Découvrir",
    hkCardTitle: "HK Crib Go",
    hkCardDesc: "Le cribbage Hong Kong, en parties rapides hors ligne sur votre téléphone.",
    havenCardTitle: "Haven",
    havenCardDesc: "Réduisez les interruptions du téléphone selon vos modes et votre horaire.",
    contactTitle: "Contact",
    contactBody: "Une question sur nos applications ou la confidentialité ?",
    contactEmail: "contact@weidlerstudio.com",
    footer: "© Weidler Studio",
    galleryTitle: "Galerie",
    featuresTitle: "Fonctionnalités et options",
    privacyTitle: "Politique de confidentialité",
    hkPageKicker: "Application",
    hkPageTitle: "HK Crib Go",
    hkPageLead:
      "Né de l’envie de jouer au cribbage dehors sans que les cartes s’envolent, HK Crib Go propose des parties rapides, entièrement hors ligne, avec adversaires IA et une interface en six langues.",
    hkFeat1: "<strong>Personnalisation</strong> — Choix des cartes, de la table et des options de comptage.",
    hkFeat2: "<strong>Pointage intuitif</strong> — Points affichés sous les cartes, avec pastilles quand une carte compte dans plusieurs combinaisons.",
    hkFeat3: "<strong>Progression</strong> — Statistiques, historique, médailles et trophées.",
    hkFeat4: "<strong>Support intégré</strong> — Centre d’assistance pour signaler un bug, une suggestion ou une question.",
    hkFeat5: "<strong>Hors ligne</strong> — Jouez sans connexion Internet pour le cœur du jeu.",
    hkFeat6: "<strong>Multilingue</strong> — Interface disponible en six langues.",
    havenPageKicker: "Application",
    havenPageTitle: "Haven",
    havenPageLead:
      "Haven aide à réduire les interruptions du téléphone — appels, notifications et autres sollicitations — tout en préservant les communications essentielles, selon vos modes (manuel ou automatique).",
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
    homeTitle: "Weidler Studio creates applications",
    homeLead: "Discover our Android apps designed for Google Play.",
    discover: "Discover",
    hkCardDesc: "Hong Kong cribbage in fast offline games on your phone.",
    havenCardDesc: "Reduce phone interruptions according to your modes and schedule.",
    contactTitle: "Contact",
    contactBody: "A question about our apps or privacy?",
    galleryTitle: "Gallery",
    featuresTitle: "Features and options",
    privacyTitle: "Privacy policy",
    hkPageKicker: "Application",
    hkPageLead:
      "Born from the wish to play cribbage outdoors without cards flying away, HK Crib Go offers fast, fully offline games with AI opponents and a six-language interface.",
    hkFeat1: "<strong>Customization</strong> — Choose cards, table and scoring options.",
    hkFeat2: "<strong>Clear scoring</strong> — Points under the cards, with markers when a card counts in several combinations.",
    hkFeat3: "<strong>Progress</strong> — Statistics, history, medals and trophies.",
    hkFeat4: "<strong>Built-in support</strong> — Report a bug, suggestion or question from the app.",
    hkFeat5: "<strong>Offline</strong> — Play the core game without Internet.",
    hkFeat6: "<strong>Multilingual</strong> — Interface available in six languages.",
    havenPageKicker: "Application",
    havenPageLead:
      "Haven helps reduce phone interruptions — calls, notifications and other solicitations — while keeping essential communications, according to your modes (manual or automatic).",
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
    homeTitle: "Weidler Studio cria aplicações",
    homeLead: "Descubra as nossas apps Android pensadas para o Google Play.",
    discover: "Descobrir",
    hkCardDesc: "Cribbage de Hong Kong em partidas rápidas offline no telemóvel.",
    havenCardDesc: "Reduza interrupções do telemóvel conforme os seus modos e horário.",
    contactTitle: "Contacto",
    contactBody: "Dúvida sobre as apps ou a privacidade?",
    galleryTitle: "Galeria",
    featuresTitle: "Funcionalidades e opções",
    privacyTitle: "Política de privacidade",
    hkPageLead:
      "Nascido da vontade de jogar cribbage ao ar livre sem cartas a voar, o HK Crib Go oferece partidas rápidas, totalmente offline, com adversários de IA e interface em seis idiomas.",
    havenPageLead:
      "O Haven ajuda a reduzir interrupções do telemóvel — chamadas, notificações e outras solicitações — preservando o essencial, conforme os seus modos.",
  });

  STRINGS.es = Object.assign({}, STRINGS.en, {
    navHome: "Inicio",
    navContact: "Contacto",
    homeTitle: "Weidler Studio crea aplicaciones",
    homeLead: "Descubre nuestras apps Android pensadas para Google Play.",
    discover: "Descubrir",
    hkCardDesc: "Cribbage de Hong Kong en partidas rápidas sin conexión en el teléfono.",
    havenCardDesc: "Reduce las interrupciones del teléfono según tus modos y horario.",
    contactTitle: "Contacto",
    contactBody: "¿Una pregunta sobre nuestras apps o la privacidad?",
    galleryTitle: "Galería",
    featuresTitle: "Funciones y opciones",
    privacyTitle: "Política de privacidad",
    hkPageLead:
      "Nacido del deseo de jugar al cribbage fuera sin que vuelen las cartas, HK Crib Go ofrece partidas rápidas, totalmente sin conexión, con rivales de IA e interfaz en seis idiomas.",
    havenPageLead:
      "Haven ayuda a reducir interrupciones del teléfono — llamadas, notificaciones y otras solicitudes — conservando lo esencial, según tus modos.",
  });

  STRINGS.zh = Object.assign({}, STRINGS.en, {
    navHome: "首页",
    navContact: "联系",
    homeTitle: "Weidler Studio 打造应用程序",
    homeLead: "了解我们面向 Google Play 的 Android 应用。",
    discover: "了解更多",
    hkCardDesc: "香港克里比奇纸牌，手机上快速离线对局。",
    havenCardDesc: "按模式与日程减少手机打扰。",
    contactTitle: "联系",
    contactBody: "关于应用或隐私的问题？",
    galleryTitle: "图库",
    featuresTitle: "功能与选项",
    privacyTitle: "隐私政策",
    hkPageLead: "HK Crib Go 让您在户外也能快速离线玩克里比奇，支持 AI 对手与六种语言界面。",
    havenPageLead: "Haven 按您的模式帮助减少来电与通知等打扰，同时保留必要通讯。",
  });

  STRINGS.ja = Object.assign({}, STRINGS.en, {
    navHome: "ホーム",
    navContact: "お問い合わせ",
    homeTitle: "Weidler Studio はアプリケーションを作ります",
    homeLead: "Google Play 向けに設計した Android アプリをご紹介します。",
    discover: "詳しく見る",
    hkCardDesc: "香港クリベッジを、端末上で素早くオフライン対戦。",
    havenCardDesc: "モードとスケジュールに応じて端末の中断を減らします。",
    contactTitle: "お問い合わせ",
    contactBody: "アプリやプライバシーについてのご質問は？",
    galleryTitle: "ギャラリー",
    featuresTitle: "機能とオプション",
    privacyTitle: "プライバシーポリシー",
    hkPageLead: "屋外でもカードが飛ばないクリベッジを。HK Crib Go はオフラインの短時間対局、AI 対戦、6言語UIに対応します。",
    havenPageLead: "Haven はモードに応じて着信・通知などの中断を減らし、必要な連絡は残します。",
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
