import * as React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView, View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

// Imported Styles:
import appStyles from './appStyles'
// Styles:
const styles = {
  ...appStyles,
  ...StyleSheet.create({}),
};
const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>People List v03</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;