module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Muli", "Open Sans", "source sans pro:300,400,400i,700"]
      }
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/layouts/index.js")
      }
    },
    "gatsby-plugin-theme-ui"
  ]
};