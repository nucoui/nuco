/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  rules: {
    'selector-class-pattern': [
      /^(-?[_a-z][\w-]*)$/i,
    ],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-recommended-scss'],
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue'],
    },
  ],
}
