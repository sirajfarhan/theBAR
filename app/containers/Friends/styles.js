import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  cardContainer: {
    padding: 8,
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  textContainer: {
    backgroundColor: '#fff',
    width: '100%'
  },
  nameText: {
    padding: 8,
    fontSize: 14,
  },
  ageText: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 12
  }
});
