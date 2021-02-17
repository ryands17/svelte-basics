/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [],
};
