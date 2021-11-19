module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    uni: 'readonly',
    wx: 'readonly',
    plus: 'readonly',
    util: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["error", 2],
    'arrow-parens': ['error', 'as-needed'],
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],

    'no-whitespace-before-property': 2,
    'no-empty-function': ['error', { allow: [] }],

    "vue/max-attributes-per-line": ["warn", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    'vue/html-end-tags': 'error',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/name-property-casing': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-unused-components': 'warn',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'warn',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
  },
};
