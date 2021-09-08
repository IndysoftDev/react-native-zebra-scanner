package com.reactnativezebrascanner;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import com.zebra.scannercontrol.SDKHandler;


@ReactModule(name = ZebraScannerModule.NAME)
public class ZebraScannerModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ZebraScanner";
    private static final String TAG = "ReactNative";
    private final ReactApplicationContext reactContext;
    private SDKHandler sdkHandler; // Zebra SDK

    public ZebraScannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        this.sdkHandler = new SDKHandler(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void multiply(int a, int b, Promise promise) {
        promise.resolve(a * b);
    }

    public static native int nativeMultiply(int a, int b);
}
