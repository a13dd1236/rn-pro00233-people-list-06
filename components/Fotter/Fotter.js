import * as React from 'react';
import { View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

// Imported Styles:
import { fotterStyles as styles } from './fotterStyles';
// Styles:
// const styles = {
//   ...fotterStyles,
// };

// Sub Components:
// HeaderMenu:
const FotterTitle = (props) => (
  <>
    <View style={styles.fotterTitleContainer}>
      <Text style={styles.footerTitleText}>{props.fotterTitle}</Text>
    </View>
  </>
)

// HeaderTitle:
const FotterContent = (props) => (
  <>
    <View style={styles.fotterContentContainer}>
      <Text style={styles.fotterContentText}>{props.fotterContent}</Text>
    </View>
  </>
)

const Fotter = () => {
  return (
    <>
      {/** Container - Fotter */}
      <View style={styles.fotterContainer}>
        <FotterTitle fotterTitle={"Fotter"} />
        <FotterContent fotterContent={"Fotter List of links ...."} />
      </View>
    </>
  );
};
export default Fotter;
