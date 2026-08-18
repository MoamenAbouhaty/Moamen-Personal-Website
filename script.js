(() => {
  // node_modules/@vercel/analytics/dist/index.mjs
  var initQueue = () => {
    if (window.va) return;
    window.va = function a(...params) {
      if (!window.vaq) window.vaq = [];
      window.vaq.push(params);
    };
  };
  var name = "@vercel/analytics";
  var version = "2.0.1";
  function isBrowser() {
    return typeof window !== "undefined";
  }
  function detectEnvironment() {
    try {
      const env = "development";
      if (env === "development" || env === "test") {
        return "development";
      }
    } catch {
    }
    return "production";
  }
  function setMode(mode = "auto") {
    if (mode === "auto") {
      window.vam = detectEnvironment();
      return;
    }
    window.vam = mode;
  }
  function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
  }
  function isDevelopment() {
    return getMode() === "development";
  }
  function getScriptSrc(props) {
    if (props.scriptSrc) {
      return makeAbsolute(props.scriptSrc);
    }
    if (isDevelopment()) {
      return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
      return makeAbsolute(`${props.basePath}/insights/script.js`);
    }
    return "/_vercel/insights/script.js";
  }
  function loadProps(explicitProps, confString) {
    var _a;
    let props = explicitProps;
    if (confString) {
      try {
        props = {
          ...(_a = JSON.parse(confString)) == null ? void 0 : _a.analytics,
          ...explicitProps
        };
      } catch {
      }
    }
    setMode(props.mode);
    const dataset = {
      sdkn: name + (props.framework ? `/${props.framework}` : ""),
      sdkv: version
    };
    if (props.disableAutoTrack) {
      dataset.disableAutoTrack = "1";
    }
    if (props.viewEndpoint) {
      dataset.viewEndpoint = makeAbsolute(props.viewEndpoint);
    }
    if (props.eventEndpoint) {
      dataset.eventEndpoint = makeAbsolute(props.eventEndpoint);
    }
    if (props.sessionEndpoint) {
      dataset.sessionEndpoint = makeAbsolute(props.sessionEndpoint);
    }
    if (isDevelopment() && props.debug === false) {
      dataset.debug = "false";
    }
    if (props.dsn) {
      dataset.dsn = props.dsn;
    }
    if (props.endpoint) {
      dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
      dataset.endpoint = makeAbsolute(`${props.basePath}/insights`);
    }
    return {
      beforeSend: props.beforeSend,
      src: getScriptSrc(props),
      dataset
    };
  }
  function makeAbsolute(url) {
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/") ? url : `/${url}`;
  }
  function inject(props = {
    debug: true
  }, confString) {
    var _a;
    if (!isBrowser()) return;
    const { beforeSend, src, dataset } = loadProps(props, confString);
    initQueue();
    if (beforeSend) {
      (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", beforeSend);
    }
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    for (const [key, value] of Object.entries(dataset)) {
      script.dataset[key] = value;
    }
    script.defer = true;
    script.onerror = () => {
      const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
      );
    };
    document.head.appendChild(script);
  }

  // src/analytics.js
  inject({ mode: "auto" });

  // src/script.js
  document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = (/* @__PURE__ */ new Date()).getFullYear();
    }
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
        navToggle.setAttribute("aria-expanded", !expanded);
        navMenu.classList.toggle("active");
      });
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });
      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });
    } else {
      revealElements.forEach((element) => {
        element.classList.add("visible");
      });
    }
  });
})();
