import domready from 'domready';
import ScrollMagic from 'scrollmagic';

domready(() => {
  const projets = document.querySelector('#projets');
  const magicController = new ScrollMagic.Controller();
  const isDesktop = window.matchMedia('screen and (min-width: 992px)').matches;

  if (projets) {
    const projetsBreakpoint = document.querySelector('.projets-page');
    const footerBreakpoint = projets.querySelector('footer');
    const aside = projets.querySelector('aside#menu');
    const pips = projets.querySelector('.pg-pips');

    aside.querySelector('.toggle-aside').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: projetsBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    })
      .on('enter', () => {
        projetsBreakpoint.classList.add('show');
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
