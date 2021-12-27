import React, { FunctionComponent } from 'react';
import { PaddingsSizesEnum } from '@styles/base-sizes';
import { StatusBar, View, ViewProps } from 'react-native';
import { containerStyles } from './styles';

/*
 ** Types
 */

type ContainerPaddingSizes = keyof typeof PaddingsSizesEnum;

interface ContainerProps extends Pick<ViewProps, 'testID'> {
  size?: ContainerPaddingSizes;
  sizeHorizontal?: ContainerPaddingSizes;
  sizeVertical?: ContainerPaddingSizes;
}

/*
 ** Component
 */

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  testID,
  size,
  sizeHorizontal,
  sizeVertical,
}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <View
      style={[
        containerStyles.wrapper,
        size && { padding: PaddingsSizesEnum[size] },
        sizeHorizontal && {
          paddingHorizontal: PaddingsSizesEnum[sizeHorizontal],
        },
        sizeVertical && { paddingVertical: PaddingsSizesEnum[sizeVertical] },
      ]}
      testID={testID}
    >
      {children}
    </View>
  </>
);
