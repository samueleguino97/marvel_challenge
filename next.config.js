const withPWA = require("next-pwa");
module.exports = withPWA({
  images: {
    domains: ["gateway.marvel.com", "i.annihil.us"],
  },
  pwa: {
    dest: "public",
  },
});
