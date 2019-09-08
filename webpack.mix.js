const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
   //'resources/css/default-assets/notification.css',
   //'resources/css/c3.min.css',
   'resources/css/default-assets/modals.css',
   'resources/css/default-assets/modals-custom.css',

   'resources/css/default-assets/classy-nav.css',
   'resources/css/owl.carousel.min.css',
   'resources/css/animate.css',
   'resources/css/nice-select.css',
   //'resources/css/jquery-ui.min.css',
   'resources/css/default-assets/themify-icons.css',
   'resources/css/pe-icon-7-stroke.min.css',
   'resources/css/style2.css',
   //'resources/css/material-design-iconic-font.min.css',
   'resources/css/etline-style.css',
   /* 'resources/css/default-assets/account-setting.css',
   'resources/css/default-assets/barfilar.css',
   'resources/css/default-assets/carousel-swiper.css',
   'resources/css/default-assets/clipboard.css',
   'resources/css/default-assets/contextMenu.min.css',
   'resources/css/default-assets/dropzone-basic.min.css',
   'resources/css/default-assets/file-upload-preview.css',
   'resources/css/default-assets/garessi-notif.css',
   'resources/css/default-assets/ladda.min.css',
   'resources/css/default-assets/scrool-bar.css',
   'resources/css/default-assets/spinner.css',
   'resources/css/default-assets/sweetalert.css',
   'resources/css/default-assets/tables.min.css',
   'resources/css/bootstrap.min.css',
   'resources/css/dragula.min.css',
   'resources/css/dropify.min.css',
   'resources/css/dropzone.min.css',
   'resources/css/owl.video.play.html', */
   'resources/sass/style.css',
],'public/css/style.css');

mix.copyDirectory('resources/img','public/img');

//Combine and set js
//Must needed plugins to the run this Template
mix.scripts([
   //'resources/jquery.min.js',
   //'resources/js/popper.min.js',
   //'resources/js/bootstrap.min.js',
   'resources/js/admetro.bundle.js',

   'resources/js/default-assets/modal-classes.js',
   //'resources/js/default-assets/modaleffects.js',
   /* 'resources/js/default-assets/bootstrap-growl.min.js',
   'resources/js/default-assets/bootstrap-growl-active.js', */
   //'resources/js/d3.min.js',
   //'resources/js/c3.min.js',
   //'resources/js/default-assets/c3-chart-script.js',
   //'resources/js/amcharts.js',
   //'resources/js/serial.js',
   //'resources/js/light.js',
   //'resources/js/default-assets/column-barchart.js'
   'resources/js/default-assets/active.js',
],'public/js/template_plug.js');


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
