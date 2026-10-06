/**
 * ESTÉTICA LU DE SOUZA — INTERATIVIDADE JAVASCRIPT
 * Controles de vídeo, navegação mobile, interações de luxo e conversão WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Menu Mobile (Drawer com Acessibilidade WCAG e Focus Trap)
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileClose = document.getElementById('mobileClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    // Conduz o foco para o botão de fechar dentro do modal
    setTimeout(() => {
      mobileClose?.focus();
    }, 50);
  };

  const closeDrawer = () => {
    if (!mobileDrawer.classList.contains('open')) return;
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.focus();
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Retenção de foco (Focus Trap) acessível dentro da gaveta aberta
  if (mobileDrawer) {
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = mobileDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 4. Controles Interativos dos Vídeos Reais
  const videoCards = [
    {
      video: document.getElementById('videoProcedimento'),
      overlay: document.getElementById('overlayProcedimento'),
      audioBtn: document.getElementById('audioProcedimento')?.querySelector('.audio-btn'),
      frame: document.getElementById('videoProcedimento')?.closest('.video-device-frame')
    },
    {
      video: document.getElementById('videoMassagem'),
      overlay: document.getElementById('overlayMassagem'),
      audioBtn: document.getElementById('audioMassagem')?.querySelector('.audio-btn'),
      frame: document.getElementById('videoMassagem')?.closest('.video-device-frame')
    }
  ];

  videoCards.forEach(card => {
    if (!card.video) return;

    // Inicia mudo por padrão para respeitar diretrizes de mídia
    card.video.muted = true;

    const togglePlay = () => {
      if (card.video.paused) {
        // Pausar os outros vídeos antes de tocar este
        videoCards.forEach(other => {
          if (other.video && other.video !== card.video) {
            other.video.pause();
            other.frame?.classList.remove('playing');
          }
        });

        card.video.play().then(() => {
          card.frame?.classList.add('playing');
        }).catch(err => {
          console.warn('Autoplay bloqueado pelo navegador:', err);
        });
      } else {
        card.video.pause();
        card.frame?.classList.remove('playing');
      }
    };

    // Clique no vídeo ou no overlay de play
    card.video.addEventListener('click', togglePlay);
    if (card.overlay) {
      card.overlay.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
      });
    }

    // Controle de Áudio
    if (card.audioBtn) {
      card.audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.video.muted = !card.video.muted;
        const icon = card.audioBtn.querySelector('i');
        if (icon) {
          if (card.video.muted) {
            icon.className = 'fa-solid fa-volume-xmark';
          } else {
            icon.className = 'fa-solid fa-volume-high';
          }
        }
      });
    }

    // Atualiza estado visual quando o vídeo terminar ou pausar
    card.video.addEventListener('pause', () => {
      card.frame?.classList.remove('playing');
    });

    card.video.addEventListener('play', () => {
      card.frame?.classList.add('playing');
    });

    // Tratamento defensivo caso ocorra erro no carregamento da mídia
    card.video.addEventListener('error', () => {
      console.warn('Vídeo indisponível ou formato não suportado.');
      if (card.overlay) {
        const playBtn = card.overlay.querySelector('.video-play-btn');
        if (playBtn) playBtn.style.opacity = '0.5';
      }
    });
  });

  // Pausar vídeos quando saírem do viewport para economizar bateria e processamento
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          const frame = video.closest('.video-device-frame');
          frame?.classList.remove('playing');
        }
      });
    }, { threshold: 0.25 });

    videoCards.forEach(card => {
      if (card.video) videoObserver.observe(card.video);
    });
  }

  // 5. Botão Flutuante de WhatsApp: surge suavemente após scroll
  const floatingWhatsapp = document.getElementById('floatingWhatsapp');
  if (floatingWhatsapp) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        floatingWhatsapp.style.opacity = '1';
        floatingWhatsapp.style.pointerEvents = 'auto';
        floatingWhatsapp.style.transform = 'translateY(0)';
      } else {
        floatingWhatsapp.style.opacity = '0';
        floatingWhatsapp.style.pointerEvents = 'none';
        floatingWhatsapp.style.transform = 'translateY(15px)';
      }
    }, { passive: true });
    
    // Inicia invisível até rolagem
    floatingWhatsapp.style.opacity = '0';
    floatingWhatsapp.style.pointerEvents = 'none';
    floatingWhatsapp.style.transform = 'translateY(15px)';
  }
});
