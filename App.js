import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:
import { New } from './components/index';
// Imported Styles:
import { appStyles as styles } from './appStyles';
// Styles:
// const styles = {
//   ...appStyles,
// };
const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>People List v03</Text>
        </View>
      </View>
      <New />
    </SafeAreaView>
  );
};
export default App;
