const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  devtool: "source-map", // Source map generation must be turned on
    plugins: [
      sentryWebpackPlugin({
        org: "Wede",
        project: "vue-sentry",
        // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
        authToken: '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',
      }),
    ],
})
