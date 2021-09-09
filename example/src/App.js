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

const App = () => {
  const [scanners, setScanners] = React.useState([]);

  const getScanners = async () => {
    try {
      const res = await ZebraScanner.getScanners();
      setScanners(res);
    } catch {
      setScanners([]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getScanners}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Disable Scanners</Text>
        </View>
      </TouchableOpacity>
      {scanners.map((scanner) => {
        return (
          <TouchableOpacity onPress={getScanners} key={scanner.name}>
            <Text style={styles.buttonLabel}>{scanner.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default App;
