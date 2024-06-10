(() => {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const overlay = document.querySelector(".overlay");
  const drawer = document.getElementById("drawer");

  menuOpen.addEventListener("click", (e) => {
    drawer.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  menuClose.addEventListener("click", (e) => {
    drawer.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

  overlay.addEventListener("click", (e) => {
    drawer.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

  const videoContainer = document.getElementById("video-container");

  if (videoContainer != undefined) {
    const video = document.querySelector("video");
    const playBtn = document.getElementById("play");
    const pauseBtn = document.getElementById("pause");
    const progressContainer = document.querySelector(".progress-container");
    const progress = document.querySelector(".progress");
    const volumeSlider = document.getElementById("volume");
    const playToggle = document.getElementById("play-toggle");

    playToggle.addEventListener("click", (e) => {
      video.play();
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
      playToggle.style.display = "none";
    });

    playBtn.addEventListener("click", (e) => {
      video.play();
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
      playToggle.style.display = "none";
    });

    pauseBtn.addEventListener("click", (e) => {
      video.pause();
      pauseBtn.style.display = "none";
      playBtn.style.display = "block";
      playToggle.style.display = "block";
    });

    // Atualizar a barra de progresso conforme o vídeo toca
    video.addEventListener("timeupdate", () => {
      const percent = (video.currentTime / video.duration) * 100;
      progress.style.width = `${percent}%`;
    });

    // Permitir que o usuário procure (seek) no vídeo clicando na barra de progresso
    progressContainer.addEventListener("click", (e) => {
      const newTime =
        (e.offsetX / progressContainer.offsetWidth) * video.duration;
      video.currentTime = newTime;
    });

    // Ajustar o volume
    volumeSlider.addEventListener("input", (e) => {
      video.volume = e.target.value;
    });
  }
})();
