const { Dimensions } = require("react-native");

module.exports = {
  container: {
    flex: 1,
  },

  loadingContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
};