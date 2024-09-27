const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: 'src/service-worker.js',
    swDest: 'build/cv/service-worker.js',
    globDirectory: 'build',
    globPatterns: ['**/*.{js,css,html,png,jpg,json}']
  }).then(({count, size, warnings}) => {
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();