import * as React from 'react';
import { View, Text } from 'react-native';
// import Constants from 'expo-constants';

// Imported npm javascript modules:

// Imported local files:
import { Header } from '../index';
import { Body } from '../index';
import { Fotter } from '../index';

// Imported Styles:
import { mainAppStyles as styles } from './mainAppStyles';
// Styles:
// const styles = {
//   ...mainAppStyles,
// };
const MainApp = () => {
  return (
    <>
      <Header />
      <Body />
      <Fotter />
    </>
  );
};
export default MainApp;
