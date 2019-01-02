import domready from 'domready';
import Pageable from 'pageable/dist/pageable.min';
import ScrollMagic from 'scrollmagic';

domready(() => {
  const about = document.querySelector('#about');
  const magicController = new ScrollMagic.Controller();
  const isDesktop = window.matchMedia('screen and (min-width: 992px)').matches;

  if (about) {
    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });
    }

    const aboutBreakpoint = document.querySelector('.about-page');
    const footerBreakpoint = about.querySelector('footer');
    const aside = about.querySelector('aside#menu');
    const pips = about.querySelector('.pg-pips');

    aside.querySelector('.toggle-aside').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: aboutBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    })
      .on('enter', () => {
        aboutBreakpoint.classList.add('show');
        aside.classList.add('show');
        if (isDesktop) {
          // document.querySelector('header').classList.add('d-none');
        }
        if (pips) {
          pips.classList.add('show');
        }
        setTimeout(() => {
          aside.classList.add('finished');
        }, 1000);
      })
      .on('leave', () => {
        aside.classList.remove('show', 'finished');
        if (isDesktop) {
          // document.querySelector('header').classList.remove('d-none');
        }
        if (pips) {
          pips.classList.remove('show');
        }
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 150
    })
      .on('enter', () => {
        footerBreakpoint.classList.add('show');
      })
      .addTo(magicController);
  }
});
