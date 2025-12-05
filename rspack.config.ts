import { defineConfig } from '@meteorjs/rspack';

export default defineConfig((Meteor) => ({
  ...(Meteor.isClient && {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['postcss-loader'],
          type: 'css',
        },
      ],
    },
  }),
}));
