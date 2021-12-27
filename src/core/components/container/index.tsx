import React, { FunctionComponent } from 'react';
import { StatusBar, View, ViewProps } from 'react-native';
import { containerStyles } from './styles';

/*
 ** Types
 */

interface ContainerProps extends Pick<ViewProps, 'testID'> {}

/*
 ** Component
 */

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  testID,
}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={containerStyles.wrapper} testID={testID}>
      {children}
    </View>
  </>
);
