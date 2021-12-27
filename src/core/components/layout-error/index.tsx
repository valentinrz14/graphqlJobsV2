import React, { FunctionComponent } from 'react';
import { Container } from '@components/container';
import { ButtonRegular } from '@core/components/button-regular';
import { Colors } from '@styles/base-colors';
import { View, Text } from 'react-native';

// import RenderIcons from './RenderIcons';
import { stylesLayoutError } from './styles';

/*
 ** Types
 */

interface ErrorDataProps {
  retry: () => void;
  error?: string;
}

/*
 ** Component
 */

export const LayoutError: FunctionComponent<ErrorDataProps> = ({ retry }) => {
  return (
    <Container sizeVertical="xl" sizeHorizontal="xs">
      <View style={stylesLayoutError.container}>
        <View style={stylesLayoutError.content}>
          {/* <RenderIcons
            name="emoticon-sad-outline"
            size={100}
            color={Colors.whiteSmoke}
          /> */}
          <Text style={stylesLayoutError.title}>Error 404</Text>
        </View>
        <View
          style={[stylesLayoutError.content, { backgroundColor: Colors.white }]}
        >
          <Text style={stylesLayoutError.subTitle}>
            An error ocurred while loading
          </Text>
          <Text style={stylesLayoutError.subTitle}>Please try again</Text>
          <ButtonRegular
            onPress={() => retry}
            buttonStyle={stylesLayoutError.btn}
          >
            <Text style={stylesLayoutError.btnText}>RETRY</Text>
          </ButtonRegular>
        </View>
      </View>
    </Container>
  );
};
