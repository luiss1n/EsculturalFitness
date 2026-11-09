(() => {
  'use strict';

  const FRAME_COUNT = 299;
  const FRAME_PATH = (index) => `frames/frame-${String(index + 1).padStart(4, '0')}.webp`;
  const canvas = document.querySelector('#sequence');
  const context = canvas.getContext('2d', { alpha: false });
  const scene = document.querySelector('.scroll-scene');
  const loading = document.querySelector('#loading');
  const loadCount = document.querySelector('#load-count');
  const images = new Array(FRAME_COUNT);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let loadedCount = 0;
  let currentFrame = -1;
  let rafId = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      drawFrame(currentFrame < 0 ? 0 : currentFrame);
    }
  }

  function drawFrame(index) {
    const image = images[index];
    if (!image || !image.complete || !image.naturalWidth) return;
    currentFrame = index;
    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    context.fillStyle = '#080a0b';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
  }

  function updateFromScroll() {
    rafId = 0;
    if (reducedMotion.matches) {
      drawFrame(0);
      return;
    }
    const rect = scene.getBoundingClientRect();
    const travel = Math.max(1, scene.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / travel));
    drawFrame(Math.round(progress * (FRAME_COUNT - 1)));
  }

  function requestFrameUpdate() {
    if (!rafId) rafId = window.requestAnimationFrame(updateFromScroll);
  }

  function preload() {
    images.forEach((_, index) => {
      const image = new Image();
      images[index] = image;
      image.decoding = 'async';
      image.onload = image.onerror = () => {
        loadedCount += 1;
        loadCount.textContent = `${Math.round((loadedCount / FRAME_COUNT) * 100)}%`;
        if (index === 0) drawFrame(0);
        if (loadedCount === FRAME_COUNT) loading.hidden = true;
      };
      image.src = FRAME_PATH(index);
    });
  }

  resizeCanvas();
  preload();
  window.addEventListener('resize', () => { resizeCanvas(); requestFrameUpdate(); }, { passive: true });
  window.addEventListener('scroll', requestFrameUpdate, { passive: true });
  reducedMotion.addEventListener?.('change', requestFrameUpdate);
  requestFrameUpdate();
})();
