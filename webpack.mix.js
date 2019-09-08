const mix = require('laravel-mix');


mix.styles([
   'resources/css/bootstrap.min.css',     //base theme css start
   'resources/css/plugins/jquery-ui/jquery-ui.min.css',
   'resources/css/style.css',
   'resources/css/themes.css'             //base theme css end
],'public/css/style.css');

mix.copyDirectory('resources/img','public/img');

//Combine and set js
//Must needed plugins to the run this Template
mix.scripts([
   'js/jquery.min.js',
   'js/plugins/nicescroll/jquery.nicescroll.min.js',
   'js/plugins/jquery-ui/jquery-ui.js',
   'js/plugins/slimscroll/jquery.slimscroll.min.js',
   'js/bootstrap.min.js',
   'js/plugins/form/jquery.form.min.js',
   'js/eakroko.min.js',
   'js/application.min.js',
   'js/demonstration.min.js'   
],'public/js/template_plug.js');


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
