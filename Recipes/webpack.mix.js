
const mix = require('laravel-mix');

mix.js('src/js/index.js', 'public/js/app.js') 
   .sass('src/scss/style.scss', 'css/style.css')
   .setPublicPath('public')
   .options({
       processCssUrls: false,
   });

if (!mix.inProduction()) {
    mix.sourceMaps();
}
