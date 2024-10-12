// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  output: 'export', // Konfigurasi untuk ekspor statis
};
