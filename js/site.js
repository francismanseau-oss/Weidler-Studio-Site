(function () {
  function applyChrome() {
    const I = window.WS_I18N;
    if (!I) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = I.t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = I.t(key);
    });
    const mail = document.getElementById("contactEmail");
    if (mail) {
      const email = I.t("contactEmail");
      mail.textContent = email;
      mail.setAttribute("href", "mailto:" + email);
    }
    const page = document.body.getAttribute("data-page") || "home";
    if (page === "home") {
      document.title = I.t("brand") + " — " + I.t("homeTitle");
    } else if (page === "hk") {
      document.title = I.t("hkPageTitle") + " — " + I.t("brand");
    } else if (page === "haven") {
      document.title = I.t("havenPageTitle") + " — " + I.t("brand");
    }
  }

  function buildLangSwitcher() {
    const host = document.getElementById("langSwitcher");
    const I = window.WS_I18N;
    if (!host || !I) return;
    host.innerHTML = "";
    I.ORDER.forEach((code) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = code;
      btn.setAttribute("aria-pressed", code === I.getLocale() ? "true" : "false");
      btn.addEventListener("click", () => I.setLocale(code));
      host.appendChild(btn);
    });
  }

  function wireExclusiveAccordion(host) {
    host.querySelectorAll("details.acc-item").forEach((details) => {
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        host.querySelectorAll("details.acc-item").forEach((other) => {
          if (other !== details) other.open = false;
        });
      });
    });
  }

  function fillAccordion(host, sections, openFirst) {
    if (!host) return;
    host.innerHTML = "";
    sections.forEach((section, index) => {
      const details = document.createElement("details");
      details.className = "acc-item";
      if (openFirst && index === 0) details.open = true;
      const summary = document.createElement("summary");
      summary.textContent = section.title;
      const body = document.createElement("div");
      body.className = "acc-body";
      body.innerHTML = section.body;
      details.appendChild(summary);
      details.appendChild(body);
      host.appendChild(details);
    });
    wireExclusiveAccordion(host);
  }

  function renderPrivacyAccordion() {
    const host = document.getElementById("privacyAccordion");
    const I = window.WS_I18N;
    if (!host || !I) return;
    const app = host.getAttribute("data-app") || "hk";
    fillAccordion(host, I.getPrivacySections(app), false);
  }

  function renderHkGuideAccordion() {
    const host = document.getElementById("hkGuideAccordion");
    const I = window.WS_I18N;
    if (!host || !I) return;
    const feats = [1, 2, 3, 4, 5, 6]
      .map((n) => "<li>" + I.t("hkFeat" + n) + "</li>")
      .join("");
    fillAccordion(
      host,
      [
        { title: I.t("hkHowTitle"), body: '<div class="prose">' + I.t("hkHowBody") + "</div>" },
        { title: I.t("hkScoreTitle"), body: '<div class="prose">' + I.t("hkScoreBody") + "</div>" },
        { title: I.t("hkOptionsTitle"), body: '<div class="prose">' + I.t("hkOptionsBody") + "</div>" },
        { title: I.t("featuresTitle"), body: '<ul class="feature-list">' + feats + "</ul>" },
      ],
      false
    );
  }

  function markCurrentNav() {
    const page = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav a[data-nav]").forEach((a) => {
      const nav = a.getAttribute("data-nav");
      const current =
        (page === "home" && nav === "home") ||
        (page === "hk" && nav === "hk") ||
        (page === "haven" && nav === "haven") ||
        (page === "home" && nav === "contact" && location.hash === "#contact");
      if (current) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function focusPrivacyFromHash(shouldScroll) {
    if (location.hash !== "#confidentialite") return;
    const section = document.getElementById("confidentialite");
    const host = document.getElementById("privacyAccordion");
    if (!host) return;
    const first = host.querySelector("details.acc-item");
    if (first) {
      host.querySelectorAll("details.acc-item").forEach((d) => {
        d.open = d === first;
      });
    }
    if (shouldScroll && section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function refresh() {
    applyChrome();
    buildLangSwitcher();
    renderHkGuideAccordion();
    renderPrivacyAccordion();
    markCurrentNav();
    focusPrivacyFromHash(true);
  }

  window.addEventListener("ws:locale", () => {
    applyChrome();
    buildLangSwitcher();
    renderHkGuideAccordion();
    renderPrivacyAccordion();
    markCurrentNav();
    focusPrivacyFromHash(false);
  });
  window.addEventListener("hashchange", () => focusPrivacyFromHash(true));
  document.addEventListener("DOMContentLoaded", refresh);
})();
