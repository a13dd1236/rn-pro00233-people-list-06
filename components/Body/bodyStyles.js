import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const bodyStyles = StyleSheet.create({
  bodyContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },

  bodyTitleContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  bodyTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyContentContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  bodyContentText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const styles = {
  ...bodyStyles,
};

export { styles, styles as bodyStyles };

export default styles;
