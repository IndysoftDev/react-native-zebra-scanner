import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ZebraScanner from 'react-native-zebra-scanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    width: 180,
    marginRight: 10,
  },
  buttonLabel: {
    fontSize: 18,
    textAlign: 'center',
  },
});

const getScanners = async () => {
  const res = await ZebraScanner.getScanners();
  console.log(res);
};

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getScanners}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Disable Scanners</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;
