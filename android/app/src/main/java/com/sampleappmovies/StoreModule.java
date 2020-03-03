package com.sampleappmovies;

import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.text.SimpleDateFormat;
import java.util.Date;

import static android.content.ContentValues.TAG;
import static android.provider.Telephony.Carriers.PASSWORD;


public class StoreModule extends ReactContextBaseJavaModule {

    public  ReactContext  MyContext;

    public StoreModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);

        this.MyContext=reactContext;

    }

    @Override
    public String getName() {
        return "StoreModule";
    }

    @ReactMethod
    public void addUser(String userName, String password, Callback successCallback, Callback errorCallback) {
        try {
            if (TextUtils.isEmpty(userName)) {
                errorCallback.invoke("user name is empty");
                return;
            }
            if (TextUtils.isEmpty(password)) {
                errorCallback.invoke("password is empty");
                return;
            }
//            preferences.edit().putString("zhangsan", userName).commit();
//            preferences.edit().putString("123", password).commit();
            successCallback.invoke("add user success");
        } catch (Exception e) {
            e.printStackTrace();
            errorCallback.invoke(e.getMessage());
        }
    }


    @ReactMethod
    public void login(String userName, String password, Promise promise) {
        String storeUserName = userName;
        String storePassword = password;
        if (TextUtils.isEmpty( storeUserName)) {
            promise.reject("0", "user name is wrong");
            return;

        }
        if (TextUtils.isEmpty( storePassword)) {
            promise.reject("1", "password is wrong");
            return;

        }
        WritableMap map = Arguments.createMap();
        map.putDouble("user_id", 1);
        promise.resolve(map);

    }



    //延迟0.1秒获取时间。
    @ReactMethod
    public void getTime() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                SimpleDateFormat formatDate = new SimpleDateFormat("yyyy年MM月dd日  HH:mm:ss");
                Date date = new Date(System.currentTimeMillis());
                String time = formatDate.format(date);

                WritableMap writableMap = new WritableNativeMap();
                writableMap.putString("key", time);
                sendEvent(getReactApplicationContext(), "EventName", writableMap);

            }
        }).start();
    }


    /**
     * @param reactContext
     * @param eventName    事件名
     * @param params       传惨
     */
    public void sendTransMisson(ReactContext reactContext, String eventName,
                                @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);

    }



    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        Log.i(TAG, "sendEvent");
        System.out.println("reactContext="+reactContext);
        if (reactContext==null) {
            Log.i(TAG, "reactContext==null");
        }else{
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }

    }

    /*原生模块可以在没有被调用的情况下往JavaScript发送事件通知。
    最简单的办法就是通过RCTDeviceEventEmitter，
    这可以通过ReactContext来获得对应的引用，像这样：*/
//    public static void sendEvent(ReactContext reactContext, String eventName,
//                                 @Nullable WritableMap paramss)
//    {
//        System.out.println("reactContext="+reactContext);
//
//        reactContext
//                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit(eventName, paramss);
//
//    }






}
