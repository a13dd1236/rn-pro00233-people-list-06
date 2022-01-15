import * as React from 'react';
import { SafeAreaView } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:
import MainApp from './components/index';
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
      <MainApp />
      <New />
    </SafeAreaView>
  );
};
export default App;
