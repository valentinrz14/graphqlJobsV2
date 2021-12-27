import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const dimensions = {
  fullHeigh: height,
  fullWidth: width,
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...overrides });
};
export default createStyles;
