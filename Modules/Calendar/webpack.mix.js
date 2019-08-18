const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/index.js', 'js/modules/calendar/index.js')
mix.sass( __dirname + '/Resources/assets/sass/app.scss', 'css/modules/timeandreports/timeandreports.css');
//mix.copyDirectory(__dirname + '/Resources/assets/sass','../../public/css/modules/calendar');

if (mix.inProduction()) {
    mix.version();
}