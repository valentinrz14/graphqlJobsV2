import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Container } from '../index';

describe('Container', () => {
  it('should render container', () => {
    const { toJSON, getByTestId } = render(
      <Container testID="container-test-id">
        <Text>ButtonPressable</Text>
      </Container>,
    );

    const containerTestId = getByTestId('container-test-id');
    expect(containerTestId).toBeDefined();

    expect(toJSON()).toMatchSnapshot();
  });
});
