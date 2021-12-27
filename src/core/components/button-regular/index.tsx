import React, { FunctionComponent } from 'react';
import { buttonRegularStyles } from '@core/components/button-regular/styles';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

/*
 ** Types
 */

interface ButtonRegularProps extends TouchableOpacityProps {
  buttonStyle: StyleProp<ViewStyle>;
}

/*
 ** Component
 */

export const ButtonRegular: FunctionComponent<ButtonRegularProps> = ({
  children,
  testID,
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[buttonRegularStyles.wrapper, buttonStyle]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
