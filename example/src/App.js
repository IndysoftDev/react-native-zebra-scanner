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
    marginVertical: 20,
  },
  buttonLabel: {
    fontSize: 18,
    textAlign: 'center',
  },
});

const Scanner = ({ scanner }) => {
  const connect = async () => {
    const res = await ZebraScanner.initReader(scanner.name);
    const res2 = await ZebraScanner.getActiveScanner();
    console.log(res2);
    console.log(res);
  };

  return (
    <TouchableOpacity onPress={connect}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{scanner.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const [scanners, setScanners] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await ZebraScanner.getAvailableScanners();
      
        setScanners(res);
      } catch {
        setScanners([]);
      }
    })();
  }, []);

  React.useEffect(() => {
    const listener = ZebraScanner.addBarcodeListener((bc) => console.log(bc));

    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      {scanners.map((scanner) => {
        return <Scanner scanner={scanner} key={scanner.name} />;
      })}
    </View>
  );
};

export default App;
