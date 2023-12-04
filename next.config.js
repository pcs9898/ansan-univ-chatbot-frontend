const { i18n } = require("./next-i18next.config");

const withPlugins = require("next-compose-plugins");

const CompressionPlugin = require("compression-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // 환경변수 ANALYZE가 true일 때 실행
  openAnalyzer: false, // 브라우저에 자동으로 분석결과를 새 탭으로 Open하는 것을 방지
});
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n,
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());
    return config;
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      compress: true,
    }),
  ],
  nextConfig
);
