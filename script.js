(function () {
  var beanA = document.getElementById("bean-a");
  var beanB = document.getElementById("bean-b");
  var ratio = document.getElementById("ratio");
  var ratioLabel = document.getElementById("ratio-label");
  var blendName = document.getElementById("blend-name");
  var previewName = document.getElementById("preview-name");
  var previewRatio = document.getElementById("preview-ratio");
  var previewGrind = document.getElementById("preview-grind");
  var grind = "Drip";

  function update() {
    var a = parseInt(ratio.value, 10);
    var b = 100 - a;
    ratioLabel.textContent = a + "% / " + b + "%";
    previewRatio.textContent = a + "% " + beanA.value + ", " + b + "% " + beanB.value;
    var name = blendName.value.trim();
    previewName.textContent = name ? name : "Your Blend";
    previewGrind.textContent = "Ground for " + grind;
  }

  beanA.addEventListener("change", update);
  beanB.addEventListener("change", update);
  ratio.addEventListener("input", update);
  blendName.addEventListener("input", update);

  document.querySelectorAll(".pill").forEach(function (pill) {
    pill.addEventListener("click", function () {
      document.querySelectorAll(".pill").forEach(function (p) { p.classList.remove("is-active"); });
      pill.classList.add("is-active");
      grind = pill.getAttribute("data-grind");
      update();
    });
  });

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  update();
})();
