import { NativeModules, NativeEventEmitter } from 'react-native';

const { ZebraScanner } = NativeModules;

const evtEmitter = new NativeEventEmitter(ZebraScanner);

type getScanners = () => Promise<any>;

type initReader = (scannerName: string) => Promise<any>;

type addListener = (cb: (args: any[]) => void) => void;

type removeListener = (cb: (args: any[]) => void) => void;

const getScanners: getScanners = () => ZebraScanner.getScanners();

const initReader: initReader = (scannerName) =>
  ZebraScanner.connect(scannerName);

const addBarcodeListener: addListener = (listener) =>
  evtEmitter.addListener('BARCODE', listener);

const removeBarcodeListener: removeListener = (listener) =>
  evtEmitter.removeListener('BARCODE', listener);

export default {
  getScanners,
  initReader,
  addBarcodeListener,
  removeBarcodeListener,
};
