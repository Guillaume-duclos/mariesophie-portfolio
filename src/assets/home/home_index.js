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
      $('.carousel-indicators-dots li:not(.active) img').attr('src', 'public/general/dots.svg');
      $('.carousel-indicators-dots li.active img').attr('src', 'public/general/dot.svg');
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

    aside.querySelector('.toggle-aside').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    document.querySelector('.navbar-toggler').addEventListener('click', () => {
      aside.classList.toggle('open');
    });

    new ScrollMagic.Scene({
      triggerElement: portfolioBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 300 : 200
    })
      .on('enter', () => {
        aside.classList.add('show');
        if (isDesktop) {
          document.querySelector('header').classList.add('d-none');
        }
        if (pips) {
          pips.classList.add('show');
        }
        portfolioBreakpoint.classList.add('show');
        setTimeout(() => {
          aside.classList.add('finished');
        }, 1000);
        setTimeout(() => {
          portfolioBreakpoint.querySelector('.photos img').classList.add('finished');
        }, 1500);
      })
      .on('leave', () => {
        aside.classList.remove('show', 'finished');
        if (isDesktop) {
          document.querySelector('header').classList.remove('d-none');
        }
        if (pips) {
          pips.classList.remove('show');
        }
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: webBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 400 : 100
    })
      .on('enter', () => {
        webBreakpoint.classList.add('show');
        setTimeout(() => {
          webBreakpoint.querySelector('img').classList.add('finished');
        }, 1500);
      })
      .addTo(magicController);

    new ScrollMagic.Scene({
      triggerElement: uxBreakpoint,
      triggerHook: 'onEnter',
      offset: isDesktop === true ? 500 : 100
    })
      .on('enter', () => {
        uxBreakpoint.classList.add('show');
        setTimeout(() => {
          uxBreakpoint.querySelector('.julien').classList.add('finished');
        }, 1500);
        setTimeout(() => {
          uxBreakpoint.querySelector('.one-page').classList.add('finished');
        }, 1700);
        setTimeout(() => {
          uxBreakpoint.querySelector('.ipad').classList.add('finished');
        }, 1900);
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
