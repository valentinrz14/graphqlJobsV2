import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { textAlign: 'center' },
});
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Hola</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
