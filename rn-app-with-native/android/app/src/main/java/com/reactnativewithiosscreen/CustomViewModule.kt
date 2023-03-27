package com.reactnativewithiosscreen

import android.content.Intent
import com.facebook.react.bridge.*

class CustomViewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CustomView"

    @ReactMethod
    fun startView(promise: Promise) {
        val intent = Intent(reactApplicationContext, NativeActivity::class.java)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        reactApplicationContext.startActivity(intent)
        promise.resolve(true)
    }
}


