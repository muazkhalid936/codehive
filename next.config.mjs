/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Video file formats
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/', // Path where videos will be served
            outputPath: 'static/videos/', // Path where videos will be stored
            name: '[name].[hash].[ext]', // Naming convention for the files
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
