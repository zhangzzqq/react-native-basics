package com.chapter8;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableMap;


import java.util.HashMap;

import javax.annotation.Nonnull;

public class CustomModule extends ReactContextBaseJavaModule {

    public CustomModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void callbackMethod(String paramsFromJS, Callback ok, Callback error) {
        Log.d("CustomModule","callbackMethod:"+paramsFromJS);
        boolean result = true;
        if (result) {
            ok.invoke("callback ok");
        } else {
            error.invoke("callback ok");
        }
    }

    @ReactMethod
    public void promiseMethod(String paramsFromJS, Promise promise){
        Log.d("CustomModule","paramsFromJS:"+paramsFromJS);
        boolean result = true;
        if (result) {
            promise.resolve("promise ok");
        } else {
            promise.reject("promise error");
        }
    }

    @ReactMethod
    public void setData(Callback callback){
        WritableMap map = Arguments.createMap();
        map.putBoolean("success", true);
        callback.invoke(map);
    }

    @ReactMethod
    public void getData(ReadableMap map, Callback callback){
        ReadableNativeMap map1 = (ReadableNativeMap) map;
        HashMap map2 = map1.toHashMap();
    }

}
