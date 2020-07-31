module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/main.scss"`,
      },
    },
  },
  publicPath: "/web",
  outputDir: "docs",
};
