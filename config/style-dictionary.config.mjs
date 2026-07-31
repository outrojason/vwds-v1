import StyleDictionary from 'style-dictionary';

// VWDS token pipeline - single source: tokens/vwds.tokens.json
// Outputs: CSS custom properties (site/Storybook), flat JSON (Figma sync via MCP), TypeScript (typed access in React)

const sd = new StyleDictionary({
  source: ['tokens/vwds.tokens.json'],
  // Expand composite tokens (typography, shadow) into sub-tokens so every platform can consume them
  expand: true,
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'vwds',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    figma: {
      transformGroup: 'js',
      buildPath: 'dist/figma/',
      files: [
        {
          destination: 'tokens.flat.json',
          format: 'json/flat',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/ts/',
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations' },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('VWDS tokens built: dist/css, dist/figma, dist/ts');
