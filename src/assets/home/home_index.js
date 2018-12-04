import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/carousel';
import 'paroller.js';
import 'tilt.js';

import domready from 'domready';
import ScrollMagic from 'scrollmagic';

domready(() => {
  const home = document.querySelector('#home');
  const magicController = new ScrollMagic.Controller();

  if (home) {
    $('.carousel-indicators li').click(e => {
      $('#carousel-home').carousel(parseInt(e.target.getAttribute('data-section-to')));
    });

    $('.paroller-portfolio').paroller();
    $('.paroller-web').paroller();
    $('.paroller-ux').paroller();

    const portfolioBreakpoint = home.querySelector('.portfolio-home');
    const uxBreakpoint = home.querySelector('.ux-home');
    const webBreakpoint = home.querySelector('.web-home');

    new ScrollMagic.Scene({
      triggerElement: portfolioBreakpoint,
      triggerHook: 'onEnter',
      offset: 300
    })
      .on('enter', () => {
        portfolioBreakpoint.classList.add('show');
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: uxBreakpoint,
      triggerHook: 'onEnter',
      offset: 500
    })
      .on('enter', () => {
        uxBreakpoint.classList.add('show');
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: webBreakpoint,
      triggerHook: 'onEnter',
      offset: 400
    })
      .on('enter', () => {
        webBreakpoint.classList.add('show');
      })
      .addTo(magicController);
  }
});
