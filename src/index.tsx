import { NativeModules, NativeEventEmitter } from 'react-native';

const { ZebraScanner } = NativeModules;

const evtEmitter = new NativeEventEmitter(ZebraScanner);

type getScanners = () => Promise<any>;

type getActiveScanner = () => Promise<any>;

type initReader = (scannerName: string) => Promise<any>;

type addListener = (cb: (args: any[]) => void) => void;

type isActiveReader = (scannerName: string) => Promise<boolean>;

const getAvailableScanners: getScanners = () =>
  ZebraScanner.getAvailableScanners();

const getActiveScanners: getScanners = () => ZebraScanner.getActiveScanners();

const initReader: initReader = (scannerName) =>
  ZebraScanner.connect(scannerName);

const getActiveScanner: getActiveScanner = () =>
  ZebraScanner.getActiveScanner();

const isActiveReader: isActiveReader = (scannerName) =>
  ZebraScanner.isActiveScanner(scannerName);

const addBarcodeListener: addListener = (listener) =>
  evtEmitter.addListener('BARCODE', listener);

export default {
  getAvailableScanners,
  getActiveScanners,
  isActiveReader,
  initReader,
  addBarcodeListener,
  getActiveScanner,
};
