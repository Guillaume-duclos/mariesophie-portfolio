import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/carousel';
import 'tilt.js';

import domready from 'domready';
import Pageable from 'pageable/dist/pageable.min';
import ScrollMagic from 'scrollmagic';

domready(() => {

  const home = document.querySelector('#home');
  const magicController = new ScrollMagic.Controller();
  const isDesktop = window.matchMedia('screen and (min-width: 992px)').matches;

  if (home) {
    $('.carousel-indicators li, .carousel-indicators-numbers li, .carousel-indicators-dots li').click(e => {
      $('#carousel-home').carousel(parseInt(e.target.getAttribute('data-section-to')));
    });

    $('#carousel-home').on('slide.bs.carousel', e => {
      $('.carousel-indicators-dots li').removeClass('active');
      $('.carousel-indicators-dots li[data-section-to="' + e.to + '"]').addClass('active');
      $('.carousel-indicators-dots li:not(.active) img').attr('src', 'public/home/dots.svg');
      $('.carousel-indicators-dots li.active img').attr('src', 'public/home/dot.svg');
    });

    if (isDesktop) {
      new Pageable('#container', {
        animation: 500,
        swipeThreshold: 200
      });
    }

    const portfolioBreakpoint = home.querySelector('.portfolio-home');
    const uxBreakpoint = home.querySelector('.ux-home');
    const webBreakpoint = home.querySelector('.web-home');
    const footerBreakpoint = home.querySelector('footer');
    const aside = home.querySelector('aside#menu');
    const pips = home.querySelector('.pg-pips');

    new ScrollMagic.Scene({
      triggerElement: portfolioBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    })
      .on('enter', () => {
        if (isDesktop) {
          document.querySelector('header').classList.add('d-none');
          aside.classList.add('show');
        }
        if (pips) {
          pips.classList.add('show');
        }
        portfolioBreakpoint.classList.add('show');
      })
      .on('leave', () => {
        if (isDesktop) {
          document.querySelector('header').classList.remove('d-none');
          aside.classList.remove('show');
        }
        if (pips) {
          pips.classList.remove('show');
        }
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: uxBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 500 : 100
    })
      .on('enter', () => {
        uxBreakpoint.classList.add('show');
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: webBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 100
    })
      .on('enter', () => {
        webBreakpoint.classList.add('show');
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
