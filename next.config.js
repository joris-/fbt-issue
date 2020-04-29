const path = require("path");

module.exports = {
  webpack: (config) => {
    // fbt
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: "babel-loader",
      query: {
        presets: ["next/babel"],
        plugins: [
          [
            "babel-plugin-fbt",
            {
              // We can also provide the fbt enum manifest directly as a JS variable
              // fbtEnumManifest: require('./.enum_manifest.json'),
              fbtEnumPath: path.join(__dirname, ".enum_manifest.json"),
              extraOptions: { __self: true }, // Fix error `Invalid option "__self"`
            },
          ],
          "babel-plugin-fbt-runtime",
        ],
      },
    });

    return config;
  },
};
