{
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 10,
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
};
