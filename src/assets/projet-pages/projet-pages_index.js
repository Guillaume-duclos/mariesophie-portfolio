import domready from 'domready';
import Pageable from 'pageable/dist/pageable.min';
import ScrollMagic from 'scrollmagic';

domready(() => {
  const projetPages = document.querySelector('#projet-pages');
  const magicController = new ScrollMagic.Controller();
  const isDesktop = window.matchMedia('screen and (min-width: 992px)').matches;

  if (projetPages) {
    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });
    }

    const projetPagesBreakpoint = document.querySelector('.projet-pages');
    const projetPagesBreakpoint2 = document.querySelector('section[data-anchor="2"]');
    const projetPagesBreakpoint3 = document.querySelector('section[data-anchor="3"]');
    const footerBreakpoint = projetPages.querySelector('footer');
    const aside = projetPages.querySelector('aside#menu');
    const pips = projetPages.querySelector('.pg-pips');

    aside.querySelector('.toggle-aside').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    })
      .on('enter', () => {
        projetPagesBreakpoint.classList.add('show');
        aside.classList.add('show');
        if (pips) {
          pips.classList.add('show');
        }
        setTimeout(() => {
          aside.classList.add('finished');
        }, 1000);
      })
      .on('leave', () => {
        aside.classList.remove('show', 'finished');
        if (pips) {
          pips.classList.remove('show');
        }
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint2,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 500 : 100
    })
      .on('enter', () => {
        projetPagesBreakpoint2.classList.add('show');
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: projetPagesBreakpoint3,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 150
    })
      .on('enter', () => {
        projetPagesBreakpoint3.classList.add('show');
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 100
    })
      .on('enter', () => {
        footerBreakpoint.classList.add('show');
      })
      .addTo(magicController);
  }
});
