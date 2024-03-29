module.exports = {
   'env': {
      'browser': true,
      'es2021': true
   },
   'extends': 'eslint:recommended',
   'overrides': [
   ],
   'parserOptions': {
      'ecmaVersion': 'latest'
   },
   'rules': {
      'indent': [
         'error',
         3
      ],
      'linebreak-style': [
         'error',
         'unix'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'always'
      ]
   }
};
