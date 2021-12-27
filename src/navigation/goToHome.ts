import { Navigation } from 'react-native-navigation';
import { PAGE_HOME } from './ids';
import { NAVIGATION_NAME_HOME } from './names';

export const goToHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: PAGE_HOME,
              name: NAVIGATION_NAME_HOME,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: true,
                },
              },
            },
          },
        ],
      },
    },
  });
};
