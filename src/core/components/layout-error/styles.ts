import { SHADOW_OFF_SET } from '@styles/base';
import { Colors } from '@styles/base-colors';
import { StyleSheet } from 'react-native';

/*
 ** Styles
 */

export const stylesLayoutError = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    ...SHADOW_OFF_SET,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: 10,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 21,
    color: Colors.darkGrey,
    fontWeight: '500',
  },
  btn: {
    borderRadius: 50,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginTop: 30,
    backgroundColor: Colors.blue,
    ...SHADOW_OFF_SET,
  },
  btnText: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
  },
});
