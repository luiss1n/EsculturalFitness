(() => {
  const section = document.querySelector('#espaco');
  const tabs = [...section.querySelectorAll('[role="tab"]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const video = section.querySelector('video');
  const videoPlaceholder = section.querySelector('.space-video-empty');
  const dialog = document.querySelector('.space-lightbox');
  const image = dialog.querySelector('.space-lightbox-image');
  const caption = dialog.querySelector('#space-lightbox-caption');
  const count = dialog.querySelector('.space-lightbox-count');
  const photoLinks = [...section.querySelectorAll('[data-gallery-group]')];
  let activePhotos = [];
  let photoIndex = 0;
  let opener;

  function selectTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
    video.pause();
    if (focus) tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectTab(next, true);
    });
  });
  panels.forEach(panel => panel.tabIndex = 0);
  section.querySelector('[role="tablist"]').hidden = false;
  selectTab(0);

  // Defina data-video-src no HTML quando o vídeo real estiver disponível.
  if (video.dataset.videoSrc.trim()) {
    video.src = video.dataset.videoSrc;
    video.hidden = false;
    videoPlaceholder.hidden = true;
  }

  function showPhoto(index) {
    photoIndex = (index + activePhotos.length) % activePhotos.length;
    const photo = activePhotos[photoIndex];
    image.src = photo.href;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = photo.dataset.caption;
    count.textContent = `${photoIndex + 1} de ${activePhotos.length} · Imagem ilustrativa`;
  }

  photoLinks.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    activePhotos = photoLinks.filter(photo => photo.dataset.galleryGroup === link.dataset.galleryGroup);
    showPhoto(activePhotos.indexOf(link));
    dialog.showModal();
    document.body.classList.add('gallery-open');
  }));
  dialog.querySelector('.space-lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.space-lightbox-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
  dialog.querySelector('.space-lightbox-next').addEventListener('click', () => showPhoto(photoIndex + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('gallery-open');
    image.removeAttribute('src');
    opener?.focus();
  });
})();
