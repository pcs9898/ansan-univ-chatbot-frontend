/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // 환경변수 ANALYZE가 true일 때 실행
  openAnalyzer: false, // 브라우저에 자동으로 분석결과를 새 탭으로 Open하는 것을 방지
});

const nextConfig = {
  reactStrictMode: false,
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
