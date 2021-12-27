import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const dimensions = {
  fullHeigh: height,
  fullWidth: width,
};

export const SHADOW_OFF_SET = {
  shadowOffset: {
    width: 3,
    height: 3,
  },
  shadowOpacity: 0.3,
  elevation: 5,
};

const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...overrides });
};
export default createStyles;
