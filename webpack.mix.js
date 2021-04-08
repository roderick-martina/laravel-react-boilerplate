const mix = require('laravel-mix');
var path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.js', 'public/build/js').react();
mix.postCss('resources/css/app.css', 'public/build/css', [
    require('postcss-import'),
    require('tailwindcss'),
])
mix.version();

const domain = 'laravel-react-boilerplate.test';
// const homedir = require('os').homedir();

// The mix script:
mix.browserSync({
    // proxy: 'https://' + domain,
    proxy: 'http://' + domain,
    host: domain,
    open: false
    // open: 'external',
    // https: {
    //     key: homedir + "/.config/valet/Certificates/" + domain + ".key",
    //     cert: homedir + "/.config/valet/Certificates/" + domain + ".crt"
    // },
})

mix.webpackConfig(webpack => {
    return {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", 'ts','tsx'],
            alias: {
                "@": path.join(__dirname, "./resources/js/"),
            }
        }
    }
})
