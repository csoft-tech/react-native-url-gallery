import { Dimensions } from'react-native'

module.exports = {
  container: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height - 100,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 1,
  },
};