import type { Preview } from '@storybook/react';
// Load the generated tokens + font faces so stories render with real values.
import '../dist/css/variables.css';
import '../src/styles/fonts.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};
export default preview;
