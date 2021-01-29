/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv', '@snowpack/plugin-typescript'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
