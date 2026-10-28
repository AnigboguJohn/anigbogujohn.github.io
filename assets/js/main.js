/* Portfolio behaviour: renders content from data.js and wires up the menu, theme, slider,
   project filter, project details dialog, counters, scroll reveal and contact form. */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // Simple highlighting for the code cards (keywords, strings, comments).
  function highlight(code) {
    return esc(code)
      .replace(/(\/\/[^\n]*)/g, '<span class="c">$1</span>')
      .replace(/(&#39;[^&\n]*?&#39;|&quot;[^&\n]*?&quot;)/g, '<span class="s">$1</span>')
      .replace(/\b(public|function|return|if|session_start|header|exit|require|Route|isset)\b/g, '<span class="k">$1</span>');
  }
  function codeCard(p) { return '<div class="code-card">' + highlight(p.code_preview) + "</div>"; }
  function media(p) {
    return p.cover
      ? '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy" />'
      : codeCard(p);
  }
  var arrow = '<svg viewBox="0 0 24 24" class="ic ic-line"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  /* ---------- render: featured slider ---------- */
  var featured = D.projects.filter(function (p) { return p.live; });
  $("#featTrack").innerHTML = featured.map(function (p) {
    return '<article class="feat">' +
      '<div class="feat-img">' + media(p) + "</div>" +
      '<div class="feat-body"><h3>' + esc(p.title) + "<br />" + esc(p.tagline) + "</h3>" +
      "<p>" + esc(p.summary.split(". ")[0]) + ".</p>" +
      '<div class="feat-actions"><button class="btn btn-sm btn-solid" data-open="' + p.id + '">Read more</button>' +
      '<a class="icon-btn" href="' + esc(p.live) + '" target="_blank" rel="noopener" aria-label="Open ' + esc(p.title) + ' live">' + arrow + "</a></div>" +
      "</div></article>";
  }).join("");
  var track = $("#featTrack");
  function slide(dir) {
    var card = track.firstElementChild;
    if (!card) return;
    var step = card.getBoundingClientRect().width + 18;
    var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    else track.scrollBy({ left: dir * step, behavior: "smooth" });
  }
  $("#featPrev").addEventListener("click", function () { slide(-1); });
  $("#featNext").addEventListener("click", function () { slide(1); });

  /* ---------- render: marquee band ---------- */
  var words = D.band.concat(D.band).map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("");
  $("#bandTrack").innerHTML = words + words;

  /* ---------- render: projects ---------- */
  $("#projectGrid").innerHTML = D.projects.map(function (p) {
    return '<article class="project reveal" data-tags="' + p.tags.join(" ") + '">' +
      '<button class="project-media" data-open="' + p.id + '" aria-label="View ' + esc(p.title) + ' details">' +
      (p.badge ? '<span class="badge live">' + esc(p.badge) + "</span>" : '<span class="badge">Code on GitHub</span>') +
      media(p) + "</button>" +
      '<div class="project-body">' +
      '<div class="project-top"><h3>' + esc(p.title) + '</h3><span class="project-year">' + esc(p.year) + "</span></div>" +
      '<p class="project-tagline">' + esc(p.tagline) + "</p>" +
      '<p class="desc">' + esc(p.summary) + "</p>" +
      '<div class="chips">' + p.stack.slice(0, 7).map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") +
      (p.stack.length > 7 ? "<span>+" + (p.stack.length - 7) + "</span>" : "") + "</div>" +
      '<div class="project-links">' +
      '<button class="btn btn-sm btn-solid" data-open="' + p.id + '">Details</button>' +
      (p.live ? '<a class="btn btn-sm btn-ghost" href="' + esc(p.live) + '" target="_blank" rel="noopener">Live site ' + arrow + "</a>" : "") +
      '<a class="btn btn-sm btn-ghost" href="' + esc(p.code) + '" target="_blank" rel="noopener">Code ' + arrow + "</a>" +
      "</div></div></article>";
  }).join("");

  /* ---------- project filter ---------- */
  $$("#filters button").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("#filters button").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
      var f = b.dataset.filter;
      $$(".project").forEach(function (card) {
        var show = f === "all" || card.dataset.tags.split(" ").indexOf(f) > -1;
        card.classList.toggle("hide", !show);
        if (show) card.classList.add("in");
      });
    });
  });

  /* ---------- render: services, skills, work ---------- */
  $("#serviceGrid").innerHTML = D.services.map(function (s) {
    return '<div class="service reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + s[0] + '"/></svg>' +
      "<h3>" + esc(s[1]) + "</h3><p>" + esc(s[2]) + "</p></div>";
  }).join("");
  $("#skillGrid").innerHTML = D.skills.map(function (s) {
    return '<div class="skill reveal' + (s[2] ? " wide on" : "") + '"><h3>' + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></div>";
  }).join("");
  $("#workTable").innerHTML = D.work.map(function (w) {
    var tag = w[5] ? "a" : "div";
    return "<" + tag + ' class="work-row"' + (w[5] ? ' href="' + esc(w[5]) + '" target="_blank" rel="noopener"' : "") + ">" +
      '<span class="work-when">' + esc(w[0]) + "<small>" + esc(w[1]) + "</small></span>" +
      '<span class="work-co">' + esc(w[2]) + "</span>" +
      '<span class="work-role">' + esc(w[3]) + "<i>|</i>" + esc(w[4]) + "</span>" +
      '<span class="work-go" aria-hidden="true">' + (w[5] ? "→" : "") + "</span></" + tag + ">";
  }).join("");

  /* ---------- project details dialog ---------- */
  var modal = $("#projectModal");
  var body = $("#modalBody");
  var current = { p: null, i: 0 };
  function showSlide(i) {
    var p = current.p;
    var list = p.gallery || [];
    if (!list.length) return;
    current.i = (i + list.length) % list.length;
    var item = list[current.i];
    $(".gallery-main img", body).src = item[0];
    $(".gallery-main img", body).alt = item[1];
    $(".gallery-cap", body).textContent = item[1] + "  ·  " + (current.i + 1) + " / " + list.length;
    $$(".thumbs button", body).forEach(function (t, n) { t.setAttribute("aria-current", String(n === current.i)); });
  }
  function openProject(id) {
    var p = D.projects.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    current = { p: p, i: 0 };
    var gallery = p.gallery && p.gallery.length
      ? '<div class="gallery"><div class="gallery-main"><img src="" alt="" />' +
        (p.gallery.length > 1 ? '<button class="slide-btn gallery-nav prev" data-g="-1" aria-label="Previous image">←</button><button class="slide-btn gallery-nav next" data-g="1" aria-label="Next image">→</button>' : "") +
        '</div><p class="gallery-cap"></p>' +
        (p.gallery.length > 1 ? '<div class="thumbs">' + p.gallery.map(function (g, n) {
          return '<button data-t="' + n + '" aria-label="Show ' + esc(g[1]) + '"><img src="' + esc(g[0]) + '" alt="" loading="lazy" /></button>';
        }).join("") + "</div>" : "") + "</div>"
      : '<div class="gallery"><div class="gallery-main">' + codeCard(p) + '</div><p class="gallery-cap">From the code on GitHub</p></div>';
    body.innerHTML =
      '<div class="modal-head"><div><h2 id="modalTitle">' + esc(p.title) + "</h2><p>" + esc(p.tagline) + " · " + esc(p.year) + "</p></div>" +
      '<button class="icon-btn modal-close" aria-label="Close" data-close>✕</button></div>' +
      gallery +
      '<div class="modal-grid"><div><h3>// what it does</h3><p class="lead" style="margin-top:0">' + esc(p.summary) + "</p>" +
      "<ul>" + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      (p.proof ? '<p class="proof">' + esc(p.proof) + "</p>" : "") + "</div>" +
      "<div><h3>// stack</h3><div class=\"chips\" style=\"margin-bottom:20px\">" + p.stack.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div>" +
      "<h3>// folders and files</h3><pre class=\"tree\">" + esc(p.tree) + "</pre>" +
      '<div class="project-links">' +
      (p.live ? '<a class="btn btn-sm btn-solid" href="' + esc(p.live) + '" target="_blank" rel="noopener">Open live site ' + arrow + "</a>" : "") +
      '<a class="btn btn-sm btn-ghost" href="' + esc(p.code) + '" target="_blank" rel="noopener">View code on GitHub ' + arrow + "</a></div>" +
      (p.note ? '<p class="modal-note">' + esc(p.note) + "</p>" : "") +
      "</div></div>";
    if (p.gallery && p.gallery.length) showSlide(0);
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (typeof modal.close === "function") modal.close(); else modal.removeAttribute("open");
  }
  modal.addEventListener("close", function () { document.body.style.overflow = ""; });
  document.addEventListener("click", function (e) {
    var open = e.target.closest("[data-open]");
    if (open) { e.preventDefault(); openProject(open.dataset.open); return; }
    if (e.target.closest("[data-close]") || e.target === modal) { closeModal(); return; }
    var g = e.target.closest("[data-g]");
    if (g) { showSlide(current.i + Number(g.dataset.g)); return; }
    var t = e.target.closest("[data-t]");
    if (t) showSlide(Number(t.dataset.t));
  });
  document.addEventListener("keydown", function (e) {
    if (!modal.open || !current.p || !current.p.gallery) return;
    if (e.key === "ArrowRight") showSlide(current.i + 1);
    if (e.key === "ArrowLeft") showSlide(current.i - 1);
  });

  /* ---------- menu, theme, nav state ---------- */
  var burger = $("#burger");
  var links = $("#navLinks");
  function setMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("open", open);
  }
  burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
  $$("#navLinks a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  $("#themeBtn").addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    store.set("theme", next);
  });

  var nav = $(".nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });

  /* ---------- scroll reveal, active link, counters ---------- */
  function countUp(el) {
    var end = Number(el.dataset.count);
    var suffix = el.dataset.suffix || "";
    var start = performance.now();
    function tick(now) {
      var k = Math.min(1, (now - start) / 1200);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count]", en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });

    var sections = $$("main section[id]");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$("#navLinks a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
    $$("[data-count]").forEach(function (el) { el.textContent = el.dataset.count + (el.dataset.suffix || ""); });
  }

  /* ---------- contact form: opens WhatsApp or email with the message ---------- */
  var form = $("#contactForm");
  var via = "whatsapp";
  $$("button[data-via]", form).forEach(function (b) { b.addEventListener("click", function () { via = b.dataset.via; }); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var err = $("#formError");
    if (!f.name.value.trim() || !f.message.value.trim()) {
      err.textContent = "Please add your name and a message.";
      (f.name.value.trim() ? f.message : f.name).focus();
      return;
    }
    err.textContent = "";
    var text = "Hello Nonso,\n\n" + f.message.value.trim() + "\n\n" +
      "Name: " + f.name.value.trim() + (f.company.value.trim() ? "\nCompany: " + f.company.value.trim() : "") +
      "\nAbout: " + f.type.value;
    if (via === "email") {
      window.location.href = "mailto:nonsoanigbogu49@gmail.com?subject=" + encodeURIComponent(f.type.value + " · from your portfolio") + "&body=" + encodeURIComponent(text);
    } else {
      window.open("https://wa.me/2349160599477?text=" + encodeURIComponent(text), "_blank", "noopener");
    }
  });

  $("#year").textContent = new Date().getFullYear();
})();
