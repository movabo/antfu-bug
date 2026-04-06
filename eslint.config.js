import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
  },
  {
    files: ['**'],
    rules: {
      'ts/ban-ts-comment': 'off',
      'e18e/prefer-static-regex': 'off',
    },
  },
)
