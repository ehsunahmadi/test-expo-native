import { StyleSheet, Text, View } from 'react-native';

import * as TestExpoNative from 'test-expo-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TestExpoNative.hello()}</Text>
    </View>
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
