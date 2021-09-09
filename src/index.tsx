import { NativeModules } from 'react-native';

const { ZebraScanner } = NativeModules;

type getScanners = () => Promise<any>;

type connect = (scannerName: string) => Promise<any>;

const getScanners: getScanners = () => ZebraScanner.getScanners();

const connect: connect = (scannerName) => ZebraScanner.connect(scannerName);

export default {
  getScanners,
  connect,
};
