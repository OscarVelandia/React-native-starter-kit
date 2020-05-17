import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App(): JSX.Element {
  return (
    <ScrollView>
      <Text />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
