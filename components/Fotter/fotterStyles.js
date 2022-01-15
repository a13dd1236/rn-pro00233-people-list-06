import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const fotterStyles = StyleSheet.create({
  fotterContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },

  fotterTitleContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  fotterTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fotterContentContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  fotterContentText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const styles = {
  ...fotterStyles,
};

export { styles, styles as fotterStyles };

export default styles;
