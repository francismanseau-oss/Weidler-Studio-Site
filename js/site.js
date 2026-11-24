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

  function renderAccordion() {
    const host = document.getElementById("privacyAccordion");
    const I = window.WS_I18N;
    if (!host || !I) return;
    const app = host.getAttribute("data-app") || "hk";
    const sections = I.getPrivacySections(app);
    host.innerHTML = "";
    sections.forEach((section, index) => {
      const details = document.createElement("details");
      details.className = "acc-item";
      if (index === 0) details.open = true;
      const summary = document.createElement("summary");
      summary.textContent = section.title;
      const body = document.createElement("div");
      body.className = "acc-body";
      body.innerHTML = section.body;
      details.appendChild(summary);
      details.appendChild(body);
      host.appendChild(details);
    });
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

  function refresh() {
    applyChrome();
    buildLangSwitcher();
    renderAccordion();
    markCurrentNav();
  }

  window.addEventListener("ws:locale", refresh);
  document.addEventListener("DOMContentLoaded", refresh);
})();
