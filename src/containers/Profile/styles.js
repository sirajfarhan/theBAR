import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 16
  },
  profileInfoContainer: {
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderColor: '#333'
  },
  profileInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'left',
    flex: 1
  },
  profileInfoValue: {
    fontSize: 16,
    padding: 8,
    textAlign: 'left',
    flex: 2
  },
  buttonCotainer: {
    margin: 8
  }
});
