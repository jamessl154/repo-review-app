// workaround for Apollo/Client - Metro bundler conflict
// https://github.com/apollographql/apollo-client/releases/tag/v3.5.4

// But then another bundling failure:
// Unable to resolve module ./src/components/Main
// None of these files exist: src\components\Main(.native|.ios.js|.native.js|.js...

const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
    // https://github.com/expo/expo-cli/issues/191#issuecomment-479716419
    // adding jsx to source extensions here solved second bundling failure
    "jsx"
  ],
};