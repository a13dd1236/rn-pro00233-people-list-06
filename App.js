import * as React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView, View, Text } from 'react-native';

// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

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
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
  headerTitleContainer: {
    margin: 1,
    borderColor: 'red',
    padding: 1,
    borderWidth: 3,
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
  ...appStyles,
};
const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>People List v03</Text></View>

    </SafeAreaView>
  );
};

export default App;
