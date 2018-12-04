import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/carousel';
import 'tilt.js';

import domready from 'domready';
import Pageable from '../../public/libs/pageable';
import ScrollMagic from 'scrollmagic';

domready(() => {

  const home = document.querySelector('#home');
  const magicController = new ScrollMagic.Controller();

  if (home) {
    $('.carousel-indicators li').click(e => {
      $('#carousel-home').carousel(parseInt(e.target.getAttribute('data-section-to')));
    });

    new Pageable('#container');

    const portfolioBreakpoint = home.querySelector('.portfolio-home');
    const uxBreakpoint = home.querySelector('.ux-home');
    const webBreakpoint = home.querySelector('.web-home');
    const footerBreakpoint = home.querySelector('footer');

    new ScrollMagic.Scene({
      triggerElement: portfolioBreakpoint,
      triggerHook: 'onEnter',
      offset: 300
    })
      .on('enter', () => {
        document.querySelector('header').classList.add('d-none');
        home.querySelector('.pg-pips').classList.add('show');
        portfolioBreakpoint.classList.add('show');
      })
      .on('leave', () => {
        document.querySelector('header').classList.remove('d-none');
        home.querySelector('.pg-pips').classList.remove('show');
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

    new ScrollMagic.Scene({
      triggerElement: footerBreakpoint,
      triggerHook: 'onEnter',
      offset: 400
    })
      .on('enter', () => {
        footerBreakpoint.classList.add('show');
      })
      .addTo(magicController);
  }
});
