const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js/app.js')
.sass('src/scss/style.scss', 'public/css/style.css')
.setPublicPath('public');