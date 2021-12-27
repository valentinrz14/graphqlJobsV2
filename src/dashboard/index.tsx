import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

/*
 ** Types
 */

interface HomeProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { textAlign: 'center' },
});

/*
 ** Component
 */

export const Home: NavigationFunctionComponent<HomeProps> = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  </SafeAreaView>
);
