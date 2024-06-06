(() => {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const overlay = document.querySelector(".overlay");
  const drawer = document.getElementById("drawer");

  menuOpen.addEventListener("click", (e) => {
    drawer.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  menuClose.addEventListener("click", (e) => {
    drawer.style.display = "none";
    document.body.style.overflow = "auto";
  });

  overlay.addEventListener("click", (e) => {
    drawer.style.display = "none";
    document.body.style.overflow = "auto";
  });
})();
