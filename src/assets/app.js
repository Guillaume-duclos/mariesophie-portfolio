// Import styles
import './main.scss';

// Libs imports
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/carousel';

import domready from 'domready';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.min';

domready(() => {
  lazySizes.init();

  $('.carousel-indicators li').click(e => {
    $('#carousel-home').carousel(parseInt(e.target.getAttribute('data-section-to')));
  });
});
