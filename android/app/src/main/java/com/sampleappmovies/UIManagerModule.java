//package com.sampleappmovies;
//
//import androidx.annotation.NonNull;
//
//import com.facebook.react.bridge.Callback;
//import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.bridge.ReactContextBaseJavaModule;
//import com.facebook.react.bridge.ReactMethod;
//import com.facebook.react.uimanager.IllegalViewOperationException;
//import com.facebook.react.uimanager.PixelUtil;
//
//public class UIManagerModule extends ReactContextBaseJavaModule {
//
//
//    public UIManagerModule(@NonNull ReactApplicationContext reactContext) {
//        super(reactContext);
//    }
//
//    @ReactMethod
//    public void measureLayout(
//            int tag,
//            int ancestorTag,
//            Callback errorCallback,
//            Callback successCallback) {
//        try {
//            measureLayout(tag, ancestorTag, mMeasureBuffer);
//            float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);
//            float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);
//            float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);
//            float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);
//            successCallback.invoke(relativeX, relativeY, width, height);
//        } catch (IllegalViewOperationException e) {
//            errorCallback.invoke(e.getMessage());
//        }
//    }
//
//    @NonNull
//    @Override
//    public String getName() {
//        return "UIManagerModule";
//    }
//}
