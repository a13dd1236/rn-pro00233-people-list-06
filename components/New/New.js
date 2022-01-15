import * as React from 'react';
import { View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

// Imported Styles:
import { newStyles as styles } from './newStyles';

const New = () => {
  return (
    <View style={styles.newContainer}>
      <View style={styles.newTitleContainer}>
        <Text style={styles.newTitleText}>New Component...</Text>
      </View>
    </View>
  );
};
export default New;
