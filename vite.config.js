import reactRefresh from '@vitejs/plugin-react-refresh';

var path = require('path');
export default ({command}) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "./resources/js/"),
        },
    },
    plugins: [reactRefresh()],
});