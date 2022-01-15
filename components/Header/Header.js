import * as React from 'react';
import { View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:
// import { New } from '../components/index';

// Imported Styles:
import { headerStyles as styles } from './headerStyles';
// Styles:
// const styles = {
//   ...headerStyles,
// };
const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>People List v06</Text>
        </View>
      </View>
    </>
  );
};
export default Header;
