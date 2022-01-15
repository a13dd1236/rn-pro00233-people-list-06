import { StyleSheet, Platform, StatusBar } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const newStyles = StyleSheet.create({
  newContainer: {
    margin: 3,
    borderColor: 'yellow',
    padding: 3,
    borderWidth: 3,
    // flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'pink',
  },
  newTitleContainer: {
    margin: 1,
    borderColor: 'olive',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  newTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const styles = {
  ...newStyles,
};

export { styles, styles as newStyles };

export default styles;
