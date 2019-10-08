const mix = require('laravel-mix');

mix.styles([
   'resources/css/bootstrap.min.css',     //base theme css start
   'resources/css/plugins/jquery-ui/jquery-ui.min.css',
   'resources/css/style.css',
   'resources/css/themes.css',             //base theme css end
],'public/css/style.css');

mix.copyDirectory('resources/img','public/img');

//Combine and set js
//Must needed plugins to the run this Template
mix.scripts([
   'resources/js/jquery.min.js',
   'resources/js/plugins/nicescroll/jquery.nicescroll.min.js',
   'resources/js/plugins/jquery-ui/jquery-ui.js',
   'resources/js/plugins/slimscroll/jquery.slimscroll.min.js',
   'resources/js/bootstrap.min.js',
   'resources/js/plugins/form/jquery.form.min.js',
   'resources/js/plugins/maskedinput/jquery.maskedinput.min.js',
   'resources/js/eakroko.min.js',
   'resources/js/application.min.js',
   'resources/js/demonstration.min.js',
],'public/js/template_plug.js');

mix.scripts(['resources/js/plugins/select2/select2.js'], 'public/js/plugins/select2.js');
mix.styles(['resources/css/plugins/select2/select2.css'], 'public/css/plugins/select2.css');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
