import { StyleSheet, Platform, StatusBar } from 'react-native';
// import Constants from 'expo-constants';

// Imported Styles:

// Styles:
const appStyles = StyleSheet.create({
  appContainer: {
    margin: 3,
    borderColor: 'red',
    padding: 3,
    borderWidth: 3,
    // Solving Android SafeAreaView Not Supported
    // (For iOS Use <SafeAreaView></SafeAreaView>)
    // Both Solution:
    //    Constants from 'expo-constants';
    // paddingTop: Platform.OS === "android" ? Constants.statusBarHeight: 0,
    //    StatusBar from 'react-native'
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
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
  ...appStyles,
};

export { styles, styles as appStyles };

export default styles;
