import * as React from 'react';
import { View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

// Imported Styles:
import { bodyStyles as styles } from './bodyStyles';
// Styles:
// const styles = {
//   ...bodyStyles,
// };

// Sub Components:
// HeaderMenu:
const BodyTitle = (props) => (
  <>
    <View style={styles.bodyTitleContainer}>
      <Text style={styles.bodyTitleText}>{props.appTitle}</Text>
    </View>
  </>
)

// HeaderTitle:
const BodyContent = (props) => (
  <>
    <View style={styles.bodyContentContainer}>
      <Text style={styles.bodyContentText}>{props.content}</Text>
    </View>
  </>
)

const Body = () => {
  return (
    <>
      {/** Container - Body */}
      <View style={styles.bodyContainer}>
        <BodyTitle appTitle={"People"} />
        <BodyContent content={"People List and Forms ...."}/>
      </View>
    </>
  );
};
export default Body;
