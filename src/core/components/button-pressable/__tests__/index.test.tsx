import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ButtonPressable } from '../index';

describe('buttonPressable', () => {
  it('should render buttonPressable', () => {
    const handleOnPress = jest.fn();

    const { toJSON, getByTestId } = render(
      <ButtonPressable testID="pressable-test-id" onPress={handleOnPress}>
        <Text>ButtonPressable</Text>
      </ButtonPressable>,
    );
    const pressableTestId = getByTestId('pressable-test-id');
    expect(pressableTestId).toBeUndefined();
    fireEvent.press(pressableTestId);

    waitFor(() => {
      expect(handleOnPress).toHaveBeenCalledTimes(1);
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
