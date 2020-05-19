import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
});

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
