module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@helpers': './src/helpers',
        '@services': './src/services'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
