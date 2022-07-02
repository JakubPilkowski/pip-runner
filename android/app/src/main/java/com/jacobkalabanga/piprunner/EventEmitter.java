package com.jacobkalabanga.piprunner;

import android.util.Log;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class EventEmitter {

    public static void send(ReactContext reactContext, String name, WritableMap params) {
        try {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(name, params);
        } catch (Exception e) {
            Log.e(name, "sendEvent called before bundle loaded");
        }
    }
}
