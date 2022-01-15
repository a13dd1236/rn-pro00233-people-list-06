import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const headerStyles = StyleSheet.create({
  headerContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
  headerMenuContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
  headerMenuLogo: {
    height: 25,
    width: 25,
  },
  headerMenuText: {
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitleContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const styles = {
  ...headerStyles,
};

export { styles, styles as headerStyles };

export default styles;
