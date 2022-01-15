import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const headerStyles = StyleSheet.create({
  headerContainer: {
    margin: 1,
    borderColor: '#adff2f',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: '#006400',
  },
  headerTitleContainer: {
    margin: 1,
    borderColor: '#e9ffdb',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: '#a3c1ad',
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
