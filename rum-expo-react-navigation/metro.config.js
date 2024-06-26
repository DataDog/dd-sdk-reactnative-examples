const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    }
  }
  
  module.exports = mergeConfig(getDefaultConfig(__dirname), config)