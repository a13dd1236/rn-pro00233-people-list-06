import * as React from 'react';
import { View, Text, Image } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:

// Imported Styles:
import { headerStyles as styles } from './headerStyles';
// Styles:
// const styles = {
//   ...headerStyles,
// };

// Sub Components:

// HeaderMenu:
const HeaderMenu = () => (
  <>
    <View style={styles.headerMenuContainer}>
      <Text style={styles.headerMenuText}>Menu</Text>
      <Image
        style={styles.headerMenuLogoContainer}
        source={require('../../assets/Icon-Menu.png')}
      />
    </View>
  </>
)

// HeaderTitle:
const HeaderTitle = () => (
  <>
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitleText}>People List - v06</Text>
    </View>
  </>
)
const Header = () => {
  return (
    <>
      {/** Container - Header */}
      <View style={styles.headerContainer}>
        <HeaderMenu />
        <HeaderTitle appTitle={"People List - v06"} />
      </View>
    </>
  );
};
export default Header;
