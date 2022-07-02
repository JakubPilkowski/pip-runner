package com.jacobkalabanga.piprunner.pip;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import android.app.Activity;
import android.app.PictureInPictureParams;
import android.content.pm.PackageManager;
import android.os.Build;
import android.util.Rational;

import androidx.annotation.NonNull;

public class PipModule extends ReactContextBaseJavaModule {

    public static final String ON_PIP_CHANGE = "ON_PIP_CHANGE";

    private PictureInPictureParams params;

    public PipModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return "PipModule";
    }


    private Activity getActivity() throws Exception {
        Activity activity = getCurrentActivity();
        if (activity == null) {
            throw new Exception("Expected activity but got null");
        }
        return activity;
    }

    @ReactMethod
    public void addListener(String eventName) {

    }

    @ReactMethod
    public void removeListeners(Integer count) {

    }

    /**
     * PipOptions:
     * aspectRatio - {numerator:Int, denominator: Int}
     * autoEnterEnabled - boolean
     * seamlessResize - boolean
     */
    @ReactMethod
    public void setParams(ReadableMap pipOptions, Promise promise) {
        try {
            Activity activity = getActivity();
            boolean autoEnterEnabled = pipOptions.getBoolean("autoEnterEnabled");
            boolean seamlessResize = pipOptions.getBoolean("seamlessResize");
            ReadableMap aspectRatio = pipOptions.getMap("aspectRatio");
            int numerator = 1;
            int denominator = 1;
            if (aspectRatio != null) {
                numerator = aspectRatio.getInt("numerator");
                denominator = aspectRatio.getInt("denominator");
            }
            Rational ratio = new Rational(numerator, denominator);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                params = new PictureInPictureParams.Builder()
                        // aspect ratio, should be passed in init function
                        .setAspectRatio(ratio)
                        // implement pip on home button click
                        .setAutoEnterEnabled(autoEnterEnabled)
                        // non-video content support
                        .setSeamlessResizeEnabled(seamlessResize)
                        .build();
                activity.setPictureInPictureParams(params);
            }
            promise.resolve(true);
        } catch (Exception e) {
            promise.reject("PIP params init error", e);
        }
    }

    @ReactMethod
    public void enter(Promise promise) {
        try {
            Activity activity = getActivity();
            PackageManager appPackageManager = activity.getPackageManager();

            if (appPackageManager.hasSystemFeature(PackageManager.FEATURE_PICTURE_IN_PICTURE) && Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                activity.enterPictureInPictureMode();
                promise.resolve(true);
            } else {
                throw new Exception("PIP mode is not supported for your device");
            }
        } catch (Exception e) {
            promise.reject("PIP mode error", e);
        }
    }

    @ReactMethod
    public void detach(Promise promise) {
        try {
            Activity activity = getActivity();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                params = new PictureInPictureParams.Builder()
                        .setAutoEnterEnabled(false)
                        .build();
                activity.setPictureInPictureParams(params);
            }
        } catch (Exception e) {
            promise.reject("PIP detach error", e);
        }
    }
}