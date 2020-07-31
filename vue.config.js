module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/main.scss"`,
      },
    },
  },
  publicPath: "/",
  outputDir: "docs",
};
