(function () {
  function slugify(text) {
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function ensureId(el) {
    if (el.id) return el.id;
    const base = slugify(el.textContent || "section");
    let id = base || "section";
    let i = 2;
    while (document.getElementById(id)) {
      id = `${base}-${i++}`;
    }
    el.id = id;
    return id;
  }

  function buildToc() {
    const tocRoot = document.querySelector("#linksMenu ul");
    const content = document.getElementById("content");
    if (!tocRoot || !content) return;

    // Collect headings for the sidebar TOC
    const headings = Array.from(content.querySelectorAll("h2, h3, h4"));
    if (!headings.length) return;

    tocRoot.innerHTML = "";

    for (const h of headings) {
      const level = Number(h.tagName.substring(1));
      const id = ensureId(h);

      const li = document.createElement("li");
      li.className = "nav-item";

      const a = document.createElement("a");
      a.className = `nav-link toc-level-${level}`;
      a.href = `#${encodeURIComponent(id)}`;
      a.textContent = h.textContent || id;

      li.appendChild(a);
      tocRoot.appendChild(li);
    }
  }

  function wireUpFooterYear() {
    const el = document.getElementById("copyrightYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initScrollSpy() {
    // Bootstrap 4 scrollspy uses jQuery; if it exists, enable it.
    if (window.jQuery && typeof window.jQuery.fn.scrollspy === "function") {
      window.jQuery("body").scrollspy({ target: "#linksMenu", offset: 90 });

      // Recalculate after TOC build
      window.jQuery(window).on("load", function () {
        window.jQuery("body").scrollspy("refresh");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildToc();
    wireUpFooterYear();
    initScrollSpy();
  });
})();
