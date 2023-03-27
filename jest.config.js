module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html',
      },
    },
  },
}
