/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "gsap",
  "hover-effect",
]);
module.exports = withTM();