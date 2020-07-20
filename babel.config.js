module.exports = {
    presets: [
      [
        '@babel/preset-env',     
        {
          targets: {
            node: 'current',
          },
        },
      ],
      // To Jest supports TypeScript,
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  };
