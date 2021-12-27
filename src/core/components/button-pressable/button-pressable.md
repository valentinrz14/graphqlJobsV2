```TSX
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonPressable } from './index';

/*
 ** Types
 */

interface AppProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
 ** Component
 */

export const App: FunctionComponent<AppProps> = () => {
  const handleOnPress = (): void => {
    console.log('press');
  };

  return (
    <View style={styles.wrapper}>
      <ButtonPressable
        testID="button-pressable-test-id"
        onPress={handleOnPress}
      >
        <Text>ButtonPressable</Text>
      </ButtonPressable>
    </View>
  );
};

```
