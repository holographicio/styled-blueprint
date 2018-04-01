const configure = require('@storybook/react').configure;

// automatically import all files ending in *.stories.js
const req = require.context('../../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // require('../../src/app/lib/styles.ts');
}

configure(loadStories, module);
