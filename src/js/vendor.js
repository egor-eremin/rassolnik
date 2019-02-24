import '@babel/polyfill';
import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import 'slick-carousel';
import 'magnific-popup';
import 'jquery-validation';
import 'jquery-mask-plugin';
import 'select2';
import objectFitImages from 'object-fit-images';

objectFitImages();
svg4everybody();

window.$ = $;
window.jQuery = $;
require('ninelines-ua-parser');
