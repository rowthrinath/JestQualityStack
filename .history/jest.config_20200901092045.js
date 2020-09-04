module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "http://localhost:300"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}