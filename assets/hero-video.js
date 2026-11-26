(() => {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.hero-video-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  video.muted = true;

  function updateButton() {
    const text = video.paused ? 'Reproduzir vídeo' : 'Pausar vídeo';
    button.textContent = text;
    button.setAttribute('aria-label', `${text} de fundo`);
  }

  function startVideo() {
    if (reducedMotion.matches) {
      video.pause();
      button.hidden = true;
      return;
    }
    if (!video.hasAttribute('src')) video.src = video.dataset.videoSrc;
    // A foto continua visível quando o navegador bloqueia a reprodução automática.
    video.play().catch(() => {
      updateButton();
      button.hidden = reducedMotion.matches || Boolean(video.error);
    });
  }

  video.addEventListener('playing', () => {
    updateButton();
    button.hidden = reducedMotion.matches;
  });
  video.addEventListener('pause', updateButton);
  video.addEventListener('error', () => {
    video.hidden = true;
    button.hidden = true;
  });
  button.addEventListener('click', () => {
    if (video.paused) startVideo();
    else video.pause();
  });
  reducedMotion.addEventListener('change', startVideo);
  startVideo();
})();
