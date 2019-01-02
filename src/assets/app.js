// Import styles
import './main.scss';

// Libs imports
import domready from 'domready';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.min';

// Custom JS imports
import './about/about_index';
import './home/home_index';

domready(() => {
  lazySizes.init();
});
