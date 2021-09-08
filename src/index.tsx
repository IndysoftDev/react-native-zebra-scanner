import { NativeModules } from 'react-native';

type ZebraScannerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ZebraScanner } = NativeModules;

export default ZebraScanner as ZebraScannerType;
