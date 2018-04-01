import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  configPath: 'tests/storybook',
  storyKindRegex: /Components\/Base\/Table$/,
});
