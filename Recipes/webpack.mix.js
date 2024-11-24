const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
.sass('src/scss/style.scss', 'css')
   .setPublicPath('public')
   .options({
       processCssUrls: false,
   });

if (!mix.inProduction()) {
    mix.sourceMaps();
}

if (mix.inProduction()) {
    mix.version();
}