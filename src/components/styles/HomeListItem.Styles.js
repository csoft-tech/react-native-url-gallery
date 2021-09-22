import { Dimensions } from 'react-native'

module.exports = {
  container: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 150,
    paddingVertical: 5,
    borderRadius: 20,
  },

  innerContainer: {
    padding: 20,
  },

  imgStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  type: {
    fontSize: 15,
    color: '#FFFFFF',
  },

  desc: {
    fontSize: 20,
    color: '#FFFFFF',
  },
};