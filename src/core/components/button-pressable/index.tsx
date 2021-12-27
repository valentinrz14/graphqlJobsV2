import React, { FunctionComponent } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { buttonPressableStyles } from './styles';

/*
 ** Types
 */

interface ButtonPressableProps extends PressableProps {
  buttonStyle?: StyleProp<ViewStyle>;
}

/*
 ** Component
 */

export const ButtonPressable: FunctionComponent<ButtonPressableProps> = ({
  children,
  buttonStyle,
  onPress,
  testID,
}) => {
  return (
    <Pressable
      testID={testID}
      style={[buttonPressableStyles.wrapper, buttonStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
